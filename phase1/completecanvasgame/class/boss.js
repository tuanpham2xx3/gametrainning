class Boss {
    constructor() {
        this.x = 210;
        this.y = 50;
        this.width = 80;
        this.height = 80;
        this.image = new Image();
        this.image.src = './asset/boss.png';
        this.speedX = 0;
        this.speedY = 0;
        this.acceleration = 0.5;
        this.directionx = 1;
        this.directiony = 1;
        this.hp = 100000000;
    }
    draw(context) {
        context.fillStyle = 'black';
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    move() {
        let step = 1;
        // Di chuyển qua phải
        if (this.x < 420 && this.directionx === 1) {
            this.speedX += step * this.acceleration;
            this.x += this.speedX;
        }
        // Di chuyển qua trái
        if (this.x > 0 && this.directionx === -1) {
            this.speedX += -1 * step * this.acceleration;
            this.x += this.speedX;
        }


        if (this.y < 120 && this.directiony === 1) {
            this.speedY += step * this.acceleration;
            this.y += this.speedY;
        }
        // Di chuyển qua trái
        if (this.y > 0 && this.directiony === -1) {
            this.speedY += -1 * step * this.acceleration;
            this.y += this.speedY;
        }

        if (this.y >= 120) {
            this.directiony = -1; // Đổi hướng sang trái
        } else if (this.y <= 40) {
            this.directiony = 1; // Đổi hướng sang phải
        }

        // Đảo hướng khi chạm vào biên
        if (this.x >= 380) {
            this.directionx = -1; // Đổi hướng sang trái
        } else if (this.x <= 40) {
            this.directionx = 1; // Đổi hướng sang phải
        }
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