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
  const [error, seterror] = useState("");
  const [data, setData] = useState(intialState);
  const [errorKey, setErrorkey] = useState()


  const handleInput = (e) => {
    seterror("")
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  console.log(errorKey)


  const handleSubmit = (e) => {
    e.preventDefault();
    for (const key in data) {
      console.log(data[key])
      if (data[key] === '') {
        setErrorkey(key);
        seterror(`${key} should not be Empty`);
        return;
      }
    }

    if (sign.length === 0) {
      setErrorkey("sign");
      seterror(`please select sign on data filed`);
      return
    }
    if (checkPassword(data.password)) {
      setErrorkey("password")
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
          placeholder={"Enter Your name"}
          data={data.username}
          onChange={handleInput}
          error={errorKey === "username" ? error : null}

        />


        <Input
          text="Password"
          type="password"
          name="password"
          placeholder={"Password"}
          data={data.password}
          onChange={handleInput}
          error={errorKey === "password" ? error : null}
        />


        <Input
          text="City"
          name="city"
          data={data.city}
          placeholder={"surat"}
          onChange={handleInput}
          error={errorKey === "city" ? error : null}
        />


        <SelectComponent
          text="WebServer"
          name="webservers"
          data={data.webserver}
          options={OPTIONS}
          onChange={handleInput}
          error={errorKey === "webserver" ? error : null}

        />

        <RadioComponent
          text="Please Specify your role"
          radios={RADIO_OPTIONS}
          name="role"
          type="radio"
          data={data.role}
          onChange={handleInput}
          error={errorKey === "role" ? error : null}

        />

        <CheckboxComponent
          text="Single Sign-on to the following"
          type="checkbox"
          checkboxes={CHECKBOX_OPTIONS}
          onChange={handleCheckbox}
          sign={sign}
          error={errorKey === "sign" ? error : null}
        />


        <div className='btn-group'>
          <button className={styles.btn} type='submit' >Login</button>
          <button className={styles.btn} onClick={(e) => handleReset(e)}>Reset</button>
        </div>

      </form >
    </main >
  )
}

export default App