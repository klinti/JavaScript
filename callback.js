function callbackTest(bool,first,second)
{

if(bool == true){
    first(bool);
}

else if (bool == false){
    second(bool);
}
else
console.log("enter valid value");

}



callbackTest(false, function first(bool){
    console.log(bool);
}, function second (bool){console.log(bool)})
