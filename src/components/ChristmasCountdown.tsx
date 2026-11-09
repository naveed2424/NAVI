import React from 'react';
import { useApp } from '../context/AppContext';
import { christmasCalendarStages } from '../data/christmasCalendar';
import { 
  Calendar, 
  CheckCircle2, 
  Circle, 
  Printer, 
  RotateCcw, 
  ArrowRight, 
  Clock, 
  Sparkles,
  Utensils
} from 'lucide-react';

export const ChristmasCountdown: React.FC = () => {
  const { 
    calendarCheckedTasks, 
    toggleCalendarTask, 
    isCalendarTaskChecked, 
    clearCalendarTasks,
    navigateToRecipe 
  } = useApp();

  // Calculate total tasks and progress
  const allTasks = christmasCalendarStages.flatMap((s) => s.tasks);
  const totalTasksCount = allTasks.length;
  const completedCount = allTasks.filter((t) => isCalendarTaskChecked(t.id)).length;
  const progressPercent = totalTasksCount > 0 ? Math.round((completedCount / totalTasksCount) * 100) : 0;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white border border-[#E7D8C5] rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
      
      {/* Header and Progress Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#E7D8C5] pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B76B4A]">
            <Sparkles className="w-4 h-4" />
            <span>Interactive Editorial Tool</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#302D28] mt-1">
            The NAVI Christmas Countdown Calendar
          </h2>
          <p className="text-xs sm:text-sm text-[#76543D] mt-1">
            An organized holiday timeline from 30 days before through Christmas Day dinner. Check off tasks as you prepare.
          </p>
        </div>

        {/* Progress Metric & Actions */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="bg-[#F5F0E7] p-3 rounded-2xl border border-[#E7D8C5] min-w-[180px]">
            <div className="flex justify-between items-center text-xs font-bold text-[#30483A] mb-1">
              <span>Holiday Readiness</span>
              <span>{progressPercent}%</span>
            </div>
            <div className="w-full bg-[#E7D8C5] h-2 rounded-full overflow-hidden">
              <div 
                className="bg-[#30483A] h-full transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-[10px] text-[#76543D] block mt-1">
              {completedCount} of {totalTasksCount} tasks completed
            </span>
          </div>

          <div className="flex items-center gap-2 no-print">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-white border border-[#E7D8C5] hover:border-[#30483A] text-[#302D28] text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
              title="Print clean calendar checklist"
            >
              <Printer className="w-4 h-4 text-[#30483A]" />
              <span>Print Timeline</span>
            </button>

            {completedCount > 0 && (
              <button
                onClick={clearCalendarTasks}
                className="px-3 py-2 bg-[#F5F0E7] hover:bg-red-50 text-gray-500 hover:text-red-600 text-xs font-semibold rounded-xl flex items-center gap-1 transition-colors cursor-pointer"
                title="Reset all checkboxes"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 6 Stages Timeline */}
      <div className="space-y-10">
        {christmasCalendarStages.map((stage, sIdx) => {
          const stageCompleted = stage.tasks.every((t) => isCalendarTaskChecked(t.id));

          return (
            <div key={stage.id} className="relative pl-6 sm:pl-8 border-l-2 border-[#E7D8C5]">
              {/* Timeline marker */}
              <div className={`absolute -left-[17px] top-0 w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-colors ${
                stageCompleted 
                  ? 'bg-[#30483A] border-[#30483A] text-white' 
                  : 'bg-white border-[#B76B4A] text-[#B76B4A]'
              }`}>
                {sIdx + 1}
              </div>

              {/* Stage Title */}
              <div className="mb-4">
                <span className="text-xs font-bold text-[#B76B4A] uppercase tracking-wider block">
                  {stage.timeframe}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#302D28]">
                  {stage.title}
                </h3>
                <p className="text-xs text-[#76543D] mt-0.5">
                  {stage.description}
                </p>
              </div>

              {/* Tasks Checklist */}
              <div className="space-y-3">
                {stage.tasks.map((task) => {
                  const checked = isCalendarTaskChecked(task.id);

                  return (
                    <div
                      key={task.id}
                      onClick={() => toggleCalendarTask(task.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                        checked
                          ? 'bg-[#F5F0E7]/60 border-transparent text-gray-400'
                          : 'bg-white border-[#E7D8C5] hover:border-[#30483A] text-[#302D28]'
                      }`}
                    >
                      <button
                        type="button"
                        className="mt-0.5 shrink-0 focus:outline-none"
                        aria-label={checked ? 'Uncheck task' : 'Check task'}
                      >
                        {checked ? (
                          <CheckCircle2 className="w-5 h-5 text-[#30483A]" />
                        ) : (
                          <Circle className="w-5 h-5 text-[#B76B4A]" />
                        )}
                      </button>

                      <div className="flex-1">
                        <p className={`text-sm font-bold ${checked ? 'line-through text-gray-400' : 'text-[#302D28]'}`}>
                          {task.task}
                        </p>
                        <p className={`text-xs mt-1 leading-relaxed ${checked ? 'text-gray-400' : 'text-[#76543D]'}`}>
                          {task.detail}
                        </p>

                        {/* Optional Recipe Link */}
                        {task.recipeSlug && (
                          <div className="mt-2 no-print">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                if (task.recipeSlug) navigateToRecipe(task.recipeSlug);
                              }}
                              className="text-xs font-semibold text-[#30483A] hover:text-[#B76B4A] inline-flex items-center gap-1 hover:underline cursor-pointer"
                            >
                              <Utensils className="w-3.5 h-3.5" />
                              <span>View Recipe: {task.recipeName}</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Helpful Host Note */}
      <div className="bg-[#30483A]/5 border border-[#30483A]/20 p-5 rounded-2xl text-xs text-[#302D28] space-y-1">
        <p className="font-bold text-[#30483A]">The NAVI Holiday Philosophy:</p>
        <p className="text-[#76543D] leading-relaxed">
          The goal of this calendar is not rigid perfection, but peaceful hospitality. Do as much ahead of time as fits your schedule, and remember: memories shared around the table with loved ones matter far more than an immaculate schedule.
        </p>
      </div>

    </div>
  );
};
