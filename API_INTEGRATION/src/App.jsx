import { useEffect, useState } from "react";
import "./app.css";

function App() {
  const [users, setUsers] = useState([]); // State to store user data
  const [loading, setLoading] = useState(false);

  // async function apiCall() {
  //   setLoading(true);
  //   const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const data = await response.json();
  //   setTimeout (() => {
  //     setUsers(data); // Store the API data in state
  //     setLoading(false) // Stop loading after 2 seconds
  //   }, 2000) // 2000 ms = 2 seconds
  //   console.log(data);
  // }

  // async function apiCall() {
  //   setLoading(true);  // Set loading to true before starting API call

  //   try {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const data = await response.json();

  //     // Simulate a 2-second loading delay
  //     setTimeout(() => {
  //       setUsers(data);  // Store the API data in state
  //       setLoading(false);  // Stop loading after 2 seconds
  //     }, 5000);  // 2000 ms = 2 seconds
  //   } catch (error) {
  //     console.error("Failed to fetch data:", error);
  //     setLoading(false);  // Stop loading on error
  //   }
  // }

  useEffect(() => {
    async function apiCall() {
      setLoading(true);

      try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        setTimeout(() => {
          setUsers(data);
          setLoading(false);
        }, 2000)
      }catch (error){
        console.log("Failed to fetch data:", error);
        setLoading(false);
      }
    }

    apiCall();
  }, [])

  return (
    <div className="container">
      <h1 className="api_heading">Api Integration</h1>
      {/* <button className="api_btn" onClick={apiCall}>CLICK</button> */}
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="api_container">
          {users.map((user) => (
            <div key={user.id} className="api_data_container">
              <h3>{user.name}</h3>
              <br />
              <p>
                <strong>Username:</strong> {user.username}
              </p>
              <br />
              <p>
                <strong>Email</strong> {user.email}
              </p>
              <br />
              <ul>
                <li>Address</li>
                <br />
                <li>
                  <strong>street:</strong>
                  {user.address.street}
                </li>
                <br />
                <li>
                  <strong>suite:</strong>
                  {user.address.suite}
                </li>
                <br />
                <li>
                  <strong>city:</strong>
                  {user.address.city}
                </li>
                <br />
                <li>
                  <strong>zipcode:</strong>
                  {user.address.zipcode}
                </li>
                <br />
                <li>geo</li>
                <br />
                <li>
                  <strong>lat:</strong>
                  {user.address.geo.lat}
                </li>
                <br />
                <li>
                  <strong>lng:</strong>
                  {user.address.geo.lng}
                </li>
                <br />
              </ul>
              <p>
                <strong>phone:</strong> {user.phone}
              </p>
              <br />
              <p>
                <strong>website:</strong> {user.website}
              </p>
              <br />
              <ul>
                <li>Company</li>
                <br />
                <li>
                  <strong>name:</strong>
                  {user.company.name}
                </li>
                <br />
                <li>
                  <strong>catchPhrase:</strong>
                  {user.company.catchPhrase}
                </li>
                <br />
                <li>
                  <strong>bs:</strong>
                  {user.company.bs}
                </li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
