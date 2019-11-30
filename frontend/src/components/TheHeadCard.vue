<template>
    <v-card
        style="padding: 10px"
        elevation="15"
        color="blue darken-4"
        height="85">
        <v-img 
            height="55px"
            max-width="620px"
            min-width="280px"
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
