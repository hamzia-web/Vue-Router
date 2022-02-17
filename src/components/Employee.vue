<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <p class="h3">Employee with State</p>
                <ul class="list-group">
                    <li class="list-group-item">
                        Name: {{this.employee.name}}
                    </li>
                    <li class="list-group-item">
                        Age: {{this.employee.age}}
                    </li>
                    <li class="list-group-item">
                        Designation: {{this.employee.designation}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Employee",
        // whenever you want to maintain state of your component, that will be data property
        data: function () {
            return{
                //state
                employee: {
                   name: 'Hamid',
                   age: 30,
                   designation: "Developer"
                }
            }
        },
        // Along with data, we can define props as well
        props: {
            name: {type: String, required: true},
            age:  {type: Number, required: true},
            designation: {type: String, required: false},
        }
    }
</script>

<style scoped>

</style>