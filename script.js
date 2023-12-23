function firstWord(s) {
  // your code here
	s= s.trim();
	if(s.length==0){
		return "";
	}
	let arr_word = s.split(" ");
	return arr_word[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
