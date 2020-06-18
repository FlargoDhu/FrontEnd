// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Links } from '../../api/links/links.js';

Meteor.startup(() => {
  // if the Links collection is empty
  if (Links.find().count() == 0) {
    const data = [
      {
        title: 'Do the Tutorial',
        url: 'https://www.meteor.com/try',
        score: 0,
        createdAt: new Date(),
      },
      {
        title: 'Follow the Guide',
        url: 'http://guide.meteor.com',
        score: 0,
        createdAt: new Date(),
      },
      {
        title: 'Read the Docs',
        url: 'https://docs.meteor.com',
        score: 0,
        createdAt: new Date(),
      },
      {
        title: 'Discussions',
        url: 'https://forums.meteor.com',
        score: 0,
        createdAt: new Date(),
      },
    ];

    data.forEach(link => Links.insert(link));
  }
});
