/*
function parentFunc(callback){
  console.log("parent")
  callback()
}

function childFunc(){
  console.log("child")
}

parentFunc(childFunc);
*/

/*
function repeat(count){
  for(let idx=0; idx<count; idx++)
    console.log(idx+1)
}

function repeatDouble(count) {
  for(let idx=0; idx<count; idx++)
    console.log( (idx+1) *2 )

}

// repeat(5)
repeatDouble(5)
*/

function repeat(count, callback) {
  for(let idx=0; idx<count; idx++)
    callback(idx+1)
}

function origin(count){
  console.log(count)
}

function double(count){
  console.log(count * 2)
}

// repeat(5, origin)
// repeat(5, double)

repeat(5, (count) => console.log(count * 3));