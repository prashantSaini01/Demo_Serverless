import React, { useEffect, useState } from "react";
 
function App() {
  const [message, setMessage] = useState("");
 
  useEffect(() => {
    fetch("http://localhost:3000/dev/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
 
  return (
<div>
<h1>Serverless React App</h1>
<p>{message}</p>
</div>
  );
}
 
export default App;