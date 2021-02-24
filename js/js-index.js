
//scrollفي تغير اللون مع ال navbarده جزء ال

let aboutOffsetTop = $("#About").offset().top;

$(window).scroll(function(){
	
	let wScroll = $ (window).scrollTop();
		
		if(wScroll > aboutOffsetTop -100){
			$(".navbar").css("backgroundColor","rgba(0,0,0,0.7)")
			$("#btnUp").fadeIn(500);
			$(".navbar").css("padding", "0px 70px");
			
		}
		else{
			$(".navbar").css("backgroundColor","transparent")
			$("#btnUp").fadeOut(500);
			$(".navbar").css("padding", "0px 0px");
			
		}
})
$("#btnUp").click(function(){
	
	$("html,body").animate({scrollTop:0} , 3000);
})

//==================================================================================================================================
let aboutOffsetTopLeft = $("#Contact").offset().top;

$(window).scroll(function(){
	
	let wScroll = $ (window).scrollTop();
		
		if(wScroll > aboutOffsetTopLeft){
			$("#btnUpLeft").fadeOut(500);
		}
		else{
			$("#btnUpLeft").fadeIn(500);
		}
})

$("#btnUpLeft").click(function () {
	$("html,body").animate({scrollTop:10000} , 5000);
})

//==================================================================================================================================
//يتحرك بشكل جميل navbarده علشان لم اضغط علي اي لينك في ال

 $("a[href^='#']").click(function(){
	
	let aHref = $ (this).attr("href");
	
	let sectionOffset = $(aHref).offset().top; 
	
	$("html,body").animate({scrollTop:sectionOffset} , 1000);
});
 
 
//==================================================================================================================================
//ده علشان بوكس الالوان
$("#sideBarToggle").click(function(){
	
	let colorBoxWidth = $ ("#colorBox").innerWidth();
	
	if($('#sideBar').css("left")=="0px")//البوكس كده بره
	{
		$("#sideBar").animate({left:`-${colorBoxWidth}`}, 2000);
	}
	else
	{
		$('#sideBar').animate({left:`0px`}, 2000);
	}

})

 //تغير اللون في البوكس 
 for(let i =0; i< $(".color-item").length; i++)
 {
	let red = Math.round(Math.random()*255);
	let green = Math.round(Math.random()*255);
	let blue = Math.round(Math.random()*255);
	
	$(".color-item").eq(i).css("backgroundColor" , `rgb(${red} ,${green} ,${blue} )`);
 }
 
//بيغير بقي الالون اللي انت عايزه boxلم اضغط علي لون من الالون في ال
$(".color-item").click(function(){
	let bkgColor = $ (this).css("backgroundColor");
	$("#About, #Team, #Services, #Works, #Pricing, #Contact").css("backgroundColor" , bkgColor) 
})

//بيغير بقي الالون اللي انت عايزه boxلم اضغط علي لون من الالون في ال
$(".color-item").click(function(){
	let bColor = $ (this).css("backgroundColor");
	$(".animated").css("color" , bColor)
})

//==================================================================================================================================
// ده علشان لم الموقع يحمل يطلع شكل اعقبال م يحمل 
$(document).ready(function(){

	$("#loading").fadeOut(2000 , function(){
		$("body").css("overflow-y" , "auto")
	});
});

//==================================================================================================================================
//ده علشان الموقع يكتب اتوماتك
	var typed = new Typed('.element', {
  strings: ["apps", "apps","websites", "softwares"],typeSpeed: 90,loop :true,
});