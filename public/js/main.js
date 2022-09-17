const BUTTON = document.querySelector('[data-id="button"]')
const NOTIFICATION = document.querySelectorAll('[data-id="notification"]')
const NOTIFICATION_COUNT = document.querySelector('[data-id="notification-count"]')
const DOT = document.querySelectorAll('[data-id="dot"]')

BUTTON.addEventListener("click", function(e){
	NOTIFICATION.forEach((element, idx) => {
		element.classList.remove("notification--unread")
		DOT[idx].classList.add("dot-hide")
		NOTIFICATION_COUNT.textContent = 0
	})
})