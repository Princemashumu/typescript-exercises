// Basic calculator
var BasicCalculator = /** @class */ (function () {
    function BasicCalculator() {
        //Validation
        var _this = this;
        this.isValidNumber = function (input) {
            return typeof input === 'number' && !isNaN(input);
        };
        //methods
        //Addition method
        this.Add = function (val1, val2) {
            if (_this.isValidNumber(val1) && _this.isValidNumber(val2)) {
                return val1 + val2;
            }
            return 'Invalid input';
        };
        this.Minus = function (val1, val2) {
            if (_this.isValidNumber(val1) && _this.isValidNumber(val2)) {
                return val1 - val2;
            }
            return 'Invalid input';
        };
        this.Multiply = function (val1, val2) {
            if (_this.isValidNumber(val1) && _this.isValidNumber(val2)) {
                return val1 * val2;
            }
            return 'Invalid input';
        };
        this.Divide = function (val1, val2) {
            if (_this.isValidNumber(val1) && _this.isValidNumber(val2)) {
                {
                    if (val2 !== 0) {
                        return val1 / val2;
                    }
                    else {
                        return 'Division by zero(0) not allowed';
                    }
                }
                return 'Invalid input';
            }
        };
    }
    return BasicCalculator;
}());
var basiccalculator = new BasicCalculator();
console.log(basiccalculator.Add(23, 56));
