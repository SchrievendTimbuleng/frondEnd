// Rest Parameter
const penjumlahanArray = (a, b, c, d) => {
    let total = 0;
    let array = [a, b, c, d];
    array.forEach(item => {
        total += item;
    });
    console.log(total);
};

penjumlahanArray(1, 2, 3, 4); 
