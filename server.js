const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json()); // For parsing application/json

// Root route (optional)
app.get('/', (req, res) => {
    res.send('Welcome to the Todo API');
});

// In-memory todo storage
let todos = [];
let idCounter = 1; // ID counter for assigning unique IDs to todos

// Get all todos
app.get('/todos', (req, res) => {
    res.status(200).json(todos);
});

// Get a single todo by ID
app.get('/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(todo);
});

// Add a new todo
app.post('/todos', (req, res) => {
    const { title, description } = req.body;
    
    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }

    const newTodo = { 
        id: idCounter++, 
        title, 
        description, 
        completed: false 
    };
    
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// Update an existing todo
app.put('/todos/:id', (req, res) => {
    const { title, description, completed } = req.body;
    const todo = todos.find(t => t.id === parseInt(req.params.id));

    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }

    if (title !== undefined) todo.title = title;
    if (description !== undefined) todo.description = description;
    if (completed !== undefined) todo.completed = completed;

    res.status(200).json(todo);
});

// Delete a todo
app.delete('/todos/:id', (req, res) => {
    const index = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ message: 'Todo not found' });
    }

    todos.splice(index, 1);
    res.status(204).send(); // No content
});

// Start the server
app.listen(port, () => {
    console.log(`Todo API is running on http://localhost:${port}`);
});
