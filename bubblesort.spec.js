describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles array length of 1', function(){
    expect( bubbleSort([5]) ).toEqual([5]);
  })

  it('handles array length of 2', function(){
    expect( bubbleSort([5,2]) ).toEqual([2,5]);
  })

  it('handles array length of 3', function(){
    expect( bubbleSort([5,4,6]) ).toEqual([4,5,6]);
  })

  it('handles array length of lots', function(){
    expect( bubbleSort([2,1,4,3,7,1,5]) ).toEqual([1,2,3,4,5,7,1]);
  })

    it('handles array length of lots with double char num', function(){
    expect( bubbleSort([2,1,4,3,7,5]) ).toEqual([1,2,3,4,5,7]);
  })

});
