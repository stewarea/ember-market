import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // return this.store.findRecord('category', params.category_id);
    return Ember.RSVP.hash({
      categories: this.store.findRecord('category', params.category_id),
      products: this.store.query('product', {orderBy: "category",equalTo: params.category_id})
    });
  },
  actions: {
    addProduct(params) {
      var newProduct = this.store.createRecord('product', params);
      var category = params.category_id;
      category.get('products').addObject(newProduct);
      newProduct.save().then(function() {
        return category.save();
      });
    }
  }
});
