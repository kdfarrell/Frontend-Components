<script setup>
import {ref} from 'vue'

const href = ref('https://vuejs.org/')


</script>


<template>
    <footer>
        <p>Learn more about me at <a target="_blank" :href>vuejs.org</a></p>
    </footer>
</template>


<style scope>
footer {
    margin-top: 35px;
    font-size: 0.8rem;
}

footer a {
    color: #40b883;
}
</style>