<template>
    <div style="flex-direction: column" class="d-flex flex-column justify-between">
        <v-row justify="center" class="mt-12 ml-0 mr-0 display-1 font-weight-medium">
            The alarm is set!
        </v-row>
        
        <v-row justify="center" class="mt-12 ml-0 mr-0 display-2 font-weight-light" style="text-align: center">
            Time: {{time}}
        </v-row>
        
        <v-row justify="center" class="mt-4 ml-0 mr-0 display-1 font-weight-light" style="text-align: center">
            Fade in: {{fadein}} min
        </v-row>
        
        <v-row style="height: 65px" class="ml-0 mr-0" >
        </v-row>

        <v-row justify="center" class="mt-12 ml-0 mr-0" style="width: 100%; margin-left: 0px">
            <v-btn 
                color="black"
                elevation="15"
                large
                block
                v-on:click="cancelAlarm()">
                <span style="color: white">
                    Clear Alarm
                </span>
            </v-btn>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'ShowAlarm',

    props: ['alarmHandler'],

    methods: {
        cancelAlarm: function() {
            this.alarmHandler.cancelAlarm()
        }
    },

    data: function() {
        return {
            time: this.alarmHandler.getAlarmTime(),
            fadein: this.alarmHandler.getAlarmFadein(),
        }
    },
}
</script>

<style scoped>
</style>
