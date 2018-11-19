import smoothscroll from "smoothscroll";

// Controlling more button
const moreButton = document.querySelector("[more-action]");
moreButton.addEventListener("click", e => {
	const section = document.querySelector("#substances");
	smoothscroll(section);
});

// Controlling navigation
const navigationItems = document.querySelectorAll("[navigation] > .link");
navigationItems.forEach(item => {
	if (!item || !item.currentTarget) return;
	const { href } = item.currentTarget;
	const section = document.querySelector(href);
	smoothscroll(section);
});
