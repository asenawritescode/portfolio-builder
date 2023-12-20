const hashMap = new Map();

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

form_1_next_btn.addEventListener("click", async function () {
	form_1.style.display = "none";
	form_2.style.display = "block";

	form_1_btns.style.display = "none";
	form_2_btns.style.display = "flex";

	// trigger the submit
	const form = document.querySelector('.form_1 form');
	form.submit();
	// console.log(form);
	// get data from form
	// const formData = new FormData(form);


	// // send data to server
	// try {
	// 	const response = await fetch("http://localhost:5700/registerTest", {
	// 		method: "POST",
	// 		// Set the FormData instance as the request body
	// 		body: formData,
	// 	});
	// 	console.log(await response.json());
	// } catch (e) {
	// 	console.error(e);
	// }

	form_2_progessbar.classList.add("active");
});

form_2_back_btn.addEventListener("click", function () {
	form_1.style.display = "block";
	form_2.style.display = "none";

	form_1_btns.style.display = "flex";
	form_2_btns.style.display = "none";

	form_2_progessbar.classList.remove("active");
});

form_2_next_btn.addEventListener("click", function () {
	form_2.style.display = "none";
	form_3.style.display = "block";

	form_3_btns.style.display = "flex";
	form_2_btns.style.display = "none";

	// trigger the submit
	const form = document.querySelector('.form_2 form');
	form.submit();

	form_3_progessbar.classList.add("active");
});

form_3_back_btn.addEventListener("click", function () {
	form_2.style.display = "block";
	form_3.style.display = "none";

	form_3_btns.style.display = "none";
	form_2_btns.style.display = "flex";

	form_3_progessbar.classList.remove("active");
});

form_3_next_btn.addEventListener("click", function () {
	form_3.style.display = "none";
	form_4.style.display = "block";

	form_3_btns.style.display = "none";
	form_4_btns.style.display = "flex";

	// trigger the submit
	const form = document.querySelector('.form_3 form');
	form.submit();

	form_4_progessbar.classList.add("active");
})

form_4_back_btn.addEventListener("click", function () {
	form_3.style.display = "block";
	form_4.style.display = "none";

	form_3_btns.style.display = "flex";
	form_4_btns.style.display = "none";

	form_4_progessbar.classList.remove("active");
})

form_4_next_btn.addEventListener("click", function () {
	form_4.style.display = "none";
	form_5.style.display = "block";

	form_4_btns.style.display = "none";
	form_5_btns.style.display = "flex";

	// trigger the submit
	const form = document.querySelector('.form_4 form');
	form.submit();

	form_5_progessbar.classList.add("active");
})

form_5_back_btn.addEventListener("click", function () {
	form_4.style.display = "block";
	form_5.style.display = "none";

	form_4_btns.style.display = "flex";
	form_5_btns.style.display = "none";

	form_5_progessbar.classList.remove("active");
})

form_5_next_btn.addEventListener("click", function () {
	form_5.style.display = "none";
	form_6.style.display = "block";

	form_5_btns.style.display = "none";
	form_6_btns.style.display = "flex";

	// trigger the submit
	const form = document.querySelector('.form_5 form');
	form.submit();

	form_6_progessbar.classList.add("active");
})

form_6_back_btn.addEventListener("click", function () {
	form_5.style.display = "block";
	form_6.style.display = "none";

	form_5_btns.style.display = "flex";
	form_6_btns.style.display = "none";

	form_6_progessbar.classList.remove("active");
})

btn_done.addEventListener("click", function () {

	// trigger the submit
	const form = document.querySelector('.form_6 form');
	form.submit();

	modal_wrapper.classList.add("active");
})

var wrk_expr_count = 1;

document.querySelector('.add-wrk-btn').addEventListener("click", function () {
	var originalWorkExperience = document.querySelector('.repeat_this');
	var clonedWorkExperience = originalWorkExperience.cloneNode(true);
	clonedWorkExperience.setAttribute('class', 'repeat_this' + wrk_expr_count);

	// Update the id and name attributes of input and textarea elements
	clonedWorkExperience.querySelectorAll('input, textarea').forEach(function (element) {
		var originalId = element.getAttribute('id');
		var originalName = element.getAttribute('name');
		var updatedId = originalId + wrk_expr_count;
		var updatedName = originalName + wrk_expr_count;

		element.setAttribute('id', updatedId);
		element.setAttribute('name', updatedName);
	});

	wrk_expr_count++;

	var workExperienceContainer = document.querySelector('.repeat_this');
	workExperienceContainer.insertAdjacentElement('beforebegin', clonedWorkExperience);
});

shadow.addEventListener("click", function () {
	modal_wrapper.classList.remove("active");
})
