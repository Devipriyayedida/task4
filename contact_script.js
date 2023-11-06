function emailValidator(emailAddress) {
    let email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email_regex.test(emailAddress)) {
      return true;
    }
    return false;
  }
// function validate the form whether all required fields are entered or not.
function validateForm(e) {
  e.preventDefault();
  let userName = document.getElementById("name");
  let email = document.getElementById("email");
  let org = document.getElementById("org");
  let form = document.getElementById("form");
  let email_div = document.getElementById("email-div");
  let name_div = document.getElementById("name-div");
  let org_div = document.getElementById("org-div");
 
  let success_msg = document.createElement("span");
  success_msg.innerText = "Thanks for submitting";
  let main_warning = document.createElement("span");
  main_warning.innerText = "please fill all the rquired fields below";
  let username_warning = document.createElement("span");
  username_warning.innerText = "username is required";
  let mail_warning = document.createElement("span");
  mail_warning.innerText = "mail is required";
  let org_warning = document.createElement("span");
  org_warning.innerText = "org is required";
 
  main_warning.classList.add("warning");
  username_warning.classList.add("warning");
  mail_warning.classList.add("warning");
  org_warning.classList.add("warning");
 
  if (userName.value == "" || email.value == "" || org.value == "") {
    form.insertBefore(main_warning, document.getElementById("name-div"));
    if (userName.value == "") {
      name_div.replaceChild(username_warning, name_div.lastChild);
    }
    if (email.value == "") {
      email_div.replaceChild(mail_warning, email_div.lastChild);
    }
    if (org.value == "") {
      org_div.replaceChild(org_warning, org_div.lastChild);
    }
  }
  else if(userName.value != "" && email.value != "" && org.value != "") {
    form.insertBefore(success_msg, document.getElementById("name-div"));
  }
}
  // function to validate the email while entering & after entered
function validateEmail() {
  let email = document.getElementById("email").value;
  let email_div = document.getElementById("email-div");
  let mail_warning = document.createElement("span");
  mail_warning.innerText = "mail is required";
  let invalid_email_warning = document.createElement("span");
  invalid_email_warning.innerText = "Invalid Email";
  mail_warning.classList.add("warning");
  invalid_email_warning.classList.add("warning");
 
  if (email == "") {
    email_div.replaceChild(mail_warning, email_div.lastChild);
  } else if (!emailValidator(email)) {
    email_div.replaceChild(invalid_email_warning, email_div.lastChild);
  } else {
    let span = document.createElement("span");
    span.innerText = "";
    email_div.replaceChild(span, email_div.lastChild);
  }
}
 
// function to check whether name is entered or not
function validateName() {
  let name = document.getElementById("name").value;
  let name_div = document.getElementById("name-div");
  let username_warning = document.createElement("span");
  username_warning.innerText = "username is required";
  username_warning.classList.add("warning");
 
  if (name == "") {
    name_div.replaceChild(username_warning, name_div.lastChild);
  } else {
    let span = document.createElement("span");
    span.innerText = "";
    name_div.replaceChild(span, name_div.lastChild);
  }
}
 
// function to check whether organisation is entered or not
function validateOrg() {
  let org = document.getElementById("org").value;
  let org_div = document.getElementById("org-div");
  let org_warning = document.createElement("span");
  org_warning.innerText = "org is required";
  org_warning.classList.add("warning");
 
  if (org == "") {
    org_div.replaceChild(org_warning, org_div.lastChild);
  } else {
    let span = document.createElement("span");
    span.innerText = "";
    org_div.replaceChild(span, org_div.lastChild);
  }
}

function helloMessage() {
  let gender = document.getElementsByName("gender");
  let selectedGender;
// Find the selected gender
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      selectedGender = gender[i].value;
      break;
    }
  }
  if (selectedGender === "male") {
    alert("Hello Sir");
  } else if (selectedGender === "female") {
    alert("Hello Lady");
  }
}

// promocode

function makePromotionCodeHandler() {
 
    // Get the selected value of the state drop-down list
    let state = document.getElementById("state");
    let selectedState = state.options[state.selectedIndex].text;
  
    // Append "-PROMO" to the selected state value
    let promotionCode = selectedState + " - PROMO";
  
    // Update the value of the Promotion Code text field
    let promotionCodeField = document.getElementById("promotion-code");
    promotionCodeField.value = promotionCode;
  }

// function to remove warning
function removeElements(){
  const ele = document.getElementsByClassName("warning");
  while(ele.length > 0){
    ele[0].parentNode.removeChild(ele[0]);
  }
}

