/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1551781110396_1948';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    security: {
      csrf: false,
      domainWhiteList: ['http://localhost:8000']
    },
    cros: {
      origin:'*',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
