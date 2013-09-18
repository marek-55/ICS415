$(document).ready( function(){
	 $('.answer').hide();
	}
);

function toggle(number){
	 $plus = "[+]";
	 $minus = "[-]";
	 switch (number){
		 case ("one"):
			 $("ul li:nth-child(2)").toggle();
			 if($("ul li:nth-child(1) #sign").html() == $plus){
				 $("ul li:nth-child(1) #sign").html("[-]");
			 }else{
				 $("ul li:nth-child(1) #sign").html("[+]");			 
			 }
			 break;
		 case ("three"):
			 $("ul li:nth-child(4)").toggle();
			 if($("ul li:nth-child(3) #sign").html() == $plus){
				 $("ul li:nth-child(3) #sign").html("[-]");
			 }else{
				 $("ul li:nth-child(3) #sign").html("[+]");			 
			 }
			 
			 break;
		 case ("five"):
			 $("ul li:nth-child(6)").toggle();
			 if($("ul li:nth-child(5) #sign").html() == $plus){
				 $("ul li:nth-child(5) #sign").html("[-]");
			 }else{
				 $("ul li:nth-child(5) #sign").html("[+]");			 
			 }
			 break;
		 case ("seven"):
			 $("ul li:nth-child(8)").toggle();
			 if($("ul li:nth-child(7) #sign").html() == $plus){
				 $("ul li:nth-child(7) #sign").html("[-]");
			 }else{
				 $("ul li:nth-child(7) #sign").html("[+]");			 
			 }
			 break;
		 case ("nine"):
			 $("ul li:nth-child(10)").toggle();
			 if($("ul li:nth-child(9) #sign").html() == $plus){
				 $("ul li:nth-child(9) #sign").html("[-]");
			 }else{
				 $("ul li:nth-child(9) #sign").html("[+]");			 
			 };
			 break;
	 }
}