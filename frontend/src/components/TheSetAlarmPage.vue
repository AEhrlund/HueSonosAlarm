<template>
    <div style="flex-direction: column" class="d-flex flex-column justify-between">

        <v-row justify="center" class="mt-12 ml-0 mr-0 display-1 font-weight-medium">
            Set alarm!
        </v-row>
        
        <v-row class="mt-12 ml-0 mr-0" justify="center">
            <div style="width: 250px">

                <v-row class="ma-0 display-2 font-weight-light" style="text-align: center">
                    <v-col class="pa-0" style="text-align: right">
                        Time:
                    </v-col>    

                    <v-col class="ml-3 pa-0">
                
                        <v-dialog
                            ref="dialog"
                            v-model="modalTime"
                            :return-value.sync="time"
                            width="250px"
                        >
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                    v-model="time"
                                    v-on="on"
                                    class="mt-0 pt-0 display-2 font-weight-light"
                                    readonly
                                    hide-details
                                    id="time-input"
                                >
                                </v-text-field>
                            </template>
                            <v-time-picker v-if="modalTime" v-model="time" full-width format="24hr">
                                <v-spacer></v-spacer>
                                <v-btn text color="primary" @click="modalTime = false">Cancel</v-btn>
                                <v-btn text color="primary" @click="$refs.dialog.save(time)">OK</v-btn>
                            </v-time-picker>
                        </v-dialog>

                    </v-col>
                </v-row>



            </div>
        </v-row>
        
        <v-row class="mt-4 ml-0 mr-0" justify="center">
            <div style="width: 240px">

                <v-row class="ma-0 display-1 font-weight-light" style="text-align: center">
                    <v-col cols="6" class="pa-0" style="text-align: right">
                        Fade in:
                    </v-col>

                    <v-col class="ml-3 pa-0">
                
                        <v-text-field
                            v-model="fadein"
                            class="mt-0 pt-0 display-1 font-weight-light"
                            hide-details
                            single-line
                            id="fadein-input"
                            type="number"
                        >
                        </v-text-field>

                    </v-col>

                    <v-col class="ml-3 pa-0">
                        min
                    </v-col>

                </v-row>

            </div>
        </v-row>

        <v-row style="height: 65px" class="ml-0 mr-0">
        </v-row>

        <v-row justify="center" class="mt-12 ml-0 mr-0" style="width: 100%; margin-left: 0px">
            <v-btn 
                color="black"
                elevation="15"
                large
                block
                v-on:click="setAlarm({time}, {fadein})">
                <span style="color: white">
                    Set Alarm
                </span>
            </v-btn>
        </v-row>

    </div>
</template>

<script>

export default {
    name: 'SetAlarm',
    props: ['alarmHandler'],
    methods: {
        setAlarm: function(time, fadein) {
            this.alarmHandler.setAlarm(time.time, fadein.fadein)
        }
    },
    data() {
        return {
            time: '07:00',
            fadein: '20',
            modalTime: false,
        }
    }
}
</script>

<style>
#time-input {
    max-height: 100px!important;
    line-height: 50px;
    padding: 0;
}
#fadein-input {
    max-height: 100px!important;
    line-height: 10px;
    padding: 0;
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
</style>
