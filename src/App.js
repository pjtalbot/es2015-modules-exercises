import logo from './logo.svg';
import './App.css';
import {choice, remove} from './helpers'
import foods from './foods'

function App() {
  console.log(foods)
  let food = choice(foods)
  console.log(`I'd like one ${food} please`)
  console.log(`here's a ${food} for ya!`)
  console.log(`Great! Can I have one more`)

  let remaining = remove(foods, food)

  console.log(`I'm sorry, we're all out. You can choose between ${remaining.length} other choices`)
  return (
    <div className="App">

      
    </div>
  );
}

export default App;
