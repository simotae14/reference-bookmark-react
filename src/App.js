import React, { useState } from 'react';

import AppView from './AppView';

const App = (props) => {
  const [ counter, setCounter ] = useState(0);
  
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
//     const {
//       title,
//       magicNum
//     } = this.props;
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
