$(document).ready(function(){

	let images = ['batmanRise.jpg', 'forestGump.jpg', 'Intouchables_reference.jpg', 'killBill.jpg', 'affranchis.jpg', 'pulpFiction.jpg', 'bacNord.jpg', 'nobody.jpg', 'wayofDragon.jpg', 'lesEvades.jpg', 'retourDuRoi.jpg', 'fightClub.jpg'];
	let nb_images = images.length;
	for (let i = 0; i < nb_images; i++) {
		let div = $('<div class="item-images"></div>');
		div.css('background-image', `url('/dist/images/${images[i]}'`);
		$("#carrousel").append(div);
	}

	$(".owl-carousel").owlCarousel({
		items : 4,
		loop: true,
		margin: 30,
		nav: true,
		autoWidth: true,
		dots: false,
	});
  });
