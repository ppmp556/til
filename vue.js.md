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