
$(document).ready(function() {

	$(".bars").click(function(){
		$(".float-menu").slideToggle();
	});
	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	$(".owl-carousel").owlCarousel({
		items : 3,
		autoHeight : true,
		autoWidth: true,
		loop: true,
		center: true,
		autoplay: true,
		dots: true,

    responsive: {
        0:{
          items: 1
        },
        480:{
          items: 1
        },
        769:{
          items: 3
        }
    }
	});
	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	//Таймер на прелодер
	$("#preloder").delay(3150).fadeOut('slow');


//  sweetAlert("Oops...", "Something went wrong!", "error");
// $('img').load(function jjj() {
// 	swal("Our First Alert", "With some body text and success icon!", "success");
// });

var textV = document.getElementById("textVue").innerHTML;


function aler (){
	swal({
		title: 'The time jump is executed ',
		text: "Hello, traveller! You are " + textV,
		type: 'success'

	});
};
setTimeout(aler, 3500);

$(".a1").show(8000);

});
