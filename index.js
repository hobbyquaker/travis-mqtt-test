#!/usr/bin/env node

const Mqtt = require('mqtt');

const mqtt = Mqtt.connect('mqtt://127.0.0.1:1883');


mqtt.on('connect', function () {
    console.log('mqtt connected!');
    process.exit(0);
});
