const post = {
  username: "@mr_vivek___0___",
  content: "This is my #firstPost",
  like: 200,
  repost: 30,
  tags: ["@aditya", "@raj", "@vishal"],
};
console.log(post);
console.log(post["content"]); //console.log(post.content);

console.log(post.tags[0]);