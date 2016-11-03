import Ember from 'ember';

export default Ember.Service.extend({
  products: [],
  total: 0,
  add(product, quantity) {
    this.get('products').pushObject(product);
  },

  remove(product) {
    this.get('products').removeObject(product);

  },
  includes(product) {
    return this.get('products').includes(product)
  },

  addPrice(product) {
    var newTotal = this.get('total') + parseInt(product.get('price'));
    this.set('total', newTotal);
  },
  minusPrice(product) {
    var newTotal = this.get('total') - parseInt(product.get('price'));
    this.set('total', newTotal);
  }

});
