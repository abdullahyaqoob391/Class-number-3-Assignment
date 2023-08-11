
//Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
{

    var temperatureInCelcius:number = 44;
    var convertingToFarhenheit:number = temperatureInCelcius * 9 / 5 + 32;
    console.log (convertingToFarhenheit);

}

//Write a program that calculates the percentage.
{

    var givenNumber:number = 67;
    var percentageAmount:number = 20;
    var calculatingPercentage = percentageAmount / 100 * givenNumber;
    console.log(calculatingPercentage);

}

//Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
{
    var givenNumberDays:number = 134;
    var daysinWeek:number = 7;
    var calculatingOutDays:number = givenNumberDays / daysinWeek ;
    var calculatingWeek = Math.floor(calculatingOutDays);
    var remainingDays = givenNumberDays % daysinWeek;
    console.log(`There are, ${calculatingWeek} Week/Weeks and ${remainingDays} days in your given number !`);
}

//Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
{
    var price:number = 120;
    if(price < 100){
        var calculating5Discount:number = price * 5/100;
        var discount5 = price - calculating5Discount;
        //var discount5 = Math.floor(applying5Discount);
        console.log(`Thanku for Shopping heres we applied 5% discount for you and your total payment is ${discount5}$`);
    }
    else{
        var calculating10Discount:number = price * 10/100;
        var discount10 = price - calculating10Discount;
        //var discount10 = Math.floor(calcualting10Discount);
        console.log(`Thanku for Shopping more than 100$ ! heres we applied 10% discount for you and your total payment is ${discount10}$`);
    }

}

//Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
{
    var age:number = 66;
    if(age > 0 && age < 12){
        console.log("Child");
    }
    else if(age >= 13 && age < 19){
        console.log("Teenager");
    }
    else{
        console.log("Adult");
    }

}

//Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
{
    var temperature:number = 40;
    if(temperature <= 15){
        console.log("Its so Cold wear warm clothes.");
    }
    else{
        console.log("its so warm .. wear thin clothes.");
    }
}

// Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
{
    var givenNumber1 = 22;
    if(givenNumber1 % 5 == 0 && givenNumber1 % 3 == 0){
        console.log("number is divisible by both 5 and 3");
    }
    else if(givenNumber1 % 5 == 0){
        console.log("number is divisible by 5");
    }
    else if(givenNumber1 % 3 == 0){
        console.log("number is divisible by 3");
    }
    else{
        console.log("number is not divisible by any of the 2 numbers");
    }
}

//- Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
{
    var daynNumber:number = 32;
    if(daynNumber == 1){
        console.log("Sunday");
    }
    else if(daynNumber == 2){
        console.log("Monday");
    }
    else if(daynNumber == 3){
        console.log("Tuesday");
    }
    else if(daynNumber == 4){
        console.log("Wednesday");
    }
    else if(daynNumber == 5){
        console.log("Thursday");
    }
    else if(daynNumber == 6){
        console.log("Friday");
    }
    else if(daynNumber == 7){
        console.log("Saturday")
    }
    else{
        console.log("Sorry not a valid number");
    }

}

//Write a program that checks if the given year is leap year or not.
{
    var year:number = 2026;
    if(year % 4 == 0){
        console.log("it is a leap year");
    }
    else{
        console.log("it is not a leap year");
    }
}

// - Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add
// 15% of tax so on up to if greater than 500 then add 25% of tax Where the tax amount will be calculated by the amount of bill.
{
    var unitsConsumed:number = 104;
    var unitCost:number = 10;
    var totalAmountBill = unitCost * unitsConsumed;
    var applyTax;
    if(unitsConsumed > 0 && unitsConsumed <= 100){
        applyTax = (10/100);
        var calculation:number = totalAmountBill + applyTax * totalAmountBill;
        console.log(calculation);
    }
    else if(unitsConsumed > 100 && unitsConsumed <= 500){
        applyTax = (15/100)
        var calculation2 = totalAmountBill + applyTax * totalAmountBill;
        console.log(calculation2);
    }
    else{
        applyTax = (25/100);
        var calculation3 = totalAmountBill + applyTax * totalAmountBill;
        console.log(calculation3);
    }


}





