class BulletPlayer {
    constructor(player) {
        this.x = player.x-2;
        this.y = player.y-50;
        this.rad = 5;
        this.image = new Image();
        this.image.src = './';
        this.speedY = -5;
       
    }
    draw(context) {
        context.fillStyle = 'blue'; // Set bullet color to blue
        context.beginPath();
        context.arc( this.x, this.y, this.rad, 0, Math.PI * 2); // Vẽ hình tròn
        context.fill();
        context.closePath();
    }
    shoot(){
        this.y += this.speedY;
    } 
}
class BulletBoss {
    constructor(boss) {
        this.x = boss.x;
        this.y = boss.y;
        this.rad = 5 ;
        this.image = new Image();
        this.image.src = './';
        this.speed = 1;
        this.direction = Math.random() * 2 * Math.PI ;
    }
    draw(context) {
        context.fillStyle = 'black'; // Set bullet color to blue
        context.beginPath();
        context.arc( this.x, this.y, 5, 0, Math.PI * 2); // Vẽ hình tròn
        context.fill();
        context.closePath();
    }
    shoot(){
        this.y += this.speed * Math.sin(this.direction); // Cập nhật vị trí theo hướng
        this.x += this.speed * Math.cos(this.direction);
    } 
}
