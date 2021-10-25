function scrollFunction() {
  
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150)
    
  
  document.getElementById('image-id').style.opacity = '0';
  else {
      document.getElementById('image-id').style.opacity ='1';
    }
}
  
  window.onscroll = function() {scrollFunction()};
