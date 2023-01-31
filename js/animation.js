/**
 *  This was created by GhostWeb Design company
 *  All rights reserved.
 */

/**
 * Start of global variables
 */



/**
 * Start helper fuctions
 */

/* skills section to the right and left */
const skillsBoxs = document.querySelectorAll('#skills .box');
let arrEnBox = [];
const revSkilsBoxs=()=>{
    //check screen mobile or desktop
    let rigthPx=0;
    // for moblie 
    if(theBody.getBoundingClientRect().width<775){
        rigthPx=520;
        for(const box of skillsBoxs){
            box.style.right = `${rigthPx*=-1}px`;
            arrEnBox.push(false);
        }
    }
    // for taplate
    else if(theBody.getBoundingClientRect().width<1190){
        rigthPx=1100;
        for(const box of skillsBoxs){
            box.style.right = `${rigthPx==580?rigthPx=1100:rigthPx=580}px`;
            arrEnBox.push(false);
        }
    }
    //for desktop
    else if(theBody.getBoundingClientRect().width<2000){
        rigthPx=2100;
        let threeTop =0;
        for(const box of skillsBoxs){
            box.style.right = `${rigthPx}px`;
            arrEnBox.push(false);          
        }
    }
}

revSkilsBoxs();



/**
 * End helper fuctions
 */





/**
 * End of script
 */