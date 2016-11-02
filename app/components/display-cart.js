import Ember from 'ember';

export default Ember.Component.extend({
  cart: Ember.inject.service('shopping-cart'),

  actions: {
    remove(product) {
      console.log(index);
      this.get('cart').remove(index);
      this.get('cart').minusPrice(product);
    }
  }
});
