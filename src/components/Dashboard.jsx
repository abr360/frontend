import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetGoals } from '../features/goals/goalSlice';
import GoalItem from './GoalItem';
import GoalForm from './GoalForm';

function Dashboard() {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const { data: goals, isLoading, isError, error } = useGetGoals();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-cyan-100">
      <div className="border-4 border-gray-200 border-t-blue-600 rounded-full w-10 h-10 animate-spin"></div>
    </div>
    );
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  
  const sortedGoals = goals?.sort((a, b) => b._id.localeCompare(a._id));

  return (
    <>
      <div className=' bg-cyan-100 min-h-screen'>
        <section className=" p-4">
          <h2 className="text-2xl font-bold text-center mt-20">Welcome, {user?.name}</h2>
          <h3 className="text-lg text-center text-gray-600">Here are your goals</h3>
          <GoalForm />

          {sortedGoals && sortedGoals.length > 0 ? (
            <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4  lg:mx-20">
              {sortedGoals.map((goal) => (
                <GoalItem key={goal._id} goal={goal} />
              ))}
            </div>
          ) : (
            <h3 className="text-lg text-center text-gray-600">You have not set any goals</h3>
          )}
        </section>
      </div>
    </>
  );
}

export default Dashboard;
