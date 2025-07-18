
function StaticTodo() {
  const todos = [
    {
      id: 1,
      title: "Finish report",
      description: "Monthly financial report",
      category: "Work",
      completed: true,
    },
    {
      id: 2,
      title: "Team meeting",
      description: "Sync with dev team",
      category: "Work",
      completed: false,
    },
    {
      id: 3,
      title: "Buy groceries",
      description: "Milk, eggs, and bread",
      category: "Personal",
      completed: false,
    },
    {
      id: 4,
      title: "Gym",
      description: "Leg day workout",
      category: "Personal",
      completed: true,
    },
    {
      id: 5,
      title: "Read book",
      description: "Finish 'Atomic Habits'",
      category: "Hobby",
      completed: false,
    },
    {
      id: 6,
      title: "Painting session",
      description: "Try new watercolor technique",
      category: "Hobby",
      completed: true,
    },
  ];

  const categories = [...new Set(todos.map((todo) => todo.category))];

  return (
    <div>
      <h2>To-Do List</h2> <hr />

      {categories.map((cat) => (
        <div key={cat}>
          <h3>{cat}</h3>
          <ul style={{listStyleType: "none"}}>
            {todos
              .filter((todo) => todo.category === cat)
              .map((todo) => (
                <li key={todo.id}>
                  {todo.completed ? "✅" : "❌"} {todo.title}
                  <br />
                  <i>{todo.description}</i>
                </li> 
              ))} <hr />
          </ul>
        </div>
      ))}
    </div>
  );
}

export default StaticTodo;
