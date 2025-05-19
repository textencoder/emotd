import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
function App() {
  const [loading, setLoading] = useState(null)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 4000)
  // }, [])

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
        loading === false
        &&
        <form onSubmit={handleSubmit} className="input-area">
        <img src="./emotd_com_logo.svg" alt="" />
        <input name="password" id="password" type="password" placeholder="enter password..." />
        <button type="submit" className="unbounded-semibold">submit</button>
        </form>
      }

      <Header />

      <Body />

      <Footer />

      {
        loading === true 
        &&
        <Loader />
        }
    </>
  );
}

export default App;


