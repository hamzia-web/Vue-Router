<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success">User List</p>
                <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at dolor dolorum eos impedit, itaque molestiae nostrum obcaecati officiis omnis repudiandae suscipit tenetur vel. Accusantium amet dignissimos id incidunt voluptatibus.</p>
            </div>
        </div>
        <div v-if="errorMessage">
            <p class="fw-bolder text-danger">{{errorMessage}}</p>
        </div>

        <div v-if="loading">
            <Spinner/>
        </div>

        <div v-if="!loading && users.length > 0" class="row table-responsive">
            <div class="col">
                <table class="table">
                    <thead class="bg-success text-white">
                    <tr>
                        <th>SNo</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Company</th>
                        <th>Website</th>
                        <th>Location</th>
                    </tr>
                    </thead>
                    <tbody>
                     <tr v-for="user in users" :key="user.id">
                         <td>{{user.id}}</td>
                         <td>
                             <router-link class="text-decoration-none text-success fw-bold" :to="'/users/' + user.id">{{user.name}}
                             </router-link></td>
                         <td>{{user.email}}</td>
                         <td>{{user.company.name}}</td>
                         <td>{{user.website}}</td>
                         <td>{{user.address.city}}</td>
                     </tr>
                    </tbody>
                </table>
                </div>
                </div>
            </div>
</template>

<script>
    import {UserService} from "../services/UserService";
    import Spinner from "./Spinner";

    export default {
        name: "UserList",
        components: {Spinner},
        data: function () {
           return{
               loading: false,
               users: [],
               errorMessage: ''
           }
        },
        created: async function() {
            try {
                this.loading = true
                let response = await UserService.getAllUsers()
                this.loading = false
                this.users = response.data
                //console.table(this.users)
            }
            catch (error) {
                this.loading = false
                this.errorMessage = error
            }
        },
    }
</script>

<style scoped>

</style>
