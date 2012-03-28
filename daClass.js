function daClass(base, props){
	var kss, prop;

	if( base && !props ){
		props = base;
		base = null;
	}

	kss = function(){
		this.init && this.init.apply(this, arguments);
	};

	kss['_super_'] = {};

	if( base ){
		for( prop in base.prototype ) {
			if( !(prop in props) ){
				kss.prototype[prop] = base.prototype[prop];	
			}
			else if( base.prototype[prop].constructor === Function ){
				kss['_super_'][prop] = base.prototype[prop];
			}
		}
	}

	for( prop in props ){
		if( props.hasOwnProperty(prop) ) {
			kss.prototype[prop] = props[prop];

			if( kss.prototype[prop] && kss.prototype[prop].constructor === Function ){
				kss.prototype[prop].declaredName = prop;
			}
		}
	}

	kss.prototype.super = function(args) {
		if( args.callee.declaredName in kss['_super_'] ) {
			kss['_super_'][ args.callee.declaredName ].apply( this, Array.prototype.slice.call(args) );
		}
	};

	return kss;
}