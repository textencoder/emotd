import { useState, useEffect } from "react"
import styles from "./Body.module.css"

const Body = () => {
    const [number, setNumber] = useState(0)
    const headlines = ["Unlock Leaderboards", "Unlock All Levels", "Upgrade to emotd•pro"]

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNumber(prevNumber => {
                return prevNumber == 2 
                ? 0
                : prevNumber + 1 
            })
        }, 4000)

        return () => {clearInterval(intervalId)}
    }, [])

    return (
        <main className={styles.main}>
            <p className="elza-medium">{headlines[number]}</p>
            <div></div>
            <div></div>
        </main>
    )
}

export default Body;