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

const cloneBoard = (board)=>{
    return board.map(rows=>{
        return rows.map(columns=>{
            return {...columns}
        })
    })
}

const getNeighbors = (board, row, column)=>{
    const rows = [row-1, row, row+1]
    const columns = [column-1, column, column+1]
    let neighbors = []
    rows.forEach(r => {
        columns.forEach(c => {
            const validRow = r < board.length && r >= 0 ? true:false
            const validColumn = c < board[0].length && c >= 0 ? true:false
            const validPosition = row !== r || column !== c ? true:false
            validRow && validColumn && validPosition ? neighbors.push(board[r][c]) : false
        });
    });
    return neighbors
}

const safeNeighborhood = (board, r, c)=>{
    const safe = (result, neighbors) => result && !neighbors.mined
    return getNeighbors(board, r, c).reduce(safe, true)
}

const toOpen = (board, r, c)=>{
    const field = board[r][c]
    if(!field.opened){
        field.opened = true
        if(field.mined){
            field.exploded = true
        }else if(safeNeighborhood(board, r, c)){
            getNeighbors(board, r,c).forEach(i=>toOpen(board, i.row, i.column))
        }else{
            const neighbors = getNeighbors(board, r,c)
            field.nearMines = neighbors.filter(n=>n.mined).length
        }
    }
}
const toFlag = (board, r, c)=>{
    const field = board[r][c]
    if(!field.flagged){
        field.flagged = true
    }else{
        field.flagged = false
    }

}


const fields = (board)=> [].concat(...board)

const mineExploded = (board)=> fields(board).filter(i=>i.exploded).length >0 ? true : false
const showMines = (board)=> fields(board).filter(f=>f.mined).forEach(i=>i.opened = true)
const penddingFields = (board) => fields(board).filter(f=>( (!f.flagged && f.mined) || (!f.mined && !f.opened) )).length > 0



export {createMinedBoard, cloneBoard, toOpen, toFlag, mineExploded, showMines, penddingFields}