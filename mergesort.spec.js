describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect(splitArray([1,2,3,4])).toEqual([[1,2],[3,4]]);
  });

  it('is able to split a longer array into two halves', function() {
      // your code here
    expect(splitArray([1,2,3,4,5,6])).toEqual([[1,2,3],[4,5,6]]);
  });

  it('is able to split a slightly longer array into two halves', function() {
      // your code here
    expect(splitArray([1,2,3,4,5,6,7,8])).toEqual([[1,2,3,4],[5,6,7,8]]);
  });

  it('is able to split a slightly longer odd array into two halves', function() {
      // your code here
    expect(splitArray([1,2,3,4,5,6,7,8,9])).toEqual([[1,2,3,4,5],[6,7,8,9]]);
  });
});
