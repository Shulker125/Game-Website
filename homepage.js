function scrollFunction() {
  
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40)
    
  
  document.getElementById('image-id').style.opacity = '0';
  else {
      document.getElementById('image-id').style.opacity ='1';
    }
}
  
  window.onscroll = function() {scrollFunction()};
