name_of_student_array = [];

function submit(){

var name1 = document.getElementById("name_of_student_1").value;
var name2 = document.getElementById("name_of_student_2").value;
var name3 = document.getElementById("name_of_student_3").value;
 var name4 = document.getElementById("name_of_student_4").value;
var name5 = document.getElementById("name_of_student_5").value;


name_of_student_array.push(name1);
 name_of_student_array.push(name2);
 name_of_student_array.push(name3);
 name_of_student_array.push(name4);
 name_of_student_array.push(name5);

 console.log(name_of_student_array);

 document.getElementById("display_names").innerHTML = name_of_student_array;
 document.getElementById("button_submit").style.display = "none";
 document.getElementById("button_sort").style.display = "inline-block";
}

function sorting(){
    name_of_student_array.sort();
    console.log(name_of_student_array);
    document.getElementById("display_names").innerHTML = name_of_student_array;
}