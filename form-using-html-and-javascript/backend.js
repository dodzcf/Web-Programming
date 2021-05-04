const person = {};

const user_data = Object.create(person);
email = document.getElementById("hide1;");

name_check = false;
gender_check = false;
semester_check = false;
password_check = false;
email_check = false;
course_check = false;

document.getElementById("btn2").style.display = 'none';
document.getElementById("btn3").style.display = 'none';
document.getElementById("btn4").style.display = 'none';
document.getElementById("btn5").style.display = 'none';
// document.getElementById("btn6").style.display = 'none';

document.getElementById("hide1").style.display = 'none';
document.getElementById("hide2").style.display = 'none';
document.getElementById("hide3").style.display = 'none';
document.getElementById("hide4").style.display = 'none';
document.getElementById("hide5").style.display = 'none';


function namee() {


  user_name = document.getElementById('exampleInputName1').value;
  if (user_name == "") {
    alert("Name cannot be left blank");
    return;
  }
  if (user_name.length > 25) {
    str = "Please Enter Less than 25 Characters";
    document.getElementById("errorn").innerHTML = str;
    return;
  }
  else {
    user_data.name = user_name;
    name_check = true;
    document.getElementById("btn1").style.display = 'none';
    show_email();

  }
  return;

}
function show_email() {
  x = 0;
  document.getElementById("hide1").style.display = 'block';
  document.getElementById("btn2").style.display = 'block';
  var4 = document.getElementById('exampleInputEmail1').value;

  email_check = false;

  j = "nu.edu.pk";

  for (i = 0; i < var4.length; i++) {
    if (var4[i] == '@') {
      break;
    }

    if (i == var4.length - 1) {
      stre = "Please Enter correct email";
      document.getElementById("errore").innerHTML = stre;

      return;
    }
  }

  /*   for email of NU */

  if (var4 == "") {
    alert("Please Enter Email")
    return;
  }
  else {
    for (i = 0; i < var4.length; i++) {

      if (var4[i] == '@') {

        for (k = 0; k < j.length; k++ , i++) {
          if (var4[i + 1] == j[k]) {
            x = x + 1;
            continue;
          }
          else {
            console.log("Please Enter correct Email")
            stre = "Please Enter nu.edu.pk Email";
            document.getElementById("errore").innerHTML = stre;

            return;
          }
        }
        email_check = true;
        break;
      }
    }
    if (x == 9)
    {
      user_data.email = var4;
    }
  }
  document.getElementById("btn2").style.display = 'none';

  show_password();

}

// check Email
function show_password() {
  document.getElementById("btn3").style.display = 'block';
  document.getElementById("hide2").style.display = 'block';

  /* check Password */
  var3 = document.getElementById('exampleInputPassword1').value;
  score = 0
  password_check = false;




  if (var3 == "") {
    alert("Please Enter Password")
    return;
  }


  if (var3.length < 12) {
    strp = "Please Enter More than 12 Characters";
    document.getElementById("errorp").innerHTML = strp;
    return;
  }


  for (i = 0; i < var3.length; i++) {

    if (var3[i] == '1' || var3[i] == '2' || var3[i] == '3' || var3[i] == '4' || var3[i] == '5' || var3[i] == '6' || var3[i] == '7' || var3[i] == '8' || var3[i] == '9' || var3[i] == '0') {
      score = score + 1;
      break;
    }
  }
  for (i = 0; i < var3.length; i++) {

    if (var3[i] == 'a' || var3[i] == 'e' || var3[i] == 'r' || var3[i] == 't' || var3[i] == 't' || var3[i] == 'y' || var3[i] == 'u' || var3[i] == 'i' || var3[i] == 'o' || var3[i] == 'p' || var3[i] == 'q' || var3[i] == 'l' || var3[i] == 'k' || var3[i] == 'j' || var3[i] == 'h' || var3[i] == 'g' || var3[i] == 'f' || var3[i] == 'd' || var3[i] == 's' || var3[i] == 'm' || var3[i] == 'n' || var3[i] == 'b' || var3[i] == 'v' || var3[i] == 'c' || var3[i] == 'x' || var3[i] == 'z' || var3[i] == 'w' || var3[i] == 'q') {
      score = score + 1;
      break;
    }
  }
  for (i = 0; i < var3.length; i++) {

    if (var3[i] == 'A' || var3[i] == 'D' || var3[i] == 'S' || var3[i] == 'F' || var3[i] == 'G' || var3[i] == 'H' || var3[i] == 'J' || var3[i] == 'K' || var3[i] == 'L' || var3[i] == 'M' || var3[i] == 'N' || var3[i] == 'B' || var3[i] == 'V' || var3[i] == 'C' || var3[i] == 'X' || var3[i] == 'Z' || var3[i] == 'Q' || var3[i] == 'W' || var3[i] == 'E' || var3[i] == 'R' || var3[i] == 'T' || var3[i] == 'Y' || var3[i] == 'U' || var3[i] == 'I' || var3[i] == 'O' || var3[i] == 'P') {
      score = score + 1;
      break;
    }

  }

  for (i = 0; i < var3.length; i++) {
    if (var3[i] == '!' || var3[i] == '@' || var3[i] == '#' || var3[i] == '$' || var3[i] == '%' || var3[i] == '^' || var3[i] == '&' || var3[i] == '*' || var3[i] == '-' || var3[i] == '_' || var3[i] == '=' || var3[i] == '+' || var3[i] == '/') {
      score = score + 1;
      break;
    }
  }

  if (score != 4) {
    strpp = "Please Enter An Upper case, smaller case, a number and a special character";
    document.getElementById("errorp").innerHTML = strpp;
    return;
  }
  else {
    user_data.password = var3;
    password_check = true;
    show_gender();
  }
}


