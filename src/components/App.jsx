// App.jsx

import React from "react";

var isLoggedIn = false;

function App() {
  if (!isLoggedIn)
{  return (
    <div className="container">
      <h1>Hello</h1>
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
    }
    return <h1>Hello!</h1>
}

export default App;
