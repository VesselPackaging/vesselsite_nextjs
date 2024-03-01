import React from 'react';

const LeadTimes = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 min-h-screen pb-64">
      <div className="flex justify-center items-center">
        <div className="grid md:grid-cols-3 gap-4 justify-items-center items-center px-40 md:px-14">
          <div className="max-w-md w-full space-y-4 p-6 bg-white rounded-xl shadow-md">
            <h1 className="text-l font-bold text-center">
              Blank Cans / Supplies
            </h1>
            <h1 className="text-xl font-bold text-center">
              <div>2-3</div>
            </h1>
          </div>

          <div className="max-w-md w-full space-y-4 p-6 bg-white rounded-xl shadow-md">
            <h1 className="text-l font-bold text-center">PSL Application</h1>
            <h1 className="text-xl font-bold text-center">
              <div>2-3 days</div>
            </h1>
          </div>

          <div className="max-w-md w-full space-y-4 p-6 bg-white rounded-xl shadow-md">
            <h1 className="text-l font-bold text-center">Shrink Sleeve</h1>
            <h1 className="text-xl font-bold text-center">
              <div>2-3</div>
            </h1>
          </div>

          <div className="max-w-md w-full space-y-4 p-6 bg-white rounded-xl shadow-md">
            <h1 className="text-l font-bold text-center">
              Labels Only (reorder)
            </h1>
            <h1 className="text-xl font-bold text-center">
              <div>2-3</div>
            </h1>
          </div>

          <div className="max-w-md w-full space-y-4 p-6 bg-white rounded-xl shadow-md">
            <h1 className="text-l font-bold text-center">AI1 SS (reorder)</h1>
            <h1 className="text-xl font-bold text-center">
              <div>2-3</div>
            </h1>
          </div>

          <div className="max-w-md w-full space-y-4 p-6 bg-white rounded-xl shadow-md">
            <h1 className="text-l font-bold text-center">AI1 PSL (reorder)</h1>
            <h1 className="text-xl font-bold text-center">
              <div>2-3</div>
            </h1>
          </div>
        </div>
      </div>
      <div className="self-center text-white">
        ** Business Days
      </div>
      <div className="self-center text-white">
        *new all-in-one SKUs lead time vary, average +7 days
      </div>
    </div>
  );
};

export default LeadTimes;
