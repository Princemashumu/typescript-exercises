// Functions

let FindSum =(num1:number,num2:number,action?:number) :number=>{

    return num1 + num2;
}

console.log(FindSum(10,23));


let GetFixedNum =() :number =>
{
    return 23;
}
console.log(GetFixedNum());


let ConvertString=(StringValue:string, action?:boolean) :string=>
{


    if(action==true)
    {
        return StringValue.toUpperCase();
    }
    else
    {
        return StringValue.toLowerCase();
    }
    
}
console.log(ConvertString("mashumu",false));