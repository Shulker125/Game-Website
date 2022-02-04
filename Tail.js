// Generated JS from Java: Tail -----
function Tail(x, y) {
   this.x = 0;
 this.y = 0;
   this.v = 0;
   this.direction = 0;
   this.newColor = null;

   java_lang_Object.call(this);
   this._TailInit();
   this.x = x;
   this.y = y;
}

var Tail_c = sc_newClass("Tail", Tail, jv_Object, null);

Tail_c.paint = function (g)  {
   g.setColor(this.newColor);
   g.fillRect(this.x, this.y, 40, 40);
};
Tail_c.moveMain = function (direction)  {
   if (direction === 0 && direction !== 2 && Head.run) {
      this.x = Head.getX() - 80;
      this.y = Head.getY();
      this.direction = 0;
      this.x += this.v;
   }
   else
   if (direction === 2 && direction !== 0 && Head.run) {
      this.x = Head.getX() + 80;
      this.y = Head.getY();
      this.direction = 0;
      this.x -= this.v;
   }
   else
   if (direction === 1 && direction !== 3 && Head.run) {
      this.y = Head.getY() - 80;
      this.x = Head.getX();
      this.direction = 0;
      this.y += this.v;
   }
   else
   if (direction === 3 && direction !== 1 && Head.run) {
      this.y = Head.getY() + 80;
      this.x = Head.getX();
      this.direction = 0;
      this.y -= this.v;
   }
};
Tail_c.move = function (direction, tailX, tailY)  {
   if (direction === 0 && direction !== 2 && Head.run) {
      this.x = tailX - 80;
      this.y = tailY;
      this.direction = 0;
      this.x += this.v;
   }
   else
   if (direction === 2 && direction !== 0 && Head.run) {
      this.x = tailX + 80;
      this.y = tailY;
      this.direction = 0;
      this.x -= this.v;
   }
   else
   if (direction === 1 && direction !== 3 && Head.run) {
      this.y = tailY - 80;
      this.x = tailX;
      this.direction = 0;
      this.y += this.v;
   }
   else
   if (direction === 3 && direction !== 1 && Head.run) {
      this.y = tailY + 80;
      this.x = tailX;
      this.direction = 0;
      this.y -= this.v;
   }
};
Tail_c.getX = function ()  {
   return this.x;
};
Tail_c.getY = function ()  {
   return this.y;
};
Tail_c.getDir = function ()  {
   return this.direction;
};

Tail_c._TailInit = function() {
   this.v = 40;
      ;
   this.direction = 0;
      ;
   this.newColor = new java_awt_Color(0, 0, 0);
      ;
};
