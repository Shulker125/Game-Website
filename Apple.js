// Generated JS from Java: Apple -----
function Apple(x, y) {

   Apple_c._clInit();
   this.newColor = null;

   java_lang_Object.call(this);
   this._AppleInit();
   this.x = x;
   this.y = y;
}

var Apple_c = sc_newClass("Apple", Apple, jv_Object, null);

Apple_c.getX = function ()  {
   Apple_c._clInit();
   return Apple_c.x;
};
Apple_c.getY = function ()  {
   Apple_c._clInit();
   return Apple_c.y;
};
Apple_c.setX = function (x)  {
   this.x = x;
};
Apple_c.setY = function (y)  {
   this.y = y;
};
Apple_c.paint = function (g)  {
   g.setColor(this.newColor);
   g.fillOval(Apple_c.x, Apple_c.y, 40, 40);
};

Apple_c._AppleInit = function() {
   this.newColor = new java_awt_Color(255, 0, 0);
      ;
};
Apple_c._clInit = function() {
   if (Apple_c.hasOwnProperty("_clInited")) return;
   Apple_c._clInited = true;
   
      Apple_c.x = 0;
 Apple_c.y = 0;
};

