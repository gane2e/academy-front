/*
function getUser(userid, callback){

  setTimeout ( () => {
    const user = {id: 1, name: '홍길동'}
    callback(user)
  } , 1000 );
};

  getUser (2, 
    (user) => console.log('user: ',user)  )
*/

/*
function getUser(userid, callback){

  setTimeout ( () => {
    const user = {id: 1, name: '홍길동'}
    callback(user)
  } , 1000 );
};

function getPosts(userid, callback) {
  setTimeout( () => {
    const posts = [
      {id: userid, title: 'post 1'},
      {id: userid, title: 'post 2'},
    ]
    callback(posts);
  }, 2000);
};

getUser(1, 
  (user) => {
    console.log('user : ' , user)
    getPosts(user.id, (posts) => {
      console.log('posts : ' , posts);
    })
  }
);
*/

//개인 회원
function getUser(userid, callback){

  setTimeout ( () => {
    const user = {id: 1, name: '홍길동'}
    callback(user)
  } , 1000 );
};

//회원이 작성한 글
function getPosts(userid, callback) {
  setTimeout( () => {
    const posts = [
      {id: userid, title: 'post 1'},
      {id: userid, title: 'post 2'},
    ]
    callback(posts);
  }, 2000);
};

//작성글 대글
function getCommand(postId, callback) {
  setTimeout( () => {
    const comments = [
      {id: postId, Text:'comments 1'},
      {id: postId, Text:'comments 2'},
      {id: postId, Text:'comments 3'},
    ]
    callback(comments);
  }, 3000);
};

getUser(1, (user) => {
  console.log('user : ', user);
  getPosts(user.id, (posts) => {
    console.log("posts : ", posts);
    getCommand(posts[0].id, (comments) => {
      console.log('comments : ' , comments);
    })
  })
}) 
