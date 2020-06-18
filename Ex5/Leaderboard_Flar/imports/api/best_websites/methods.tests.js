// Tests for links methods
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'chai';
import { Best_Websites } from './b_websites.js';
import './methods.js';

if (Meteor.isServer) {
  describe('links methods', function () {
    beforeEach(function () {
      Best_Websites.remove({});
    });

    it('can add a new link', function () {
      const addLink = Meteor.server.method_handlers['links.insert'];

      addLink.apply({}, ['meteor.com', 'https://www.meteor.com']);

      assert.equal(Links.find().count(), 1);
    });
  });
}
