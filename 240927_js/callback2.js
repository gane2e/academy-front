// function tasksyncFunction(callback){
//   console.log('첫번째 작업')
  
//   for(let i=0; i<100000; i++)
//     console.log('두번째 작업')
  
//   callback();
// }

// tasksyncFunction( () => console.log("콜백함수 실행") );

function tasksyncFunction(callback){
  console.log("start");

  setTimeout( () => {
      console.log('첫번째 작업');
      console.log('두번째 작업');
      callback(); }, 2000 );
      
    console.log('end');
}

tasksyncFunction( ()=> console.log("콜백함수 실행") );
console.log("종료");