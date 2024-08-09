function menushwo(){
    let menuMobile = document.querySelector('.mobile-menu');
 if(menuMobile.classList.contains('open')){
 menuMobile.classList.remove('open');
document.querySelector('.icon').src="img/1485477024-menu_78574.png";

}else{
    menuMobile.classList.add('open');
    document.querySelector('.icon').src="img/1485477079-close_78565.png"
}
}




