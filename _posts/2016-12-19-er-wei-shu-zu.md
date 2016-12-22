---
layout: content
title: 利用递归将多维数组转换成一维数组
---

    function getArr(arr){
        if(Object.prototype.toString.call([])==="[object Array]"&&arr.length>0){
            var ar = arr.pop();
            return Array.prototype.concat.call(getArr(arr),getArr(ar));
        }
        return arr;
    }

    getArr([1,2,3,4,[5,6,7,[8]]])
    [1,2,3,4,5,6,7,8]