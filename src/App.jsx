import React, { useState } from "react";
import Card from "./components/Card";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";

export const App = () => {
  const [users, setUsers] = useState([
    { id: 1, username: "Mohamed", age: 30 },
    { id: 2, username: "Ali", age: 40 },
    { id: 3, username: "Omar", age: 25 },
  ]);

  const usersList = users.map((user) => (
    <Card id={user.id} name={user.username} age={user.age}></Card>
  ));
  const handleSetState = () => {
    setUsers([...users, { id: 4, username: "asmaa", age: 40 }]);
    console.log(users);
  };

  return (
    <div>
      <button onClick={() => handleSetState()}>Add New User</button>
      {usersList}
    </div>
  );
};
export default App;
