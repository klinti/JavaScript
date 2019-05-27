
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

