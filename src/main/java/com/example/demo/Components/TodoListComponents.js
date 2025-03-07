const getTodos = async (req, res) => {
  try {
    const todos = await getTodosFromDatabase();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: "Error fetching todos", error });
  }
};

const addTodo = async (req, res) => {
  const { name } = req.body;
  if (!name || !name.trim()) {
    return res.status(400).json({ message: "Todo name is required" });
  }
  try {
    const newTodo = await addTodoToDatabase({ name });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: "Error adding todo", error });
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteTodoFromDatabase(id);
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting todo", error });
  }
};

export { getTodos, addTodo, deleteTodo };