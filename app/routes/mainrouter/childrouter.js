import Ember from 'ember';

export default Ember.Route.extend({
model(params){
let maincontent=this.modelFor('mainrouter')
let bText={};  
maincontent.forEach(function(item) {
  if(params.childrouter_id===item.id)
    {
      bText=item;
    }
});
return bText;
}

});
