function divideAndConquerSum(a) {
    if(a.length == 0) return 0; //If the array is empty the sum is 0 
    else if(a.length == 1) return a[0]; //If the array is only one element return that element

    var middleLeft = Math.floor(a.length * (1/3)); //Calculate the 1/3 point
    var middleRight = Math.floor(a.length * (2/3)); //Calculate the 2/3 point

    //Call recursivly and add each respective third
    return divideAndConquerSum(a.slice(0, middleLeft)) + divideAndConquerSum(a.slice(middleLeft, middleRight)) + divideAndConquerSum(a.slice(middleRight, a.length)); 
}
