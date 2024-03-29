# 関数と引数

```sample.scss
/*サイズを半分にする関数*/
@function halfsize($value) {
  @return $value / 2;
}
.boxA {
  width: halfsize(100px);
}

@function halfsize($value) {
  @return round($value / 2);
}
.boxA {
  width: halfsize(105px);
}

/*値を変数に入れる*/
$width: 105px;
@function halfsize() {
  @return round($width / 2);
}
.boxA {
  width: halfsize();
}

/*引数に初期値を設定する*/
$width: 105px;
@function halfsize($value:$width) {
  @return round($value / 2);
}
.boxA {
  width: halfsize();
}
.boxB {
  width: halfsize(200px);
}

```



# nth(),セレクタ置換,mix()
```sample.scss
/*2つのカラーコードの中間色をつくるmix()*/
body {
  background: mix(#000, #fff, 50%);
}

$a: #000;
$b: #fff;

.boxA {
  background: mix($a, $b, 70%);
}
.boxB {
  background: mix($a,$b, 30%);
}


/*リストのN番目の値を取得できる nth()*/
$nameList: top, about,company;
.item {
  background: url(#{nth($nameList,2)}.png);
}

/*指定したキーの値を取得する*/
$colors: (
  twitter: #1b95e0,
  facebook: #3b5998,
);
.sns-twitter {
  color: map-get($colors, twitter);
}

/*セレクタを置換する　selector-replace*/
#{selector-replace(".item .text", ".text", ".image")} {
  float: left;
}

```


# いくつかの関数

```sample.scss
//数値の絶対値を取得する　abs()
$margin: -15px;
section {
  margin-left: $margin;
  .item {
   float: left;
   width: 200px;
   margin-left: abs($margin);
  }
}
//小数点以下を四捨五入　round()
$width: 100%;

.boxA {
  width: $width / 6;
}
.boxB {
  width: round($width/6);
}

//小数点以下切り上げ　ceil()
//小数点以下切り捨て　floor()
$width: 100%;
.boxA {
  width: $width / 3;
}
.boxB {
  width: ceil($width /3);
}

$width: 100%;
.boxA {
  width: $width / 3;
}
.boxB {
  width: floor($width /3);
}

```


# @forで繰り返し処理

```sample.scss
@for $value from 1 through 3 {
  .throughSample_#{$value} {
    margin-bottom: 1px * $value;
  }
}
@for $value from 1 to 3 {
  .toSample_#{value} {
    margin-bottom: 1px * $value;
  }
}

```


# @ifで条件分岐

```sample.scss
$getStyle: 0;

@mixin style {
  @if $getStyle == 1 {
    margin: 0 0 30px;
    padding: 15px;
    background: #eee;
  }
  @else if $getStyle == 2 {
    marging: 0 10px 15px;
    padding: 20px 15px;
    border: 2px solid #333;

  }
  @else {
    margin: 0 0 10px;
  }
}

.box  {
  @include style;
}

```



# @at-root

```sample.scss
//@at-rootは記述した場所より親のセレクタや@mediaなどを除外
//ルートに戻す

.block{
  .element-A {
    width: 80%;
  }
  @at-root .element-B {
    width: 100%;
  }

```



# スタイルの継承、エクステンド

