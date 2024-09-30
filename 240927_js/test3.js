const promise = new Promise(
  function ( resolve, reject ) {
    setTimeout( ()=> {
      console.log("Hello")
    }, 500);
  }
);



const promise2 = new Promise(
  function(resolve, reject) {
    setTimeout(()=>{
      resolve("성공")
    }, 1000);
  }
)

promise2
  .then((result) => console.log("result : " + result) )