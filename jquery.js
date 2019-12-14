$(function(){
	$(".nav ul li a").hover(function(){
		$(this).css({
			color:"yellow",
			textDecoration:"underline"
		});
	});

	$(".nav ul li a").mouseleave(function(){
		$(this).css({
			color:"white",
			textDecoration:"none"
		});
	});

	$(".s-list").hide();

	$(".nav ul li:nth-child(2)").hover(function(){
		$(".s-list").show();
	});

	$(".nav ul li:nth-child(2)").mouseleave(function(){
		$(".s-list").hide();
	});

	$(".nav ul li:nth-child(2)").click(function(){
    $("html, body").delay(500).animate({
			scrollTop: $(".services h1").offset().top 
	}, 500);
	});

	$(".intro h1.me").hover(function(){
		$(this).css({
			color:"white",
		});
	});

	$(".intro h1.me").mouseleave(function(){
		$(this).css({
			color:"yellow",
		});
	});

	$(".intro h1 a").mouseenter(function(){
		$(this).css({
			color:"black",
			backgroundColor:"yellow"
		});
	});

	$(".intro h1 a").mouseleave(function(){
		$(this).css({
			color:"white",
			backgroundColor:"#FA255E"
		});
	});

	$("#sv").mouseleave(function(){
		$(this).slideUp(1000);
		$(this).slideDown(1000);
	});

	$("#off").mouseleave(function(){
		$(this).slideUp("slow");
		$(this).slideDown("slow");
	});

	$(".story").hover(function(){
		$(this).fadeOut("slow");
		$(this).fadeIn("slow");
	});

	$(".contact").mouseleave(function(){
		$(".contact h1").slideUp(1000);
		$(".contact h1").slideDown("slow");
	});

	$(".form").mouseenter(function(){
		$(".form h2").slideUp(1000);
	});

	$(".form").mouseleave(function(){
		$(".form h2").slideDown("slow");
	});

	$("input").click(function(){
		$(this).css({
			backgroundColor:"black",
			color:"white"
		});
	});

	$("input").mouseleave(function(){
		$(this).css({
			backgroundColor:"white",
			color:"black"
		});
	});

	$("textarea").click(function(){
		$(this).css({
			backgroundColor:"black",
			color:"white"
		});
	});

	$("textarea").mouseleave(function(){
		$(this).css({
			backgroundColor:"white",
			color:"black"
		});
	});

	$("select").click(function(){
		$(this).css({
			backgroundColor:"black",
			color:"white"
		});
	});

	$("select").mouseleave(function(){
		$(this).css({
			backgroundColor:"white",
			color:"black"
		});
	});

	$(".ceo").mouseleave(function(){
		$(this).fadeIn(1000);
		$(this).fadeOut(1000);
		$(this).fadeIn(1000);
	});

	// SLIDER FOR CEO
	var width = "100%";
	var animationspeed = 2000;
	var pause = 100;

	var $slider = $("#slider");
	var $slidecontainer = $slider.find(".slides");
	var $slides = $slidecontainer.find(".slide");
	var currentslide=1;

	var interval;

	function startslider(){
		interval = setInterval(function(){
				$slidecontainer.animate({"margin-left": "-="+width}, animationspeed, function(){
					currentslide++;
					if (currentslide == $slides.length){
						currentslide = 1;
						$slidecontainer.css("margin-left",0);
					}
				});
			}, pause);
	}

	function pauseslider(){
		clearInterval(interval);
	}

	startslider();

	$slider.on("mouseenter", pauseslider).on("mouseleave", startslider);
	// END SLIDER

	// Form Submit
	$("#submitBtn").click(function(){        
        alert( 'Thank You For Reaching Out To Us' ); 
        $("#form").submit();
		event.preventDefault(); // Submit the form
		const form = getElementByTagName("form");
		form.reset()
	});
		
	$("footer div ul li:nth-child:(3) a").click(function(){
    $("html, body").delay(500).animate({
			scrollTop: $(".services").offset().top 
	}, 500);
	});

});


