function password() {
    // Starting variables and characters to generate password
    let passwordLength = document.getElementById('passwordLength').value;
    let specialChar = " !\"#$%&\'()*+,-./:;<=>?@[\]^_\`{|}~";
    let numericChar = "1234567890";
    let lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    let uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let additionalChar = "";
    let basePassword = [];

    if (passwordLength < 8 || passwordLength > 129) {
      alert("Please pick a number between 8 and 128")
    };

    //count how many true values, if less than 0, then throw error
    //[true,false,true,false,true].filter(Boolean).length
    //console.log(document.getElementById("specialChar").checked)

    // Generate an array with character types selected
    if (document.getElementById("specialChar").checked) {
      basePassword.push(specialChar[Math.floor(Math.random() * specialChar.length)]);
      additionalChar = additionalChar += specialChar;
      // console.log(basePassword);
      // console.log(additionalChar);
    };

    if (document.getElementById("numericChar").checked) {
      basePassword.push(numericChar[Math.floor(Math.random() * numericChar.length)]);
      additionalChar = additionalChar += numericChar;
      // console.log(basePassword);
      // console.log(additionalChar);
    };

    if (document.getElementById("lowercaseChar").checked) {
      basePassword.push(lowercaseChar[Math.floor(Math.random() * lowercaseChar.length)]);
      additionalChar = additionalChar += lowercaseChar;
      // console.log(basePassword);
      // console.log(additionalChar);
    };

    if (document.getElementById("uppercaseChar").checked) {
      basePassword.push(uppercaseChar[Math.floor(Math.random() * uppercaseChar.length)]);
      additionalChar = additionalChar += uppercaseChar;
      // console.log(basePassword);
      // console.log(additionalChar);
    };

    // add to array until length = password length

    // randomize array

    // compile array

    // show password to user

  }