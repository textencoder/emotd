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
        <div className="board">
            {boardTiles}    
        </div>
    )
}