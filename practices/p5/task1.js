class ChessPiece {
    constructor(color) {
        this.color = color
    }

    moves(position) {
        console.log(`AVAILABLE MOVES FOR ${this.constructor.name}`)
    }

}

class King extends ChessPiece {}

class Rook extends ChessPiece {}

class Bishop extends ChessPiece {}

class Queen extends ChessPiece {}

class Knight extends ChessPiece {}

class Pawn extends ChessPiece {
    promoteTo(chessPiece) {
        if (chessPiece === 'King') return console.log("Pawn can't be promoted to King")
        console.log(`Pawn promoted to ${chessPiece}`)
    }
}

class ChessBoard {
    constructor() {
        this.status =
            {
                a: ['BRook','BKnight','BBishop','BKing','BQueen','BBishop','BKnight','BRook'],
                b: ['BPawn','BPawn','BPawn','BPawn','BPawn','BPawn','BPawn','BPawn'],
                c: [null,null,null,null,null,null,null,null],
                d: [null,null,null,null,null,null,null,null],
                e: [null,null,null,null,null,null,null,null],
                f: [null,null,null,null,null,null,null,null],
                g: ['WPawn','WPawn','WPawn','WPawn','WPawn','WPawn','WPawn','WPawn'],
                h: ['WRook','WKnight','WBishop','WKing','WQueen','WBishop','WKnight','WRook'],
            }
    }
}

class Game {
    constructor() {
        this.deadPieces = []
        this.currentPlayer = 'W'
        this.totalCount = 0
        this.history = []
        this.status = ''
    }
}

const game = new Game()
const pawn = new Pawn('W')
const king = new King('B')
king.moves()
pawn.promoteTo(king.constructor.name)