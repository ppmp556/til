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
