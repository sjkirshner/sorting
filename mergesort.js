function splitArray(wholeArray) {
  var middle = Math.ceil(wholeArray.length/2);

  /* your chalf = code here to define the firstHalf and secondHalf arrays */
  var firstHalf = wholeArray.slice(0,middle);
  var secondHalf = wholeArray.slice(middle);

  return [firstHalf, secondHalf];
}
