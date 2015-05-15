/**
 * PlayerController
 *
 * @description :: Server-side logic for managing players
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	attributes: {
        name: {
            type: 'string',
            required: true
        },
        mflId: {
            type: 'string',
            required: true
        },
        team: {
            type: 'string',
            required: true
        },
        position: {
            type: 'string',
            required: true
        },
        byeWeek: {
            type: 'integer',
            required: true
        }
    }
};