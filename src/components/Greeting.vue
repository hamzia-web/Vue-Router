<!-- Events Handling Example-2 -->
<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="card shadow-lg">
                    <div class="card-header">
                        <p class="h3">Event Handling with Function parameter-Greetings Example</p>
                    </div>
                    <div class="card-body">
                        <p>Hello <span class="fw-bold">{{message}}</span></p>
                        <button class="btn btn-success btn-sm m-1" @click="greet('Good Morning')">Good Morning</button>
                        <button class="btn btn-warning btn-sm m-1" @click="greet('Good Afternoon')">Good Afternoon</button>
                        <button class="btn btn-dark btn-sm m-1" @click="greet('Good Evening')">Good Evening</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Greeting",
        data: function () {
            return{
                message: ""
            }
        },
        methods: {
            greet: function (value) {
                this.message = value
            }
        }
    }
</script>

<style scoped>

</style>