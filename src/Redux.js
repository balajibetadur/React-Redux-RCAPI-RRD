
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Test from './components/Test/Test';
import { useSelector } from 'react-redux'


function App() {

  const todoList = useSelector(state => state.todoList)
  return (
    <div className="App">
      <div className="navbar"> <Navbar/></div>
        <Test/>
        {todoList && todoList.map((todoText, index)  => {
          return <p key = {index}>{todoText}</p>
        })}

      </div>
  );
}

export default App;
