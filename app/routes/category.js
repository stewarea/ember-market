import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
      // products: this.store.query('product', {orderBy: "category", equalTo: params.category_id})
    // });
  } 

});
