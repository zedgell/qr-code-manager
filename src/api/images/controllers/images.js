'use strict';

/**
 * A set of functions called "actions" for `images`
 */

let qr = require('qr-image');
module.exports = {
  createImage: async (ctx, next) => {
    try {
      let id = ctx.params.id
      const objectData = await strapi.db.query('api::qr-code.qr-code').findOne({ // uid syntax: 'api::api-name.content-type-name'
        where: {
          slug: id
        }
      });
      console.log(objectData)
      const image = qr.imageSync(`${process.env.BASE_URL}/api/qr-route/${id}`, {type: "png"})
      console.log(image)
      ctx.response.set("content-type", 'image/png');
      ctx.body = image
    } catch (err) {
      ctx.body = err;
    }
  }
};
