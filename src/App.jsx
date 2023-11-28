//! Simple Example for useRef:

// import React, { useRef } from 'react'

// function App() {

//   // Create a reference using useRef hook
//   const inputRef = useRef (null);

//   // Create a handleButtonClick function
//   const handleButtonClick = () => {

//   console.log(inputRef.current);
//     // என்று கொடுக்கும்போது button ஐ கிளிக் செய்தால் consoleல் current என்ற object க்குள் நாம் கொடுத்த input ஆனது வந்துவிடும்.
//     // <input type="text" placeholder="Enter a Text">

// console.log(inputRef.current.value);
//     // நாம் ஏதேனும் input ஐ கொடுத்து sumbit என்ற button ஐ கிளிக் செய்தால் அது console ல் வந்துவிடும்.
    
//  inputRef.current.value = "king";
//     // இவ்வாறு கொடுத்து value ஐ assign செய்யலாம்.
//     // sumbit என்ற button ஐ கிளிக் செய்தால் input box க்குள் king என்று வந்துவிடும்.
//     // அதேபோல் நாம் என்ன input கொடுக்கிறோமோ அது button ஐ கிளிக் செய்யும் போது வந்துவிடும்.

//     inputRef.current.focus();
//     // sumbit என்ற button ஐ கிளிக் செய்யும் போது cursor ஆனது input box க்குள் வந்துவிடும்.
  
//   }

//   return (
//     <div>
//       <input type='text' placeholder='Enter a Text' ref={inputRef} />
//       <button onClick={handleButtonClick} >Submit </button>
//     </div>
//   )
// }

// export default App

// *************************************************************************************************************************

//! Using for useRef with useEffect:

//! Example 2:
// import React, { useEffect, useRef } from 'react'

// function App() {

//   // Create a reference using useRef hook
//   const inputRef = useRef (null);

//   // Create a handleButtonClick function
//   useEffect ( () => {
//     inputRef.current.focus ();
//   }, [])

//   return (
//     <div>
//       <input type='text' placeholder='Enter a Text' ref={inputRef} />
//       <button>Submit</button>
//     </div>
//   )
// }

// export default App

// *************************************************************************************************************************

// ! Using for useRef button background color changed 

// import React, { useRef } from 'react'

// function App() {

//     // Create a reference using useRef hook
//     const buttonRef = useRef (null);

//     const changeColor = () => {

//     const colors = ["white","black","blue","darkgreen","pink","yellow","red"];
//     const randomColor = colors[Math.floor(Math.random () * 7)];
//     console.log(randomColor);
//     buttonRef.current.style.backgroundColor = randomColor;
//   }

//   return (
//     <div>
//       <h3>Button Color Changed</h3>
//       <button onClick={changeColor} ref={buttonRef}>Change Color</button>
//     </div>
//   )
// }

// export default App



// //! Using for useRef background color changed 

// import React, { useRef } from 'react'

// function App() {

//     // Create a reference using useRef hook
//     const bodyRef = useRef (document.body);

//     const changeColor = () => {

//     const colors = ["white","black","blue","darkgreen","pink","yellow","red"];
//     const randomColor = colors[Math.floor(Math.random () * 7)];
//     bodyRef.current.style.backgroundColor = randomColor;
//   }

//   return (
//     <div>
//       <h3>Background Color Changed</h3>
//       <button onClick={changeColor}>Change Color</button>
//     </div>
//   )
// }

// export default App

// *************************************************************************************************************************

//! useState vs useReduce 

//! use State Example :

// import React, { useState } from 'react'

// function App() {
//   const [count,setCount] = useState(0);
//   const [clickHistory,setclickHistory] = useState([]);

//   const incrementHandle = () => {
//     setCount (count + 1);
//     setclickHistory(clickHistory.concat ('Inc'));
//   }

//   const decrementHandle = () => {
//     setCount (count - 1);
//     setclickHistory(clickHistory.concat ('Dec'));
//   }

//   const resetHandle = () => {
//     setCount (0);
//     setclickHistory(clickHistory.concat ('Res'));
//   }

//   return (
//     <div>
//       <h2>Counter : {count}</h2>
//       <button onClick={incrementHandle}>Add</button>
//       <button onClick={decrementHandle}>Reduce</button>
//       <button onClick={resetHandle}>Reset</button>

