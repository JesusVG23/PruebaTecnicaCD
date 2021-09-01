const menuBoton= document.querySelector('#menuBoton'),
    menu = document.querySelector('#menu');

    menuBoton.addEventListener("click", a =>{
menu.classList.toggle('activar');

const imagen= a.target.getAttribute('src');
if(imagen=='Menu.png'){
    a.target.setAttribute('src','MenuAbierto.png')
}else{
    a.target.setAttribute('src','Menu.png')

}
    })