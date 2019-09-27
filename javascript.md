# javascript
* textcontentプロパティ

```index.html

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>JavaScript sample</title>
</head>
<body>
  <div id="sample">
  <P>textcontent</P>
  </div>

<script src="scripts/text.js"></script>
</body>
</html>

```

```scripts/text.js

//textcontent:内容を取得

var sample = document.getElementById("sample");
console.log(sample.textContent); 

//textcontent:内容を設定
document.getElementById("sample").textContent = "testtesttest";

```

* valueとval()
valueとval()は別物

.valueは、valueというプロパティの値を取得する
.val()は、Jqueryの関数。


