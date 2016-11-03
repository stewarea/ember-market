import Ember from 'ember';

export default Ember.Component.extend({
  // heading: Ember.computed('category.products.name', 'category.products.price', function() {
  //   return this.get('category.products.name') + ': $' + this.get('category.products.price');
  // }),
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
