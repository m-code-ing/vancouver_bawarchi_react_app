import React, {useState, useEffect} from 'react';
import './App.css';

// Importing Components here
import Form from './components/Form'
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Functions
  const filterHandler = () => {
    switch (status) {
        case "completed":
            setFilteredTodos(todos.filter((todo) => {
              return todo.completed === true;
            }))
            break;

        case "uncompleted":
            setFilteredTodos(todos.filter((todo) => {
              return todo.completed === false;
            }))
            break;
    
        default:
            setFilteredTodos(todos);
            break;
    }
  }
  // Run once when app starts
  useEffect(() => {
    getLocalTodos();
  },[])

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  },[todos, status])

  // save to local storage
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }    
  }
  
  
  
  return (
    <div className="App">
      <header>
        <h1>Mayank's Todo List</h1>
      </header>
      <Form 
      inputText={inputText} 
      setInputText={setInputText} 
      todos={todos} 
      setTodos={setTodos}
      setStatus={setStatus} />

      <TodoList 
      todos={todos} 
      setTodos={setTodos}
      status={status}
      filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
