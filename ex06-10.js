function hyoji1(){
//表示する文字
var str="一文字ずつ表示します。";
//テキストボックスの文字数
var cnt=document.timer.moji.value.length;
//文字が全部表示されているか確認
if(cnt<11){
//現在より1文字多く切り出して表示
document.timer.moji.value=str.substr(0,cnt+1);}
else{
//全て表示されたら、空文字に戻す
document.timer.moji.value="";}}
function startfnc(){
//関数hyoji()を1000ミリ秒間隔で呼び出す
setInterval("hyoji1()",1000);}
function mes1(){
alert("３秒経ちました！");
}

function hyoji2()
{
    var str="一文字ずつ表示します。";
    var cnt=document.timer2.moji2.value.length;
if(cnt<11)
{
    document.timer2.moji2.value=str.substr(0,cnt+1);
}
else
{
    document.timer2.moji2.value="";
}
setTimeout("hyoji2()",1000);
}

function mes2(){document.getElementById('logo2').src='./image/josai.png';}