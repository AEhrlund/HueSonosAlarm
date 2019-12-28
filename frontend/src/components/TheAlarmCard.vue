<template>
    <v-card 
        elevation="15" 
        color="blue darken-4" 
        height="400px">

      <div v-if="alarmHandler.configured() != true">
          <TheConfigurePage />
      </div>
      <div v-else-if="alarmHandler.getAlarm()">
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
            alarmHandler: alarmHandler
        }
    }
};
</script>

<style scoped>
</style>
