import { useState } from "react";
import DisplayHabits from "./DisplayHabits";

export default function HabitTrack() {
  const [habit, setHabit] = useState("");
  const [habits, setHabits] = useState([]);
  function handleAdd(e) {
    e.preventDefault();
    setHabits([...habits, habit]);
    setHabit("");
  }

  return (
    <div>
      <form onSubmit={(e) => handleAdd(e)}>
        <input
          onChange={(e) => setHabit(e.target.value)}
          type="text"
          value={habit}
        ></input>
        <button>Add</button>
      </form>
      <DisplayHabits habits={habits}/>
    </div>
    
  );
  
}
