/**
 *  This was created by GhostWeb Design company
 *  All rights reserved.
 */

/**
 * Start of global variables
 */
const leftItems = document.querySelectorAll('.left .item');
const rightItems = document.querySelectorAll('.right .item');
const mobileMenu = document.querySelector('.mobile-menu');
const theBody = document.body;

/**
 * End of global variables
 */

/**
 * Start helper fuctions
 */
function aboutUsAnimation() {

    leftItems.forEach(i => i.style = `transform: translate(-600px)`);
    rightItems.forEach(i => i.style = `transform: translate(600px)`);

}
document.body.onscroll = () => {
    if (scrollY >= 300) {
        leftItems.forEach(i => i.style = `transform: translate(0)`);
        rightItems.forEach(i => i.style = `transform: translate(0)`);
    } else {
        aboutUsAnimation();
    }
}

// Start the function for opining the mobile-menu 
function sideMenu() {
	mobileMenu.style.display = 'block';
	document.body.style.overflow = 'hidden';
}
// End the function for opining the mobile-menu 

// Start the function for closing the mobile-menu
function closeMenu() {
	mobileMenu.style.display = 'none';
	document.body.style.overflow = 'visible';
}
// End the function for closing the mobile-menu




/**
 * End helper fuctions
 */




/** start button an scroll  */
let x = document.getElementById("top");
x.onclick = function () {
  scroll({ top: 0, behavior: "smooth" });
};
let rigthPx=1;
let theBoxEn1=false;
const skillsBoxs =document.querySelectorAll('#skills .box');
window.onscroll = function () {
    //console.log(scrollY);
    if (scrollY >= 700) {
      x.style.display = "block";
    }  else if(scrollY >= 300) {
        leftItems.forEach(i => i.style = `transform: translate(0)`);
        rightItems.forEach(i => i.style = `transform: translate(0)`);
    } else {
        x.style.display = "none";
        aboutUsAnimation();
    }
    /* start check the screeen in mobile mode */
    if(theBody.getBoundingClientRect().width<775){
        skillsBoxs.forEach((box)=>{
            if(box.getBoundingClientRect().top-window.innerHeight+100<1&&box.getBoundingClientRect().top-window.innerHeight+10>-500){
               console.log(5)
            }
        })        
    }
  };
/** end button an scroll  */
















/**
 * End of script
 */