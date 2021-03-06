import { expect } from 'chai'
import moxios from 'moxios'
import AlarmHandler from '@/AlarmHandler.js'

describe('AlarmHandler.js', () => {
    beforeEach(function () {
        moxios.install()
    })

    afterEach(function () {
        moxios.uninstall()
    })

    it('Test getAlarm', async () => {
        const time = '12:13'
        const fadein = 8
        moxios.stubRequest('http://127.0.0.1:5000/huesonosalarm/getalarm', {
            status: 200,
            responseText: {
                time: time, fadein: fadein
            }
        })
        const response = await AlarmHandler.getAlarm()
        expect(response.time).to.equal(time)
        expect(response.fadein).to.equal(fadein)
    })

    it('Test getAlarm fail', async () => {
        moxios.stubRequest('http://127.0.0.1:5000/huesonosalarm/getalarm', {
            status: 500
        })
        try {
            await AlarmHandler.getAlarm()
            expect('no exception thrown').to.equal('exception thrown')
        }
        catch (error) {
            expect(true).to.be.true
        }
    })

    it('Test isAlarmSet set', async () => {
        const time = '12:13'
        const fadein = 8
        moxios.stubRequest('http://127.0.0.1:5000/huesonosalarm/getalarm', {
            status: 200,
            responseText: {
                time: time, fadein: fadein
            }
        })
        const response = await AlarmHandler.isAlarmSet()
        expect(response).to.be.true
    })

    it('Test isAlarmSet not set', async () => {
        const time = null
        const fadein = 8
        moxios.stubRequest('http://127.0.0.1:5000/huesonosalarm/getalarm', {
            status: 200,
            responseText: {
                time: time, fadein: fadein
            }
        })
        const response = await AlarmHandler.isAlarmSet()
        expect(response).to.be.false
    })

    it('Test cancelAlarm', async () => {
        moxios.stubRequest('http://127.0.0.1:5000/huesonosalarm/cancelalarm', {
            status: 200
        })
        await AlarmHandler.cancelAlarm()
    })

    it('Test cancelAlarm fail', async () => {
        moxios.stubRequest('http://127.0.0.1:5000/huesonosalarm/cancelalarm', {
            status: 500
        })
        try {
            await AlarmHandler.cancelAlarm()
            expect('no exception thrown').to.equal('exception thrown')
        }
        catch (error) {
            expect(true).to.be.true
        }
    })

    it('Test setAlarm', async () => {
        const time = '12:13'
        const fadein = 8
        moxios.stubRequest('http://127.0.0.1:5000/huesonosalarm/setalarm', {
            status: 200,
        })
        await AlarmHandler.setAlarm(time, fadein)
    })

    it('Test setAlarm fail', async () => {
        const time = '12:13'
        const fadein = 8
        moxios.stubRequest('http://127.0.0.1:5000/huesonosalarm/setalarm', {
            status: 500
        })
        try {
            await AlarmHandler.setAlarm(time, fadein)
            expect('no exception thrown').to.equal('exception thrown')
        }
        catch (error) {
            expect(error.name).to.equal('Error')
        }
    })

    it('Test setAlarm illegal parameters', async () => {
        var time = 123
        var fadein = 8
        try {
            await AlarmHandler.setAlarm(time, fadein)
            expect('no exception thrown').to.equal('exception thrown')
        }
        catch (error) {
            expect(error.name).to.equal('TypeError')
        }
        time = '12:13'
        fadein = '8'
        try {
            await AlarmHandler.setAlarm(time, fadein)
            expect('no exception thrown').to.equal('exception thrown')
        }
        catch (error) {
            expect(error.name).to.equal('TypeError')
        }
        time = '12:61'
        fadein = 8
        try {
            await AlarmHandler.setAlarm(time, fadein)
            expect('no exception thrown').to.equal('exception thrown')
        }
        catch (error) {
            expect(error.name).to.equal('RangeError')
        }
    })
})
