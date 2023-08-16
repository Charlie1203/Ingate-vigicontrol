const openModal = (id) => {
	document.getElementById(id).style.display = "block";
	document.body.classList.add("modal-open");
};

const closeModal = (id) => {
	document.getElementById(id).style.display = "none";
	document.body.classList.remove("modal-open");
};
