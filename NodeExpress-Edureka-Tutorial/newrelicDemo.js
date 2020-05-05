'use strict';

/** 
 * Set the environment variable "NEW_RELIC_HOME" which points to the location of 'newrelic.js'
 * And the name of the file has to be 'newrelic.js'
 */
const newrelic = require('newrelic'); 

module.exports = {
    'api': {
        'host'    : '0.0.0.0',
        'port'    : process.env.PORT || 8081,
        'logPath' : '/tmp/phoenix/logs/analytics-api/',
        'bcrypt': {
            'rounds': 8
        },
        'collector':{
            'event': {
                'name'     : 'eventCollector',
                'fileName' : 'events',
                'level'    : 'trace',
            },
        },
    },
    'db': {
            'redshift': {
                'user'    : 'analyticsdev',
                'database': 'analyticsdev',
                'password': 'utei6oj9I345',
                'port'    : 5439,
                'host'    : 'phoenix-analytics-dev.cdzqkbz5bjbp.us-east-1.redshift.amazonaws.com',
            },
            'postgres': {
                'driver'  : 'pg',
                'database': 'analyticsdev',
                'user'    : 'analyticsdev',
                'password': 'et4eh2laeNai',
                'port'    : 5432,
                'host'    : 'phoenix-pg-dev.czwpgzp8rd69.ap-south-1.rds.amazonaws.com',
            },
        },
};