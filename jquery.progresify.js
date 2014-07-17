var progress = (function() {
	var _elem = null;
	var _interval = null;

	var _start = function( elem ) {
		_elem = elem;

		$(_elem).width(0);

		var currFreePercentage = 100;

		_interval = setInterval( function() {
			var addPercents = Math.floor( Math.random()*(currFreePercentage/2+1) );
			currFreePercentage -= addPercents;

			$(_elem).animate( { 'width' : ( 100-currFreePercentage ) + "%" }, 500 );
		}, 500 );

	};

	var _end = function( callback ) {
		clearInterval( _interval );
		$(_elem).animate( { 'width' : "100%" }, 500, callback);
	};

	return {
		start : _start,
		end : _end
	};
})();
