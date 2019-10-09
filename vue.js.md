# オブジェクトと配列構文　サンプル

```index.html

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="main.css">
    <title>Document</title>
   
</head>
<body>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <div id="app">
    <h1 style="color: red; background-color: blue;">hello</h1><!--スタイル属性、css-->
    <h1 :style="{color: textColor, 'background-color': bgColor}">hello</h1><!--バインド、オブジェクトで囲う-->
    <h1 :style="stlyeObject">hello</h1>
    <h1 :style="[stlyeObject,baseStyle]">hello</h1><!--スタイルオブジェクトたくさん、配列構文で対処-->
  </div>

 <script>
   new Vue ({
     el: '#app',
     data: {
          textColor: 'red',
          bgColor: 'blue',

    　　stlyeObject: {
           color: 'red',
          'background-color': 'blue'
         },
         baseStyle: {
           fontSize: '60px'
         }
       } 
   })
  </script>
 </body>
</html>

```

# v-if、v-elseなど

```index.html

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="main.css">
    <title>Document</title>
   
</head>
<body>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <div id="app">
    <p v-if="ok">OK!</p>
    <P v-else-if="maybeOk">maybeOk</P>
    <p v-else>Not OK...</p><!--V-ifの直後にこないとだめ-->
  </div>

 <script>
   new Vue ({
     el: '#app',
     data: {
       ok: false,
       maybeOk: true
     }
   })
  </script>
 </body>
</html>

```

# templateタグ、v-showとv-if

```index.html

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="main.css">
    <title>Document</title>
   
</head>
<body>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <div id="app">
    <template v-if="ok"><!--グループ化させる、consolelog表示しない-->
      <p>hellow</p>
      <p>おはよう</p>
      <p>こんにちは</p>
    </template>
    <p v-if="ok">if</p><!--要素ごと-->>
    <p v-show="show">show</p><!--display noneで消す,v-else,template使えない-->
　

    <button @click= "ok = !ok">きりかえ</button>
  </div>

 <script>
   new Vue ({
     el: '#app',
     data: {
       ok: true
     }
   })
  </script>
 </body>
</html>


```

# 複数インスタンスの書き方

```index.html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="main.css">
    <title>Document</title>
   
</head>
<body>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <div id="app1">
   <p>{{message}}</p>
  </div>
  <div id="app2">
    <P>{{message}}</P>
    <button @click="changeMessage1">インスタンス1のmessageを変更</button>
  </div>

 <script>
   var vm1 = new Vue ({
     el: '#app1',
     data: { 
       message: 'インスタンス1'
     }
   })

   var vm2 = new Vue({
     el: '#app2',
     data: {
       message: 'インスタンス2'
     },
     methods: {
       changeMessage1: function() {
         vm1.message = 'インスタンス2から変更'
       }
     }
   })
  </script>
 </body>
</html>

```

