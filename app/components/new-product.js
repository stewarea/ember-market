import Ember from 'ember';

export default Ember.Component.extend({
  isShowingModal: false,
  actions: {
    toggleModal() {
      this.toggleProperty('isShowingModal');
    },
    addProduct() {
      var params = {
        name: this.get('name') ? this.get('name') : "",
        price: this.get('price') ? this.get('price') : "",
        description: this.get('description') ? this.get('description') : "",
        image: this.get('image') ? this.get('image') : "https://dummyimage.com/600x400/000/fff.png&text=??",
        category: this.get('category')
      };
    this.set('isShowingModal', false);
    this.sendAction("addProduct", params);
    this.set('name', "");
    this.set('price', "");
    this.set('description', "");
    this.set('image', "");
    }
  } 
});
