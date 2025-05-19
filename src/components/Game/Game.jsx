import styles from "./Game.module.css"

const Game = () => {
    let board = Array(10).fill(null);
    console.log(board)

    const boardTiles = board.map(el => {
        return (
            <div className="tile">

            </div>
        )
    })

    return (
        <div className={styles.gameMessage}>
            <div></div>
           <div> {boardTiles}    </div>
           <div></div>
        </div>
    )
}

export default Game;