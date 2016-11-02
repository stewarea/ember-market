import Ember from 'ember';

export default Ember.Component.extend({
  // heading: Ember.computed('category.products.name', 'category.products.price', function() {
  //   return this.get('category.products.name') + ': $' + this.get('category.products.price');
  // }),
  shoppingCart: Ember.inject.service(),
  actions: {
    addToCart(product) {
      this.get('shoppingCart').add(product);
    }
  }

});
