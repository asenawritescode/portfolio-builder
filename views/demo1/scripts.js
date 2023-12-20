
var form_1 = document.querySelector(".form_1");
var form_2 = document.querySelector(".form_2");
var form_3 = document.querySelector(".form_3");
var form_4 = document.querySelector(".form_4");
var form_5 = document.querySelector(".form_5");
var form_6 = document.querySelector(".form_6");


var form_1_btns = document.querySelector(".form_1_btns");
var form_2_btns = document.querySelector(".form_2_btns");
var form_3_btns = document.querySelector(".form_3_btns");
var form_4_btns = document.querySelector(".form_4_btns");
var form_5_btns = document.querySelector(".form_5_btns");
var form_6_btns = document.querySelector(".form_6_btns");


var form_1_next_btn = document.querySelector(".form_1_btns .btn_next");
var form_2_back_btn = document.querySelector(".form_2_btns .btn_back");
var form_2_next_btn = document.querySelector(".form_2_btns .btn_next");
var form_3_back_btn = document.querySelector(".form_3_btns .btn_back");
var form_3_next_btn = document.querySelector(".form_3_btns .btn_next");
var form_4_back_btn = document.querySelector(".form_4_btns .btn_back");
var form_4_next_btn = document.querySelector(".form_4_btns .btn_next");
var form_5_back_btn = document.querySelector(".form_5_btns .btn_back");
var form_5_next_btn = document.querySelector(".form_5_btns .btn_next");
var form_6_back_btn = document.querySelector(".form_6_btns .btn_back");

var form_2_progessbar = document.querySelector(".form_2_progessbar");
var form_3_progessbar = document.querySelector(".form_3_progessbar");
var form_4_progessbar = document.querySelector(".form_4_progessbar");
var form_5_progessbar = document.querySelector(".form_5_progessbar");
var form_6_progessbar = document.querySelector(".form_6_progessbar");

var btn_done = document.querySelector(".btn_done");
var btn_add_work = document.querySelector(".add-wrk-btn");
var modal_wrapper = document.querySelector(".modal_wrapper");
var shadow = document.querySelector(".shadow");

function validateFormInputs(form) {
	const formInputs = form.querySelectorAll('input[required], textarea[required]');
	let hasError = false;

	formInputs.forEach(input => {
		if (!input.checkValidity()) {
			input.reportValidity();
			hasError = true;
		}
	});

	return hasError;
}

function switchFormSections(currentForm, nextForm, currentButtons, nextButtons, progressBar) {
	currentForm.style.display = "none";
	nextForm.style.display = "block";
	currentButtons.style.display = "none";
	nextButtons.style.display = "flex";
	progressBar.classList.add("active");
}

function handleFormNavigation(currentForm, nextForm, currentButtons, nextButtons, progressBar) {
	const form = currentForm.querySelector('form');
	const hasError = validateFormInputs(form);

	if (!hasError) {
		switchFormSections(currentForm, nextForm, currentButtons, nextButtons, progressBar);

		if (nextForm) {
			form.submit();
		}
	}
}

form_1_next_btn.addEventListener("click", () => {
	handleFormNavigation(form_1, form_2, form_1_btns, form_2_btns, form_2_progessbar);
});

form_2_back_btn.addEventListener("click", () => {
	switchFormSections(form_2, form_1, form_2_btns, form_1_btns, form_2_progessbar);
});

form_2_next_btn.addEventListener("click", () => {
	handleFormNavigation(form_2, form_3, form_2_btns, form_3_btns, form_3_progessbar);
});

form_3_back_btn.addEventListener("click", () => {
	switchFormSections(form_3, form_2, form_3_btns, form_2_btns, form_3_progessbar);
});

form_3_next_btn.addEventListener("click", () => {
	handleFormNavigation(form_3, form_4, form_3_btns, form_4_btns, form_4_progessbar);
});

form_4_back_btn.addEventListener("click", () => {
	switchFormSections(form_4, form_3, form_4_btns, form_3_btns, form_4_progessbar);
});

form_4_next_btn.addEventListener("click", () => {
	handleFormNavigation(form_4, form_5, form_4_btns, form_5_btns, form_5_progessbar);
});

form_5_back_btn.addEventListener("click", () => {
	switchFormSections(form_5, form_4, form_5_btns, form_4_btns, form_5_progessbar);
});

form_5_next_btn.addEventListener("click", () => {
	handleFormNavigation(form_5, form_6, form_5_btns, form_6_btns, form_6_progessbar);
});

form_6_back_btn.addEventListener("click", () => {
	switchFormSections(form_6, form_5, form_6_btns, form_5_btns, form_6_progessbar);
});

btn_done.addEventListener("click", () => {
	const form = form_6.querySelector('form');
	const hasError = validateFormInputs(form);

	if (!hasError) {
		form.submit();
		modal_wrapper.classList.add("active");
	}
});

let workExperienceCount = 1;

document.querySelector('.add-wrk-btn').addEventListener("click", () => {
	const originalWorkExperience = document.querySelector('.repeat_this_wrk');
	const clonedWorkExperience = originalWorkExperience.cloneNode(true);
	const updatedClass = 'repeat_this' + workExperienceCount;

	clonedWorkExperience.setAttribute('class', updatedClass);
	updateInputAndTextareaAttributes(clonedWorkExperience, workExperienceCount);

	workExperienceCount++; 
	originalWorkExperience.insertAdjacentElement('beforebegin', clonedWorkExperience);
});

let educationCount = 1;

document.querySelector('.add-sch-btn').addEventListener("click", () => {
	const originalEducationExperience = document.querySelector('.repeat_this_edu'); const clonedEducationExperience = originalEducationExperience.cloneNode(true); const updatedClass = 'repeat_this' + educationCount;

	clonedEducationExperience.setAttribute('class', updatedClass); 
	updateInputAndTextareaAttributes(clonedEducationExperience, educationCount);

	educationCount++; 
	originalEducationExperience.insertAdjacentElement('beforebegin', clonedEducationExperience);
});

function updateInputAndTextareaAttributes(element, count) {
	element.querySelectorAll('input, textarea').forEach(el => {
		const originalId = el.getAttribute('id'); const originalName = el.getAttribute('name'); const updatedId = originalId + count; const updatedName = originalName + count;
		el.setAttribute('id', updatedId);
		el.setAttribute('name', updatedName);

	});
}