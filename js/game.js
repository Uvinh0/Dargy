class Game {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.ctx = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }
}
window.addEventListener('load', function() {
    const canvas = document.getElementById('game-layout');
    const ctx = canvas.getContext('2d');
    canvas.width = 720;
    canvas.height = 720;
});

