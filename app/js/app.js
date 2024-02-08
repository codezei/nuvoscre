// // Import vendor jQuery plugin example
import AOS from "aos"
import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
	AOS.init({
		duration: 800
	});
	// Custom JS
	tabs('.services')
	tabs('.information')
	toggleFaq()
	mobMenuToggle()
	stickyHeader()
	similarSwiper()

	function similarSwiper () {
		var swiper = new Swiper(".similar-swiper", {
			slidesPerView: 1,
			spaceBetween: 24,
			breakpoints: {
				1199: {
					slidesPerView: 3
				},
				991: {
					slidesPerView: 2
				},
				575: {
					slidesPerView: 1
				},
			}
		});
	}


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

	function mobMenuToggle() {
		let btn = document.querySelector('.header__navigation-btn-menu')
		let menu = document.querySelector(btn.dataset.toggle)
		let header = document.querySelector('.header')
		btn.addEventListener('click', function (e) {
			btn.classList.toggle('active')
			menu.classList.toggle('active')
			header.classList.toggle('active')
		})
	}
	function stickyHeader() {
		let header = document.querySelector('.header')
	
		if (document.body.getBoundingClientRect().top < 0) {
			header.classList.add('sticky')
		} else {
			header.classList.remove('sticky')
		}
	
		document.addEventListener('scroll', function () {
			if (document.body.getBoundingClientRect().top < 0) {
				header.classList.add('sticky')
			} else {
				header.classList.remove('sticky')
			}
	
		})
	}
})
