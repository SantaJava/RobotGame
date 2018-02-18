/*파리를 정의한다.*/
var Enemy = function(stage,src,x,y,width,height){
	this.stage =stage;
	this.img;
	this.src=src;
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
	this.velX=0; //움직일 x보폭을 결정.
	this.velY = 0; //움직일 y보폭을 결정.
	this.health = 1; //생명력을 정함. 
	this.count = 0; //enemy1,2
	this.count2 = 0; //enemy3,4
//	this.eHp = eHp; //적군 hp

	var me = this;

	this.init=function(){
		this.img = document.createElement("img");
		this.img.src = this.src;
		this.img.style.position = "absolute";
		this.img.style.left = this.x + "px";
		this.img.style.top = this.y + "px";
		this.img.style.width = this.width + "px";
		this.img.style.height = this.height + "px";
		this.stage.appendChild(this.img);
	}

	this.move= function(){

		if(this.count <20){
			enemyY1.velX = 5;
			enemyY1.velY = 0;
			enemyY2.velX = 5;
			enemyY2.velY = 0;
			enemyB3.velX = 5;
			enemyB5.velX = 5;
			enemyB6.velX = 5;
			enemyB7.velX = 6;
			enemyB8.velX = 5;
	
			this.count++;
			//alert(this.count);
		}else{ 
			if(this.count==40){
				this.count=-1;
			}else{
			enemyY1.velX = -5;
			enemyY1.velY = 0;	
			enemyY2.velX = -5;
			enemyY2.velY = 0;
			enemyB3.velX = -5;
			enemyB5.velX = -5;
			enemyB6.velX = -5;
			enemyB7.velX = -6;
			enemyB8.velX = -5;
					
			this.count++;
			}			
		}

		if(this.count2 <30){
			enemyY3.velY = 5;
			enemyY4.velY = 5;
			enemyB1.velY = 5;
			enemyB2.velY = 5;
			enemyB4.velX = 5;
			enemyK1.velX = 8;
			enemyK2.velY = 11;
			this.count2++;
			//alert(this.count);
		}else{ 
			if(this.count2==60){
				this.count2=-1;
			}else{
			enemyY3.velY = -5;
			enemyY4.velY = -5;
			enemyB1.velY = -5;
			enemyB2.velY = -5;
			enemyB4.velX = -5;
			enemyK1.velX = -8;
			enemyK2.velY = -11;				
			this.count2++;
			}			
		}

		this.x += this.velX; //등속도 운동
		this.y += this.velY;

		this.img.style.left = this.x + "px"; //움직이지 않는 이유 : 변화값이 없기 때문에.
		this.img.style.top = this.y + "px";
	}

	this.stop= function(){//died
	
	}
}