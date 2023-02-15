import { useState, useEffect } from 'react'
import axios from 'axios'
import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './components/input.js'
import './assets/all.scss'

function App() {
  const [text, setText] = useState('')

  const onChangeHandler = e => {
    setText(e.target.value)
  }

  useEffect(() => {

    (async () => {
      const result=await axios.get('https://randomuser.me/api')
      console.log(result)
    }
    )()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />


        {text}
        <Input id={'sample'} text='這是Input' value={text} onChangeHandler={onChangeHandler} />
        <br/>
        <button type="button" className="btn btn-primary">Primary</button>
      </header>
    </div>
  );
}

export default App;
