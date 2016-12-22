---
layout: content
title: 利用递归将多维数组转换成一维数组
---

    function getArr(arr){
        if(arr.length>=1&&Object.prototype.toString.call([])==="[object Array]"){
            var ar = arr.pop();
            return Array.prototype.concat.call(getArr(arr),getArr(ar));
        }
        return arr;
    }

    getArr([1,2,3,4,[5,6,7,[8]]])
    [1,2,3,4,5,6,7,8]