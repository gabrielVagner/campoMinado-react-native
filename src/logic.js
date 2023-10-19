const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_, i)=>{
        return Array(columns).fill(0).map((_, y)=>{
            return {
                row: i,
                column: y,
                opened: false,
                mined: false,
                exploded: false,
                flagged: false,
                nearMines: 0,
            }
        })
    })
}

const putMines = (board, qntMines)=>{
    const rows = board.length
    const columns = board[0].length
    let minesPlanted = 0
    while(minesPlanted < qntMines){
        const rowP = parseInt(Math.random() * rows, 10)
        const columP = parseInt(Math.random() * columns, 10)
        if(!board[rowP][columP].mined){
            board[rowP][columP].mined = true
            minesPlanted++
        }

    }
}

const createMinedBoard = (rows, columns, qntMines) => {
    const board = createBoard(rows, columns)
    putMines(board, qntMines)
    return board
}

export {createMinedBoard}