```sample.scss

/*指定したセレクタのスタイルを継承*/

.box {
  margin: 0 0 30px;
  padding: 15px;
  border: 1px solid #ccc;
}

//.boxで使ったスタイルを継承
.item {
  @extend .box;
}


/*同じルールセット内で、複数継承*/
/*エクステンド*/
.notes {
  color: #d92c25;
  font-weight: bold;
  text-align: center;
}
.bd {
  border-top:1px solid #900;
  border-bottom: 1px solid #900;
}

//複数継承
.item {
  small {
    display: block;
    padding: 10px;
    @extend .notes;
    @extend .bd;
  }
}

/*エクステンドの連鎖*/
.att {
  color: red;
  font-weight: normal;
}
.attBox {
  // .attを継承
  @extend .att;
  padding: 15px;
  border: 1px solid red;
}

.notes {
  //.attが継承されている、.attBoxを継承（連鎖）
  @extend .attBox;
}

//エクステンド専用のプレースホルダーセレクタ
//継承元のセレクタ不要
%boxBase {
  padding: 15px;
  border: 1px solid #999;
}

/*プレースホルダーセレクタを継承*/
.item {
  @extend %boxBase;
  margin-bottom: 20px;
}
section {
  @extend %boxBase;
  margin-bottom: 60px;
}

/*エクステンド内@media使用*/
@media all and (orientation: landscape){
  %btnBase{
    display: inline-block;
    padding: 5px 10px;
    background: #eee;
  }
  a {
    @extend %btnBase;
  }
}

```


# Sassでの演算

```sample.scss

/*足し算*/
.example01 {
  width: 500px + 8;
}

/*かけ算*/
.example02 {
  width: 500px * 8;
}

/*割り算*/
.example03 {
  width: (500px/8);
}

/*割り算の余り*/
.example04{
  width: 100px % 3;
}


article {
  width: 300px + 5cm;
}

/*変数と演算の同時利用*/
$main_width: 560px;
article {
   width: $main_width -7 * 2;
   padding: 0 7px;
}

/*色の演算*/
a {
  color: #000 + #111;
}

```


# Sassでの変数について

```sample.scss

//変数について
//赤色の変数を宣言

$red: #cf2d3a;
.notes{
  color: $red;
}
.notesBox {
  padding: 20px;
  border: 3px double $red;

}

//ルールセット内で変数宣言

.item {
  $value: 15px;
  margin-left: $value;
  padding: $value;
  p {
    margin-bottom: $value;
  }
}

//変数の参照範囲（スコープ）
section {
  $value: 30px;
  margin-top: $value;
  margin-bottom: $value;
}
.item{
  $value: 15px;
  padding: $value;
  p{
    margin-bottom: $value;
  }
}

```

# ミックスインのサンプル

```sample.scss
/*ミックスインを定義*/
@mixin boxSet {
  padding: 15px;
  background: #999;
  color: white;
}
/*ミックスインを呼び出し*/
.relateArea {
  @include boxSet;
}

/*定義したミックスインを呼び出し*/
.relateArea {
  @include boxSet;
}

/*別のルールセットでも呼び出し*/
.pickupArea {
  @include boxSet;
}

/*引数を使ったミックスインを定義*/
@mixin kadomaru($value) {
  -moz-border-radius: $value;
  -webkit-border-radius: $value;
  border-radius: $value;
}
.box{
  @include kadomaru(3px);
  background: #eee;
}
.item {
  border: 1px solid #999;
  @include kadomaru(5px 10px);
}

/*引数に初期値を定義する*/
@mixin kadomaru($value: 3px) {
  -moz-border-radius: $value;
  -webkit-border-radius: $value;
  border-radius: $value;
}
.boxA {
  @include kadomaru;
  background: #eee;
}
.boxB {
  @include kadomaru();
  background: #f1f1f1;
}

/*引数を複数指定する*/
@mixin boxBase($margin: 30px 0, $padding:10px) {
  margin: $margin;
  padding: $padding;
}

.boxA {
  @include boxBase;
  background: #eee;
}
.boxB {
  @include boxBase(0 0 50px, 20px);
  background: #f1f1f1;
}

/*複数の値を（）で囲って1つのリストにする*/
h2 {
  @include shadow((8px 8px 0 #999, 15px -10px 0 #eee));
}

/*複数の値を"　"や' 'で囲って文字列にする*/
h2 {
  @include shadow (unquote("8px 8px 0 #999, 15px -10px 0 #eee"));
}


@mixin shadow($value...) {
 text-shadow: $value;
}

h2 {
  @include shadow(8px 8px 0 #999,px -10px 0 #eee);

```
