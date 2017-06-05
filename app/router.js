import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('mainrouter', function() {
    this.route('childrouter',{path:':childrouter_id'});
  });
});

export default Router;
