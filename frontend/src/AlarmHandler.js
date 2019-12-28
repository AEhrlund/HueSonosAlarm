import axios from 'axios'
import moment from 'moment'

var backendMock = {
    configured: function() { 
        return true
    },
    getAlarm: async function() {
        const response = await axios.get('http://127.0.0.1:5000/huesonosalarm/getalarm')
        var data = undefined
        if (response.data.time != undefined) {
            data = { time: response.data.time, fadein: response.data.fadein }
        } 
        return data
    },
    cancelAlarm: async function() {
        await axios.delete('http://127.0.0.1:5000/huesonosalarm/cancelalarm')
    },
    setAlarm: async function(time, fadein) {
        if (typeof time != 'string') {
            throw new TypeError('time is not string')
        }
        if (typeof fadein != 'number') {
            throw new TypeError('fadein is not number')
        }
        if (moment(time, 'HH:mm').isValid() != true) {
            throw new RangeError('illegal time')
        }
        var data = {
            time: time,
            fadein: fadein
        }
        await axios.post('http://127.0.0.1:5000/huesonosalarm/setalarm', data)
    },
}

export default backendMock
