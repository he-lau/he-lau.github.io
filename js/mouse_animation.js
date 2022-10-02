$( document ).ready(function() {
  // convert h3 to span
  const text = document.querySelector('#mouse_animation_text');
  text.innerHTML = text.textContent.replace(/\S/g,'<span class="mouse_animation_span">$&</span>');

  // circular span
  const element = document.querySelectorAll('.mouse_animation_span');
  for (var i = 0; i < element.length; i++) {
    // changing size to text length
    element[i].style.transform = 'rotate('+i*32+'deg)'
  }

  // cursor
  document.addEventListener('mousemove',function(event){
    // x-axis
    text.style.left = event.pageX + 'px';
    // y-axis
    text.style.top = event.pageY + 'px';
  })

});
