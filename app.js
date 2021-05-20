
// function to check dataType
const checkType = function(input){
    let inp = typeof input
    let num;
    if(inp === "number"){   // checks if NUMBER
        return input
    }else if(inp === "string"){ // checks if STRING
        
        if(Number.isNaN(Number(input)) === false) {
            //  num = Number(input);
            return Number(input);
        } else{
            console.log(`invalid parameter: ${JSON.stringify(input)}`);
        } // End of string check

    }else if(inp === "object" && Array.isArray(input) === true){     // checks if input is ARRAY
        console.log(`${JSON.stringify(input)} is not a valid number but a/an Array`);
    }else if(inp === "object" || inp === "boolean"){  // checks if OBJECT
        console.log(`${JSON.stringify(input)} is not a valid number but a/an ${inp}`);
    }else{
        console.log(`${JSON.stringify(input)} is not a valid number but a/an ${inp}`);
    }
    // return num;
}

function convertFahrToCelcius(fahr){
    let c
   c = checkType(fahr)
   if(typeof c === "number"){
    c = ((c - 32) * 5 / 9).toFixed(4);
    c = Number(c)
   console.log(c);
   }
   return c
}

//convertFahrToCelcius(undefined);
//  convertFahrToCelcius(32);
//  convertFahrToCelcius(null);
//  convertFahrToCelcius(true);
//  convertFahrToCelcius("free man");
//  convertFahrToCelcius("10");
// convertFahrToCelcius([1,2,3]);
//  convertFahrToCelcius({temp: 0})

function checkYuGiOh(inp){
        let num = checkType(inp);
    let mul = []
    for(let i = 1; i <= num; i++){
        if( i % 2 == 0 && i %  3 == 0 && i%5 == 0 ){
            mul.push("Yu-gi-oh")
        }else if(i % 2 == 0 && i %  3 == 0){
            mul.push("Yu-gi-oh");
        }else if(i % 2 == 0 && i %  5 == 0){
            mul.push("Yu-oh");
        }else if(i % 3 == 0 && i %  5 == 0){
            mul.push("gi-oh");
        }else if(i % 2 == 0){
            mul.push("yu");
        }else if(i % 3 == 0){
            mul.push("gi");
        }else if(i % 5 == 0){
            mul.push("oh");
        }else{
            mul.push(i)
        }
    }
    return mul
}