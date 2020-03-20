var Board = /** @class */ (function () {
    function Board() {
        this.Grid = [];
        this.InitilizeGrid();
    }
    Board.prototype.InitilizeGrid = function () {
        for (var i = 0; i < 81; i++) {
            this.Grid[i] = new Cell();
        }
    };
    Board.prototype.RenderTable = function () {
        var resultHTML = "";
        resultHTML += "<table>";
        for (var i = 0; i < 81; i += 9) {
            resultHTML += "<tr>";
            resultHTML += "<td id='cell_" + i + 0 + "'>" + this.Grid[i + 0].Value + "</td>";
            resultHTML += "<td id='cell_" + i + 1 + "'>" + this.Grid[i + 1].Value + "</td>";
            resultHTML += "<td id='cell_" + i + 2 + "'>" + this.Grid[i + 2].Value + "</td>";
            resultHTML += "<td id='cell_" + i + 3 + "'>" + this.Grid[i + 3].Value + "</td>";
            resultHTML += "<td id='cell_" + i + 4 + "'>" + this.Grid[i + 4].Value + "</td>";
            resultHTML += "<td id='cell_" + i + 5 + "'>" + this.Grid[i + 5].Value + "</td>";
            resultHTML += "<td id='cell_" + i + 6 + "'>" + this.Grid[i + 6].Value + "</td>";
            resultHTML += "<td id='cell_" + i + 7 + "'>" + this.Grid[i + 7].Value + "</td>";
            resultHTML += "<td id='cell_" + i + 8 + "'>" + this.Grid[i + 8].Value + "</td>";
            resultHTML + "</tr>";
        }
        resultHTML += "</table>";
        return resultHTML;
    };
    return Board;
}());
