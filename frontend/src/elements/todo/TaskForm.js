import {useState} from "react";
import { SlPlus } from "react-icons/sl";

export default function TaskForm({onAdd}) {
  const [taskName,setTaskName] = useState('');
  function handleSubmit(ev) {
    ev.preventDefault();
    onAdd(taskName);
    setTaskName('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <SlPlus
          size={40} 
          style={{ cursor: 'pointer', color: '#252525' }}
          onClick={handleSubmit} 
        />
      <input type="text"
             value={taskName}
             onChange={ev => setTaskName(ev.target.value)}
             placeholder="Your next task..."/>
    </form>
  );
}