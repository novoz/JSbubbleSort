function bubblesort(array){
    var temp = 0;
    for(var i=0;i<array.length;i++){
        var constant = i;
        for(var j=i+1;j<array.length;j++){
            if(array[j]<array[constant]){
                temp = array[constant];
                array[constant] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

console.log(bubblesort(test));