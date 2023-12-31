import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css'
import Login from './Login/Login';
import Navigation from './Components/NavigationTemplate/Navigation';
import Main from './Main/Main';
import { ThemeContext } from './ThemeContext';

function App() {
  const[DarkTheme,setDarkTheme]=useState(true);
  const[LoggedIn,setLoggedIn]=useState(false)

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setLoggedIn(true);
      }
      else{
        setLoggedIn(false);
      }
    })
  },[])
  return (
    <ThemeContext.Provider value={{DarkTheme,setDarkTheme}}>
    <div className="App">
      {LoggedIn ?(
      <>
        <Navigation/>
        <Main/>
      </>): (<Login/>)
      }
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
