<template>
    <v-card
        elevation="15"
        color="blue darken-4"
        height="85"
        :img="require('../assets/Clouds.jpg')">
        
        <v-card-title class="justify-center font-weight-black head-title-style">
            <span>HUE + SONOS = ALARM</span>
        </v-card-title>

        <v-card-subtitle class="text-center subtitle-1">
            View/Set/Clear alarm
        </v-card-subtitle>

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
    font-family: georgia;    
}
</style>
