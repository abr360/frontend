import React, { useState } from 'react';
import { useDeleteGoal } from '../features/goals/goalSlice';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function GoalItem({ goal }) {
  const { mutate: deleteGoal, isLoading } = useDeleteGoal();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); 
  };

  return (
    <div className="bg-gray-800 text-white shadow-md rounded-lg p-4 mb-4 w-full ">
      <div className=" justify-between items-start  ">
        <div className="min-w-0 min-h-0 ">
          <div className='flex justify-between '>
             <div className="text-white bg-blue-600 py-2 px-2 rounded-xl text-sm ">
            {new Date(goal.createdAt).toLocaleString('en-US')}
          </div>
          
          <div className="flex items-end ml-4">
          <CopyToClipboard text={goal.text}>
            <button
              onClick={handleCopy}
              className={`bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-lg text-sm px-4 py-2 mr-2 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isLoading}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </CopyToClipboard>
          <button 
            onClick={() => deleteGoal(goal._id)} 
            className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 disabled:bg-red-300" 
            disabled={isLoading}
          >
            X
          </button>
        </div>
        </div>
          <div className="overflow-x-auto whitespace-pre-wrap">
            <pre className="">{goal.text}</pre>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default GoalItem;
