import { useEffect, useReducer, useState } from "react";
import ProgressCircle from "../components/ProgressCircle";
import taskReducer from "../reducers/taskReducer";
import { isToday } from "!/reusableFunctions";
import { isThisWeek } from "../utils/reusableFunctions";

function Dashboard() {
  const [Tasks, dispatch] = useReducer(taskReducer, []);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      dispatch({ type: 'LOAD_TASKS', payload: JSON.parse(storedTasks) });
    }
  }, []);
  
  const getTodayActiveTaskCount = () => {
    return Tasks.filter(task => task.lastActive && isToday(task.lastActive)).length;
  };

  const getTodayCompletedTaskCount = () => {
    return Tasks.filter(task => task.completed && isToday(task.lastCompleted)).length;
  };

  const getThisWeekActiveTaskCount = () => {
    return Tasks.filter(task => task.lastActive&& isThisWeek(task.lastActive)).length;
  };

  const getThisWeekCompletedTaskCount = () => {
    return Tasks.filter(task => task.lastCompleted && isThisWeek(task.lastCompleted)).length;
  };



  const progressions = {'Today': [getTodayCompletedTaskCount(), getTodayActiveTaskCount()], 'This Week': [getThisWeekCompletedTaskCount(), getThisWeekActiveTaskCount()], 'This Month': [0, 0], 'All Time': [0, 0]};
  return (
    <div className="mx-6 grid h-[calc(screen-48px-6rem)] w-[calc(screen-48px)] grid-cols-6 gap-6 p-6">
      <div className="grid grid-rows-4 gap-6 col-span-1">

      {Object.entries(progressions).map(([title, numeDnomArray]) => (
        <section key={title} className="col-start-1 bg-dracula-comment max-w-60 min-w-40 h-fit w-full rounded-2xl text-center text-4xl p-4">
          <svg
            viewBox={`0 0 100 35`}
            className="h-full w-full content-center-safe"
          >
            <text // align middle and adjust length set to scale with larger numbers
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="fill-dracula-cyan font-mono font-bold"
              textLength="100"
              lengthAdjust="spacingAndGlyphs"
              >
              {title}
            </text>
          </svg>
          <ProgressCircle numerator={numeDnomArray[0]} denominator={numeDnomArray[1]} />
        </section>
      ))}
      </div>
      <div className="col-span-5">
        
      </div>
    </div>
  );
}

export default Dashboard;

