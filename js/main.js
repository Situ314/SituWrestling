;(function(){

	let sticky = false

	$("#sticky-navigation").removeClass("hidden")
	$("#sticky-navigation").slideUp(0)

	$(window).scroll(()=>{
		
		console.log(isInBottom())
		const inBottom = isInBottom()

		if(inBottom && !sticky){
			//mostrar navegación
			sticky = true
			stickNavigation()
		}else if(!inBottom && sticky){
			//ocultar navegación
			sticky = false
			unstickNavigation()
		}
	})

	function stickNavigation(){
		$("#description").addClass("fixed").removeClass("absolute")
		$("#navigation").slideUp()
		$("#sticky-navigation").slideDown()
	}

	function unstickNavigation(){
		$("#description").removeClass("fixed").addClass("absolute")
		$("#navigation").slideDown()
		$("#sticky-navigation").slideUp()
	}

	function isInBottom(){
		const $description = $("#description")		
		const descriptionHeight = $description.height()
		return $(window).scrollTop() > $(window).height() - descriptionHeight * 2
	}

})()