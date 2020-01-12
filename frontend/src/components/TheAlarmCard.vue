<template>
    <v-card 
        elevation="15" 
        color="blue darken-4" 
        height="400px">

      <div v-if="alarmHandler.notLoaded() | alarmHandler.working()">
          Loading 1...
      </div>
      <div v-else-if="alarmHandler.notConfigured()">
          <TheConfigurePage />
      </div>
      <div v-else-if="alarmHandler.isAlarmSet()">
          <TheShowAlarmPage v-bind:alarmHandler="alarmHandler" />
      </div>
      <div v-else>
          <TheSetAlarmPage v-bind:alarmHandler="alarmHandler" />
      </div>

    </v-card>
</template>

<script>
import TheSetAlarmPage from "./TheSetAlarmPage"
import TheShowAlarmPage from "./TheShowAlarmPage"
import TheConfigurePage from "./TheConfigurePage"
import alarmHandlerBackend from "../AlarmHandler.js"

export default {
    name: "TheAlarmCard",
    
    components: {
        TheSetAlarmPage,
        TheShowAlarmPage,
        TheConfigurePage
    },
    
    data: function() {
        return {
            alarmHandler: {
                isLoaded: false,
                isWorking: false,
                isConfigured: false,
                time: null,
                fadein: null,
                alarmHandlerBackend: alarmHandlerBackend,

                notLoaded: function() {
                    //console.log('notLoaded') // eslint-disable-line no-console
                    return !this.isLoaded
                },

                notConfigured: function() {
                    //console.log('notConfigured') // eslint-disable-line no-console
                    return !this.isConfigured
                },

                working: function() {
                    return this.isWorking
                },

                getAlarmTime: function() {
                    //console.log('getAlarmTime') // eslint-disable-line no-console
                    return this.time
                },

                getAlarmFadein: function() {
                    //console.log('getAlarmFadein') // eslint-disable-line no-console
                    return this.fadein
                },

                isAlarmSet: function() {
                    //console.log('isAlarmSet') // eslint-disable-line no-console
                    if (this.time) {
                        return true
                    }
                    return false
                },

                cancelAlarm: async function() {
                    //console.log('cancelAlarm') // eslint-disable-line no-console
                    this.isWorking = true
                    await this.alarmHandlerBackend.cancelAlarm()
                    this.isLoaded = false
                    this.loadAlarm()
                },

                setAlarm: async function(time, fadein) {
                    //console.log('setAlarm') // eslint-disable-line no-console
                    this.isWorking = true
                    await this.alarmHandlerBackend.setAlarm(time, fadein)
                    this.isLoaded = false
                    this.loadAlarm()
                },

                loadAlarm: async function() {
                    //console.log('loadAlarm') // eslint-disable-line no-console
                    this.isWorking = true
                    this.isConfigured = await this.alarmHandlerBackend.isConfigured()
                    const alarm = await this.alarmHandlerBackend.getAlarm()
                    this.time = alarm.time
                    this.fadein = alarm.fadein
                    this.isWorking = false
                    this.isLoaded = true
                }
            }
        }
    },

    async created() {
        this.alarmHandler.loadAlarm()
    }
}
</script>

<style scoped>
</style>
