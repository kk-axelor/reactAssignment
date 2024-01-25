import React, { useState } from 'react'
import "./app.css"

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

    console.log(data)
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
    console.log("hello")
    e.preventDefault()
    setData(intialState);
    setSign([])
    seterror("")
  }

  return (
    <main>
      <h2>Create Form</h2>
      <form onSubmit={handleSubmit} >

        <div className='items'>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name='username'
            value={data.username}
            onChange={(e) => handleInput(e)}
          />
        </div>


        <div className='items'>
          <label htmlFor="">Password</label>
          <input type="text"
            name='password'
            value={data.password}
            onChange={(e) => handleInput(e)}

          />
        </div>


        <div className='items'>
          <label htmlFor="">city of Employment</label>
          <input type="text"
            name='city'
            value={data.city}
            onChange={(e) => handleInput(e)}
          />
        </div>

        <div className='items'>
          <label htmlFor="">Webserver</label>
          <select name='webserver' value={data.webserver} onChange={(e) => handleInput(e)}  >
            <option value="Tomcat">Tomcat</option>
            <option value="WebLogic">WebLogic</option>
            <option value="Glass Fish" >Glass Fish</option>
          </select>
        </div>



        <div className='items'>
          <label htmlFor="">Please specify your role</label>
          <div className='list-item'>
            <div>
              <input type="radio" name='role' value="Admin" checked={data.role === "Admin"} onChange={(e) => handleInput(e)} />
              <span>Admin</span>
            </div>
            <div>
              <input type="radio" name='role' value="Engineer" checked={data.role === "Engineer"} onChange={(e) => handleInput(e)} />
              <span>Engineer</span>
            </div>

            <div>
              <input type="radio" name='role' value="Manager" checked={data.role === "Manager"} onChange={(e) => handleInput(e)} />
              <span>Manager</span>
            </div>
            <div>
              <input type="radio" name='role' value="Guest" checked={data.role === "Guest"} onChange={(e) => handleInput(e)} />
              <span>Guest</span>
            </div>
          </div>
        </div>

        <div className='items'>
          <label htmlFor=""> Single Sign-on to the following</label>
          <div className='list-item'>
            <div>
              <input type="checkbox" value="Mail" name='sign' checked={sign.includes("Mail")} onChange={(e) => handleCheckbox(e)} />
              <span>Mail</span>
            </div>
            <div>
              <input type="checkbox" value="Payroll" name='sign' checked={sign.includes("Payroll")} onChange={(e) => handleCheckbox(e)} />
              <span>Payroll</span>
            </div>
            <div>
              <input type="checkbox" value="self-service" name='sign' checked={sign.includes("self-service")} onChange={(e) => handleCheckbox(e)} />
              <span>Self-service</span>
            </div>
          </div>
        </div>
        <p className='error'>{error}</p>
        <div className='btn-group'>

          <button className='btn' type='submit' >Login</button>
          <button className='btn' onClick={(e) => handleReset(e)}>Reset</button>
        </div>

      </form>
    </main >
  )
}

export default App