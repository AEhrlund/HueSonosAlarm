<template>
    <v-card
        elevation="15"
        color="blue darken-4"
        height="85">
        <v-img
            height="85px"
            max-width="700px"
            min-width="300px"
            contain
            :src="require('../assets/Logo.png')"
            >
        </v-img>
    </v-card>
</template>

<script>
export default {
    name: 'TheHeadCard',
}
</script>

<style scoped>
.head-title-style {
    padding: 10px;
    font-family: "Comic Sans MS", cursive, sans-serif;
}
</style>
