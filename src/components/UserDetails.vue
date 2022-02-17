<template>
    <div v-if="errorMessage" class="fw-bold text-danger mt-3">
        <p class="h3 text-center">--- No user found---</p>
    </div>
    <div v-if="loading">
        <Spinner/>
    </div>
    <div class="container mt-3">
        <div class="row" v-if="!loading && user != null">
            <div class="col-md-6">
<!--                <pre>{{user}}</pre>-->
                <p class="h3 text-success">User Details</p>
                <ul class="list-group">
                    <li class="list-group-item">
                        <span class="fw-bold">SNo:</span> {{user.id}}
                    </li>
                    <li class="list-group-item">
                        <span class="fw-bold">Name:</span> {{user.name}}
                    </li>
                    <li class="list-group-item">
                        <span class="fw-bold">UserName:</span> {{user.username}}
                    </li>
                    <li class="list-group-item">
                        <span class="fw-bold">Email:</span> {{user.email}}
                    </li>
                    <li class="list-group-item">
                        <span class="fw-bold">City:</span> {{user.address.city}}
                    </li>
                    <li class="list-group-item">
                        <span class="fw-bold">Phone:</span> {{user.phone}}
                    </li>
                    <li class="list-group-item">
                        <span class="fw-bold">Website:</span> {{user.website}}
                    </li>
                    <li class="list-group-item">
                        <span class="fw-bold">Company:</span> {{user.company.name}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="row my-2">
            <div class="col">
                <router-link to="/users" class="btn btn-success">Back</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import {UserService} from "../services/UserService";
    import Spinner from "./Spinner";

    export default {
        name: "UserDetails",
        components: {Spinner},
        data: function(){
            return{
              loading: false,
              user: {},
              errorMessage: ''
            }
        },
        created: async function() {
            let userId = this.$route.params.userId
            try{
                this.loading = true
                let response = await UserService.getUser(userId)
                this.loading = false
                this.user = response.data
                //console.log(response.data)
            }
            catch (error) {
                this.loading = false
                this.errorMessage = error
                console.error(error)
            }
        }
    }
</script>

<style scoped>

</style>
