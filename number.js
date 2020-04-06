var tex = document.getElementById("txt");
var answer= document.getElementById("answer");
var btn = document.querySelectorAll(".btn-nam");
// 清空
function btnx() {
    tex.value = " ";
}
//在按鈕加入事件
btn.forEach((item) => {
    item.addEventListener("click", function () {
        tex.value += this.innerHTML;
    });
});
// 產生亂數
function randomNumber() {
    random = Math.floor(Math.random() * 100);
    randomResult = random;
}
// 解答
var biggestNum = 100;
var smallestNum = 0;
function btnv() {
    var textNum = document.getElementById("txt").value;
    // parseInt() 函式能將輸入的字串轉成整數。
    var textToInt = parseInt(textNum);
    // 小於正確數字
    if (textToInt < randomResult) {
        answer.value="正確數字小於" + biggestNum + "大於 " + textToInt + "!";
        // 等於正確數字
    } else if (textToInt == randomResult) {

        answer.value="正確數字就是" + randomResult + "!";
        // 大於正確數字
    } else if (textToInt > randomResult) {
        answer.value="正確數字小於" + textToInt + "大於 " + smallestNum + "!"
        // 非數字
    } else if (!textToInt) {
        answer.value="這是什麼？可以吃嗎？";
    }
}