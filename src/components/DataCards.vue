<template>
    <div class="wrapper-posts">
        <h1>All Posts Articles</h1>
        <input type="text" v-model="search" placeholder="Search Article">
        <div v-if="showLoader" class="loader-wrapper">
             <div class="loader"></div>
        </div>
        <div v-for="post in filterPosts" :key="post.id" class="single-post">
            <h2>Title:{{post.title}}</h2>
            <article>Article:{{post.body}}</article>
            <button @click="DeletePost(post)" class="delete-action"> Delete</button>
        </div>
    </div>
  </template>
  <script>
  export default {
    name: "Datacards",
    data(){
        return{
            showLoader:false,
            search:'',
            getPosts:[]
        }
    },
    created(){
            this.showLoader=true
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                this.getPosts=json;
                this.showLoader=false
            })
    },
    computed:{
        filterPosts(){
            return this.getPosts.filter((post)=>{
                return post.title.match(this.search) ||post.body.match(this.search)
            })
        }
    },
    methods:{
        DeletePost(arg){
            const index = this.getPosts.indexOf(arg);
            if (index > -1) {
                this.getPosts.splice(index, 1);
            }
        }
    }

  };
  </script >
  <style scoped>
  .delete-action{
    height: 32px;
    width: 70px;
    margin: 20px 0px;
  }
  h1{
    color: var(--text-primary-color);
  }
  .wrapper-posts{
    max-width: 800px;
    margin: 0 auto;
    background-color: var(--background-color-primary);
  }
  .single-post{
    padding: 20px;
    margin: 20px 0;
    color: var(--text-primary-color);
    border: 1px solid var(--accent-color);
    box-sizing: border-box;
    background-color: var(--background-color-secondary);
  }
  input{
    width: 100%;
    height: 27px;
    color: var(--text-primary-color);
    background-color: var(--background-color-secondary);
  }
  .loader {
  margin-left: 45%;
  margin-bottom: 10px;
  border: 10px solid var(--loader-color);;
  border-radius: 50%;
  border-top: 10px solid var(--background-color-secondary);
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
}
.loader-wrapper{
    width: 100%;
    margin-top: 3%;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
  
</style>