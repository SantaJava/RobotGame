var Bullet = function(stage, src, x, y, width, height){ //태어날때 위치값을 가지고 태어난다. // 태어날떄 무조건 호출되는 함수이기 때문에 생성자. 그러므로 시점이 빠름. 
	this.x = x;
	this.y = y;
	this.img;
	this.width = width;
	this.height = height;
	this.velX = 0;
	this.velY = 0;
	this.stage = stage;
	this.src = src;


		this.init = function(){
			this.img = document.createElement("img");
			this.img.src= this.src;
			this.img.style.width = this.width + "px";
			this.img.style.height = this.height + "px";
			this.img.style.position = "absolute";
			this.img.style.left = this.x + "px";
			this.img.style.top = this.y + "px";

			this.stage.appendChild(this.img);
		}

		this.move = function(){
			
			this.x += this.velX;
			this.y += this.velY;
			
			try{		
			//총알과 블럭과 충돌검사 
				for(var i = 0 ; i < blockArray.length ; i++){
					var result = hitTest(this.img, blockArray[i].img); //이미지를 비교한다는것 잊지 말기!!!
					if(result == true){
							this.stage.removeChild(this.img);
							//bulletArray.splice(i,1); //명단에서 제거!
					}
				}
				//총알과 적과 충돌검사
				for(var i = 0 ; i < enemyArray.length ; i++){
					var result2 = hitTest(this.img, enemyArray[i].img); //이미지를 비교한다는것 잊지 말기!!!
					if(result2 == true){
							
							
							virusKill.play();
						

								this.stage.removeChild(this.img);
								this.stage.removeChild(enemyArray[i].img);
								enemyArray.splice(i,1);
							
							
							scoreTable.innerHTML = "<font color = '#FFC0CB'>Virus Count : </font><br><font size = 30 color = 'white'> " + enemyArray.length + "</font>";
							//bulletArray.splice(i,1); //명단에서 제거!
					}
				} 
				 

			}catch(e){}

			this.img.style.left = this.x + "px";
			this.img.style.top = this.y + "px";

			if(enemyArray.length == 0){

				fail.appendChild(win);
				sucess.play();
				clearTimeout(st2);
				clearTimeout(st);
				
			}
	}
}
