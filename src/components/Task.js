// components/Task.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../store';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = (newDescription) => {
    dispatch(editTask({ ...task, description: newDescription }));
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggle}
      />
      <span>{task.description}</span>
      <button onClick={() => handleEdit(prompt("Edit Task", task.description))}>Edit</button>
    </div>
  );
};

export default Task;
