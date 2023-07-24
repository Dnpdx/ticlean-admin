'use strict';

/**
 * nomina service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::nomina.nomina');
