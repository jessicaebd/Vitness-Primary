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

	// name
	if (name.length < 3) {
		nameError.innerHTML = '3 Characters long';
	} else {
		nameError.innerHTML = '';
	}

	// age
	if (age < 17) {
	}
};
