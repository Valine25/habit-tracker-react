export default function DisplayHabits({ habits }) {
  return (
    <div>
      
        {habits.length == 0 ? (
        <h3> No habits to display</h3>
        ) : (
          <ul>
            {habits.map((habit) => {
                return <li key={habit} >{habit}</li>
            })}
          </ul>
        )}
      
    </div>
  );
}
