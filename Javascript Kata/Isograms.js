// Example Inputs/Returns
// isIsogram( "Dermatoglyphics" ) == true
// isIsogram( "aba" ) == false
// isIsogram( "moOse" ) == false // -- ignore letter case

function isIsogram(str){
  var len = str.length;
	var arg = str.toLowerCase();
	for(var i = 0; i < len; i++){
		for(var j = i + 1; j < i + len; j++){
			if(arg[i] === arg[j % len]){
				return false;
			}
		}
	}
	return true
};

isIsogram(str)
