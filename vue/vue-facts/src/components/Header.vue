<script setup>

import {ref} from 'vue'
import logo_vue from '@/assets/logo_vue_256px.png'

const name = ref('Vue')

</script>


<template>
    <header>
        <img v-bind:src="logo_vue" alt="Vue Logo"/>
        <h1>Hi, I'm <span class="highlight">{{ name }}</span></h1>
    </header>
</template>


<style scope>
header img {
    height: 150px;
}

header h1 {
    font-size: 2rem;
    color: #34495e;
    margin-top: 10px;
}
</style>