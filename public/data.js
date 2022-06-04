let contactRef = firebase.database().ref().child("contactForm");

document.getElementById("formdata").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  let name = getInputVal("name");
  let email = getInputVal("email");
  let number = getInputVal("number");
  let subject = getInputVal("subject");
  let message = getInputVal("message");

  saveForm(name, email, number, subject, message);

  document.getElementById("formdata").reset();
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

function saveForm(name, email, number, subject, message) {
  let newContactRef = contactRef.push();
  newContactRef.set({
    Name: name,
    Email: email,
    Number: number,
    Subject: subject,
    Message: message,
  });
}
