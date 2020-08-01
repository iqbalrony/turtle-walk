var turtle = document.querySelector('.turtle');
// console.log(turtle);
var x = 0,
    y = 0,
    speed = 50,
    rotateY = '0deg',
    rotate = '0deg',
    winWidth = window.innerWidth - 16,
    winHeight = window.innerHeight - 16;
function handleTurtleWalk(e) {
    if (!e.key.includes('Arrow')) {
        return;
    }
    switch (e.key) {
        case 'ArrowRight':
            x = x + 1;
            rotateY = '0deg';
            rotate = '0deg';
            break;
        case 'ArrowLeft':
            x = x - 1;
            rotateY = '185deg';
            rotate = '0deg';
            break;
        case 'ArrowDown':
            y = y + 1;
            rotate = '90deg';
            break;
        case 'ArrowUp':
            y = y - 1;
            rotate = '-90deg';
            break;
    }
    turtle.setAttribute('style', `
                    --x: ${x * speed}px;
                    --y: ${y * speed}px;
                    --rotateY: ${rotateY};
                    --rotate: ${rotate};
                `
    );
}
window.addEventListener('keydown', handleTurtleWalk);