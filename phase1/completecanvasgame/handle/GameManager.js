class GameManager {
    constructor() {
        this.score = 0;
        this.lives = 3;
        this.sate = 'playing';
    }
    setState(newState) {
        this.state = newState;
    }

    updateScore(points) {
        this.score += points;
        this.updateHUD(); // Cập nhật HUD khi điểm thay đổi
    }

    resetGame() {
        this.score = 0;
        this.lives = 3;
        this.state = 'playing';
        document.getElementById('restartButton').style.display = 'none'; // Ẩn nút khi khởi động lại
        this.updateHUD(); // Cập nhật HUD khi khởi động lại
    }

    updateHUD() {
        const hud = document.getElementById('hud');
        hud.innerHTML = `Score: ${this.score} | Lives: ${this.lives}`; // Cập nhật hiển thị điểm và mạng
    }
}