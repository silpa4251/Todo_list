import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/Todo'
import NavHead from './components/NavHead'

function App() {
  return (
    <div className="App">
      <NavHead />
      <Todo />
    </div>
  );
}

export default App;
