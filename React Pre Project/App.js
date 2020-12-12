
import { useReducer, useState } from 'react';

function App() {

  //onst [counter, setCounter] = useState(0)

  const myReducer = (state, action) =>{
    if (isNaN(action.value)) return 0;
    return action.value > 100 ? 100: action.value < 0 ? 0: action.value;
    //action.value;
  }

  const [counter, dispatch] = useReducer(myReducer, 0);
  const [inputValue, setInputValue] = useState("")


  const decrement = () =>{
    dispatch({value: counter-1});
    //setCounter(counter - 1)
  }

  const handleKeyDown=(e)=>{
    if(e.key=="Enter"){
      dispatch({value: parseInt(inputValue)})
      //setCounter(parseInt(inputValue));
    }

  }


  return (
    <div className="App">
      <div className="container">
        <div className="column is-multiline">
          <div className="column is-full">
            <div className="notification">
              <div className="columns">
                <div className="column is-half">
                  <div className="field has-addons">
                    <div className="control">
                      <input 
                      className="input" 
                      type="text" 
                      placeholder="put a number"
                      value = {inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyDown}
                    />
                  </div>
                  <div className="control">
                    <a 
                      className="button is-info"
                      onClick={()=> dispatch({value: parseInt(inputValue)})}
                      //setCounter(parseInt(inputValue))}
                    >
                      Assign
                    </a>
                  </div>
                </div>
                <div className="buttons has-addons">
                  <button 
                    className="button is-primary"
                    onClick = {()=> dispatch({value: parseInt(counter + 1)})}
                      //setCounter(counter+1)}
                    
                  >
                    Up
                  </button>
                    <button className="button is-warning"
                    onClick = {decrement}
                    
                    >Down</button>
                </div>
                <div className="column is-half">
                  <h1 className ="title">{counter}</h1>
                  
                </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;






























/* 
import React, { Component } from "react";
import Button from "/Users/Ikenna/react-counter-app/src/components/Button";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    })
  }



  render() { 
    let { count } = this.state;
    return (
      <div> 
        <h2> Count: { count } </h2> 
        <Button title = "-" task = { () => this.decrementCount() } /> 
        <Button title = "+" task = { () => this.incrementCount() } /> 
        </div> 
    )
  }
}

*/ 

/*
  //render() {
   // let { count } = this.state;
    //return (
     // <div className="app">
      //  <div>
       //   <div class="count">
        //    <h3>Count:</h3>
         //   <h1>{count}</h1>
         // </div>
         // <div class="buttons">
          //  <Button title={"-"} action={this.decrementCount} />
           // <Button title={"+"} action={this.incrementCount} />
          //</div>
       // </div>
     // </div>
    //);
 // }
//}
*/