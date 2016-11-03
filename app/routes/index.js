import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.store.findAll('category');
  },
  actions: {
    addProduct(params) {
      var _this=this;
      var newProduct = this.store.createRecord('product', params);
      this.store.findRecord('category', params.category).then(function(category){
        category.get('products').addObject(newProduct).then(function() {
          category.save();
        });
        newProduct.save().then(function() {
          _this.transitionTo('category', category.id);
        });
      });
    }
  }
});
