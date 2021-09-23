// Isotope plugin begin
let $btns  = $('.work .button-group button');
$btns.click(function(e){
  $('.work .button-group button').removeClass('ative');
  e.target.classList.add('active');

  let selector = $(e.target).attr('data-filter');
  $('.work .grid').isotope({
    filter:selector
  });
  return false
})
// Isotope plugin end