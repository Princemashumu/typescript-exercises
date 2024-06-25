// Classes
var Person = /** @class */ (function () {
    function Person(name, age, SocialSecurityNumber) {
        var _this = this;
        this.GetDetails = function () {
            return "Names: " + _this.name + " Age: " + _this.age;
        };
        this.getAge = function () {
            return _this.age;
        };
        this.name = name;
        this.age = age;
        this.SocialSecurityNumber = SocialSecurityNumber;
    }
    return Person;
}());
var person = new Person("Prince Mashumu", 30, "000-2333-4455-0123");
console.log(person.GetDetails());
