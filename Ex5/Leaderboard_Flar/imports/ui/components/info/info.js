import { Links } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import './info.html';


var sort_method = 'desc';
const sort_update = new Tracker.Dependency();

Template.info.onCreated(function () {
  Meteor.subscribe('links.all');
});

Template.info.helpers({
  links() {
    sort_update.depend();
    return Links.find({},  {sort: [["score",sort_method]]});
  },
});

Template.info.events({
  'submit .info-link-add'(event) {
    
    event.preventDefault();

    const target = event.target;
    const title = target.title;
    const url = target.url;

    Meteor.call('links.insert', title.value, url.value, (error) => {
      if (error) {
        alert(error.error);
      } else {
        title.value = '';
        url.value = '';
      }
    });
  },

  'submit .info-link-delete'(event){
    
    event.preventDefault();
    const target = event.target;
    const title = target.title;
    const url = target.url;
    const score = target.score;

    Meteor.call('links.delete', title.value, url.value, score.value);
  },

  'submit .info-link-addpoint'(event){
    
    event.preventDefault();
    const target = event.target;
    const title = target.title;
    const url = target.url;
    const score = target.score;

    Meteor.call('links.addpoint', title.value, url.value, score.value);
  },

  'submit .info-link-removepoint'(event){
    
    event.preventDefault();
    const target = event.target;
    const title = target.title;
    const url = target.url;
    const score = target.score;

    Meteor.call('links.removepoint', title.value, url.value, score.value);
  },

  "submit .info-reverse"(event){
    event.preventDefault();
    

    if(sort_method == "asc"){
      sort_method = 'desc';
    }

    else{
    if(sort_method == 'desc'){
      sort_method = 'asc';
      
    }}
    sort_update.changed();
  },
});
