// Submitted by: Vyshnav R
// Email: vyshnavr856@gmail.com

const formElement = document.querySelector("form") as HTMLFormElement;
const nameElement = document.querySelector("#name") as HTMLInputElement;
const emailElement = document.querySelector("#email") as HTMLInputElement;
const phoneElement = document.querySelector("#phone") as HTMLInputElement;
const subjectElement = document.querySelector("#subject") as HTMLInputElement;
const messageElement = document.querySelector("#message") as HTMLTextAreaElement;

formElement.addEventListener("submit", e => {
	e.preventDefault();
	const nameValue: string = nameElement.value;
	const emailValue: string = emailElement.value;
	const phoneValue: string = phoneElement.value;
	const subjectValue: string = subjectElement.value;
	const messageValue: string = messageElement.value;

	let valid: boolean = true;

	if (nameValue == "") {
		const alert = document.querySelector(".alert-name") as HTMLImageElement;
		alert.style.display = "block";
		nameElement.style.borderColor = "#ff0000";
		nameElement.placeholder = "Name is required";
		valid = valid && false;
	}

	if (emailValue == "") {
		const alert = document.querySelector(".alert-email") as HTMLImageElement;
		alert.style.display = "block";
		emailElement.style.borderColor = "#ff0000";
		emailElement.placeholder = "Email is required"
		valid = valid && false;
	}

	if (phoneValue == "") {
		const alert = document.querySelector(".alert-phone") as HTMLImageElement;
		alert.style.display = "block";
		phoneElement.style.borderColor = "#ff0000";
		phoneElement.placeholder = "Mobile number is required"
		valid = valid && false;
	}

	if (subjectValue == "") {
		const alert = document.querySelector(".alert-subject") as HTMLImageElement;
		alert.style.display = "block";
		subjectElement.style.borderColor = "#ff0000";
		subjectElement.placeholder = "Subject is required"
		valid = valid && false;
	}

	if (messageValue == "") {
		const alert = document.querySelector(".alert-message") as HTMLImageElement;
		alert.style.display = "block";
		messageElement.style.borderColor = "#ff0000";
		messageElement.placeholder = "Message is required"
		valid = valid && false;
	}

	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	if (!emailRegex.test(emailValue)) {
		const alert = document.querySelector(".alert-email") as HTMLImageElement;
		alert.style.display = "block";
		emailElement.style.borderColor = "#ff0000";
		valid = valid && false;
	}

	const phoneRegex = /^[123456789]\d{9}$/;
	if (!phoneRegex.test(phoneValue)) {
		const alert = document.querySelector(".alert-phone") as HTMLImageElement;
		alert.style.display = "block";
		phoneElement.style.borderColor = "#ff0000";
		valid = valid && false;
	}

	if (!valid) {
		alert("Form is invalid, cannot submit!");
	}

	else {
		const submitData = {
			name: nameValue,
			email: emailValue,
			phone: phoneValue,
			subject: subjectValue,
			message: messageValue
		}

		const submitResponse = submitForm(submitData);
	}
})

nameElement.addEventListener("input", e => {
	const alert = document.querySelector(".alert-name") as HTMLImageElement;
	alert.style.display = "none";
	nameElement.style.borderColor = "rgba(0, 0, 0, 0.2)";
})

emailElement.addEventListener("input", e => {
	const alert = document.querySelector(".alert-email") as HTMLImageElement;
	alert.style.display = "none";
	emailElement.style.borderColor = "rgba(0, 0, 0, 0.2)";
})

phoneElement.addEventListener("input", e => {
	const alert = document.querySelector(".alert-phone") as HTMLImageElement;
	alert.style.display = "none";
	phoneElement.style.borderColor = "rgba(0, 0, 0, 0.2)";
})

subjectElement.addEventListener("input", e => {
	const alert = document.querySelector(".alert-subject") as HTMLImageElement;
	alert.style.display = "none";
	subjectElement.style.borderColor = "rgba(0, 0, 0, 0.2)";
})

messageElement.addEventListener("input", e => {
	const alert = document.querySelector(".alert-message") as HTMLImageElement;
	alert.style.display = "none";
	messageElement.style.borderColor = "rgba(0, 0, 0, 0.2)";
})

async function submitForm(submitData: object) {
	const endpoint: string = "https://6717f822b910c6a6e02abb38.mockapi.io/api/contact";
	try {
		await fetch(endpoint, {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(submitData)
		});

		alert("Form submission successful!");
		return true;
	}

	catch(error) {
		alert("Form submission unsuccessful due to API error!");
	}
}