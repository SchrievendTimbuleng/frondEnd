(function (number){
    if (number > 0) {
        console.log(number, "Positif")
    }
    else(
        console.log(number, "Negatif")
    )
})(-12);


//call back
function output(result){
    console.log(result);
}


function isAngka(number,callback) {
    if (number> 0) {
       result = number +" Positif";
    } else{
        result = number +" Negatif";
    }
    callback(result);
};
isAngka(30, output)


