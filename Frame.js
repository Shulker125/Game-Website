// Generated JS from Java: Frame -----
function Frame() {

   sc_clInit(java_awt_event_ActionListener_c);
   sc_clInit(java_awt_event_MouseListener_c);
   sc_clInit(java_awt_event_KeyListener_c);   this.run = false;
   this.head = null;
   this.tail1 = null;
   this.tail = null;
   this.apple = null;
   this.rndX = null;
   this.rndY = null;
   this.x = 0;
   this.y = 0;
   this.score = 0;
   this.countRun = 0;
   this.lastPosX = 0;
   this.lastPosY = 0;
   this.possibleXY = null;
   this.turn = false;

   javax_swing_JPanel.call(this);
   this._FrameInit();
   var f = new javax_swing_JFrame("Snake");
   f.setSize(new java_awt_Dimension(659, 788));
   f.setBackground(sc_clInit(java_awt_Color_c).blue);
   f.add(this);
   f.setResizable(false);
   f.setLayout(new java_awt_GridLayout(1, 2));
   f.addMouseListener(this);
   f.addKeyListener(this);
   var t = new javax_swing_Timer(150, this);
   t.start();
   f.setDefaultCloseOperation(sc_clInit(javax_swing_JFrame_c).EXIT_ON_CLOSE);
   f.setVisible(true);
}

var Frame_c = sc_newClass("Frame", Frame, javax_swing_JPanel, [java_awt_event_ActionListener,java_awt_event_MouseListener,java_awt_event_KeyListener]);

Frame_c.paint = function (g)  {
   var randomX = this.rndX.nextInt(16);
   var randomY = this.rndY.nextInt(16);
   javax_swing_JPanel_c.paintComponent.call(this, g);
   g.setFont(new java_awt_Font("Arial", sc_clInit(java_awt_Font_c).PLAIN, 40));
   g.drawRect(0, 100, 640, 640);
   g.drawString("Score: " + this.score, 250, 80);
   for (var i = 0, x = 40, y = 140; i < 15; i++, x += 40, y += 40) {
      g.drawLine(x, 100, x, 740);
      g.drawLine(0, y, 640, y);
   }
   if (this.head.getX() === this.apple.getX()) {
      if (this.head.getY() === this.apple.getY()) {
         this.score++;
         this.tail.add(new Tail(this.tail1.getX(), this.tail1.getY()));
         this.apple.setX(this.possibleXY[0][randomX]);
         this.apple.setY(this.possibleXY[1][randomY]);
         while (this.apple.getX() === this.lastPosX && this.apple.getY() === this.lastPosY && this.countRun > 0) {
            randomX = this.rndX.nextInt(16);
            randomY = this.rndY.nextInt(16);
            this.apple.setX(this.possibleXY[0][randomX]);
            this.apple.setY(this.possibleXY[1][randomY]);
         }
         this.lastPosX = this.apple.getX();
         this.lastPosY = this.apple.getY();
         this.countRun++;
      }
   }
   this.apple.paint(g);
   this.head.paint(g);
   for (var i = 0; i < this.tail.size(); i++) {
      this.tail.get(i).paint(g);
   }
   this.tail1.paint(g);
};
Frame_c.main = function (arg)  {
   var f = new Frame();
};
Frame_c.keyPressed = function (e)  {
   var key = e.getKeyCode();
   if (key === 87 && this.head.direction !== 1 && this.turn && this.run) {
      this.head.direction = 3;
      this.turn = false;
   }
   else
   if (key === 83 && this.head.direction !== 3 && this.turn && this.run) {
      this.head.direction = 1;
      this.turn = false;
   }
   else
   if (key === 68 && this.head.direction !== 2 && this.turn && this.run) {
      this.head.direction = 0;
      this.turn = false;
   }
   else
   if (key === 65 && this.head.direction !== 0 && this.turn && this.run) {
      this.head.direction = 2;
      this.turn = false;
   }
};
Frame_c.keyReleased = function (e)  {
   var key = e.getKeyCode();
   if (key === 87) {
      this.turn = true;
   }
   else
   if (key === 83) {
      this.turn = true;
   }
   else
   if (key === 68) {
      this.turn = true;
   }
   else
   if (key === 65) {
      this.turn = true;
   }
};
Frame_c.keyTyped = function (e)  {
};
Frame_c.mouseClicked = function (e)  {
};
Frame_c.mouseEntered = function (e)  {
};
Frame_c.mouseExited = function (e)  {
};
Frame_c.mousePressed = function (e)  {
};
Frame_c.mouseReleased = function (e)  {
};
Frame_c.actionPerformed = function (arg0)  {
   this.repaint();
   this.head.move();
   this.tail1.moveMain(this.head.direction);
   for (var i = 0; i < this.tail.size(); i++) {
      if (i === 0) {
         this.tail.get(i).move(this.tail1.getDir(), this.tail1.getX(), this.tail1.getY());
      }
      else {
         this.tail.get(i).move(this.tail.get(i - 1).getDir(), this.tail.get(i - 1).getX(),
                    this.tail.get(i - 1).getY());
      }
   }
   this.head.collisionCheck();
   if (!this.head.run) {
      this.run = false;
   }
};

Frame_c._FrameInit = function() {
   this.run = true;
      ;
   this.head = new Head(80, 380);
      ;
   this.tail1 = new Tail(40, 380);
      ;
   this.tail = new jv_ArrayList();
      ;
   this.apple = new Apple(520, 380);
      ;
   this.rndX = new jv_Random();
      ;
   this.rndY = new jv_Random();
      ;
   this.x = 0;
      ;
   this.y = 100;
      ;
   this.score = 0;
      ;
   this.countRun = 0;
      ;
   this.lastPosX = this.apple.getX();
      ;
   this.lastPosY = this.apple.getY();
      ;
   this.possibleXY = sc_initArray(int[]_c, 2,
              [ [ 0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600 ],
                 [ 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700 ] ]);
      ;
   this.turn = true;
      ;
};
