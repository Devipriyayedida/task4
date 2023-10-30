// function which helps in display of drag&drop box when user clicked on "browse" button
// function browseFileHandler() {

//     document.getElementById("uploader").classList.add("show-uploader");
//   }
 var fileuploader = document.getElementById("fileuploader");
  var resume = document.getElementById('resume');
     var button = document.getElementById("browse");
       function browseFileHandler () {
            fileuploader.click();
        };
        fileuploader.onchange = function () {
            var fileName = fileuploader.value.split('\\')[fileuploader.value.split('\\').length - 1];
            document.getElementById('resume').innerHTML = fileName;
           console.log( document.getElementById('resume').innerHTML)
        };
//   // function to setup the filename to resume field
//   function fileUploadHandler(event) {
//     let file = event.target.files[0];
//     if (file != undefined) {
//   document.getElementById("resume").value = file.name;
//       document.getElementById("uploader").classList.remove("show-uploader");
//     }
//   }

// function to validate the email
function emailValidator(emailAddress) {
  let email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email_regex.test(emailAddress)) {
    return true;
  }
  return false;
}
 

// function to check whether all fields are entered or not
function validateFormHandler(e) {
  e.preventDefault();
  let userName = document.getElementById("name");
  let email = document.getElementById("email");
  let desiredrole = document.getElementById("desired-role");
  let username_warning = document.createElement("span");
  let mail_warning = document.createElement("span");
  username_warning.innerText = "Username is Required";
  mail_warning.innerText = "Email is Required";
  let email_div = document.getElementById("email-div");
  let name_div = document.getElementById("name-div");
  // let success_msg = document.getElementById("success_msg");
  // success_msg.innerText = "<span class='error'>my error</span>";
  if (userName.value == "") {
    name_div.replaceChild(username_warning, name_div.lastChild);
  }
  if (email.value == "") {
    email_div.replaceChild(mail_warning, email_div.lastChild);
  }
  if(userName.value != "" && email.value != "") {
   
   document.getElementById('success-message').innerHTML = "<span class='success'>Thanks for submitting</span>";

    // document.getElementById('form').insertBefore(success_msg, document.getElementById("name-div"));
    console.log(userName.value,email.value,desiredrole.value)
  }
}
// function to validate the email while entering & after entered
function validateEmail() {
  let email = document.getElementById("email").value;
  let email_div = document.getElementById("email-div");
  mail_warning = document.createElement("span");
  mail_warning.innerText = "Email is Required";
  invalid_email_warning = document.createElement("span");
  invalid_email_warning.innerText = "Invalid Email";
  
  if (email == "") {
    email_div.replaceChild(mail_warning, email_div.lastChild);
  } else if (!emailValidator(email)) {
    email_div.replaceChild(invalid_email_warning, email_div.lastChild);
  } else {
    let span = document.createElement("span");
    span.innerText = "*";
    email_div.replaceChild(span, email_div.lastChild);
  }
}
 
// function to check whether name is entered or not
function validateName() {
  let name = document.getElementById("name").value;
  let name_div = document.getElementById("name-div");
  username_warning = document.createElement("span");
  username_warning.innerText = "Username is Required";
  if (name == "") {
    name_div.replaceChild(username_warning, name_div.lastChild);
  } else {
    let span = document.createElement("span");
    span.innerText = "*";
    name_div.replaceChild(span, name_div.lastChild);
  }
}