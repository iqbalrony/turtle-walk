
var turtle = document.querySelector('.turtle');
// console.log(turtle);
var x = 0,
    y = 0,
    speed = 20,
    rotateY = '0deg',
    rotate = '0deg',
    winWidth = window.innerWidth - 16, // 16 is default left right margin
    winHeight = window.innerHeight - 16; // 16 is default top bottom margin

function handleTurtleWalk(e) {
    
    if (e.type === 'keydown' && e.key !== 'Enter') {
        return;
    }

    var plus = true;
    var minus = true;
    var direction = 'horizontal';
    var random = 1;

    setInterval(function () {
        random = Math.floor(Math.random() * 10);
        if (random % 2 === 0) {
            direction = 'horizontal';
        } else {
            direction = false;
        }
    }, 5000)

    function handleTurtleWalkInterval() {

        if (direction === 'horizontal') {
            if (plus) {
                x = x + speed;
                rotateY = '0deg';
                rotate = '0deg';
            } else {
                x = x - speed;
                rotateY = '185deg';
                rotate = '0deg';
            }
        } else {
            if (plus) {
                y = y + speed;
                rotate = '90deg';
            } else {
                y = y - speed;
                rotate = '-90deg';
            }
        }


        if ((winWidth - 150) < x) {
            x = winWidth - 150;
            plus = false;
        } else if (x < 0) {
            x = 0;
            plus = true;
        }

        if ((winHeight - 150) < y) {
            y = winHeight - 150;
            plus = false;
        } else if (y < 0) {
            y = 0;
            plus = true;
        }
        //console.log( plus,direction,random );
        turtle.style.transform = `
                    translateX(${ x}px)
                    translateY(${ y}px)
                    rotateY(${rotateY})
                    rotate(${rotate})
                `;

    }

    setInterval(handleTurtleWalkInterval, 500)
}

window.addEventListener('keydown', handleTurtleWalk, { once: true });
window.addEventListener('click', handleTurtleWalk, { once: true });
