import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from './redux/actions'; // Import action creators
import './styles.css';

const TaskInput = () => {
  const [taskText, setTaskText] = React.useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      dispatch(addTask({ id: Date.now(), text: taskText }));
      setTaskText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task..."
        value={taskText}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.tasks); // Access tasks array from state
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <div className="task">
            <span className="task-text">{task.text}</span>
            <button className="delete-btn" onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  return (
    <div className="container">
      <h1>To-Do App</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;