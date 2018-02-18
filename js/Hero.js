var Hero = function(stage, src, x, y, width, height){

	this.mask;
	 this.stage = stage;
	 this.src = src;
	 this.x = x; //초기 x값
	 this.y = y; //초기 y값
	 this.deX = x;
	 this.deY = y;
	 this.width = width;
	 this.height = height;
	 this.Hmove = true;
	 this.velX=0;
	 this.velY=0;
	 this.imgArray=[]; //모든 움직임을 담을 배열
	 this.idxNum = 0; //인덱스숫자.
	 this.idxNum2 = 0;
	 this.d = 0;
	 this.result = false;
	 this.result2 = false;
	 this.flag = false;
	 this.heartFlag = false;
	 this.currentKey;
	 this.hit = 0;
	 this.i = 0; //라이트 스위치 켜기위한 초기값.
	 this.i2 = 0; //폭발 에니메이션 인덱스
	 var me = this;

	 this.st3; //라이트 에니메이션 제어
	 this.st4; //폭발 에니메이션 제어

	 this.h_musicArray = []; //히어로 음악 목록

	

	this.create = function(){

		 this.createImgArray();
		 this.img = document.createElement("img");
		 this.img.style.width=this.width+"px";
		 this.img.style.height=this.height+"px";
		 this.img.style.position="relative";
		 this.img.style.left = this.x + "px";
		 this.img.style.top = this.y + "px";
		 this.img.style.margin="auto";
		 this.img.src = this.src;

		 //주인공 대신 충돌검사할 마스크를 만들자.
		this.mask = document.createElement("div");
		this.mask.style.width = 29 + "px";
		this.mask.style.height = 35 + "px";
		//this.mask.style.background = "green";
		this.mask.style.position = "absolute";
		//this.mask.style.left = this.x + this.width/4 +0.5 + "px"; 
		//this.mask.style.top = this.y + this.height/2 -5 + "px"; 
		//마스크값은 주인공이 움직일때 정할 수 있음 

		 this.stage.appendChild(this.img);
		 this.stage.appendChild(this.mask);

	}  

	this.createImgArray = function(){
		this.right = ["h_walkR1", "h_walkR2", "h_walkR3", "h_walkR4", "h_walkR5", "h_walkR6","h_walkR7","h_walkR8"];
		this.left = ["h_walkL1", "h_walkL2", "h_walkL3", "h_walkL4", "h_walkL5", "h_walkL6","h_walkL7","h_walkL8"];
		this.front = ["h_walkF1", "h_walkF2", "h_walkF3", "h_walkF4", "h_walkF5", "h_walkF6","h_walkF7","h_walkF8"];
		this.back= ["h_walkB1", "h_walkB2", "h_walkB3", "h_walkB4", "h_walkB5", "h_walkB6","h_walkB7","h_walkB8"];
		this.explode = ["ex1","ex2","ex3","ex4","ex5","ex6","ex7","ex8"];
		this.imgArray.push(this.right);
		this.imgArray.push(this.left);
		this.imgArray.push(this.front);
		this.imgArray.push(this.back);
		this.imgArray.push(this.explode);
	}

	this.see = function(){
		
		switch(this.i){
			case 0: shader.src ="./images/shader2_2.png"; break; 
			case 1: shader.src ="./images/shader2_3.png"; break; 
			case 2: shader.src ="./images/shader2_3.png"; break; 
			case 3: shader.src ="./images/shader2_3.png"; break; 
			case 4: shader.src ="./images/shader2_3.png"; break; 
			case 5: shader.src ="./images/shader2_3.png"; break;
			case 6: shader.src ="./images/shader2_3.png"; break; 
			case 7: shader.src ="./images/shader2_3.png"; break; 
			case 8: shader.src ="./images/shader2_3.png"; break; 
			case 9: shader.src ="./images/shader2_3.png"; break;  
			case 10: shader.src ="./images/shader2_3.png"; break; 
			case 11: shader.src ="./images/shader2_2.png"; break;
			case 12: shader.src ="./images/shader2_1.png"; break;
			case 13: clearTimeout(this.st3);
					this.i = 0;
					break; 
		}

		this.i++
	}

	//폭발 에니메이션
	this.exploded = function(){

			switch(this.i2){
				case 0: this.img.src ="./images/ex1.png"; break;
				case 1: this.img.src ="./images/ex2.png"; break; 
				case 2: this.img.src ="./images/ex3.png"; break; 
				case 3: this.img.src ="./images/ex4.png"; break; 
				case 4: this.img.src ="./images/ex4.png"; break; 
				case 5: this.img.src ="./images/ex6.png"; break;
				case 6: this.img.src ="./images/ex7.png"; break; 
				case 7: this.img.src ="./images/ex8.png"; break; 

				case 8: failMsg(); break;
				case 9: clearTimeout(this.st4);
						this.i2 = 0;
						break; 
			}
			stage.appendChild(this.img);
			this.i2++;
	}


	

	this.move=function(){
		//에니메이션 설정.
			
			if(this.velX!=0 || this.velY!=0){
				if(this.idxNum >= this.imgArray[this.d].length-1){
					this.idxNum = 0;
				}else{
					this.idxNum++;
				}
			this.img.src = "./images/"+this.imgArray[this.d][this.idxNum]+".png";
			}


			if(this.flag == false){	//한번 부딪혔을 때부터 this.x와 this.y값을 고정. 
				 this.x+=this.velX;
				 this.y+=this.velY;
				 this.currentKey = key;
			 }

		

		 this.img.style.left=this.x+"px";  
		 this.img.style.top=this.y+"px";

		 //마스크의 위치가 실제 캐릭터를 따라가도록 한다. 
		 this.mask.style.left = this.x + this.width/4+3 + "px"; 
		 this.mask.style.top = this.y + this.height/2-12+ "px";
		// this.mask.style.background = "green"; //마스크 보이기/ 안보이기
		// console.log(this.mask.style.left);
		 //console.log(this.x);

		shader.style.left=this.x-785+"px";  
		shader.style.top=this.y-740+"px";
		shade.appendChild(shader);  //쉐이더 위치 같이 지정.


		
		//마스크와 충돌테스트. //현재 왼쪽 충돌테스트 불가 상태.
		 for(var i = 0; i< blockArray.length; i++){
		 	this.result = hitTest(this.mask, blockArray[i].img); 
		 		if(this.result == true){
					this.flag = true;
					//false 됐을 때 key값을 구한다. 
				}	
		}
		//HERO와 적군과의 충돌테스트.
		 for(var i = 0; i< enemyArray.length; i++){
		 	this.result2 = hitTest(this.mask, enemyArray[i].img); 
		 	//console.log(this.result2);

		 		if(this.result2 == true){
		 				heroHurt.play();

			 			//충돌한 횟수 표시(health를 잃은 카운트 표시) 
			 			this.hit++;
			 			console.log("부딪힌 숫자는" + this.hit + heartArray[2]);

						stage2.removeChild(heartArray[heartArray.length-1]);
						heartArray.splice(heartArray.length-1,1);
						this.x = 400;
						this.y = 370;
						//this.img.style.left = this.deX + "px";
						//this.img.style.top = this.deY + "px";
						//this.mask.style.left = this.deX+ this.width/4 +1+ "px";
						//this.mask.style.top = this.deY+ this.height/2 +1+ "px";

						 //heartArray의 마지막부터 지운다.
						//heartArray.splice(,1);
						if(this.hit >= 5){ //5번 이상 충돌시 하트 하나 지우고, 주인공 죽음.
							//this.img.style.opacity = "0.5"
							//this.explode();				
							explosion.play();

							this.st4 = setInterval(function(){
								me.exploded();
							},80);

							this.stage.removeChild(this.img);
							this.stage.removeChild(this.mask);
							//clearTimeout(st);
							clearTimeout(st);
							}
						}				
				
				}				
			
		//hp와 충돌테스트
		for(var i = 0; i< hpArray.length; i++){
		 	this.result = hitTest(this.mask, hpArray[i].img); 
		 	if(this.result == true){
		 		if(heartArray.length < 5){
		 			heartGain.play();
					this.stage.removeChild(hpArray[i].img);
					hpArray.splice(i,1);
						//하트 만들어서 붙이자
						heart = document.createElement("img");
						heart.src = "./images/heart.png"
						heart.style.width = 45 + "px";
						heart.style.height = 45 + "px";
						heart.style.position = "absolute";
						heart.style.margin = 15 + "px";
						heart.style.top = (heartArray.length)*60 + "px";
						stage2.appendChild(heart);

					heartArray.push(heart);
					this.hit--;
				}
				//false 됐을 때 key값을 구한다. 
			}	
		}
		//번개와 충돌
		for(var i = 0; i< lightArray.length; i++){
		 	this.result = hitTest(this.mask, lightArray[i].img); 
		 	if(this.result == true){
		 			lightOn.play();
					this.stage.removeChild(lightArray[i].img);
					lightArray.splice(i,1);

					this.st3 = setInterval(function(){ 
						me.see();
					},500);
						
			}
				
		}	
				

		 	//console.log(this.result);
		 	//console.log(this.currentKey);
	}
	 


	//ANIMATION FOR WALKING.
	this.bounce = function(){
				if(this.flag ==true){
					console.log(this.currentKey);
					if(this.currentkey==37){
							//console.log(this.x);
							this.x += 10;
							console.log("좌측충돌");
						}
					 else if(this.currentKey==39){
					 	console.log("우측충돌");
							this.x -= 10;
					} else if(this.currentKey==38){
						console.log("위충돌");
							this.y += 10;
					} else if(this.currentKey==40){
						console.log("아래충돌");
							this.y -= 10;
					}
				
				this.flag = false;			
		}
	}


	this.walkR = function(){
			
			this.d = 0;
			this.velX = 3;
	}

	this.walkL =function(){
		this.d = 1;
		this.velX = -3;
	}

	this.walkF = function(){
		this.d = 2;
		this.velY = 3;
	}

	this.walkB = function(){
		this.d = 3;
		this.velY = -3;
	}

	this.stop = function(){
		this.img.src = "./images/"+this.imgArray[this.d][0] + ".png";
		this.idxNum = 0;

	}
}