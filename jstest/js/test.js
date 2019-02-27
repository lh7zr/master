
$(function(){
	/* ID选择器 */
	$("#div1").css("color","red");  //匹配id为div1的元素，并设置字体颜色为红色
	$("#a\\.b").css("color","red");
	$("#a\\:b").css("color","red");
	$("#\\[div\\]").css("color","red");
	/* 类选择器 */
	$(".kiku_1").css("color","yellow")
	var divs = document.getElementById("kiku_2") .getElementsByClassName(" blue red");
	for (var i =0; i<divs.length; i++) {
		console.log(divs[i].innerHTML);
	}
	/* $("div ~ img").css("border","solid 5px red");
	$("li:first-child").css("color","red");
	$("li:last-child").css("color","blue");
	$("li:nth-child(1)").css("background","#ff6");
	$("li:nth-child(2n)").css("background","#6ff"); */
	$("li:empty").text("空内容");   // :empty匹配空元素
	$("div ul:parent").css("background","#ff1"); // 匹配div包含ul元素中包含的子元素或者文本元素
	$("h2:contains('标题')").css("color","red");  //:contains 匹配包含给定文本的元素
	$("p:has(span)").css("color","blue");  //匹配含有选择器所匹配的元素的元素，（包含span元素的p元素）
})

/* console.log('start')

console.log('end') */


/* console.log('start')
$.get('/test-test.json', function(data){
	console.log(data)
})
console.log('end') */


/* console.log(100)
setTimeout(function(){
	console.log(200)
},1000)
console.log(300) */

/* //函数作为返回值
function F1() {
	var a = 100
	return function () {
		console.log(a)  //自由变量，在父作用域中寻找
	}
}
var f1 = F1()
var a = 200
f1() // 100

//函数作为参数传递
function F1() {
	var a = 100
	return function () {
		console.log(a)  //自由变量，在父作用域中寻找
	}
}
var f1 = F1()
function F2(fn){
	var a = 200
	fn()
}
F2(f1) //100 */


/* var c =100
function F1() {
	var n =200
	function F2() {
		var i = 300
		console.log(c) //自由变量
		console.log(n)
		console.log(i)
	}
	F2()//调用函数
}
F1()//调用函数

var a = 100 //声明变量(全局作用域)
function fn() {
	var b = 200 //（局部变量  b 是函数fn 的函数作用域）
	console.log(a) //100  自由变量 父级查找
	console.log(b) //200
}
fn() //调用函数

//无块级作用域
var name  //声明变量
if(true){
	name = 'jujingyi'
}
console.log(name) */


/* console.log(a);
var a = 100;
fn('zhangsan')
function fn(name){
	console.log(name);
} */
/* // 构造函数中的this
function Foo(name){
	this.name = name;
}
var fn = Foo('jujingyi')
// 对象中的this执行
var obj = {
	name: 'A',
	printName: function(){
		console.log(this.name)  //A
	}
}
obj.printName()
//this作为普通函数执行
function funcb(name) {
	console.log(this.name)  //this === window   (jujingyi)
}
funcb('jujingyi')

//call apply bind 
function fn1(name) {
	alert(name);
	console.log(this);
}
fn1.call({x:100}, 'jujingyi') //此时的this是{x: 100}
var fn2 = function (name) {
	alert(name);
	console.log(this);
}.bind({y:200})  //.bind 是函数表达式方式  此时的this是{y: 200}
fn2({x:100}, 'jujingyi') */