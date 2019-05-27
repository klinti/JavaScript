
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

