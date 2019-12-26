<template>
    <v-card 
        elevation="15" 
        color="blue darken-4" 
        height="400px">

      <div v-if="alarmBackend.configured() != true">
          <TheConfigurePage />
      </div>
      <div v-else-if="alarmBackend.getAlarm()">
          <TheShowAlarmPage v-bind:alarmBackend="alarmBackend" />
      </div>
      <div v-else>
          <TheSetAlarmPage v-bind:alarmBackend="alarmBackend" />
      </div>

    </v-card>
</template>

<script>
import TheSetAlarmPage from "./TheSetAlarmPage"
import TheShowAlarmPage from "./TheShowAlarmPage"
import TheConfigurePage from "./TheConfigurePage"
import alarmHandler from "../AlarmHandler.js"

export default {
    name: "TheAlarmCard",
    components: {
        TheSetAlarmPage,
        TheShowAlarmPage,
        TheConfigurePage
    },
    data: function() {
        return {
            alarmBackend: alarmHandler
        }
    }
};
</script>

<style scoped>
</style>
