class Animation1{
    constructor() {
        this.time = 0;
        this.duration = 1000; // in milliseconds
        this.start = 0;
        this.imghit = new Image();
        this.imghit.src = './asset/hit.png';
        this.imgdefeat = new Image();
        this.imgdefeat.src = './asset/defeat.png';
        this.currentFramedf = 0; // Khung hình hiện tại
        this.totalFramesdf = 8; // Tổng số khung hình
        this.lastFramedf = 0; // Thời gian hiện tại (mili giây)
        this.frameDelay = 250; // Thời gian cho khung hình hiện thị (mili giây)
        this.defeatStartTime = 0; // Add start time tracker
        this.defeatDuration = 2000; // 2 seconds in milliseconds
    }
    gethit(object,context) {
        context.drawImage(
            this.imghit,
            object.x - 10, object.y - 10,      // Destination X, Y
            65, 65   // Destination width, height
        );
        this.imghit.onload = () => {
            console.log('Hit image loaded successfully');
            console.log('Image dimensions:', this.imghit.width, 'x', this.imghit.height);
        };
        this.imghit.onerror = () => {
            console.error('Error loading hit image');
    }
}
    defeat(object,context) {
        // Initialize start time if this is the first frame
        if (this.currentFramedf === 0) {
            this.defeatStartTime = performance.now();
        }
        
        const frameWidth = this.imgdefeat.width / 4;  // 4 columns
        const frameHeight = this.imgdefeat.height / 2; // 2 rows
        const column = this.currentFramedf % 4;  // Get current column (0-3)
        const row = Math.floor(this.currentFramedf / 4); // Get current row (0-1)
        
        // Source coordinates in sprite sheet
        const sourceX = column * frameWidth;
        const sourceY = row * frameHeight;
        // Draw the current frame
        context.drawImage(
            this.imgdefeat,
            sourceX, sourceY,           // Source X, Y
            frameWidth, frameHeight,    // Source width, height
            object.x, object.y,         // Destination X, Y
            object.rad, object.rad      // Destination width, height
        );
    }
    updateDefeat(currentTime) {
        // Check if animation duration has exceeded 2 seconds
        if (currentTime - this.defeatStartTime >= this.defeatDuration) {
            this.currentFramedf = 0; // Reset animation
            return;
        }

        if (currentTime - this.lastFramedf >= this.frameDelay) {
            this.currentFramedf = (this.currentFramedf + 1) % this.totalFramesdf; // Cập nhật khung hình
            this.lastFramedf = currentTime; // Cập nhật thời gian của khung hình hiện tại
        }
    }
}