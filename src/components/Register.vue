<template>
<!--    <pre>{{this.user}}</pre>-->
     <div class="container mt-3">
        <div class="row">
            <div class="col-md-3">
                <!-- Login error alert -->
                <div v-if="errorMessage" class="alert alert-danger alert-dismissible fade show" role="alert">
                    <small class="text-danger">Please fill out the fields</small>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <!-- Registration success alert-->
                <div v-if="successMessage" class="alert alert-success alert-dismissible fade show" role="alert">
                    <small class="text-success">Registration successful</small>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>

                <div class="card shadow">
                    <div class="card-header bg-success text-white">
                        <p class="h4 lead">Register Here</p>
                    </div>
                    <div class="card-body">
                      <form @submit.prevent="register">
                          <div class="mb-2">
                              <input v-model="user.name" type="text"
                                     placeholder="Name" class="form-control" required="true">
                          </div>
                          <div class="mb-2">
                              <input v-model="user.email" type="email"
                                     placeholder="Email" class="form-control" required="true">
                          </div>
                          <div class="mb-2">
                              <input v-model="user.password" type="password"
                                     placeholder="Password" class="form-control" required="true">
                          </div>
                          <div class="mb-2">
                              <button type="submit" class="btn btn-success btn-sm">Register</button>
                          </div>
                      </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {UserService} from "../services/UserService";

    export default {
        name: "Register",
        data: function () {
           return{
               errorMessage: '',
               successMessage: '',
               user: {
                   name: '',
                   email: '',
                   password: '',
               }
           }
        },
        methods:{
            register: async function(){
                try {
                    //TODO: Check user already exist or not[email is unique]
                    let response = await UserService.createUser(this.user)
                    console.log(response)
                    this.successMessage = response.statusText
                    //await this.$router.push('/')

                    // resetting your form(v-model):
                    this.user = {
                        name: '',
                        email: '',
                        password: ''
                    };
                }
                catch (error) {
                    this.errorMessage = error
                }
            }
        }
    }
</script>

<style scoped>

</style>
