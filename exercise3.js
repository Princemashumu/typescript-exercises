// Functions
var FindSum = function (num1, num2, action) {
    return num1 + num2;
};
console.log(FindSum(10, 23));
var GetFixedNum = function () {
    return 23;
};
console.log(GetFixedNum());
var ConvertString = function (StringValue, action) {
    if (action == true) {
        return StringValue.toUpperCase();
    }
    else {
        return StringValue.toLowerCase();
    }
};
console.log(ConvertString("mashumu", false));
