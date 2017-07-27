function bubbleSort(array){

  var length = array.length;

  for (var i = 0; i < length; i++) {
    for (var j = 0; j < (length-i-1); j++){
      if (!comparison(array[j],array[j+1])){
        var newArray = swap(array[j],array[j+1]);
        array[j] = newArray[0];
        array[j+1] = newArray[1];

      }
    }
  }
  return array;
}


function comparison(a,b){
  if (a<b){
   return true;
  } else {
    return false;
  }
}

function swap(a,b){
  return [b,a];
}
