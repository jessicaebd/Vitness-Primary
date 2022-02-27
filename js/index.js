let form = document.getElementById('joinForm');
form.onsubmit = function (e) {
	e.preventDefault();

	// fetch data
	let formData = new FormData(form);
	let name = formData.get('name');
	let age = formData.get('age');
	let gender = formData.get('gender');
	let telephone = formData.get('telephone');
	let email = formData.get('email');
	let term = formData.get('term');

	let nameError = document.getElementById('nameError');
	let ageError = document.getElementById('ageError');
	let genderError = document.getElementById('genderError');
	let telephoneError = document.getElementById('telephoneError');
	let emailError = document.getElementById('emailError');
	let termError = document.getElementById('termError');

	// Validation Function
	// Name
	function validateName(){
		if (name.length < 3) {
			nameError.innerHTML = 'Must be at least 3 characters long.';
			return false;
		} else {
			nameError.innerHTML = '';
			return true;
		}	
	}

	// Age
	function validateAge(){
		if (age < 10) {
			ageError.innerHTML = 'Must be at least 10 years old.';
			return false;
		} else {
			ageError.innerHTML = '';
			return true;
		}
	}

	// Gender
	function validateGender(){
		if(gender != "Male" && gender != "Female"){
			genderError.innerHTML = 'Must choose gender.'
			return false;
		}else{
			genderError.innerHTML = '';
			return true;
		}
	}

	// Tel
	function validateTelephone(){
		if (!telephone.startsWith('+81')) {
			telephoneError.innerHTML = 'Must start with +81';
			return false;
		} else if (telephone.length != 14) {
			telephoneError.innerHTML = 'Should be 11 digits long';
			return false;
		} else {
			telephoneError.innerHTML = '';
			return true;
		}
	}

	// Email
	function validateEmail(){
		if(!email.endsWith('.com') && !email.includes('@')){
			emailError.innerHTML = 'Must contain @ and end with .com';
			return false;
		}else if (!email.endsWith('.com')) {
			emailError.innerHTML = 'Must end with .com';
			return false;
		} else if (!email.includes('@')) {
			emailError.innerHTML = 'Must contain @';
			return false;
		} else {
			emailError.innerHTML = '';
			return true;
		}
	}

	// Term
	function validateTerm(){
		if(term == null){
			termError.innerHTML = 'Must agree to terms and conditions.';
			return false;
		}else{
			termError.innerHTML = '';
			return true;
		}
	}

	let nameCheck = validateName();
	let ageCheck = validateAge();
	let genderCheck = validateGender();
	let teleCheck = validateTelephone();
	let emailCheck = validateEmail();
	let termCheck = validateTerm();

	//Validation
	if(nameCheck && ageCheck && genderCheck && teleCheck && emailCheck && termCheck) {
		alert('Thank you for joining Vitness Primary!')
		location.href = 'index.html';
	}
};


