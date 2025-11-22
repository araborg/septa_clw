const items = document.querySelectorAll(".item");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const inititalSlide = 0;
const totalItems = items.length;
// console.log(totalItems);

prevBtn.addEventListener("click", handleClick.bind(this));

function handleClick(e) {
	console.log(e.target.id);

	// const
}
