'use strict';




//challenge 2

function funName(arr){
    if (arr.length%2 !== 0){
        return 'NO';
    }else{
        let leng = (arr.length/2)-1;
        let arr1 = [];
        let arr2 = [];
        for (let  i = 0;i < leng;i++ ){
            arr1.push(arr[i]);
        }
        for(let i = leng+1;i < arr.length;i++){
            arr2.push(arr[i]);
        }

        if (arr1 === arr2){
            return 'YES';
        }else{
            return 'NO';
        }
    }
}