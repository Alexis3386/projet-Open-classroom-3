$(document).ready(function () {

	let images = ['batmanRise.jpg', 'forestGump.jpg', 'Intouchables_reference.jpg', 'killBill.jpg', 'affranchis.jpg', 'pulpFiction.jpg', 'bacNord.jpg', 'nobody.jpg', 'wayofDragon.jpg', 'lesEvades.jpg', 'retourDuRoi.jpg', 'fightClub.jpg'];
	let nb_images = images.length;
	for (let i = 0; i < nb_images; i++) {
		let div = $('<div class="item-images"></div>');
		div.css('background-image', `url('/dist/images/${images[i]}'`);
		$("#carrousel").append(div);
	}

	$(".owl-carousel").owlCarousel({
		items: 4,
		loop: true,
		margin: 30,
		nav: true,
		autoWidth: true,
		dots: false,
	});
});

let boutonMobile = document.getElementById('menu-btn');
let lienMenu = document.querySelector('.menu-mobile ul');

boutonMobile.addEventListener('click', function () {
	lienMenu.className === 'hide' ? lienMenu.className = '' : lienMenu.className = 'hide'
});

let modal = null

const openModal = function (e) {
	e.preventDefault()
	const target = document.querySelector('#modalBatmanRise')
	target.style.display = null
	target.removeAttribute('aria-hidden')
	target.setAttribute('aria-modal', 'true')
	modal = target
	modal.addEventListener('click', closeModal)
}

const closeModal = function (e) {
	e.preventDefault()
	modal.style.display = 'none'
	target.setAttribute('aria-hidden', 'true')
	target.removeAttribute('aria-modal')
	modal = target
	modal.removeEventListener('click', closeModal)
	modal = null
}

document.querySelectorAll('.js-modal').forEach(a => {
	a.addEventListener('click', openModal)
})