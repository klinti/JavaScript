
var fruits = ["apple", "orange","banana","peach","ananas","strawberry"];

//finds a specific fruit
function SearchItem(elem)
{

    var item = fruits.find(function(element)
    {
    if (elem==element)
    return element; 
    })
return item;
}
console.log(SearchItem("ananas"));

//log element of the array;
fruits.forEach(element=> console.log(element))

//log length of array
console.log(fruits.length);

//log elements lengths of >=6

    (fruits.filter(elem=>elem.length>=6)).forEach(elem=>console.log(elem));
    


 //returns array of elements greater than 6
function search (fruitsArray){
    var fruitGreaterThanSix = [];

    fruitGreaterThanSix = fruitsArray.filter(element=>element.length>=6);
    return fruitGreaterThanSix;
}


console.log(search(fruits));

