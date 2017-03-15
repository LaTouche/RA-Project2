$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1240:{
            items:4
        }
    }
})
  $(".addtocart").on("click", function (){
       var inputField = parseInt($("#cartQty").val()); // increase value by 1 when clicked
           $("#cartQty").val(inputField + 1);
       })
  $(".addtocart").click(function(){ //shows the input for cart quantities
   $("#cartQty").show();
})

  $("input.submitButton").on("click", function() {
  	alert("Thanks for Subscribing!")
  })

});




