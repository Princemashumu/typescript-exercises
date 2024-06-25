// Classes

class Person {

    name: string;
    age: number;
    private SocialSecurityNumber: string;

 
    constructor(name:string,age:number,SocialSecurityNumber: string){

        this.name =name;
        this.age=age;
        this.SocialSecurityNumber=SocialSecurityNumber;


    }

    GetDetails=(): string => {
        return "Names: "+this.name +" Age: "+this.age;
    }

    getAge=(): number =>
    {
        return this.age;
    }
}
const person = new Person("Prince Mashumu", 30,"000-2333-4455-0123");
console.log(person.GetDetails());

