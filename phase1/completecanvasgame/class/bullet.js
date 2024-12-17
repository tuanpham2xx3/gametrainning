class BulletPlayer {
    constructor(player) {
        this.x = player.x-2;
        this.y = player.y-50;
        this.width = 5;
        this.height = 30;
        this.image = new Image();
        this.image.src = './';
        this.speedY = -5;
    }
    draw(context) {
        context.fillStyle = 'blue'; // Set bullet color to blue
        context.fillRect(this.x, this.y, this.width, this.height); // Draw rectangle for bullet
    }
    shoot(){
        this.y += this.speedY;
    } 
}
class BulletBoss {
    constructor(boss) {
        this.x = player.x-2;
        this.y = player.y-50;
        this.width = 5;
        this.height = 30;
        this.image = new Image();
        this.image.src = './';
        this.speedY = -5;
    }
    draw(context) {
        context.fillStyle = 'blue'; // Set bullet color to blue
        context.fillRect(this.x, this.y, this.width, this.height); // Draw rectangle for bullet
    }
    shoot(){
        this.y += this.speedY;
    } 
}
