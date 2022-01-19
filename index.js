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
		nameError.innerHTML = 'Must be at least 3 characters long';
	} else {
		nameError.innerHTML = '';
	}

	// Age
	if (age < 17) {
		ageError.innerHTML = 'Must be at least 17 years old';
	} else {
		ageError.innerHTML = '';
	}

	// Tel
	if (!telephone.startsWith(+62)) {
		telephoneError.innerHTML = 'Must start with +62';
	} else if (telephone.length != 14) {
		telephoneError.innerHTML = 'Length is incorrect';
	} else {
		telephoneError.innerHTML = '';
	}

	// Email
};
