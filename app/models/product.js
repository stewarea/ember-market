import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  price: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  category: DS.belongsTo('category', { async: true})
  // shoppingCart: Ember.inject.service(),
  // inCart: Ember.computed('shoppingCart.products.[]', function() {
  //   return this.get('shoppingCart').includes(this);
  // })
});
