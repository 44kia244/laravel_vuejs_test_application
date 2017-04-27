<template>
    <div>
        <div class="row">
            <div class="columns shrink"><router-link to="/">Home</router-link></div>
            <div class="columns shrink"><router-link to="/page1">Page1</router-link></div>
            <div class="columns"></div>
        </div>
        <div class="row">
            <div class="columns small-12 medium-12 large-12">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>
