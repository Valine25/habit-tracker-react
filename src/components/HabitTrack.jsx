import { useState } from "react";
import DisplayHabits from "./DisplayHabits";

export default function HabitTrack() {
  const [habit, setHabit] = useState({ text: "", done: false });
  const [habits, setHabits] = useState([]);

  function handleAdd(e) {
    e.preventDefault();
    setHabits([...habits, habit]);
    setHabit({ text: "", done: false });
  }

  function handleToggle(text) {
    const newArray = habits.map((habit) =>
      habit.text === text ? { ...habit, done: !habit.done } : habit
    );
    setHabits(newArray);
  }

  function handleDelete(text){
    const newarray=habits.filter((habit)=>
    habit.text!==text);
    setHabits(newarray);
  }

  return (
    <div>
      <form onSubmit={(e) => handleAdd(e)}>
        <input
          onChange={(e) => setHabit({ text: e.target.value, done: false })}
          type="text"
          value={habit.text}
        ></input>
        <button>Add</button>
      </form>
      <DisplayHabits habits={habits} handleToggle={handleToggle} handleDelete={handleDelete} />
    </div>
  );
}
