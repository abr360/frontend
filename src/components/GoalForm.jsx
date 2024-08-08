import React from 'react';
import { useForm } from 'react-hook-form';
import { useCreateGoal } from '../features/goals/goalSlice';

function GoalForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { mutate: createGoal, isLoading } = useCreateGoal();

  const onSubmit = (data) => {
    createGoal(data.goal); 
    reset();
  };

  return (
    <section className="max-w-max mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="goal" className="mb-2 font-semibold">Goal</label>
          <textarea
            id="goal"
            {...register('goal', { required: 'Goal is required' })}
            rows="4"
            cols={40}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
          {errors.goal && <p className="text-red-500">{errors.goal.message}</p>}
        </div>
        <div>
          <button
            className={`w-full px-4 py-2 text-white font-bold rounded-md ${isLoading ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-700'} transition-colors`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Adding...' : 'Add Goal'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default GoalForm;
