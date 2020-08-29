import React, { useState } from 'react';

const App = () => {
  const [ counter, setCounter ] = useState(0);
  const [ title, setTitle ] = useState('My Counter appplication');
  
  const increment = num => () => {
    setCounter(counter + num);
  }
  return (
    <div className="container">
      <h1>{title}: {counter}</h1>
      <button onClick={increment(1)}>Increment</button>
      <button onClick={increment(-1)}>Decrement</button>
    </div>
  );
};

// Class Component
// class App extends React.Component {
//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     counter: 0
//   //   };
//   // }

//   state = {
//     counter: 0
//   };
  
//   increment = (num) => () => {
//     this.setState({
//       counter: this.state.counter + num
//     });
//   }
//   // increment = (num) => {
//   //   return () => {
//   //     this.setState({
//   //       counter: this.state.counter + num
//   //     });
//   //   }
//   // }
//   render() {
//     return (
//       <div className="container">
        // <h1>Counter Application: {this.state.counter}</h1>
        // <button onClick={this.increment(1)}>Increment</button>
        // <button onClick={this.increment(-1)}>Decrement</button>
//       </div>
//     );
//   }
// }

export default App;
