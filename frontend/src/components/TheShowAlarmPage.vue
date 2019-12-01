<template>
    <div
        style="flex-direction: column" 
        class="d-flex flex-column justify-between">

        <v-row justify="center" class="mt-12 display-1 font-weight-medium">
            The alarm is set!
        </v-row>
        
        <v-row justify="center" class="mt-12 display-2 font-weight-light" style="text-align: center">
            Time: {{getAlarmTime()}}
        </v-row>
        
        <v-row justify="center" class="mt-4 display-1 font-weight-light" style="text-align: center">
            Fadein: {{getFadeTime()}} min
        </v-row>
        
        <v-row style="height: 65px">
        </v-row>

        <v-row justify="center" class="mt-12" style="width: 100%; margin-left: 1px">
            <v-btn 
                color="black"
                elevation="15"
                large
                block
                v-on:click="alarmBackend.cancelAlarm()">
                <span style="color: white">
                    Clear Alarm
                </span>
            </v-btn>
        </v-row>

    </div>
</template>

<script>
export default {
    name: "ShowAlarm",
    props: ["alarmBackend"],
    methods: {
        getAlarmTime: function() {
            const alarm = this.alarmBackend.getAlarm()
            return alarm.time.getHours().toLocaleString() + ":" + alarm.time.getMinutes().toLocaleString()
        },
        getFadeTime: function() {
            const alarm = this.alarmBackend.getAlarm()
            return alarm.fade
        }
    }
}
</script>

<style scoped>
</style>
