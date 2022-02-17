<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <p class="h3">Customer with Props</p>
                <ul class="list-group">
                    <li class="list-group-item">
                        Name: {{name}}
                    </li>
                    <li class="list-group-item">
                        Age: {{age}}
                    </li>
                    <li class="list-group-item">
                        Designation:{{designation}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Customer",
        props: {
            name: {type: String, required: true},
            age: {type: String, required: true},
            designation: {type: String, required: false},
        }
    }
</script>

<style scoped>

</style>