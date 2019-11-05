// 定数にアロー関数を代入
const messeage = ()=> {
    console.log('おはよう');
  };
  
  // 定数の呼び出し
  messeage();

  //アロー関数未使用の書き方
  const test = function() {
      console.log("こんにちは");
  };
  test();

  // 関数の引数にnameを追加
const taro = (name) => {
    console.log(`おはよう、${name}さん`);
  };
  // testの引数に渡して呼び出し
   taro('太郎');
   taro('佐藤');
   taro('yamada');

   //関数名と引数名変更
const sato = (testname) => {
    console.log(`こんにちは、${testname}さん`);
};
sato('tanaka');

   //アロー関数未使用で書いてみる
const tanaka = function(tanakanum) {
    console.log(`${tanakanum}さん、こんばんは`);
};

tanaka('田中');
tanaka('山田');

//戻り値
const num = (number) => {
    // numを2で書けた値を戻り値
    return number*2;
  };
  
  // 定数resultの定義
  const result = num(200);
  console.log(`200の2倍は${result}です`);

const num1 = (num2) => {
    return num2 * 5;
};
const Test = num1(500)
console.log(`500の5倍は${Test}です`);

//オブジェクト
const boy = {name: 'taro',
                 age: 12,
   greet:() => {
    console.log("こんにちは");
  }
};

// boyのnameとageプロパティを出力
console.log(boy.name);
console.log(boy.age);

// boyのgreetプロパティの関数実行
boy.greet();

//クラスの定義
class Girl {
    //コンストラクタ追加
    constructor() {
        //console.log('インスタンス生成');
        this.name = 'mimi';
        this.age = '23'
    }

}
//Girlクラスのインスタンス
const girl = new Girl();

console.log(`名前は${girl.name}です`);
console.log(`年齢は、${girl.age}歳です`);

//別クラス名
class Man {
    //コンストラクタに引数も指定してみる
    constructor(dislike, sports) {
        this.name = 'mamoru'
        this.age = '15'
        this.job = '事務員'
        this.like = '読書'
        //引数をつかう
        this.dislike = dislike;
        this.sports = sports;
    }
}
//引数も渡してみる
const man = new Man("運動","野球");
console.log(`名前は${man.name}です。趣味は${man.like}です`);
console.log(`年齢は${man.age}です。職業は${man.job}です`);
console.log(`苦手なのは${man.dislike}です。${man.sports}が苦手です`);
