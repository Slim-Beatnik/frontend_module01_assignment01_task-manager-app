import { useEffect, useReducer } from "react";
import ProgressCircle from "../components/ProgressCircle";
import taskReducer, { taskInit } from "../typedReducers/taskReducer";
import metricReducer, { metricInit } from "../typedReducers/metricReducer";
import { getDateStatus } from "!/reusableFunctions";

function Dashboard() {
  const [Tasks, taskDispatch] = useReducer(taskReducer, [], taskInit);
  const [Metric, metricDispatch] = useReducer(metricReducer, [], () => metricInit([]));

  useEffect(() => {
    metricDispatch({ type: 'TASKS_TO_METRIC', payload: { tasks: Tasks } });
    // Also save tasks to localStorage here
    saveLocal(Tasks);
  }, [Tasks]);
  
  const [isToday, isThisWeek, isThisMonth, isThisYear] = getDateStatus(Metric[Metric.length - 1]?.date || '');

  const progressions = {
    'Today': [getTodayCompletedMetricCount(), getTodayActiveMetricCount()],
    'This Week': [getThisWeekCompletedMetricCount(), getThisWeekActiveMetricCount()],
    'This Month': [0, 0], 'All Time': [0, 0]
  };

  return (
    <div className="mx-6 grid h-[calc(screen-48px-6rem)] w-[calc(screen-48px)] grid-cols-6 gap-6 p-6">
      <div className="grid grid-rows-4 gap-6 col-span-1">

      {Object.entries(progressions).map(([title, [numerator, denominator]]) => (
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
          <ProgressCircle numerator={numerator} denominator={denominator} />
        </section>
      ))}
      </div>
      <div className="col-span-5">
        
      </div>
    </div>
  );
}

export default Dashboard;

