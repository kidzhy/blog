---
layout: content
title: 利用递归将多维数组转换成一维数组
---

    function getArr(arr){
        if(arr.length>0){
            var ar = arr.pop();
            return Array.prototype.concat.call(getArr(arr),getArr(ar));
        }
        return arr;
    }

字符串或着对象请酌情处理