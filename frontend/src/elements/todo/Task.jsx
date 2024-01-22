import Checkbox from "./Checkbox";
import {useState} from "react";

import { SlTrash } from "react-icons/sl";

const Task = ({name,done,onToggle= () => {},onTrash= () => {},onRename= () => {}}) => {
  const [editMode,setEditMode] = useState(false);

  return (
    <div className={'task ' + (done?'done':'')}>
      <Checkbox checked={done} onClick={() => onToggle(!done)} />
      {!editMode && (
        <div className="task-name" onClick={() => setEditMode(prev => !prev)}>
          <span>{name}</span>
        </div>
      )}
      {editMode && (
        <form onSubmit={ev => {ev.preventDefault();setEditMode(false);}}>
          <input type="text" value={name}
                 onChange={ev => onRename(ev.target.value)} />
        </form>
      )}
      <SlTrash
          size={30} 
          style={{ cursor: 'pointer' }}
          onClick={onTrash}
        />
    </div>
  );
};


export default Task;