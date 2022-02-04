// Generated JS from Java: Head -----
function Head() {

   Head_c._clInit();
   this.v = 0;
   this.newColor = null;

   if (arguments.length == 0) {
      java_lang_Object.call(this);
   this._HeadInit();
      Head_c.x = 0;
      Head_c.y = 100;
   }
   else if (arguments.length == 2) {
      var x = arguments[0];
      var y = arguments[1];
      java_lang_Object.call(this);
   this._HeadInit();
      this.x = x;
      this.y = y;
   }}

var Head_c = sc_newClass("Head", Head, jv_Object, null);

Head_c.getX = function ()  {
   Head_c._clInit();
   return Head_c.x;
};
Head_c.getY = function ()  {
   Head_c._clInit();
   return Head_c.y;
};
Head_c.paint = function (g)  {
   g.setColor(this.newColor);
   g.fillRect(Head_c.x, Head_c.y, 40, 40);
};
Head_c.move = function ()  {
   if (Head_c.x <= 600 && Head_c.x >= 0 && Head_c.direction === 0 && Head_c.direction !== 2) {
      Head_c.x += this.v;
   }
   else
   if (Head_c.x <= 600 && Head_c.x >= 0 && Head_c.direction === 2 && Head_c.direction !== 0) {
      Head_c.x -= this.v;
   }
   else
   if (Head_c.y >= 100 && Head_c.y <= 700 && Head_c.direction === 1 && Head_c.direction !== 3) {
      Head_c.y += this.v;
   }
   else
   if (Head_c.y >= 100 && Head_c.y <= 700 && Head_c.direction === 3 && Head_c.direction !== 1) {
      Head_c.y -= this.v;
   }
};
Head_c.collisionCheck = function ()  {
   if (Head_c.direction === 0 && Head_c.x === 640) {
      this.v = 0;
      Head_c.x = 600;
      Head_c.run = false;
   }
   else
   if (Head_c.direction === 1 && Head_c.y === 740) {
      this.v = 0;
      Head_c.y = 700;
      Head_c.run = false;
   }
   else
   if (Head_c.direction === 2 && Head_c.x === -40) {
      this.v = 0;
      Head_c.x = 0;
      Head_c.run = false;
   }
   else
   if (Head_c.direction === 3 && Head_c.y === 60) {
      this.v = 0;
      Head_c.y = 100;
      Head_c.run = false;
   }
};

Head_c._HeadInit = function() {
   this.v = 40;
      ;
   this.newColor = new java_awt_Color(0, 0, 100);
      ;
};
Head_c._clInit = function() {
   if (Head_c.hasOwnProperty("_clInited")) return;
   Head_c._clInited = true;
   
      Head_c.x = 0;
 Head_c.y = 0;
      Head_c.run = true;
      ;
      Head_c.direction = 0;
      ;
};

