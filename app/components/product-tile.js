import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['price'],
  sortedProducts: Ember.computed.sort('category.products', 'sortBy'),

  cart: Ember.inject.service('shopping-cart'),
  actions: {
    addToCart(product) {
      this.get('cart').add(product);
      this.get('cart').addPrice(product);
    }
  }

});
