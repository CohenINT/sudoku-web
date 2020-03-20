var Cell = /** @class */ (function () {
    function Cell() {
        this.OptionTried = [];
        this.Value = this.GetRandomNumber();
        this.Group = "";
        this.OptionTried[0] = true;
        this.OptionTried[1] = false;
        this.OptionTried[2] = false;
        this.OptionTried[3] = false;
        this.OptionTried[4] = false;
        this.OptionTried[5] = false;
        this.OptionTried[6] = false;
        this.OptionTried[7] = false;
        this.OptionTried[8] = false;
        this.OptionTried[9] = false;
    }
    Cell.prototype.GetRandomNumber = function () {
        return Math.floor(Math.random() * 9) + 1;
    };
    return Cell;
}());
