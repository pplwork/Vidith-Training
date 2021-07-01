const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const email = form.elements['email'].value;
	const password = form.elements['pass'].value;
	const gender = form.elements['gender'].value;
	const role = form.elements['role'].value;
	const permissions = form.querySelectorAll("input[name = 'Permissions']:checked");

	if (!validatePassword(password)) {
		alert('Password should be min 6 character with MIX of Upercase, lowercase, digits');
		return;
	}
	if (permissions.length < 2) {
		alert('Minimum of 2 permissions must be selected');
		return;
	}

	form.style.display = 'none';

	const Info = document.querySelector('.Details');
	Info.style.display = 'block';

	Info.querySelector('#confirmEmail').textContent = `Email: ${email}`;
	Info.querySelector('#confirmPassword').textContent = `Password : ${password}`;
	Info.querySelector('#confirmGender').textContent = `Gender: ${gender}`;
	Info.querySelector('#confirmRole').textContent = `Role: ${role}`;
	Info.querySelector('#confirmPermissions').innerHTML = 'Permissions: ';
	permissions.forEach((permission) => {
		Info.querySelector('#confirmPermissions').innerHTML += ` ${permission.value}  `;
	});
});

const validatePassword = (password) => {
	if (password.length < 6) {
		return false;
	}

	if (/[a-z]+/.test(password) && /[A-Z]+/.test(password) && /[0-9]+/.test(password)) return true;

	return false;
};
