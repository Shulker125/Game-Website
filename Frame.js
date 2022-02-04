// Generated JS from Java: Frame -----
function Frame() {

   sc_clInit(java_awt_event_ActionListener_c);
   sc_clInit(java_awt_event_MouseListener_c);
   sc_clInit(java_awt_event_KeyListener_c);   this.bg = null;
   this.player = null;
   this.title = null;
   this.black = null;
   this.white = null;
   this.enemy1 = null;
   this.enemy2 = null;
   this.enemy3 = null;
   this.enemy4 = null;
   this.bullet = null;
   this.enemyBullet = null;
   this.impact = null;
   this.fire = null;
   this.gameOver = null;
   this.levelUp = null;
   this.music = null;
   this.start = 0;
   this.timeStart = 0;
   this.init = false;
 this.hit = false;
 this.firstStart = false;
 this.isStageDisplayed = false;
   this.maxBullet = 0;
 this.score = 0;
 this.index1 = 0;
 this.index2 = 0;
 this.index3 = 0;
 this.index4 = 0;
 this.indexRemove = 0;
 this.difficulty = 0;
 this.multiplier = 0;
 this.maxScore = 0;
 this.rateOfFire = 0;
 this.bulletNum = 0;
 this.totalTime = 0;
 this.time = 0;
 this.stageNum = 0;
 this.isGameOver = 0;
 this.increment = 0;
   this.bullets = 0.0;
   this.direction = null;

   javax_swing_JPanel.call(this);
   this._FrameInit();
   this.bullet.add(new Projectile(-5, -5));
   this.enemyBullet.add(new Projectile(-500, -5));
   var f = new javax_swing_JFrame("Universe Marauders");
   f.setSize(new java_awt_Dimension(390, 600));
   f.setBackground(sc_clInit(java_awt_Color_c).blue);
   f.add(this);
   f.setResizable(false);
   f.setLayout(new java_awt_GridLayout(1, 2));
   f.addMouseListener(this);
   f.addKeyListener(this);
   var t = new javax_swing_Timer(20, this);
   t.start();
   f.setDefaultCloseOperation(sc_clInit(javax_swing_JFrame_c).EXIT_ON_CLOSE);
   f.setVisible(true);
   this.init = true;
}

var Frame_c = sc_newClass("Frame", Frame, javax_swing_JPanel, [java_awt_event_ActionListener,java_awt_event_MouseListener,java_awt_event_KeyListener]);

