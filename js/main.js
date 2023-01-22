/**
 *  This was created by GhostWeb Design company
 *  All rights reserved.
 */

/**
 * Start of global variables
 */



/**
 * End of global variables
 */
const leftItems = document.querySelectorAll('.left .item')
const rightItems = document.querySelectorAll('.right .item')

function aboutUsAnimation() {

    leftItems.forEach(i => i.style = `transform: translate(-600px)`)
    rightItems.forEach(i => i.style = `transform: translate(600px)`)

}
document.body.onscroll = () => {
    if (scrollY >= 300) {
        leftItems.forEach(i => i.style = `transform: translate(0)`)
        rightItems.forEach(i => i.style = `transform: translate(0)`)
    } else {
        aboutUsAnimation()
    }
}

































/**
 * End of script
 */