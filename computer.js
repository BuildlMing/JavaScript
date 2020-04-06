var a1 = document.getElementById("a1");
// 清空
function c() {
    a1.value = " ";
}
// 顯示數字
function inputNum(x) {
   a1.value = a1.value + x;
}
// 相加
function equal() {
    a1.value = eval(a1.value)
}