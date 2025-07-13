export default function DisplayHabits({ habits,handleToggle,handleDelete }) {
    
  return (
    <div>
      {habits.length == 0 ? (
        <h3> No habits to display</h3>
      ) : (
        <ul>
          {habits.map((habit) => {
            return (
              
                <li key={habit.text}>
                  {habit.text}
                  <input type="checkbox" onChange={()=>handleToggle(habit.text)} checked={habit.done} />
                  <button onClick={()=>handleDelete(habit.text)}>X</button>
                </li>
                
              
            );
          })}
        </ul>
      )}
    </div>
  );
}
