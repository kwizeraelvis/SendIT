//get all forms with order-form class
let orderFormss = [...document.getElementsByClassName("transit-form")];
let transitForms= [...document.getElementsByClassName("user-transit-form")];
const editOrApply = action => {
	//get the current form's index
	let activeIndex = orderFormss.indexOf(
		orderFormss.find(form => form.classList.contains("active"))
	);
	//desactivate the current form, and activate the next one
	orderFormss[activeIndex].classList.remove("active");

	// manupulate the next or pevious form and step
	switch (action) {
		case "open":
			orderFormss[activeIndex + 1].classList.add("active");
			break;
		case "cancel":
			orderFormss[activeIndex - 1].classList.add("active");
      case "apply":
  			orderFormss[activeIndex - 1].classList.add("active");
		default:
			return null;
	}
};
const editTransitDest =action =>{
	//get the current form's index
	let activeIndex = transitForms.indexOf(
		transitForms.find(form => form.classList.contains("active"))
	);
	//desactivate the current form, and activate the next one
	transitForms[activeIndex].classList.remove("active");

	// manupulate the next or pevious form and step
	switch (action) {
		case "open":
			transitForms[activeIndex + 1].classList.add("active");
			break;
		case "cancel":
			transitForms[activeIndex - 1].classList.add("active");
			case "apply":
				transitForms[activeIndex - 1].classList.add("active");
		default:
			return null;
	}
};