function show_gender() {
  // for Gender
  document.getElementById("btn3").style.display = 'none';
  document.getElementById("hide3").style.display = 'block';
  document.getElementById("btn4").style.display = 'block';
  gender_check = false
  if (document.getElementById("mpm").checked == true || document.getElementById("fpm").checked == true) {
    // console.log("yes");
  }
  else {
    alert("Please Choose your Gender");
    // return;
  }

  if (document.getElementById('fpm').checked == true) {
    gender = document.getElementById('fpm').value;
    document.getElementById("genderr").innerHTML = gender;
    gender_check = true;
    user_data.gender = gender;
    semesterr();
  }
  else if (document.getElementById('mpm').checked == true) {
    gender_check = true;
    gender = document.getElementById('mpm').value;
    document.getElementById("genderr").innerHTML = gender;
    user_data.gender = gender;
    semesterr();
  }
}
function g_check() {
  if (gender_check == true) {
    semesterr();
  }
  else {
    show_gender();
  }
}
/* To Check for the semester choice */
function semesterr() {
  document.getElementById("btn4").style.display = 'none';
  document.getElementById("hide4").style.display = 'block';
  document.getElementById("btn5").style.display = 'block';
  semester = document.getElementById('sele').value;


  if (semester > 0) {
    document.getElementById("semester").innerHTML = semester;
    semester_check = true;
    user_data.semester = semester;
    alert("came in semester");
    document.getElementById("btn5").style.display = 'none';
    document.getElementById("hide5").style.display = 'block';
    document.getElementById("btn6").style.display = 'block';
    // courses();
  }
  else {
    alert("Please Select Semester")
    return;
  }
}
/* For Courses */
function courses() {


var count_check=0;
var x = document.getElementsByClassName("myCheck");
  var txt = "";
  var i;
  for (i = 0; i < x.length; i++) {
    if (x[i].checked) {
    count_check=count_check+1;
      txt = txt + x[i].value + ", ";
    }
  }
  // document.getElementById("cours").innerHTML = txt;
  if(count_check<3)
  {
    alert("smaller than 3");
    str_error = "Please Select any Three";
    document.getElementById("cours").innerHTML = str_error;
    return;
  }
  else
  {
    document.getElementById("btn6").style.display = 'none';
    document.getElementById("btn7").style.display = 'block';
    user_data.courses=txt;
		alert(txt);
  }
}



function openLink() {
  // alert(user_data.name,);
  // alert(user_data.email);
  // alert(user_data.password);
  // alert(user_data.gender);
  // alert(user_data.semester);
  // alert(user_data.courses);


  window.open("success.html");
  var myJSON = JSON.stringify(user_data);
  alert(myJSON);
// localStorage.setItem("user.json",JSON.stringify(myJSON));
var blob = new Blob([JSON.stringify(user_data)], {type: "text/plain;charset=utf-8"});
saveAs(blob, "user.json");

  }
