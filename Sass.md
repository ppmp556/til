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
