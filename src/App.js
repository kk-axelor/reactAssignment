import React, { useState } from 'react'
import "./app.css"
import Input from './components/Input'
import SelectComponent from './components/SelectComponent'
import RadioComponent from './components/RadioComponent'
import CheckboxComponent from './components/CheckboxComponent'



const OPTIONS = ['Tomcat', 'WebLogic', 'Glass Fish']
const RADIO_OPTIONS = ['Admin', 'Engineer', 'Manager', 'Guest']
const CHECKBOX_OPTIONS = ['Mail', 'Payroll', 'Self-Services']

const App = () => {

  const intialState = {
    username: '',
    password: '',
    city: '',
    webserver: 'Tomcat',
    role: '',
  }
  const [sign, setSign] = useState([])
  const [error, seterror] = useState("");
  const [data, setData] = useState(intialState);


  const handleInput = (e) => {
    seterror("")
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }



  const handleSubmit = (e) => {

    e.preventDefault();
    for (const key in data) {
      console.log(data[key])
      if (data[key] === '') {
        seterror(`${key} should not be Empty`);
        return;
      }
    }

    if (sign.length === 0) {
      seterror(`please select sign on data filed`);
      return
    }
    if (checkPassword(data.password)) {
      return;
    }
    window.alert("Success fully submitted")
  }


  const handleCheckbox = (e) => {
    seterror('');
    if (e.target.checked) {
      setSign([...sign, e.target.value]);
    }
    else {
      setSign(sign.filter((prev) => prev !== e.target.value))
    }

    // console.log(data)
  }


  const checkPassword = (pwd) => {
    const regex = /\d/;
    if (pwd.length < 8) {
      seterror("Password flied must have atleast 8 character")
      return true;
    }
    if (!regex.test(pwd)) {
      seterror("Password must containt atleast one digit ")
      return true;
    }

    return false;
  }



  const handleReset = (e) => {
    // console.log("hello")
    e.preventDefault()
    setData(intialState);
    setSign([])
    seterror("")
  }

  return (
    <main>
      <h2>Create Form</h2>
      <form onSubmit={handleSubmit} >

        <Input
          text="Username"
          name="username"
          placeholder={"Kunal shaw"}
          data={data.username}
          onChange={handleInput} />


        <Input
          text="Password"
          type="password"
          name="password"
          placeholder={"Password"}
          data={data.password}
          onChange={handleInput} />

        <Input
          text="City"
          name="city"
          data={data.city}
          placeholder={"surat"}
          onChange={handleInput} />


        <SelectComponent
          text="WebServer"
          name="webservers"
          data={data.webserver}
          options={OPTIONS}
          onChange={handleInput} />

        <RadioComponent
          text="Please Specify your role"
          radios={RADIO_OPTIONS}
          name="role"
          type="radio"
          data={data.role}
          onChange={handleInput}
        />

        <CheckboxComponent
          text="Single Sign-on to the following"
          type="checkbox"
          checkboxes={CHECKBOX_OPTIONS}
          onChange={handleCheckbox}
          sign={sign}
        />


        <p className='error'>{error}</p>
        <div className='btn-group'>

          <button className='btn' type='submit' >Login</button>
          <button className='btn' onClick={(e) => handleReset(e)}>Reset</button>
        </div>

      </form >
    </main >
  )
}

export default App