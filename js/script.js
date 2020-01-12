function password() {
  // Starting variables and characters to generate password
  let passwordLength = document.getElementById('passwordLength').value;
  let passwordPhrase = document.getElementById('passwordPhrase').value;
  let specialChar = " !\"#$%&\'()*+,-./:;<=>?@[\]^_\`{|}~";
  let numericChar = "1234567890";
  let lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  let uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let additionalChar = "";
  let basePassword = [];

  // Input Validation

  if (passwordLength < 8 || passwordLength > 129) {
    alert("Please pick a number between 8 and 128");
    return;
  };

  // Password Generation

  function passGen(charType, _idName) {
    if (document.getElementById(_idName).checked) {
      basePassword.push(charType[Math.floor(Math.random() * charType.length)]);
      additionalChar = additionalChar += charType;
    };
  };

  passGen(uppercaseChar, "uppercaseChar");
  passGen(lowercaseChar, "lowercaseChar");
  passGen(numericChar, "numericChar");
  passGen(specialChar, "specialChar");

  // add to array until length = password length

    for (i = basePassword.length; i < passwordLength; i++) {
      basePassword.push(additionalChar[Math.floor(Math.random() * additionalChar.length)]);
      // console.log(basePassword);
    };    
  
  // randomize / shuffle array

  console.log(basePassword);

  function shuffe(array) {

	let currentIndex = array.length;
	let temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex --;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
};

  // concat array

  console.log(basePassword.join(""));

  // show password to user

};

