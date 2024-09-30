function test(){
  console.log("일반함수");
  console.log("일반함수2")
}
test()
console.log("--------------------");

const 익명함수 = function(){
  console.log('익명함수')
}
익명함수()
console.log("--------------------");

  ( 
    function(){
    console.log('즉시 실행 함수')
    } 
  )
  ();
  ( 
    function(x){
    console.log('즉시 실행 함수')
    return x*x
    } 
  )
  const result = (2);
  console.log(result)

  console.log("--------------------");

  let aaa = ( function() {

      function func1(){
        console.log('func1...')
      }

      function func2(){
        console.log('func2...')
      }
    }
  )
  ();

  console.log("--------------------");
  
  let bbb = ( function() {

      function func1(){
        console.log('func1...')
      }

      function func2(){
        console.log('func2...')
      }

      return{
        func1: func1,
        func2: func2,
      }
    }
  )
  ();
  bbb.func1();
  bbb.func2();

  let ccc = (
    function (){

      function func1(x){
        console.log(x*x)
      }
      function func2(y){
        console.log(y*y)
      }

    }
  ) 
