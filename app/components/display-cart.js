import Ember from 'ember';

export default Ember.Component.extend({
  cart: Ember.inject.service('shopping-cart'),

  actions: {
    remove(product) {
      this.get('cart').remove(product);
      this.get('cart').minusPrice(product);
    }
  }
});
