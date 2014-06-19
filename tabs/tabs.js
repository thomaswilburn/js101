//$(".tab:not(:first)").hide();

//when we click on the menu links
$(".menu a").on("click", function(e) {
  e.preventDefault();
  var $this = $(this);
  //we want to figure out which tab they're linked to
  var href = $this.attr("href");
  var linked = $(href);
  //hide the current tab
  $(".tab:visible").hide();
  //show the linked tab
  linked.show();
  //remove the current active tab class
  $(".active").removeClass("active");
  //add it to our parent tab
  $this.closest("li").addClass("active");
});

$(".menu a:first").click();