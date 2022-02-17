<!--Example on conditional  -->
<template>
<!--    <pre>{{this.isLoggedIn}}</pre>-->
     <div class="container">
         <div class="row">
             <div class="col-md-6">
                 <div class="card">
                     <div class="card-body">
                         <div v-if="isLoggedIn">
                         <p class="h3 text-success">Welcome User</p>
                         <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dignissimos necessitatibus, possimus quia quisquam veniam voluptates. Amet aut deleniti dolor facilis ipsam, iure, laudantium neque possimus, repellat soluta totam voluptatum.</p>
                         </div>
                         <div v-if="!isLoggedIn">
                             <p class="h3 text-danger">Thank you</p>
                             <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dignissimos necessitatibus, possimus quia quisquam veniam voluptates. Amet aut deleniti dolor facilis ipsam, iure, laudantium neque possimus, repellat soluta totam voluptatum.</p>
                         </div>
                         <div>
                             <button v-if="!isLoggedIn" class="btn btn-success btn-sm mx-2" @click="login">Login</button>
                             <button v-if="isLoggedIn" class="btn btn-danger btn-sm" @click="logout">Logout</button>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
</template>

<script>
    export default {
        name: "AuthUser",
        // Defining state
        data: function () {
            return{
                isLoggedIn: false
            }
        },
        methods: {
            login: function () {
              this.isLoggedIn = true
            },
            logout: function () {
                this.isLoggedIn = false
            }
        }
    }
</script>

<style scoped>

</style>
