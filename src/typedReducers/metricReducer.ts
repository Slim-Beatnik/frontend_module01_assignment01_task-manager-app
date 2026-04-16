// metricReducer.ts
import { demoData } from "../assets/data";
import { type Task } from "./taskReducer"; // Import Task interface

export interface Metric {
  lastLogin: string; // ISO date string - YYYY-MM-DD
  today: number;
  thisWeek: Array<number>; // 7-day rolling window of completed tasks
  thisMonth: number;
  thisYear: number;
  longestStreak: number;
  allTimeMostCompleted: number;
}

export type MetricAction = { type: 'TASKS_TO_METRIC'; payload: { tasks: Task[] } };

export const metricInit = (initialState: Metric): Metric => {
  // If we have no saved metrics, start with the mock data from data.ts
  return localStorage.getItem("Metrics") ? initialState : demoData;
};

export default function metricReducer(state: Metric, action: MetricAction): Metric {
  switch (action.type) {
    case 'TASKS_TO_METRIC': {
      const now = new Date();
      const todayStr = now.toISOString().split('T')[0];
      const completedToday = action.payload.tasks.filter(t => t.completed).length;

      // 1. Calculate how many days have passed since last record
      const lastDate = new Date(state.lastLogin);
      const dayDiff = Math.floor((now.getTime() - lastDate.setHours(0,0,0,0)) / (1000 * 60 * 60 * 24));

      // 2. Update the 7-day rolling window
      let newWeek = [...(state.thisWeek || [0, 0, 0, 0, 0, 0, 0])];

      if (dayDiff > 0) {
        if (dayDiff >= 7) {
          // More than a week passed? Wipe it.
          newWeek = [0, 0, 0, 0, 0, 0, 0];
        } else {
          // Shift array left by dayDiff and pad with zeros
          newWeek = [...newWeek.slice(dayDiff), ...new Array(dayDiff).fill(0)];
        }
      }

      // Update today's slot (the last index)
      newWeek[6] = completedToday;

      // 3. Handle Month/Year Resets
      const isNewMonth = now.getMonth() !== lastDate.getMonth() || now.getFullYear() !== lastDate.getFullYear();
      const isNewYear = now.getFullYear() !== lastDate.getFullYear();

      return {
        ...state,
        lastLogin: todayStr,
        today: completedToday,
        thisWeek: newWeek,
        thisMonth: isNewMonth ? completedToday : (state.thisMonth + (dayDiff > 0 ? completedToday : 0)),
        thisYear: isNewYear ? completedToday : (state.thisYear + (dayDiff > 0 ? completedToday : 0)),
        allTimeMostCompleted: Math.max(state.allTimeMostCompleted, completedToday),
      };
    }
    default:
      return state;
  }
}

