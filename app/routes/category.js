import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      categories: this.store.findRecord('category', params.category_id);,
      products: this.store.findAll('product')
    });
  }
});
