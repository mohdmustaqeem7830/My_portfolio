//  ...............menubar...............

const menuicon = document.querySelector('#menuicon');
const menu = document.querySelector('#menu');
const hlink = document.querySelector('#hlink');
const fasolid  = document.querySelector(".fa-solid");


menuicon.addEventListener('click', () =>{
   menu.classList.toggle('hidden');
   fasolid.classList.toggle('fa-xmark');

})

window.addEventListener('scroll',()=>{
   menu.classList.add('hidden');
   fasolid.classList.remove('fa-xmark');
})
 
 