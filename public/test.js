function myFunction() {
var dots = document.getElementById("dots");
var moreText = document.getElementById("more");
var btnText = document.getElementById("myBtn");
var halfFade = document.getElementById("half-fade")
var highFade = document.getElementById("high-fade")


if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
    halfFade.style.opacity = 0.7;
    highFade.style.opacity = 0.2;
  } else {
    // step=1;
    // rollball(moreText);
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
    halfFade.style.opacity = 1;
    highFade.style.opacity = 1;
  }
}

// function easeOutCubic(currentIteration, startValue, changeInValue, totalIterations) {
//    if ((currentIteration /= totalIterations / 2) < 1) {
//       return changeInValue / 2 * Math.pow(currentIteration, 3) + startValue;
//    }
//    return changeInValue / 2 * (Math.pow(currentIteration - 2, 3) + 2) + startValue;
// }
//
//
// function rollball (moreText) {
//    easing = easeOutCubic(step, 0, 0, 128);
//    moreText['style'] = 'height:' + easing + 'px';
//    // moreText.setAttribute('style','height:' + easing + 'px');
//    step++;
//    if (step > 128) {
//       document.getElementById('beachball').endElement();
//       cancelAnimationFrame (repeater);
//       step = 0;
//    } else {
//       repeater = requestAnimationFrame (rollball);
//    }
// }
