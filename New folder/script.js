let idin=document.getElementById("id");
let namein=document.getElementById("name");
let agein=document.getElementById("age");
let genderin=document.getElementById("gender");
let designationin=document.getElementById("role");
let photoin=document.getElementById("img");

// console.log()

let invalid_id=document.querySelector("#disp_id");
let invalid_name=document.querySelector("#disp_name");
let invalid_age=document.querySelector("#disp_age");
let invalid_gender=document.querySelector("#disp_gender");
let invalid_designtion=document.querySelector("#disp_role");
let invalid_photo=document.querySelector("#disp_img");


function validate() {
      // e.preventDeault();
      // Get form values
      let value_id = idin.value;
      // console.log(value_id);
      let value_name = namein.value;
      let value_age = agein.value;
      let value_gender = genderin.value;
      let value_designation = designationin.value;
      let value_photo = photoin.value;


      // Regular expressions
      // var idRegex = /^[0-9]+$/; // Alphanumeric characters only
      // var nameRegex = /^[A-Za-z\s]+$/; // Letters and spaces only
      // var ageRegex = /^\d+$/; // Digits only

      // Validation
      let a=true;
      if(value_id == "") {
        invalid_id.innerHTML = "*Please enter valid id";
        a=false;
      }else{
        invalid_id.innerHTML = "";
        a=true;
      }


      if(value_name == "") {
        invalid_name.innerHTML = "*Please enter valid name";
        a=false;
      }else{
        invalid_name.innerHTML = "";
        a=true;
      }

      if(value_age == "") {
        invalid_age.innerHTML = "*Please enter valid age";
        a=false;
      }else{
        invalid_age.innerHTML = "";
        a=true;
      }

      if(value_gender == "--select--"){
        invalid_gender.innerHTML = "*Please select valid gender";
        a=false;
      }else{
        invalid_gender.innerHTML = "";
        a=true;
      }

      if(value_designation == "--select--"){
        invalid_designtion.innerHTML = "*Please select valid designation";
        a=false;
      }else{
        invalid_designtion.innerHTML = "";
        a=true;
      }

      if(value_photo == ""){
        invalid_photo.innerHTML = "*Please enter self-photo url";
        a=false;
      }else{
        invalid_photo.innerHTML = "";
        a=true;
      }
    //   var errors = [];

    //   if (!idRegex.test(id)) {
    //     errors.push("Invalid ID. Only alphanumeric characters are allowed.");
    //   }

    //   if (!nameRegex.test(name)) {
    //     errors.push("Invalid name. Only letters and spaces are allowed.");
    //   }

    //   if (!ageRegex.test(age)) {
    //     errors.push("Invalid age. Please enter a valid age.");
    //   }

    //   // Display error messages or submit form
    //   var errorContainer = document.getElementById("error-container");
    //   if (errors.length > 0) {
    //     var errorList = "";
    //     for (var i = 0; i < errors.length; i++) {
    //       errorList += "<li>" + errors[i] + "</li>";
    //     }
    //     errorContainer.innerHTML = "<ul>" + errorList + "</ul>";
    //     return false; // Prevent form submission
    //   } else {
    //     errorContainer.innerHTML = "";
    //     return true; // Proceed with form submission
    //   }
      return a; 
    }