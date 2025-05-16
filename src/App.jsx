import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const password = formData.get("password")
    console.log(password)
    setLoading(true)
  }

  return (
    <>
      {
        loading === true
        &&
        <svg
        id="monogram-logo"
        data-name="monogram-logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 279.4599609 305.5300293"
      >
        <polygon points="279.4599609 242.3900146 279.4599609 305.5300293 0 305.5300293 23.6199951 152.7600098 0 0 277.4199219 0 277.4199219 63.1400146 82.9000244 63.1400146 92.7600098 124.25 266.4199219 124.25 266.4199219 181.2800293 92.7600098 181.2800293 82.9000244 242.3900146 279.4599609 242.3900146" />
      </svg>
      }

      {
        loading === false
        &&
        <form onSubmit={handleSubmit} className="input-area">
        <img src="./emotd_com_logo.svg" alt="" />
        <input name="password" id="password" type="password" placeholder="enter password..." />
        <button type="submit" className="unbounded-semibold">submit</button>
        </form>
      }
    </>
  );
}

export default App;
