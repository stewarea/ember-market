import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // return this.store.findRecord('category', params.category_id);
    return Ember.RSVP.hash({
      categories: this.store.findRecord('category', params.category_id),
      products: this.store.findAll('product', params.category)
    });
  },
  actions: {
    addProduct(params) {
      var newProduct = this.store.createRecord('product', params);
      var category = params.category;
      category.get('products').addObject(newProduct);
      newProduct.save().then(function() {
        return category.save();
      });
    }
  }
});
