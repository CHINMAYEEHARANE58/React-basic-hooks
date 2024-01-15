import React from 'react';
import { useState } from 'react';
import './App.css';


// import PROGRESSION1 from './Components/PROGRESSION1'
// import PROGRESSION2 from './Components/PROGRESSION2'
// import PROGRESSION3 from './Components/PROGRESSION3'
// import PROGRESSION4 from './Components/PROGRESSION4'
// import PROGRESSION5 from './Components/PROGRESSION5'
import PROGRESSION6 from './Components/PROGRESSION6'


export const ToggleTheme = React.createContext()

function App() {

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return (
    // <PROGRESSION1/>
    // <PROGRESSION2/>
    // <PROGRESSION3/>
    // <PROGRESSION4/>
    // <PROGRESSION5/>


    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <PROGRESSION6/>
    </ToggleTheme.Provider>
  );
}

export default App;