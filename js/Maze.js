/*미로 벽 세우기*/

var Maze = function(stage,src,x,y,width,height){
	this.stage = stage;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.src = src;
	this.img;

	this.init = function(){
		this.img = document.createElement("img");
		this.img.src = this.src; 
		this.img.style.position = "absolute";
		this.img.style.left = this.x + "px";
		this.img.style.top = this.y + "px";
		this.img.style.width = this.width + "px";
		this.img.style.height = this.height + "px";
		this.stage.appendChild(this.img);
	}
}