/**
 *  This was created by GhostWeb Design company
 *  All rights reserved.
 */

/**
 * Start of global variables
 */
const leftItems = document.querySelectorAll('.left .item')
const rightItems = document.querySelectorAll('.right .item')



/**
 * End of global variables
 */
/**
 * Start helper fuctions
 */
function aboutUsAnimation() {

    leftItems.forEach(i => i.style = `transform: translate(-600px)`)
    rightItems.forEach(i => i.style = `transform: translate(600px)`)

}



/**
 * End helper fuctions
 */




/** start button an scroll  */
let x = document.getElementById("top");
x.onclick = function () {
  scroll({ top: 0, behavior: "smooth" });
};
window.onscroll = function () {
console.log(scrollY);
    if (scrollY >= 700) {
      x.style.display = "block";
    }  else if(scrollY >= 300) {
        leftItems.forEach(i => i.style = `transform: translate(0)`)
        rightItems.forEach(i => i.style = `transform: translate(0)`)
    } else {
        x.style.display = "none";
        aboutUsAnimation()
    }
  };
/** end button an scroll  */

























/**
 * End of script
 */