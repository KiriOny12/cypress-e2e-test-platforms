
const { initPlugin } = require('cypress-plugin-snapshots/plugin');
const cucumber = require('cypress-cucumber-preprocessor').default
const del = require('del')
const _ = require('lodash')

module.exports = (on, config) => {
    on('after:spec', (spec, results) => {
        if (results && results.video) {
            const failures = _.some(results.tests, (test) => {
                return _.some(test.attempts, { state: 'failed' })
            })
            if (!failures) {
                return del(results.video)
            }
        }
    })
    on('file:preprocessor', cucumber())
    initPlugin(on, config);
    return config;
}
