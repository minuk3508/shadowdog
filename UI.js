export class UI {
  constructor(game) {
    this.game = game;
    this.fontSize = 30;
    this.fontFamily = "Helvetica";
  }
  draw(context) {
    context.save();
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;
    context.shadowColor = "white";
    context.shadowBlur = 0;
    context.font = this.fontSize + "px " + this.fontFamily;
    context.textAlign = "left";
    context.fillStyle = this.game.fontColor;
    context.fillText("Score: " + this.game.score, 20, 50);
    context.font = this.fontSize * 0.8 + "px " + this.fontFamily;
    context.fillText("Time: " + (this.game.time * 0.001).toFixed(1), 20, 80);
    if (this.game.gameOver) {
      context.textAlign = "center";
      context.font = this.fontSize * 0.8 + "px " + this.fontFamily;
      if (this.game.score > 30) {
        context.fillText(
          "Good work",
          +this.game.width * 0.5,
          this.game.height * 0.5
        );
      } else {
        context.fillText(
          "Time Over",
          +this.game.width * 0.5,
          this.game.height * 0.5
        );
      }
    }
    context.restore();
  }
}
