import Ember from 'ember';

export default Ember.Service.extend({
  products: [],
  total: 0,
  add(product) {
    this.get('products').pushObject(product);
    var newTotal = this.get('total') + parseInt(product.get('price'));
    this.set('total', newTotal);
  }
});
