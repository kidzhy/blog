---
layout: content
title: css六边形实现
---

记录下css六边形实现
<style>


.hex {
    float: left;
    margin-left: 3px;
    margin-bottom: -47px;
}
.hex .top {
    width: 0;
    border-bottom: 50px solid #6C6;
    border-left: 85px solid transparent;
    border-right: 85px solid transparent;
}
.hex .middle {
    width: 170px;
    height: 100px;
    background: #6C6;
}
.hex .bottom {
    width: 0;
    border-top: 50px solid #6C6;
    border-left: 85px solid transparent;
    border-right: 85px solid transparent;
}
.hex-row {
    clear: left;
}
.hex-row.even {
    margin-left: 86px;
}
</style>

<div class="hex-row">
    <div class="hex"><div class="top"></div><div class="middle"></div><div class="bottom"></div></div>
    <div class="hex"><div class="top"></div><div class="middle"></div><div class="bottom"></div></div>

</div>
<div class="hex-row even">
    <div class="hex"><div class="top"></div><div class="middle"></div><div class="bottom"></div></div>
    <div class="hex"><div class="top"></div><div class="middle"></div><div class="bottom"></div></div>
</div>


