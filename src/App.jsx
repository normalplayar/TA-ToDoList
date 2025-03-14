import { TodoWrapper } from './components/TodoWrapper';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
            <h1>To Do List</h1>
            <Router>
                <Routes>
                    <Route path='/' element={<TodoWrapper />}></Route>
                </Routes>
            </Router>
        </div>
  )
}

export default App
