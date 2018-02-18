var HP = function(stage, src, x, y, width, height){ //태어날때 위치값을 가지고 태어난다. // 태어날떄 무조건 호출되는 함수이기 때문에 생성자. 그러므로 시점이 빠름. 
	this.x = x;
	this.y = y;
	this.img;
	this.width = width;
	this.height = height;
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

	
}
