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

	let nameError = document.getElementById('nameError');
	let ageError = document.getElementById('ageError');
	let telephoneError = document.getElementById('telephoneError');
	let emailError = document.getElementById('emailError');

	// Validation
	// Name
	if (name.length < 3) {
		nameError.innerHTML = 'Must be at least 3 characters long.';
	} else {
		nameError.innerHTML = '';
	}

	// Age
	if (age < 17) {
		ageError.innerHTML = 'Must be at least 17 years old.';
	} else {
		ageError.innerHTML = '';
	}

	// Tel
	if (!telephone.startsWith('+81')) {
		telephoneError.innerHTML = 'Must start with +81';
	} else if (telephone.length != 14) {
		telephoneError.innerHTML = 'Should be 11 digits long';
	} else {
		telephoneError.innerHTML = '';
	}

	// Email
	if (!email.endsWith('.com')) {
		emailError.innerHTML = 'Must end with .com';
	} else if (!email.includes('@')) {
		emailError.innerHTML = 'Must contain @';
	} else {
		emailError.innerHTML = '';
	}
};
