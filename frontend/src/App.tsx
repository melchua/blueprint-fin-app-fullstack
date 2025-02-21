import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <>
      <div>
        here we go again
        <h1 className="text-amber-500">{message}</h1>
      </div>
    </>
  );
}

export default App;
