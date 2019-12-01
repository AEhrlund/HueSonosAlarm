<template>
    <div class="alarm">
        <h1>Set alarm</h1>
        <button v-on:click="setAlarm(123, 20)">Add 1</button>
    </div>
</template>

<script>
export default {
    name: "SetAlarm",
    props: ["alarmBackend"],
    methods: {
        setAlarm: function(time, timebefore) {
            time = Date.now()
            this.alarmBackend.setAlarm(time, timebefore)
        }
    }
}
</script>

<style scoped>

</style>
