// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import AOS from "aos"

document.addEventListener('DOMContentLoaded', () => {
	AOS.init({
		duration: 800
	});
	// Custom JS
	tabs('.services')
	tabs('.information')
	toggleFaq()


	function tabs(sectionClass) {
		let section = document.querySelector(sectionClass)
		if (!section) return
		let tabItems = section.querySelectorAll('.tab-content')
		let tabButtons = section.querySelectorAll('.tab-navigation__category')
		let activeButton = section.querySelector('.tab-navigation__category.active')
		let activeItem = section.querySelector('.tab-content.active')
		tabButtons.forEach(tabButton => {
			tabButton.addEventListener('click', function (e) {
				if (e.target === activeButton) return
				activeButton.classList.remove('active')
				activeButton = e.currentTarget
				activeButton.classList.add('active')
				activeItem.classList.remove('active')
				tabItems.forEach(tabItem=>{
					if (activeButton.dataset.category === tabItem.dataset.category) {
						activeItem = tabItem
						activeItem.classList.add('active')
					}
				})
			})
		});
	}

	function toggleFaq() {
		let items = document.querySelectorAll('.faq__item')
		let activeItem = document.querySelector('.faq__item.active')
		for (let i = 0; i < items.length; i++) {
			items[i].addEventListener('click', function (e) {
				if (e.currentTarget !== activeItem && !!activeItem) {
					activeItem.classList.remove('active')
				}
				if (e.currentTarget.classList.contains('active')) {
					e.currentTarget.classList.remove('active')
				} else {
					e.currentTarget.classList.add('active')
					activeItem = e.currentTarget
				}
			})
		}
	}
})
