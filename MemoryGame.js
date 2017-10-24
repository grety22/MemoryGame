var memory_array = ['G','G','T','T','A','A','D','D','R','R','F','F','N','N','H','H','I','I','J','J','K','K','L','L'];
var memory_values = [];
var memory_tile_ids = [];
var elementosUp = 0;

Array.prototype.randomElements = function(){
    
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

//*************************************************************************************

function newBoard(){
	elementosUp = 0;
	var output = '';
    memory_array.randomElements();
	for(var i = 0; i < memory_array.length; i++){
		output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
}

//*************************************************************************************

function memoryFlipTile(tile,val){
	if(tile.innerHTML == "" && memory_values.length < 2){
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		} else if(memory_values.length == 1){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if(memory_values[0] == memory_values[1]){
				elementosUp += 2;
				// Clear both arrays
				memory_values = [];
            	memory_tile_ids = [];
				// Check to see if the whole board is cleared
				if(elementosUp == memory_array.length){
					alert("CONGRATULATION !!! YOU WIN");
					document.getElementById('memory_board').innerHTML = "";
					newBoard();
				}
			} else {
                
				function flip2Back(){
				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
				    tile_1.style.backgroundImage = 'url(http://www.freeiconspng.com/uploads/brain-creative-head-mind-settings-thinking-icon-10.png)' ;
                    tile_1.style.backgroundSize = 'contain';
            	    tile_1.innerHTML = ""; 
				    tile_2.style.backgroundImage = 'url(http://www.freeiconspng.com/uploads/brain-creative-head-mind-settings-thinking-icon-10.png)';
                    tile_2.style.backgroundSize = 'contain';
            	    tile_2.innerHTML = "";
				    // Clear both arrays
				    memory_values = [];
            	    memory_tile_ids = [];
				}
				setTimeout(flip2Back, 522);
			}
		}
	}
}



//For future use only

//var ImgsArray = [
//  { name: 'JavaScript', image: 'https://dl.dropbox.com/s/x1o1d56zvyans4j/js.png?dl=0' }, 
//  { name: 'PHP', image: 'https://dl.dropbox.com/s/7to3whwq34h63e9/php-logo.png?dl=0' }, 
//  { name: 'Python', image: 'https://dl.dropbox.com/s/4ylzpyordzd8w5u/python-logo.jpg?dl=0' },
//  { name: 'HTML', image: 'https://dl.dropbox.com/s/bu3pw0tau32nztr/HTML5_Badge_512.png?dl=0' }, 
//  { name: 'CSS', image: 'https://dl.dropbox.com/s/dmdmkwfycbesqiq/bgcammyoiyonbmrgibue.png?dl=0' }, 
//  { name: 'RubyOnRails', image: 'https://dl.dropbox.com/s/y74t91nhz47zd2s/CDMbA57p_400x400.png?dl=0' },
//  { name: 'Java', image: 'https://dl.dropbox.com/s/p82jj440al2jfr0/javalogo.png?dl=0' }, 
//  { name: 'AngularJS', image: 'https://dl.dropbox.com/s/tsjhiepmnqmemcw/angularJS.png?dl=0' }, 
//  { name: 'AJAX', image: 'https://dl.dropbox.com/s/ndyz8mjvdq6x5ow/AJAX_logo_by_gengns.svg.png?dl=0' },
//  { name: 'MySQL', image: 'https://dl.dropbox.com/s/cr8k5b5qwyr0pdu/logo-mysql-170x170_400x400.png?dl=0' }, 
//  { name: 'JQuery', image: 'https://dl.dropbox.com/s/qhvv5jcqk94foaa/jQuery-logo-400x400.jpg?dl=0' }, 
//  { name: 'Bootstrap', image: 'https://dl.dropbox.com/s/y1e8rs2vbunr207/bootstrap-stack.png?dl=0' },  
//  { name: 'JavaScript', image: 'https://dl.dropbox.com/s/x1o1d56zvyans4j/js.png?dl=0' }, 
//  { name: 'PHP', image: 'https://dl.dropbox.com/s/7to3whwq34h63e9/php-logo.png?dl=0' }, 
//  { name: 'Python', image: 'https://dl.dropbox.com/s/4ylzpyordzd8w5u/python-logo.jpg?dl=0' },
//  { name: 'HTML', image: 'https://dl.dropbox.com/s/bu3pw0tau32nztr/HTML5_Badge_512.png?dl=0' }, 
//  { name: 'CSS', image: 'https://dl.dropbox.com/s/dmdmkwfycbesqiq/bgcammyoiyonbmrgibue.png?dl=0' }, 
//  { name: 'RubyOnRails', image: 'https://dl.dropbox.com/s/y74t91nhz47zd2s/CDMbA57p_400x400.png?dl=0' },
//  { name: 'Java', image: 'https://dl.dropbox.com/s/p82jj440al2jfr0/javalogo.png?dl=0' }, 
//  { name: 'AngularJS', image: 'https://dl.dropbox.com/s/tsjhiepmnqmemcw/angularJS.png?dl=0' }, 
//  { name: 'AJAX', image: 'https://dl.dropbox.com/s/ndyz8mjvdq6x5ow/AJAX_logo_by_gengns.svg.png?dl=0' },
//  { name: 'MySQL', image: 'https://dl.dropbox.com/s/cr8k5b5qwyr0pdu/logo-mysql-170x170_400x400.png?dl=0' }, 
//  { name: 'JQuery', image: 'https://dl.dropbox.com/s/qhvv5jcqk94foaa/jQuery-logo-400x400.jpg?dl=0' }, 
//  { name: 'Bootstrap', image: 'https://dl.dropbox.com/s/y1e8rs2vbunr207/bootstrap-stack.png?dl=0' }    
//
//];