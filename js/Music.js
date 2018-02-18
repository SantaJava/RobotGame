var Music = function(src){

	this.init = function(){


		this.music = document.createElement("audio");
		this.music.src = src;
		//this.bgm.src = "./"
		h_musicArray.push(this.music);
	}

	this.play = function(){
		this.music.play();
	}

	this.pause = function(){
		this.music.pause();
	}
	
	this.load = function(){
		this.music.load();
	}
}