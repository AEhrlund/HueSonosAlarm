<template>
    <v-card
        style="padding-top: 10px"
        elevation="15"
        color="blue darken-4"
        height="85">
        <v-img 
            height="60px"
            max-width="700px"
            min-width="285px"
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
</style>
