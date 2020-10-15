 const posts = [
     { title: 'Post One', body: 'This is post one', time: window.prompt() },
     { title: 'Post Two', body: 'This is post two', time: window.prompt() },
     { title: 'Post Three', body: 'This is post three', time: window.prompt() }
 ];

 function getPost() {
     setTimeout(() => {

         let output = '';
         posts.forEach((post, index) => {

             output += < li > $ { post.title } < /li>
             output.sort(post.time);

         });
         document.body.innerHTML = output;
     }, 1000);
 }

 function createPost(post, callback) {
     setTimeout(() => {

         posts.push(post);
         callback();

     }, 2000);
 }

 createPost({ title: 'Post Three', body: 'This is post three' }, getPost);