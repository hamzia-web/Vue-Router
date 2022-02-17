<!-- Events Handling Example-1 -->
<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="card shadow-lg my-2">
                    <div class="card-header">
                        <p class="h3">Event Handling-Counter Example</p>
                    </div>
                    <div class="card-body">
                        <p>{{this.count}}</p>
                        <button class="btn btn-success btn-sm m-1" @click="increment">Increment</button>
                        <button class="btn btn-warning btn-sm m-1" @click="decrement()">Decrement</button>
                        <button class="btn btn-dark btn-sm m-1" @click="incrementBy">Increment By 5</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Counter",
        data: function () {
            return{
                count: 0
            }
        },
        methods: {
           increment: function () {
                this.count = this.count + 1
           },
            decrement: function () {

                this.count = (this.count - 1) > 0 ? (this.count - 1) : 0
            },
            incrementBy: function () {
                this.count = this.count + 5
            }
        }
    }
</script>

<style scoped>

</style>