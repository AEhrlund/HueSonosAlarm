<template>
    <v-content class="blue">
        <v-content class="content-style">
            <v-layout column>
                <v-flex class="flex-style">
                    <TheHeadCard/>
                </v-flex>
                <v-flex class="flex-style">
                    <TheAlarmCard/>
                </v-flex>
                <v-flex class="flex-style">
                    <TheBottomCard/>
                </v-flex>
            </v-layout>
        </v-content>
    </v-content>
</template>

<script>
import TheAlarmCard from "./TheAlarmCard"
import TheHeadCard from "./TheHeadCard"
import TheBottomCard from "./TheBottomCard"

export default {
    name: 'HueSonosAlarm',
    components: {
        TheAlarmCard,
        TheHeadCard,
        TheBottomCard,
    }
}
</script>

<style scoped>
.flex-style {
    width: 100%;
    min-width: 300px;
    max-width: 700px!important;
    margin: 0 auto 10px;
}
.content-style {
    height: 100vh;
    overflow: auto;
    padding: 10px!important;
}
</style>
