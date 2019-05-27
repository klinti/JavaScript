var student  = {
    "name" : "john",
    "faculty" : "engeneering",
    "department" : "computer science",
    "class" : "E006",
    "rollno": 2345

}

for (var std in student){

    console.log(student[std])
}



delete student.faculty;

console.log();


//outputs the values of each propertie
for (var std in student){

    console.log(student[std])
}

//outputs the number of properties
var stdLength = Object.keys(student);
console.log(stdLength.length);



//fuction checks if a certain value does exist

function hasProperty(std){
if(student.hasOwnProperty(std)){
return true;
}
else return false;



}

console.log(hasProperty("class"));
