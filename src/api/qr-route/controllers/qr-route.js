'use strict';

/**
 * A set of functions called "actions" for `qr-route`
 */

module.exports = {
  redirectToUrl: async (ctx, next) => {
    try {
      let id = ctx.params.id
      const objectData = await strapi.db.query('api::qr-code.qr-code').findOne({ // uid syntax: 'api::api-name.content-type-name'
        where: {
          slug: id
        }
      });
      ctx.redirect(objectData.url)
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  }
};
