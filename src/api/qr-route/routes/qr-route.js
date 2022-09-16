module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/qr-route/:id',
     handler: 'qr-route.redirectToUrl',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
