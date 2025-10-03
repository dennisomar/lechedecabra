document.addEventListener("DOMContentLoaded", function(){
  fetch('https://api.countapi.xyz/hit/lechedecabraweb/visitas')
  .then(res => res.json())
  .then(res => {
    document.getElementById('counter-number').innerText = res.value;
  });
});