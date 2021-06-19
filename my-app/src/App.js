import {useState} from 'react';
import Student from './Student';
import './App.css';
import Head from './Header';
import { getDefaultNormalizer } from '@testing-library/dom';

function App() {
  const [data, setData] = useState("Sahil");
  function updateData()
  {
    setData("Singh");
    alert(data);
  }
  console.warn(data);
  return (
    <header class = "App">
      <Head />
      <Student name = "Aman" email = {"test@gemail.com"} others = {{address: "delhi", mobile: "111"}} />
      <Student name = "Sahil" email = {"sahil@gmail.com"} others = {{address: "Beas", mobile: "222"}} />
    <div class="App-header">
        <h1>{data}</h1>
        <button onClick={()=>updateData()}>Update Me</button>
        
    </div>
    
    </header>
  );
}

export default App;
