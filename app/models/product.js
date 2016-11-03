import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  price: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  category: DS.belongsTo('category', { async: true}),

  cart: Ember.inject.service("shopping-cart"),
  inCart: Ember.computed('cart.products.[]', function(){
      return this.get('cart').includes(this);
    })
  // })
});
