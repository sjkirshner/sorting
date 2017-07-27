function bubbleSort(array){
  var swapCheck = false;
  for( ){
    for(var i = 0; i < array.length-1; i++){
      if (!comparison(array[i],array[i+1])){
        var newArray = swap(array[i],array[i+1]);
        array[i] = newArray[0];
        array[i+1] = newArray[1];
        swapCheck = true;
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
