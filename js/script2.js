
var turtle = document.querySelector('.turtle');
// console.log(turtle);
var x = 0,
    y = 0,
    speed = 50,
    rotateY = '0deg',
    rotate = '0deg',
    winWidth = window.innerWidth - 16, // 16 is default left right margin
    winHeight = window.innerHeight - 16; // 16 is default top bottom margin

function handleTurtleWalk(e) {
    if (!e.key.includes('Arrow')) {
        return;
    }
    switch (e.key) {
        case 'ArrowRight':
            x = x + speed;
            rotateY = '0deg';
            rotate = '0deg';
            break;
        case 'ArrowLeft':
            x = x - speed;
            rotateY = '185deg';
            rotate = '0deg';
            break;
        case 'ArrowDown':
            y = y + speed;
            rotate = '90deg';
            break;
        case 'ArrowUp':
            y = y - speed;
            rotate = '-90deg';
            break;
    }

    if ((winWidth - 150) < x) {
        x = winWidth - 150;
    } else if (x < 0) {
        x = 0;
    }

    if ((winHeight - 150) < y) {
        y = winHeight - 150;
    } else if (y < 0) {
        y = 0;
    }
    //console.log(winHeight,y);
    turtle.setAttribute('style', `
                    --x: ${x}px;
                    --y: ${y}px;
                    --rotateY: ${rotateY};
                    --rotate: ${rotate};
                `
    );
}
window.addEventListener('keydown', handleTurtleWalk);
