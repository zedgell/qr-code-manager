module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/images/:id',
     handler: 'images.createImage',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
