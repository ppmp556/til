# v-model サンプル

```index.html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue.js neko</title>
    <link href="main.css" rel="stylesheet">
</head>
<body>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <div id="app">
        <input v-model="message"><!--v-model:フォームの入力値をデータと同期させる-->
        <p>{{message}}</p>
        <textarea v-model="message1"></textarea><!--複数行テキストの値は文字列-->
        <pre>{{message1}}</pre>

        <label>
            <input type="checkbox" v-model="val">
            {{val}}
        </label>

        <label><input type="checkbox" v-model="val1" value="A">A</label>
        <label><input type="checkbox" v-model="val1" value="B">B</label>
        <label><input type="checkbox" v-model="val1" value="C">C</label>
        {{val1}}

        <label><input type="radio" v-model="val_radio" value="a">A</label>
        <label><input type="radio" v-model="val_radio" value="b">B</label>
        <label><input type="radio" v-model="val_radio" value="c">C</label>
        {{val_radio}}

        <input type="text" v-model.number="price"> {{price}}

   
    </div>



    <script>
    new Vue ({
      el: '#app',// elはアプリケーションを紐付ける要素セレクタ
    　data: {
        message: 'vue.js',
        message1: 'hello',
        val: true,
        val1: [],
        val_radio: '',
        price: 100
    }
  })
    </script>
</body>
</html>

```


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
  
  
 # $monut(),template,render
  
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
   <p>{{name}}</p>
   <p>{{myData}}</p>
   <button @click="message = 'ボタンから変更'">変更</button>
  </div>
  <div id="app2">
  </div>
  <div id="app3">
    
  </div>

 <script>
   var data = {
     message: 'こんにちは',
     name: '太郎'
   }

   Vue.component() {
     
   }

   var vm = new Vue ({
     data: data,
     computed: {
       myData: function() {
         return this.$data;
       } 
     }
   })

   vm.$mount('#app1') //$mountはelプロパティのかわり
   
   new Vue({
     data: {
       name: '太郎'
     },
     template: '<h1>こんにちは、{{name}}</h1>' //templateプロパティ

   }).$mount('#app2')

   new Vue({
     data: {
       name: '太郎'
     },
     render: function(createElement) {
       return createElement('h1', 'こんにちは、' + this.name);

     },
   }).$mount('#app3')

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

# computedとmethods

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
  <input type="text" v-model="message">
  <h1>{{message}}</h1>

  <p>{{counter}}</p>
  <button @click="counter += 1">+1</button>
  <p>{{ lessThanThree }}</p>　<!--computedプロパティ()はつけない-->
  <p>{{ lessThanThreeMethod()}}</p><!--methodsは()つける-->

  </div>

 <script>
   new Vue ({
     el: '#app',
     data: {
       message:'こんばんは',

       counter:0,
     },
     computed: {
       lessThanThree: function() { //関数を置く
　　　　return this.counter > 3 ? '3より↑':'3以下' //return 同期処理
       }
     },
     watch: { 
      counter: function() {
         var vm = this;
　　　　　setTimeout(function(){
　　　　　vm.counter = 0
     },3000)
      }
     },
     methods: {
       lessThanThreeMethod: function() {
         return this.counter > 3 ?'3より上':'3以下'
       }
     }
     
    })

  </script>
 </body>
</html>

```