//       <h4>Clicks History</h4>
//       {/* <p> { clickHistory.join('') }</p> */}

//       {
//         clickHistory.map ((data , index) => (
//           <p key = {index} > {data}</p>
//         ))
//       }

//     </div>
//   )
// }

// export default App

//                   *********************************************************

//! At the same 
//! use Reduce Example : 

// import React, { useReducer } from 'react'
// import { initialState, reducer } from './reducers/countReduce'

// function App() {

//   // To initiate the useReducer
//   const [state, dispatch] =useReducer(reducer,initialState);

//   return (

//     <div>

//       <h3> Counter : { state.count}</h3>
//       <button onClick={ () => dispatch ( {type:'incr'} )}>Add</button>
//       <button onClick={ () => dispatch ( {type:'decr'} )}>Reduce</button>
//       <button onClick={ () => dispatch ( {type:'reset'} )}>Reset</button>

//       <h4>Clicks History</h4>
//       <p> { state.clicksHistory.join(' ') } </p>

//     </div>
//   )
// }

// export default App

//                   *********************************************************

//! use Reduce Example : 2

// import React, { useReducer } from 'react';

// // 1. define initialState
// const initialState = {
//   value: '',
// }

// // 2. define reducer
// const inputReducer = (state, action) => {
//   switch (action.type) {
//     case 'change': 
//       return { value: action.payload }
//     default:
//       return state;
//   }
// }

// function App() {

//   // 3. get the state + dispatcher
//   const [state, dispatch] = useReducer(inputReducer, initialState);

//   return (
//     <div>
//       <input 
//         type='text'
//         placeholder='type something...'
//         onChange={e => dispatch({ type: 'change', payload: e.target.value })}
//       />

//       <p>You typed: { state.value }</p>
//     </div>
//   )
// }
// export default App;

// *************************************************************************************************************************

//! Front end game demonstration - tictactoe

// import React, { useState } from 'react';
// import './style/App.css'


// function Button( {value , onClick} ) {
//   return (
//     <button className='circle' onClick= {onClick} > { value } </button>
//   )
// }

// function App() {

//   const [square,setSquare] = useState(Array(9).fill(null));

//   const [xIsNext,setXIsNext] = useState(true);

//   const handleClick = (i) => {

//     if(square[i] || calculateWinner(square)) {
//       return;
//     }
    
//   const nextSquare = square.slice();
//     if(xIsNext) {
//       nextSquare[i] = 'X';
//     }
//     else
//     {
//       nextSquare[i] = 'O';
//     }

//   setSquare(nextSquare);
//   setXIsNext(!xIsNext);
//   }

//   const calculateWinner = (square) => {
//     const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],      
//     ];

//     for(let i=0; i<lines.length; i++)
//     {
//       const[a,b,c] = lines[i];

//     if(square [a] && square [a] == square [b] && square [a] == square [c])
//     {
//       return square [a];
//     }
//     }

//     return null;
//   }

//   let winner = calculateWinner(square);
//   let status;

//   if(winner)
//   {
//     status = 'Winner :' + winner;
//   }
//   else
//   {
//     status = 'Next Player :' + (xIsNext ? 'X' : 'O');
//   }


//   return (
//     <div>
//       <div>
//         {status}
//       </div>

//       <div className='row'>
//         <Button value = { square[0] } onClick= { () => handleClick(0) } />
//         <Button value = { square[1] } onClick= { () => handleClick(1) } />
//         <Button value = { square[2] } onClick= { () => handleClick(2) } />
//       </div>

//       <div className='row'>
//         <Button value = { square[3] } onClick= { () => handleClick(3) } />
//         <Button value = { square[4] } onClick= { () => handleClick(4) } />
//         <Button value = { square[5] } onClick= { () => handleClick(5) } />
//       </div>

//       <div className='row'>
//         <Button value = { square[6] } onClick= { () => handleClick(6) } />
//         <Button value = { square[7] } onClick= { () => handleClick(7) } />
//         <Button value = { square[8] } onClick= { () => handleClick(8) } />
//       </div>

//     </div>
//   )
// }

// export default App

// *************************************************************************************************************************