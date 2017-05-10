function Base(){
	
	this.elements=[];
	
	this.getId = function(id){
		this.elements.push(document.getElementById(id));
		return this;	
	};
	
	this.getName = function(name){
		var names = document.getElementsByName(name);
		for(var i = 0;i < names.length;i++){
			this.elements.push(names[i]);
		}
		return this;
	};
	
	this.getTagName = function(tag){
		var tags = document.getElementsByTagName(tag);
		for(var i = 0;i < tags.length;i++){
			this.elements.push(tags);
		}	
		return this;
	};
};

Base.prototype.getStyle = function(element,name){
	if(element.currentStyle){
		return element.currentStyle[name];
	}else{
		return getComputedStyle(element,false)[name];
	}
}

Base.prototype.ready = function(fn){
	addDomLoaded(fn);	
}

Base.prototype.get = function(num){
	return this.elements[num];	
};

Base.prototype.first = function(){
	return this.elements[0];
}

Base.prototype.last = function(){
	return this.elements[this.elements.length - 1];	
}

Base.prototype.click = function(fn){
	for(var i = 0;i < this.elements.length;i++){
		this.elements[i].onclick = fn;
	}	
};
Base.prototype.css = function(str){
	for(var i = 0;i < this.elements.length;i++){
		this.elements[i].style[attr] = value;
	}	
	return this;
}
Base.prototype.html = function(str){
	for(var i = 0;i < this.elements.length;i++){
		this.elements[i].innerHTML = str;
	}	
	return this;
}
var $ = function(){
	return new Base();	
}