Frame_c.paint = function (g)  {
   javax_swing_JPanel_c.paintComponent.call(this, g);
   if (this.time > 0 && this.init) {
      this.updateTime();
   }
   else {
      this.init = false;
   }
   if (this.stageClear() && this.init && !this.firstStart && !this.isStageDisplayed) {
      this.calculateTimeScore();
      this.nextStage();
   }
   this.bg.paint(g);
   this.player.paint(g);
   if (this.firstStart) {
      this.title.paint(g);
      g.setColor(this.white);
      g.setFont(new java_awt_Font("Monospaced", sc_clInit(java_awt_Font_c).BOLD, 20));
      g.drawString("Select Difficulty", 98, 250);
      g.drawString("Easy: Click 1", 118, 270);
      g.drawString("Medium: Click 2", 105, 290);
      g.drawString("Hard: Click 3", 118, 310);
      g.setFont(new java_awt_Font("Monospaced", sc_clInit(java_awt_Font_c).BOLD, 14));
      g.drawString("WASD/Arrow Keys to move, Space/Click to fire", 17, 330);
   }
   if (this.isStageDisplayed) {
      this.displayStage();
      g.setColor(this.white);
      g.setFont(new java_awt_Font("Monospaced", sc_clInit(java_awt_Font_c).BOLD, 30));
      g.drawString("Stage " + this.stageNum, 130, 250);
   }
   g.setColor(this.black);
   g.setFont(new java_awt_Font("Monospaced", sc_clInit(java_awt_Font_c).BOLD, 30));
   g.drawString("Score:" + this.score, 115, 500);
   g.drawString("Time:" + this.time, 125, 550);
   if (this.init && !this.firstStart && !this.isStageDisplayed) {
      this.paint1(g);
      this.paint2(g);
      this.paint3(g);
      this.paint4(g);
      for (var i = 0; i < this.bullet.size(); i++) {
         this.bullet.get(i).paint(g);
      }
      for (var i = 0; i < this.enemyBullet.size(); i++) {
         this.enemyBullet.get(i).paint(g);
      }
   }
   if (this.hit) {
      this.bullet.remove(this.indexRemove);
      this.hit = false;
   }
   if (this.collide()) {
      this.init = false;
   }
   if (!this.init) {
      this.music.stop();
      g.setColor(this.white);
      g.drawString("Game Over!", 110, 200);
      g.setFont(new java_awt_Font("Monospaced", sc_clInit(java_awt_Font_c).BOLD, 20));
      g.drawString("Select Difficulty", 98, 230);
      g.drawString("Easy: Click 1", 118, 250);
      g.drawString("Medium: Click 2", 105, 270);
      g.drawString("Hard: Click 3", 118, 290);
      while (this.isGameOver < 1 && !this.firstStart) {
         this.gameOver.play();
         this.isGameOver++;
      }
   }
};
Frame_c.main = function (arg)  {
   var f = new Frame();
};
Frame_c.mousePressed = function (arg0)  {
   var key = arg0.getButton();
   if (key === 1 && this.init && !this.firstStart && !this.isStageDisplayed) {
      var time = jv_System_c.currentTimeMillis() - this.start;
      if (this.maxBullet < 1) {
         this.bullet.add(new Projectile(this.player.getX() - 36, this.player.getY()));
         this.fire.play();
         this.bulletNum++;
         this.maxBullet++;
      }
      if (time >= this.rateOfFire) {
         this.start = jv_System_c.currentTimeMillis();
         this.maxBullet = 0;
      }
   }
};
Frame_c.actionPerformed = function (arg0)  {
   this.repaint();
   if (this.init && !this.firstStart && !this.isStageDisplayed) {
      this.player.move();
      for (var i = 0; i < 5 - this.index1; i++) {
         this.enemy1.get(i).move();
      }
      for (var i = 0; i < 5 - this.index2; i++) {
         this.enemy2.get(i).move();
      }
      for (var i = 0; i < 5 - this.index3; i++) {
         this.enemy3.get(i).move();
      }
      for (var i = 0; i < 5 - this.index4; i++) {
         this.enemy4.get(i).move();
      }
      for (var i = 0; i < this.bullet.size(); i++) {
         this.bullet.get(i).fire();
      }
      for (var i = 0; i < this.enemyBullet.size(); i++) {
         this.enemyBullet.get(i).fireEnemy();
      }
   }
};
Frame_c.keyPressed = function (arg0)  {
   var key = arg0.getKeyCode();
   if (key === 68 || key === 39) {
      this.player.v = 2;
      this.direction = "right";
   }
   else
   if (key === 65 || key === 37) {
      this.player.v = -2;
      this.direction = "left";
   }
   if (!this.init && key === 49) {
      this.setDifficultyEasy();
      this.reset();
   }
   if (!this.init && key === 50) {
      this.setDifficultyMedium();
      this.reset();
   }
   if (!this.init && key === 51) {
      this.setDifficultyHard();
      this.reset();
   }
   if (this.firstStart && key === 49) {
      this.setDifficultyEasy();
      this.isStageDisplayed = true;
      this.timeStart = jv_System_c.currentTimeMillis();
      this.reset();
      this.firstStart = false;
   }
   else
   if (this.firstStart && key === 50) {
      this.setDifficultyMedium();
      this.isStageDisplayed = true;
      this.timeStart = jv_System_c.currentTimeMillis();
      this.reset();
      this.firstStart = false;
   }
   else
   if (this.firstStart && key === 51) {
      this.setDifficultyHard();
      this.isStageDisplayed = true;
      this.timeStart = jv_System_c.currentTimeMillis();
      this.reset();
      this.firstStart = false;
   }
};
Frame_c.keyReleased = function (arg0)  {
   var key = arg0.getKeyCode();
   if (!this.direction.equals("left") && key === 68 || key === 39 && !this.direction.equals("left")) {
      this.player.v = 0;
      this.direction = "";
   }
   else
   if (!this.direction.equals("right") && key === 65 || key === 37 && !this.direction.equals("right")) {
      this.player.v = 0;
      this.direction = "";
   }
   if (key === 32 && this.init && !this.firstStart && !this.isStageDisplayed) {
      var time = jv_System_c.currentTimeMillis() - this.start;
      if (this.maxBullet < 1) {
         this.bullet.add(new Projectile(this.player.getX() - 36, this.player.getY()));
         this.fire.play();
         this.bulletNum++;
         this.maxBullet++;
      }
      if (time >= this.rateOfFire) {
         this.start = jv_System_c.currentTimeMillis();
         this.maxBullet = 0;
      }
   }
};
Frame_c.paint1 = function (g)  {
   try {
      for (var i = 0; i < 5 - this.index1; i++) {
         this.enemy1.get(i).paint(g);
         this.spawnBullet(this.enemy1.get(i).getX() - 20, this.enemy1.get(i).getY());
         for (var x = 0; x < this.bullet.size(); x++) {
            if (this.bullet.get(x).getY() >= this.enemy1.get(i).getY() && this.bullet.get(x).getY() <= this.enemy1.get(i).getY() + 50 && !this.enemy1.isEmpty()) {
               if (this.bullet.get(x).getX() >= this.enemy1.get(i).getX() - 60 && this.bullet.get(x).getX() <= this.enemy1.get(i).getX()) {
                  this.impact.play();
                  this.indexRemove = x;
                  this.hit = true;
                  this.enemy1.remove(i);
                  this.index1++;
                  this.score += this.maxScore;
               }
            }
         }
      }
   }
   catch(e) {
      if ((e instanceof jv_IndexOutOfBoundsException)) {}
      else
         throw e;
   }
};
Frame_c.paint2 = function (g)  {
   try {
      for (var i = 0; i < 5 - this.index2; i++) {
         this.enemy2.get(i).paint(g);
         this.spawnBullet(this.enemy2.get(i).getX() - 20, this.enemy2.get(i).getY());
         for (var x = 0; x < this.bullet.size(); x++) {
            if (this.bullet.get(x).getY() >= this.enemy2.get(i).getY() && this.bullet.get(x).getY() <= this.enemy2.get(i).getY() + 50 && !this.enemy2.isEmpty()) {
               if (this.bullet.get(x).getX() >= this.enemy2.get(i).getX() - 60 && this.bullet.get(x).getX() <= this.enemy2.get(i).getX()) {
                  this.impact.play();
                  this.indexRemove = x;
                  this.hit = true;
                  this.enemy2.remove(i);
                  this.index2++;
                  this.score += this.maxScore - 1;
               }
            }
         }
      }
   }
   catch(e) {
      if ((e instanceof jv_IndexOutOfBoundsException)) {}
      else
         throw e;
   }
};
Frame_c.paint3 = function (g)  {
   try {
      for (var i = 0; i < 5 - this.index3; i++) {
         this.enemy3.get(i).paint(g);
         this.spawnBullet(this.enemy3.get(i).getX() - 20, this.enemy3.get(i).getY());
         for (var x = 0; x < this.bullet.size(); x++) {
            if (this.bullet.get(x).getY() >= this.enemy3.get(i).getY() && this.bullet.get(x).getY() <= this.enemy3.get(i).getY() + 50 && !this.enemy3.isEmpty()) {
               if (this.bullet.get(x).getX() >= this.enemy3.get(i).getX() - 60 && this.bullet.get(x).getX() <= this.enemy3.get(i).getX()) {
                  this.impact.play();
                  this.indexRemove = x;
                  this.hit = true;
                  this.enemy3.remove(i);
                  this.index3++;
                  this.score += this.maxScore - 2;
               }
            }
         }
      }
   }
   catch(e) {
      if ((e instanceof jv_IndexOutOfBoundsException)) {}
      else
         throw e;
   }
};
Frame_c.paint4 = function (g)  {
   try {
      for (var i = 0; i < 5 - this.index4; i++) {
         this.enemy4.get(i).paint(g);
         g.setColor(this.white);
         if (this.difficulty === 3) {
            this.spawnBullet(this.enemy4.get(i).getX() - 20, this.enemy4.get(i).getY());
         }
         for (var x = 0; x < this.bullet.size(); x++) {
            if (this.bullet.get(x).getY() >= this.enemy4.get(i).getY() && this.bullet.get(x).getY() <= this.enemy4.get(i).getY() + 50 && !this.enemy4.isEmpty()) {
               if (this.bullet.get(x).getX() >= this.enemy4.get(i).getX() - 60 && this.bullet.get(x).getX() <= this.enemy4.get(i).getX()) {
                  this.impact.play();
                  this.indexRemove = x;
                  this.hit = true;
                  this.enemy4.remove(i);
                  this.index4++;
                  this.score += this.maxScore - 3;
               }
            }
         }
      }
   }
   catch(e) {
      if ((e instanceof jv_IndexOutOfBoundsException)) {}
      else
         throw e;
   }
};
Frame_c.stageClear = function ()  {
   if (this.enemy1.size() === 0 && this.enemy2.size() === 0 && this.enemy3.size() === 0 && this.enemy4.size() === 0) {
      return true;
   }
   return false;
};
Frame_c.reset = function ()  {
   this.isStageDisplayed = true;
   this.bullet.clear();
   this.enemyBullet.clear();
   this.enemy1.clear();
   this.enemy2.clear();
   this.enemy3.clear();
   this.enemy4.clear();
   this.bg.resetBg();
   this.score = 0;
   this.bulletNum = 1;
   this.hit = false;
   this.maxBullet = 0;
   this.isGameOver = 0;
   this.index1 = 0;
   this.index2 = 0;
   this.index3 = 0;
   this.index4 = 0;
   this.time = this.totalTime;
   this.stageNum = 1;
   this.increment = 1000;
   this.bullet.add(new Projectile(-5, -5));
   this.enemyBullet.add(new Projectile(-500, -5));
   this.init = true;
   this.music.loop();
   this.timeStart = jv_System_c.currentTimeMillis();
};
Frame_c.nextStage = function ()  {
   this.levelUp.play();
   this.bg.changeImage();
   if (!this.firstStart) {
      this.isStageDisplayed = true;
      this.timeStart = jv_System_c.currentTimeMillis();
   }
   this.bulletNum = 1;
   this.hit = false;
   this.maxBullet = 0;
   this.index1 = 0;
   this.index2 = 0;
   this.index3 = 0;
   this.index4 = 0;
   this.stageNum++;
   this.increment = 0;
   if (this.totalTime !== 25) {
      this.totalTime -= 5;
   }
   this.time = this.totalTime;
   this.bullet.clear();
   this.enemyBullet.clear();
   this.enemy1.clear();
   this.enemy2.clear();
   this.enemy3.clear();
   this.enemy4.clear();
   this.bullet.add(new Projectile(-5, -5));
   this.enemyBullet.add(new Projectile(-500, -5));
};
Frame_c.updateTime = function ()  {
   var currentTime = jv_System_c.currentTimeMillis() - this.timeStart;
   if (currentTime > this.increment && !this.stageClear() && !this.isStageDisplayed) {
      this.time--;
      this.increment += 1000;
   }
};
Frame_c.calculateTimeScore = function ()  {
   if (this.stageClear()) {
      this.score += (this.time * this.multiplier);
   }
};
Frame_c.displayStage = function ()  {
   var currentTime = jv_System_c.currentTimeMillis() - this.timeStart;
   if (currentTime > 2000) {
      this.isStageDisplayed = false;
      this.timeStart = jv_System_c.currentTimeMillis();
      for (var i = 0, x = 0; i < 5; i++, x += 60) {
         this.enemy1.add(new Enemy1(x, 10));
         this.enemy2.add(new Enemy2(x, 90));
         this.enemy3.add(new Enemy3(x, 170));
         this.enemy4.add(new Enemy4(x, 250));
      }
   }
};
Frame_c.spawnBullet = function (x, y)  {
   if (jv_Math_c.random() < this.bullets) {
      this.enemyBullet.add(new Projectile(x, y));
   }
};
Frame_c.collide = function ()  {
   for (var i = 0; i < this.enemyBullet.size(); i++) {
      if (this.enemyBullet.get(i).getX() + 65 >= this.player.getX() + 15 && this.enemyBullet.get(i).getX() + 75 <= this.player.getX() + 55) {
         if (this.enemyBullet.get(i).getY() + 10 >= this.player.getY() + 10 && this.enemyBullet.get(i).getY() + 20 <= this.player.getY() + 60) {
            return true;
         }
      }
   }
   return false;
};
Frame_c.setDifficultyEasy = function ()  {
   this.difficulty = 1;
   this.totalTime = 60;
   this.multiplier = 2;
   this.bullets = 0.0008;
   this.maxScore = 4;
   this.rateOfFire = 500;
};
Frame_c.setDifficultyMedium = function ()  {
   this.difficulty = 2;
   this.totalTime = 50;
   this.multiplier = 5;
   this.bullets = 0.0016;
   this.maxScore = 5;
   this.rateOfFire = 750;
};
Frame_c.setDifficultyHard = function ()  {
   this.difficulty = 3;
   this.totalTime = 40;
   this.multiplier = 10;
   this.bullets = 0.003;
   this.maxScore = 8;
   this.rateOfFire = 1000;
};
Frame_c.keyTyped = function (arg0)  {
};
Frame_c.mouseClicked = function (arg0)  {
};
Frame_c.mouseEntered = function (arg0)  {
};
Frame_c.mouseExited = function (arg0)  {
};
Frame_c.mouseReleased = function (arg0)  {
};

