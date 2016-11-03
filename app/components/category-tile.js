import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['title'],
  sortedCategories: Ember.computed.sort('category', 'sortBy')
});
