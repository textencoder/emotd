import { useState, useEffect } from "react"
import styles from "./Body.module.css"
import Loader from "../Loader/Loader"
import Game from "../Game/Game"

const Body = () => {
    const [number, setNumber] = useState(0)
    const headlines = ["Unlock Leaderboards", "Unlock All Levels", "Upgrade to emotd•pro"]

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setNumber(prevNumber => {
    //             return prevNumber == 2 
    //             ? 0
    //             : prevNumber + 1 
    //         })
    //     }, 4000)

    //     return () => {clearInterval(intervalId)}
    // }, [])
    //triggers too many rerenders

    return (
        <main className={styles.main}>
            <p className="elza-medium">{headlines[number]}</p>
            {/* <div className="opal player-message"></div> */}
            <Loader className={styles.loader}/>
            <Game className={`opal ${styles.gameMessage}`}></Game>
        </main>
    )
}

export default Body;