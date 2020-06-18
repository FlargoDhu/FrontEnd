// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Links } from './links.js';

Meteor.methods({
  'links.insert'(title, url, score) {
    check(url, String);
    check(title, String);

    return Links.insert({
      url,
      title,
      score: 0,
      createdAt: new Date(),
    });
  },

  'links.delete'(title, url, score) {
    check(url, String);
    check(title, String);
    score_number = Number(score);
    check(score_number, Number);

    var the_one = Links.findOne({
      url: url,
      title: title,
      score: score_number,
    });

    if(the_one){
      Links.remove({
        url: url,
        title: title,
        score: score_number,
      });
    }
  },
  'links.addpoint'(title, url, score) {
    check(url, String);
    check(title, String);
    score_number = Number(score);
    check(score_number, Number);

    var the_one = Links.findOne({
      url: url,
      title: title,
      score: score_number,
    });

    if(the_one){
      Links.update({
        url: url,
        title: title,
        score: score_number,
      },{
        $inc: {score: 1}
      }
      );
    }
  },
  'links.removepoint'(title, url, score) {
    check(url, String);
    check(title, String);
    score_number = Number(score);
    check(score_number, Number);

    var the_one = Links.findOne({
      url: url,
      title: title,
      score: score_number,
    });

    if(the_one){
      Links.update({
        url: url,
        title: title,
        score: score_number,
      },{
        $inc: {score: -1}
      }
      );
    }
  },
});
