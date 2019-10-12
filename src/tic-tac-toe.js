class TicTacToe {

    constructor() {
        
        this.matrix = [Array(3), Array(3), Array(3)];
        this.mark = "x";
        this.winner = null;
        this.draw = null;
    }

    getCurrentPlayerSymbol() {

        return this.mark;
    }

    nextTurn(rowIndex, colIndex) {

        if (this.noMoreTurns() || this.getFieldValue(rowIndex, colIndex)) {

            return;
        }
        else {

            this.matrix[rowIndex][colIndex] = this.mark;
            this.mark == "x" ? this.mark = "o" : this.mark = "x";
        }
    }

    isFinished() {
        
        if (this.isDraw() || this.getWinner()) {

            return true;
        }
        else {
            
            return false;
        }
    }

    getWinner() {

        if (this.matrix[0][0] == this.matrix[0][1] && this.matrix[0][1] == this.matrix[0][2]) {

            this.winner = this.matrix[0][0];
        }
        else if (this.matrix[1][0] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[1][2]) {

            this.winner = this.matrix[1][0];
        }
        else if (this.matrix[2][0] == this.matrix[2][1] && this.matrix[2][1] == this.matrix[2][2]) {

            this.winner = this.matrix[2][0];
        }
        else if (this.matrix[0][0] == this.matrix[1][0] && this.matrix[1][0] == this.matrix[2][0]) {
            
            this.winner = this.matrix[0][0];
        }
        else if (this.matrix[0][1] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[2][1]) {
            
            this.winner = this.matrix[0][1];
        }
        else if (this.matrix[0][2] == this.matrix[1][2] && this.matrix[1][2] == this.matrix[2][2]) {
            
            this.winner = this.matrix[0][2];
        }
        else if (this.matrix[0][0] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[2][2]) {
            
            this.winner = this.matrix[0][0];
        }
        else if (this.matrix[0][2] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[2][0]) {
            
            this.winner = this.matrix[0][2];
        }

        return (this.winner) ? this.winner : null;
    }

    noMoreTurns() {

        let arr = new Array().concat(this.matrix[0], this.matrix[1], this.matrix[2]);
  
        for (let i = 0; i < arr.length; i++) {

            if (!arr[i]) return false;
        }

        return true;
    }

    isDraw() {

        if (this.noMoreTurns() && !this.getWinner()) {
            return true;
        }
        else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return (this.matrix[rowIndex][colIndex]) ? this.matrix[rowIndex][colIndex] : null;
    }
}

module.exports = TicTacToe;
