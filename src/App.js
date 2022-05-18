import './App.css';
import { connect } from 'react-redux';
import Button from './components/Button';
import Number from './components/Number';
import {INCREMENT, DECREMENT, MULTIPLY, DIVIDE} from "./store"

function App({INCREMENT, DECREMENT, MULTIPLY, DIVIDE}) {
  return (
    <div className="App">
      <Number/>
      <Button event={INCREMENT}>Sumar 2</Button>
      <Button event={DECREMENT}>Restar 2</Button>
      <Button event={MULTIPLY}>Multiplicar x 2</Button>
      <Button event={DIVIDE}>Dividir x 2</Button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    INCREMENT: () => dispatch({ type: INCREMENT }),
    DECREMENT: () => dispatch({ type: DECREMENT }),
    MULTIPLY: () => dispatch({ type: MULTIPLY }),
    DIVIDE: () => dispatch({ type: DIVIDE }),
  };
}

export default connect(null, mapDispatchToProps)(App);
