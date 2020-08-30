import React, { useState, useEffect } from 'react';

import AppView from './AppView';

const App = (props) => {
  const [ counter, setCounter ] = useState(0);
  
  // Executed initially and every time component will update
  useEffect(() => {
    setCounter(10);
    console.log('useEffect');
  }, []);

  useEffect(() => {
    console.log('calling my other useEffect');
  }, [counter]);

  const increment = num => () => {
    setCounter(counter + num);
  }

  const testFunction = () => {
    alert('executing function');
  }
  return (
    <div className="container">
      <AppView
        testFunction={testFunction}
        counter={counter} 
        {...props}
      />
      <button onClick={increment(1)}>Increment</button>
      <button onClick={increment(-1)}>Decrement</button>
    </div>
  );
};

// Class Component
// class App extends React.Component {
//   constructor() {
//     super();
//     console.log('calling constructor');
//     this.state = {
//       counter: 0
//     };
//   }

//   componentDidMount() {
//     this.setState({
//       counter: 100
//     });
//     console.log('calling componentDidMount');
//   }

//   // state = {
//   //   counter: 0
//   // };
  
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

//   // Lifecycle function, it's called after constructor
//   // and every time your component is updated
//   render() {
//     const {
//       title,
//       magicNum
//     } = this.props;
//     console.log('calling render');
//     const {
//       counter
//     } = this.state;
//     return (
//       <div className="container">
//         <h1>{title}: {counter}</h1>
//         <p>{magicNum}</p>
//         <button onClick={this.increment(1)}>Increment</button>
//         <button onClick={this.increment(-1)}>Decrement</button>
//       </div>
//     );
//   }
// }

export default App;
