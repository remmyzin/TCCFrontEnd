const hamburgue = document.querySelector (".brg")
const links = document.querySelector ("nav")

hamburgue.addEventListener("click", abrirMenu )

var elem = document.querySelector('#contato');
var flkty1 = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

function abrirMenu() {
  if ( links.style.display === 'flex') {
    links.style.display = "none"    
  } else {
    links.style.display = "flex"
  }

}






    var elem = document.querySelector('.info');
  var flkty2 = new Flickity( elem, {
    // options
    cellAlign: 'left',
    contain: true,
    watchCSS: true
  });


