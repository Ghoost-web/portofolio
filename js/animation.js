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





// window.onscroll = function () {
//     //console.log(scrollY);
//     if (scrollY >= 700) {
//       x.style.display = "block";
//     }  else if(scrollY >= 300) {
//         leftItems.forEach(i => i.style = `transform: translate(0)`);
//         rightItems.forEach(i => i.style = `transform: translate(0)`);
//     } else {
//         x.style.display = "none";
//         aboutUsAnimation();
//     }
//     /* start check the screeen in mobile mode */
//     if(theBody.getBoundingClientRect().width<2775){
//         skillsBoxs.forEach((box,i)=>{
//             if(box.getBoundingClientRect().top-window.innerHeight+100<1&&box.getBoundingClientRect().top-window.innerHeight+10>-500){
//                if(!arrEnBox[i]){
//                 arrEnBox[i]=true;
//                 box.style.right=`0px`;
//                }
//             }
//         })        
//     }
//   };
/**
 * End helper fuctions
 */





/**
 * End of script
 */