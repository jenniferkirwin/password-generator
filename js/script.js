function password() {
  // Starting variables and characters to generate password
  let checkedBoxes = document.querySelectorAll(`input[type="checkbox"]:checked`).length;
  let passwordLength = document.getElementById('passwordLength').value;
  let passwordPhrase = document.getElementById('passwordPhrase').value;
  let passPhraseLen = passwordPhrase.length + checkedBoxes;
  let specialChar = "!\"#$%&\'()*+,-./:;<=>?@[\]^_\`{|}~";
  let numericChar = "1234567890";
  let lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  let uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let additionalChar = "";
  let basePassword = [];

  // Password Character Selector

  function passChar(charType, _idName) {
    if (document.getElementById(_idName).checked) {
      basePassword.push(charType[Math.floor(Math.random() * charType.length)]);
      additionalChar = additionalChar += charType;
    };
  };

  // add to array until length = password length
  function passComleter(){

    for (i = basePassword.length + passwordPhrase.length; i < passwordLength; i++) {
      basePassword.push(additionalChar[Math.floor(Math.random() * additionalChar.length)]);
    };
    if (passwordPhrase.length > 0) {
      basePassword.push(passwordPhrase); 
    }
  };
  
  // randomize/shuffle basePassword array

  function passShuffe(array) {

      let currentIndex = array.length;
      let temporaryValue, randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex --;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
  };

  // show password to user

  // Input Validation & Generate Complete Password

  if (checkedBoxes < 1) {
    alert(`Please select alteast one Character Type`)
    // const elem = document.getElementById('modal id here');
    // const instance = M.Modal.init(elem, {dismissible: false});
    // instance.open();
  }

  else if (passPhraseLen > 128) {
    alert(`Password can only be 128 characters long. Your current phrase and additional characters are ${passPhraseLen} long.`)
  }

  else if (passwordLength < passPhraseLen) {
    alert(`Password must be atleast ${passPhraseLen} characters long to include your phrase and additional characters.`)
  }

  else if (passwordPhrase.match(/ /) !== null) {
    alert(`Your phrase can not contain spaces`)
  }

  else {
    passChar(uppercaseChar, "uppercaseChar");
    passChar(lowercaseChar, "lowercaseChar");
    passChar(numericChar, "numericChar");
    passChar(specialChar, "specialChar");
    passComleter();
    passShuffe(basePassword);
  
    console.log(basePassword.join(""));
    console.log(basePassword.join("").length);
  };

};

document.getElementById("passwordPhrase").onchange = function ()
{
  let passPhraseOrg = document.getElementById('passwordPhrase').value;
  let passPhraseLen = passPhraseOrg.length;
  let input = document.getElementById("passwordLength");
  if (passPhraseLen > 8) {
    input.min = passPhraseLen;
  }
  else {
    input.min = 8;
  };
};

