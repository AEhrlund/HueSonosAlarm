<template>
    <v-card
        elevation="15"
        height="calc(100vh - 85px - 400px - 40px)"
        :img="require('../assets/Clouds.jpg')">

        <v-card-text class="text-center subtitle-1 bottom-text-style">
            © Alf Ehrlund 2020
        </v-card-text>

    </v-card>
</template>

<script>
export default {
    name: "TheBottomCard",
};
</script>

<style scoped>
.bottom-text-style {
    position: absolute;
    bottom: 0;
    padding: 0;
}
</style>
