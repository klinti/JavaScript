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
