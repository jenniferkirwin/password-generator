function password() {
    // let specialChar = document.getElementById("specialChar").checked;
    specialChar = " !\"#$%&\'()*+,-./:;<=>?@[\]^_\`{|}~";
    // let numericChar = document.getElementById("numericChar").checked;
    let numericChar = "1234567890";
    // let lowercaseChar = document.getElementById("lowercaseChar").checked;
    let lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    // let uppercaseChar = document.getElementById("uppercaseChar").checked;
    let uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let additionalChar = "";
    let basePassword = [];
    // var variable = document.getElementById('input_id').value;
    // document.getElementById('alert').innerHTML = 'The user input is: ' + variable;
    if (document.getElementById("specialChar").checked) {
      basePassword.push(specialChar[Math.floor(Math.random() * specialChar.length)]);
      // additionalChar.push(specialChar);
      console.log(basePassword);
      console.log(additionalChar);
    }
  }