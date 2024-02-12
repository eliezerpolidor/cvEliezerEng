const bars=document.querySelector(".bars");
const bar_nav_lin=document.getElementById('bar_nav_lin') ;

bars.addEventListener("click",() =>{
    bar_nav_lin.classList.toggle('bar_nav_link_visible') ;
    
});

const dp5=document.querySelector(".dp5");
const ol5=document.getElementById('ol5');

dp5.addEventListener("click", ()=>{
    ol5.classList.toggle('ol_visible');
})