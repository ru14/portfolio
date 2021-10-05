// Isotope plugin begin
let $btns  = $('.work .button-group button');
$btns.click(function(e){
  $('.work .button-group button').removeClass('active');
  e.target.classList.add('active');

  let selector = $(e.target).attr('data-filter');
  $('.work .grid').isotope({
    filter:selector
  });
  return false
})
// Isotope plugin end

//$('.work .button-group button').trigger('click')