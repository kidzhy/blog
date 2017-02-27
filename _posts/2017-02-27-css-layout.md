---
layout: content
title: 各种html圣杯布局
---

今天对比下各种方案的圣杯布局。(不考虑低端浏览器)
css代码上未做编辑，随意。

### table

table布局，金玉其外败絮其中。

    <style>
        table{
            width:600px;
            height:300px;
            text-align:center;
            color:#fff;
        }
        thead td,tfoot td{
            background:#9e9e9e
        }
        tbody td:first-child{
            background:#00bcd4
        }

        tbody td:last-child{
            background:#ff5722
        }
        tbody td:nth-child(2){
        background:#8bc34a
        }
    </style>

    <table border=1>
        <thead>
            <td colspan=3>header</td>
        </thead>
        <tbody>
            <tr>
                <td>left</td>
                <td>center</td>
                <td>right</td>
            </tr>
        </tbody>
        <tfoot>
            <td colspan=3>footer</td>
        </tfoot>
    </table>


<style>
    table{
        width:600px;
        height:300px;
        text-align:center;
        color:#fff;
    }
    thead td,tfoot td{
        background:#9e9e9e
    }
    tbody td:first-child{
        background:#00bcd4
    }

    tbody td:last-child{
        background:#ff5722
    }
    tbody td:nth-child(2){
    background:#8bc34a
    }
</style>

<div>
    <table border=1>
    <thead>
        <td colspan=3>header</td>
    </thead>
    <tbody>
        <tr>
        <td>left</td>
        <td>center</td>
        <td>right</td>
        </tr>
    </tbody>
    <tfoot>
        <td colspan=3>footer</td>
    </tfoot>
</table>
</div>


### div+float布局

目前最常用的方案，需要设置高度宽度，其他没什么。

    <div class="layout">
        <div class="float">
            <div class="header">header</div>
            <div class="container">
                <div>left</div>
                <div>center</div>
                <div>right</div>
            </div>
            <div class="footer">
                footer
            </div>
       </div>
    </div>

    <style>
    .layout{
        width:600px;
        height:300px;
    }
    .float{
        width:100%;
        height:100%;
        color:#fff;
        text-align:center;
    }
    .header,.footer{
        background:#9e9e9e;
        height:30px;
    }
    .container{
        height:calc(100% - 60px);
        clear:both;
    }
    .container>div{
        float:left;
        height:100%;
    }
    .container>div:first-child{
        background:#00bcd4;
        width:20%;
    }
    .container>div:nth-child(2){
        background:#8bc34a;
        width:60%;
    }
    .container>div:last-child{
        background:#ff5722;
        width:20%;
    }
    </style>

<style>
.layout{
  width:600px;
  height:300px;
}
.float{
  width:100%;
  height:100%;
  color:#fff;
  text-align:center;
}
.header,.footer{
  background:#9e9e9e;
  height:30px;
}
.container{
  height:calc(100% - 60px);
  clear:both;
}
.container>div{
  float:left;
  height:100%;
}
.container>div:first-child{
  background:#00bcd4;
  width:20%;
}
.container>div:nth-child(2){
  background:#8bc34a;
  width:60%;
}
.container>div:last-child{
  background:#ff5722;
  width:20%;
}

</style>

<div class="layout">
<div class="float">
    <div class="header">header</div>
    <div class="container">
    <div>left</div>
    <div>center</div>
    <div>right</div>
    </div>
    <div class="footer">
    footer
    </div>
</div>
</div>



### div+position

定位影响布局，其他需要进行定位操作，复杂度也很高,这个具体不错演示，自行体会。


### flexbox布局

新时代的标准，真是稳准狠

    <div class="layout">
    <div class="flex">
        <div class='f-header' >header</div>
        <div class='f-container' >
        <div>left</div>
        <div>center</div>
        <div>right</div>
        </div>
        <div class='f-footer' >footer</div>
    </div>
    </div>

    <style>
        .layout{
        width:600px;
        height:300px;
        }
        .flex{
        width:100%;
        height:100%;
        color:#fff;
        text-align:center;
        display:flex;
        flex-direction:column;
        }
        .header,.footer{
        background:#9e9e9e;
        }
        .container{
        flex:1;
        display:flex;
        }
        .container>div:first-child{
        background:#00bcd4;
        flex:1
        }
        .container>div:nth-child(2){
        background:#8bc34a;
        flex:2
        }
        .container>div:last-child{
        background:#ff5722;
        flex:1;
        }
    </style>


<style>
    .flex{
        width:100%;
        height:100%;
        color:#fff;
        text-align:center;
        display:flex;
        flex-direction:column;
        }
        .f-header,.f-footer{
        background:#9e9e9e;
        }
        .f-container{
        flex:1;
        display:flex;
        }
        .f-container>div:first-child{
        background:#00bcd4;
        flex:1
        }
        .f-container>div:nth-child(2){
        background:#8bc34a;
        flex:2
        }
        .f-container>div:last-child{
        background:#ff5722;
        flex:1;
        }

</style>

<div class="layout">
<div class="flex">
    <div class='f-header' >header</div>
    <div class='f-container' >
    <div>left</div>
    <div>center</div>
    <div>right</div>
    </div>
    <div class='f-footer' >footer</div>
</div>
</div>


### grid布局

    即将发布的网格布局，灵活随意，css多费点内容。

    <div class="layout">
        <div class="grid">
        <div class='header' >header</div>
        <div class='container' >
            <div>left</div>
            <div>center</div>
            <div>right</div>
        </div>
        <div class='footer' >footer</div>
        </div>
    </div>
    
    <style>
        .layout{
        width:600px;
        height:300px;
        }
        .grid{
        width:100%;
        height:100%;
        color:#fff;
        text-align:center;
        display:grid;
        grid-template-areas:'header'
                            'container '
                            'footer';
        grid-template-rows:auto 1fr auto;
        }
        .header,.footer{
        background:#9e9e9e;
        }
        .header{
        grid-area:header
        }
        .footer{
        grid-area:footer
        }
        .container{
        grid-area:container;
        display:grid;
        grid-template-areas:'left center right'
        }
        .container>div:first-child{
        background:#00bcd4;
        grid-area:left
        }
        .container>div:nth-child(2){
        background:#8bc34a;
        grid-area:center
        }
        .container>div:last-child{
        background:#ff5722;
        grid-area:right;
        }
    </style>

 <style>
.grid{
  width:100%;
  height:100%;
  color:#fff;
  text-align:center;
  display:grid;
  grid-template-areas:'header'
                      'container '
                      'footer';
  grid-template-rows:auto 1fr auto;
}
.g-header,.g-footer{
  background:#9e9e9e;
}
.g-header{
  grid-area:header
}
.g-footer{
  grid-area:footer
}
.g-container{
  grid-area:container;
  display:grid;
  grid-template-areas:'left center right'
}
.g-container>div:first-child{
  background:#00bcd4;
  grid-area:left
}
.g-container>div:nth-child(2){
  background:#8bc34a;
  grid-area:center
}
.g-container>div:last-child{
  background:#ff5722;
  grid-area:right;
}

 </style>
 <div class="layout">
    <div class="grid">
      <div class='g-header' >header</div>
      <div class='g-container' >
        <div>left</div>
        <div>center</div>
        <div>right</div>
      </div>
      <div class='g-footer' >footer</div>
    </div>
  </div>
  