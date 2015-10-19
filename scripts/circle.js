
var Circle = function (radius, speed, direction) {
      this.radius = radius;
      this.speed = speed;
      this.direction = direction;
      this.angle = 0;
}

Circle.prototype.rotate = function () {
      this.angle += this.direction * this.speed;
      this.draw();
}
Circle.prototype.draw = function () {
      var x = window.centerX;
      var y = window.centerY;
      this.startAngle = convertToRadians(this.angle);
      this.endAngle = this.startAngle + convertToRadians(12 * this.speed);

      // clear last iteration
      context.beginPath();
      context.arc(x, y, this.radius, 0, 2 * Math.PI, false);
      context.fillStyle = 'transparent';
      context.fill();
      context.lineWidth = 6;
      context.strokeStyle = 'black';
      context.stroke();
            
      // create the main arc
      context.beginPath();
      context.arc(x, y, this.radius, 0, 2 * Math.PI, false);
      context.fillStyle = 'transparent';
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = 'red';
      context.stroke();

      // create the opening in the arc
      context.beginPath();
      context.arc(x, y, this.radius, this.startAngle, this.endAngle, false);
      context.fillStyle = 'transparent';
      context.fill();
      context.lineWidth = 6;
      context.strokeStyle = 'black';
      context.stroke();
}

