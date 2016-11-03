import Ember from 'ember';

export default Ember.Component.extend({

  heading: Ember.computed('product.name', 'product.price', function(){
    return this.get('product.name') + ' -- $' + this.get('product.price');
  }),

    cart: Ember.inject.service('shopping-cart'),
    actions: {
      addToCart(product) {
        this.get('cart').add(product);
        this.get('cart').addPrice(product);
      }
    }
});
