// App.js
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://dummyjson.com/users`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.users);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
        <table>

        <thead>
           <tr>
            <th colspan="9"><h1 className="heading">Dummy data</h1></th>
            </tr> 
        </thead>
      <tbody>
        <tr>
            <th>Sno</th>
        <th>Profile</th>
          <th>First Name</th>
          <th>Last Name</th>
          
          <th>E-mail</th>
          <th>Username</th>
          <th>Domain</th>
          <th>IP</th>
          <th>University</th>
        </tr>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>
              <img src={item.image} alt="" height={100} />
            </td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            
            <td>{item.email}</td>
            <td>{item.username}</td>
            <td>{item.domain}</td>
            <td>{item.ip}</td>
            <td>{item.university}</td>

          </tr>
        ))}
      </tbody>
           

        </table>
        
    </div>
  );
}

export default App;