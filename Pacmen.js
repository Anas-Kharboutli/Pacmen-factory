    const pacArray = [
        ['PacMan1.png', 'PacMan2.png'],
        ['PacMan3.png', 'PacMan4.png']
    ];
    const pacMen = [];
    
    function setToRandom(scale) {
    return {
            x: Math.random() * scale,
            y: Math.random() * scale
        }
    };

    function makePac () {
        let position = setToRandom(200);
        let velocity = setToRandom(10);
        let game = document.getElementById('game');
        let newImg = document.createElement('img');

        newImg.src = './PacMan1.png';
        newImg.style.position = 'absolute';
        newImg.width = 100;
        newImg.style.left = position.x + 'px';
        newImg.style.top = position.y + 'px';
        game.appendChild(newImg);

        return {
            velocity,
            position,
            newImg
        }
    };

    function update() {
        pacMen.forEach((item) => {
            checkCollisions(item)
            item.position.x += item.velocity.x;
            item.position.y += item.velocity.y;

            item.newImg.style.left = item.position.x + 'px';
            item.newImg.style.top = item.position.y + 'px';
        })
        setTimeout(update, 20);
    }

    function checkCollisions(item){
        if (item.position.x + item.velocity.x + item.newImg.width > window.innerWidth ||
            item.position.x + item.velocity.x < 0) item.velocity.x = -item.velocity.x;
        if (item.position.y + item.velocity.y + item.newImg.height > window.innerHeight ||
            item.position.y + item.velocity.y < 0) item.velocity.y = -item.velocity.y;   
    }

    function makeOne() {
        pacMen.push(makePac());
    };
 