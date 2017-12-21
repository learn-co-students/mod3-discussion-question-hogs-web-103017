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
  //fadeAllOut(el, groupOut)
  //console.log(el)
  newGroupOut = []
  delayedFadeOut(el, 2000)
  console.log("just called delayed fadeout")
  groupOut.forEach(function(div) {
    if (div === el) {
      //console.log("didn't push", div)
    } else {
      //console.log(newGroupOut)
      newGroupOut.push(div)
    }
  })
  console.log("'bout ready to fade all out'")
  fadeAllOut(el, newGroupOut)
  setTimeout(() => {
    fadeAllIn(groupIn)
  }, LONGESTPOSSIBLE)
}
/*************************************************************************/

function delayedFadeOut(div, range) {
  //console.log(range)
  setTimeout(()=>div.classList.add("fade-up-out"), 1000)
  setTimeout(() => {
    console.log('inside delayedFadeOut setTimeout function')
    div.style.opacity = 0
    div.classList.remove("fade-up-out")
    div.style.pointerEvents = "none"
  }, range)
  console.log("just called setTimeout with new range")
}

function delayedFadeIn(div, range) {
  console.log('whats the range?', range)
  // Your solution here
  fadeIn(div)
}

function fadeAllOut(el, group) {
  // Your solution here
  group.forEach(div => {
    fadeOut(div)
  })
}

function fadeAllIn(group) {
  // Your solution here
  group.forEach(div => {
    fadeIn(div)
  })
}
