<template>
    <nav class="navbar navbar-dark bg-success navbar-expand-sm">
        <div class="container">
            <router-link class="navbar-brand" to="/">Vue Router</router-link>
            <!-- Mobile Collapse -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item px-2">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item px-2">
                        <router-link to="/users" class="nav-link">Users</router-link>
                    </li>
                    <li class="nav-item px-2">
                        <router-link to="/about" class="nav-link">About</router-link>
                    </li>
                    <li class="nav-item px-2">
                        <router-link to="/contact" class="nav-link">Contact Us</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>
