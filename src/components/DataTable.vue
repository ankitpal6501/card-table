<template>
   <!-- <div>{{this.getDatas}}</div> -->
      <table class="content_table">
        <thead>
          <tr>
            <th>API</th>
            <th>Description</th>
            <th>Auth</th>
            <th>HTTPs</th>
            <th>Cors</th>
            <th>Link</th>
            <th>Category</th>
          </tr>
        </thead>
        <div v-if="showLoader" class="loader-wrapper">
             <div class="loader"></div>
        </div>
        <tbody>
          <tr v-for="data in getDatas" :key="data.id">
            <td>{{ data.API }}</td>
            <td>{{ data.Description }}</td>
            <td>{{ data.Auth }}</td>
            <td>{{ data.HTTPs }}</td>
            <td>{{ data.Cors }}</td>
            <td>{{ data.Link }}</td>
            <td>{{ data.Category }}</td>
          </tr>
        </tbody>
      </table>
  </template>
  <script>
  export default {
    name: "DataTable",
    Data() {
      return {
        showLoader: false,
        getDatas: [],
      }
    },
    created() {
        this.showLoader = true;
        fetch('https://api.publicapis.org/entries')
            .then(response => response.json())
            .then(json => {
                this.getDatas=json.entries.slice(0,100)
                console.log(this.getDatas,"getting updated data")
                this.showLoader = false;
            })
        // this.getupdateddata();
    },
    // methods:{
    //         async getupdateddata(){
    //             this.showLoader = true;
    //                     const response = await fetch("https://api.publicapis.org/entries")
    //                 if (response.status == 200) {
    //                     const data = await response.json()
    //                     this.getData = data.entries;
    //                     console.log(this.getData)
    //                     this.showLoader = false;
    //                 }else {
    //                 console.log(response.status, response.statusText)
    //             }
    //         }
    //     },
    }
   
  </script>
  <style  scoped>
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
    margin-left: 248%;
    width: 100%;
    margin-top: 22%;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
  .content_table {
    border-collapse: collapse;
    margin: 25px 20px;
    font-size: 0.9em;
    min-width: 400px;
  }
  
  .content_table thead tr {
    color: var(--text-primary-color);
    text-align: left;
    font-weight: bold;
    background-color: var(--header-color);
  }
  .content_table th,
  .content_table td {
    padding: 12px 15px;
    text-align: initial;
  }
  .content_table tbody tr {
    border: 1px solid var(--accent-color);
  }
  .content_table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }
  </style>