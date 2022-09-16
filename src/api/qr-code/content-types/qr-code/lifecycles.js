module.exports = {
  beforeCreate(event) {
    event.params.data.image_url = `${process.env.BASE_URL}/api/images/${event.params.data.slug}`
  }
};
