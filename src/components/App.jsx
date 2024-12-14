// App.jsx

import React from "react";

var isLoggedIn = false;



function App() {
return (
    <div className="container">
      {renderConditionally()}
    </div>
  );
}

export default App;
 