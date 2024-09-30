// 동기 -> 비동기함수로 돌린다
/*async function example(){
  console.log("1.시작");

  let result = await new Promise( (resolve, reject) => {
    setTimeout( () => 
      resolve("2.결과반환")
    , 2000);
  });

  console.log("result : " + result);
  console.log("끝");
};

example()
*/

/*
async function fetchData() {
  let response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
  let data = await response.json()
  console.log(data)
}
fetchData()
*/

function getUser(userId) {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
        try{
          const user = userId === 1 ?  {id : userId, name : "홍길동"} : null
          resolve(user)
        } catch(error) {
          reject(error)
        }
     },1000);
  })
}

function runPromise(){
  getUser(1)
    .then(user => {
        if(user) {
          console.log("user : ", user)
        } else {
          console.log("user가 없어요")
        }
      })
    .catch(err => console.log(err))
}

async function runAsuncAwait(){
  const user = await getUser(1);
    if(user) {
      console.log("user : ", user)
    } else {
      console.log("user가 없어요")
    }
}

runAsuncAwait();
// runPromise()