var backendMock = {
    time: 1572584726293,
    fade: 20,
    configured: function() { 
        return true
    },
    getAlarm: function() {
        var alarm = undefined
        if (this.time != undefined) {
            alarm = {
                time: new Date(this.time),
                fade: this.fade
            }
        }
        return alarm
    },
    cancelAlarm: function() {
        this.time = undefined
    },
    setAlarm: function(time, fade) {
        this.time = time
        this.fade = fade
    },
}

export default backendMock
