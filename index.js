/****************************** DON'T ALTER ******************************/
function fadeOut(el) {
  el.classList.add("fade-up-out")
  setTimeout(() => {
    el.style.opacity = 0
    el.classList.remove("fade-up-out")
    el.style.pointerEvents = "none"
  }, FADEDURATION)
}

function fadeIn(el) {
  el.classList.add("fade-down-in")
  setTimeout(() => {
    el.style.opacity = 1
    el.classList.remove("fade-down-in")
    el.style.pointerEvents = "auto"
  }, FADEDURATION)
}

function transitionPage(el, groupOut, groupIn) {
  console.log(el)
  fadeAllOut(el, groupOut)
  setTimeout(() => {
    fadeAllIn(groupIn)
  }, LONGESTPOSSIBLE)
}
/*************************************************************************/

function delayedFadeOut(div, range) {
  // Your solution here

  setTimeout(() =>{
    fadeOut(div)}, Math.random() * MINDELAY + range)
}

function delayedFadeIn(div, range) {
  // Your solution here
  setTimeout(() =>{
    fadeIn(div)}, Math.random() * MINDELAY + range)
}

function fadeAllOut(el, group) {
  // Your solution here
  group.forEach(div => {
    if (div === el){
      delayedFadeOut(div, LONGRANGE)
    }else{
      delayedFadeOut(div, SHORTRANGE)
    }
  })
}

function fadeAllIn(group) {
  // Your solution here
  group.forEach(div => {
    delayedFadeIn(div, SHORTRANGE)
  })
}
