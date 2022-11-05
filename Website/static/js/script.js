function fadeIn(el) {
    el.style.opacity = 0;
    var tick = function () {
        el.style.opacity = +el.style.opacity + 0.01;
        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }
    };
    tick();
}

function switchImg(x) {
    var el = document.getElementById("displayCard")
    if (x == 1) {
        el.src = "https://cdn.no1irishstig.co.uk/p9yf2.png";
    }
    if (x == 2) {
        el.src = "https://cdn.no1irishstig.co.uk/4w0d8.png";
    }
    if (x == 3) {
        el.src = "https://cdn.no1irishstig.co.uk/gfmq5.png";
    }
    if (x == 4) {
        el.src = "https://cdn.no1irishstig.co.uk/az822.png";
    }
    if (x == 5) {
        el.src = "https://cdn.no1irishstig.co.uk/rf78x.png";
    }
    if (x == 6) {
        el.src = "https://cdn.no1irishstig.co.uk/86isj.png";
    }
    if (x == 7) {
        el.src = "https://cdn.no1irishstig.co.uk/ufiv5.png";
    }
    if (x == 8) {
        el.src = "https://cdn.no1irishstig.co.uk/bp5ll.png";
    }
    if (x == 9) {
        el.src = "https://cdn.no1irishstig.co.uk/ghwvd.png";
    }
    if (x == 10) {
        el.src = "https://cdn.no1irishstig.co.uk/mkjt6.png";
    }
}
