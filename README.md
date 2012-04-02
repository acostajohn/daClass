#daClass

Creating a simple "class":

	var Animal = daClass({
		//properties
		name: '',

		// Constructor
		init: function(name){
			this.name = name;
		},

		getName: function(){
			return this.name;
		}
	});


	var Bird = daClass(Animal, {
		// The Constructor
		init: function(name){
			this.super(arguments);
			this.name = "Hi " + this.name ;
		}
	});

	var bird1 = new Bird('Pigeon');
	console.log( bird1.getName() ); // Hi Pigeon