Frame_c._FrameInit = function() {
   this.bg = new Background(0, 0);
      ;
   this.player = new Player(155, 400);
      ;
   this.title = new Title(15, 100);
      ;
   this.black = new java_awt_Color(0, 0, 0);
      ;
   this.white = new java_awt_Color(255, 255, 255);
      ;
   this.enemy1 = new jv_ArrayList();
      ;
   this.enemy2 = new jv_ArrayList();
      ;
   this.enemy3 = new jv_ArrayList();
      ;
   this.enemy4 = new jv_ArrayList();
      ;
   this.bullet = new jv_ArrayList();
      ;
   this.enemyBullet = new jv_ArrayList();
      ;
   this.impact = new Music("impact_sound.wav", false);
      ;
   this.fire = new Music("ship_sound.wav", false);
      ;
   this.gameOver = new Music("gameover_sound.wav", false);
      ;
   this.levelUp = new Music("levelup_sound.wav", false);
      ;
   this.music = new Music("background-sound.wav", true);
      ;
   this.start = jv_System_c.currentTimeMillis();
      ;
   this.timeStart = this.start;
      ;
   this.init = false;
      ;
 this.hit = false;
      ;
 this.firstStart = true;
      ;
 this.isStageDisplayed = false;
      ;
   this.maxBullet = 0;
      ;
 this.score = 0;
      ;
 this.bulletNum = 1;
      ;
 this.totalTime = 60;
      ;
 this.time = this.totalTime;
      ;
 this.stageNum = 1;
      ;
 this.isGameOver = 0;
      ;
 this.increment = 1000;
      ;
   this.direction = "";
      ;
};
