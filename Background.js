// Generated JS from Java: Background -----
function Background(x, y) {
   this.img = null;
   this.tx = null;
   this.stage = null;
   this.stageNum = 0;

   jv_Object.call(this);
   this._BackgroundInit();
   this.img = this.getImage(this.stage[this.stageNum]);
   this.tx = java_awt_geom_AffineTransform_c.getTranslateInstance(x, y);
   this.init(x, y);
}

var Background_c = sc_newClass("Background", Background, jv_Object, null);

Background_c.paint = function (g)  {
   var g2 = (g);
   this.update();
   g2.drawImage(this.img, this.tx, null);
};
Background_c.update = function ()  {
};
Background_c.init = function (a, b)  {
   this.tx.setToTranslation(a, b);
   this.tx.scale(0.32, 0.31);
};
Background_c.getImage = function (path)  {
   if (arguments.length == 0) return;
   var tempImage = null;
   try {
      var imageURL = Background_c.getResource(path);
      tempImage = java_awt_Toolkit_c.getDefaultToolkit().getImage(imageURL);
   }
   catch(e) {
      if ((e instanceof jv_Exception)) {
      e.printStackTrace();
      }
      else
         throw e;
   }
   return tempImage;
};
Background_c.changeImage = function ()  {
   if (this.stageNum < 3) {
      this.stageNum++;
   }
   else {
      this.stageNum = 0;
   }
   this.img = this.getImage(this.stage[this.stageNum]);
};
Background_c.resetBg = function ()  {
   this.stageNum = 0;
   this.img = this.getImage(this.stage[this.stageNum]);
};

Background_c._BackgroundInit = function() {
   this.stage = sc_initArray(String_c, 1,
              [ "/imgs/bg.png", "/imgs/bg2.png", "/imgs/bg3.png", "/imgs/bg4.png" ]);
      ;
   this.stageNum = 0;
      ;
};
