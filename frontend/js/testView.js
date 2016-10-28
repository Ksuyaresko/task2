import _ from 'lodash'
import Backbone from 'backbone'
import Marionette from 'backbone.marionette'
import template from 'template!_greetings.twig'
import innerLiTemplate from 'template!inner/li.twig'

const View = Backbone.View.extend({
  template,
  render() {
    this.$el.html(this.template({title: 'I am rendered by frontend (frontend/js/testView.js)'}));
    return this;
  }
});

const ItemView = Marionette.ItemView.extend({
  template: '_greetings.twig',
  serializeData() {
    return {title: 'I am rendered via Marionette.ItemView (frontend/js/testView.js)'};
  }
});

const CollectionView = Marionette.CollectionView.extend({
  tagName:    'ul',
  className:  'test-class',
  id:         'single-dynamic',
  attributes: {
    'title': 'I am rendered via Marionette.CollectionView',
    style:   'margin-top: 5em;',
  },
  childView:  Marionette.ItemView.extend({
    tagName:  'li',
    template: 'inner/li.twig'
  }),
});

const SimpleCollection = Backbone.Collection.extend({});

export {View, ItemView, CollectionView, SimpleCollection};