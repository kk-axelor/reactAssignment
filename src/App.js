import React, { useState } from 'react'
import styles from "./app.module.css"
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
  const [data, setData] = useState(intialState);
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null)



  const handleInput = (e) => {
    if (e.target.name === "username")
      setUsernameError("");
    if (e.target.name === "password")
      setPasswordError('')
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }




  const handleSubmit = (e) => {
    setUsernameError('')
    setPasswordError('')
    e.preventDefault();
    if (data.username === '')
      setUsernameError("Username should not be empty")


    if (data.password === '') {
      setPasswordError("password  should not be empty")
      return;
    }

    if (checkPassword(data.password)) {
      return;
    }

    window.alert("Success fully submitted")

    handleReset(e);
  }




  const handleCheckbox = (e) => {

    if (e.target.checked) {
      setSign([...sign, e.target.value]);
    }
    else {
      setSign(sign.filter((prev) => prev !== e.target.value))
    }
  }


  const checkPassword = (pwd) => {
    const regex = /\d/;
    if (pwd.length < 8) {
      setPasswordError("Password flied must have atleast 8 character")
      return true;
    }
    if (!regex.test(pwd)) {
      setPasswordError("Password must containt atleast one digit ")
      return true;
    }
    return false;
  }



  const handleReset = (e) => {
    e.preventDefault()
    setData(intialState);
    setSign([])

  }

  console.log(data)

  return (
    <main>
      <h2>Create Form</h2>
      <form onSubmit={handleSubmit} >

        <Input
          text="Username"
          name="username"
          placeholder={"Enter Your name"}
          error={usernameError}
          value={data.username}
          onChange={handleInput}
        />


        <Input
          text="Password"
          type="password"
          name="password"
          placeholder={"Password"}
          value={data.password}
          onChange={handleInput}
          error={passwordError}
        />


        <Input
          text="City"
          name="city"
          value={data.city}
          placeholder={"surat"}
          onChange={handleInput}
        />


        <SelectComponent
          text="WebServer"
          name="webservers"
          data={data.webserver}
          options={OPTIONS}
          onChange={handleInput}

        />

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
          s />


        <div className='btn-group'>
          <button className={styles.btn} type='submit' >Login</button>
          <button className={styles.btn} onClick={(e) => handleReset(e)}>Reset</button>
        </div>

      </form >
    </main >
  )
}

export default App