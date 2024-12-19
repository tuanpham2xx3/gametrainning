class Player {
    constructor() {
        this.x = 250;
        this.y = 550;
        this.width = 5;
        this.height = 5;
        this.rad = 5;
        this.image = new Image();
        this.image.src = './';
        this.direction = 1; // 1: phải, -1: trái
        this.speedX = 0;
        this.speedY = 0;
        this.acceleration = 0.5;
        this.hp = 100;
        this.dps = 10;
    }
    draw(context) {
        context.fillStyle = 'red'; // Thiết lập màu đỏ
        context.beginPath();
        context.arc( this.x, this.y, 5, 0, Math.PI * 2); // Vẽ hình tròn
        context.fill();
        context.closePath();
    }
    movex(direction) {
        this.speedX += direction * this.acceleration;
        this.x += this.speedX;
        this.x = Math.max(this.width, Math.min(this.x, 500 - this.width)); // Giới hạn x
    }
    movey(direction) {
        this.speedY += direction * this.acceleration;
        this.y += this.speedY;
        this.y = Math.max(this.height, Math.min(this.y, 600 - this.height)); // Giới hạn y
    }
    update() {
        this.speedX *= 0.1;
        this.speedY *= 0.1;
    }
}