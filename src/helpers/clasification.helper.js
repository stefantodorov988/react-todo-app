export const orderTodos = (todos, filter) => {
    if(filter === "Active"){
        return todos.filter(t => !t.completed)
    }
    if(filter === "Completed"){
        return todos.filter(t => t.completed)
    }
    return todos;
  }