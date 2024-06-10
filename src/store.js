// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, description, isDone } = action.payload;
      const existingTask = state.find(task => task.id === id);
      if (existingTask) {
        existingTask.description = description;
        existingTask.isDone = isDone;
      }
    },
    toggleTask: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    }
  }
});

export const { addTask, editTask, toggleTask } = tasksSlice.actions;

const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer
  }
});

export default store;
