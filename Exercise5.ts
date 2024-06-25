// Basic calculator

class BasicCalculator{
//Validation

private isValidNumber=(input:any):boolean=>
{
    return typeof input==='number' && !isNaN(input);
} 

//methods

//Addition method
    Add=(val1: any, val2:any): number | string=>
{
    if(this.isValidNumber(val1) && this.isValidNumber(val2))
{
    return val1 + val2;
}
 
    return 'Invalid input';

    }


 Minus=(val1: any, val2:any): number | string=>
{
    if(this.isValidNumber(val1) && this.isValidNumber(val2))
{
    return val1 - val2;
}
 
    return 'Invalid input';
    
    }


  Multiply=(val1: any, val2:any): number | string=>
{
    if(this.isValidNumber(val1) && this.isValidNumber(val2))
{
    return val1 * val2;
}
 
    return 'Invalid input';
 
    
    }


 Divide=(val1: any, val2:any): number | string=>
{
    if(this.isValidNumber(val1) && this.isValidNumber(val2))
{
    {
        if(val2!==0)
        {
            return val1/val2;

        }
        else
        {
            return 'Division by zero(0) not allowed';
        }
    }
    return 'Invalid input';
}

}

}

const basiccalculator = new BasicCalculator();

console.log(basiccalculator.Add(23,56));