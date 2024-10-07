// useStateHooks.js

import { useState } from 'react';
import '../../app.css'

function UseStateHooks() {

  const [user, setUser] = useState({
    name: "Vigesh",
    age: 22,
    gender: "Male",
    isMarried: true,
    country: "India",
  });


  function changeHandler(e) {
    const name = e.target.name;
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setUser({...user,[name]: value})
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{user.age}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{user.gender}</td>
          </tr>
          <tr>
            <td>Is Married</td>
            <td>{user.isMarried ? "Married" : "Not Married"}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{user.country}</td>
          </tr>
        </tbody>
      </table>
      <form action="">
        <input type="text" name='name' placeholder='FullName' value={user.name} onChange={changeHandler}/>
        <input type="number" name='age' placeholder='Age' value={user.age} onChange={changeHandler}/>
        <div className='gender'>
          <label htmlFor="male">
            <input type="radio" name='gender' id='male' checked={user.gender == "Male"} value="Male" onChange={changeHandler}/>
            Male
          </label>
          <label htmlFor="female">
            <input type="radio" name='gender' id='female' checked={user.gender == "Female"} value="Female" onChange={changeHandler}/>
            Female
          </label>
        </div>
        <label htmlFor="isMarried">
          <input type="checkbox" id='isMarried' name='isMarried' checked={user.isMarried} onChange={changeHandler}/>
          Is Married
        </label>
        <div className='select_div'>
          <label htmlFor="country">Select Country:</label>
          <select name="country" id="country" value={user.country} onChange={changeHandler}>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default UseStateHooks;
