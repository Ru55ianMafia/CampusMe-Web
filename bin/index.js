'use strict';

var m = require('mithril');

var _require = require('./HeaderComponent.js'),
    HeaderComponent = _require.HeaderComponent;

var _require2 = require('./NavBar.js'),
    NavBar = _require2.NavBar;

var _require3 = require('./ContentBody.js'),
    ContentBody = _require3.ContentBody;

var _require4 = require('./FooterComponent.js'),
    FooterComponent = _require4.FooterComponent;

var _require5 = require('./ContentRouter.js'),
    ContentRouter = _require5.ContentRouter;

var App = {
  oninit: function oninit(vnode) {
    vnode.state.activePage = 'Campus';
  },
  view: function view(vnode) {
    var activePage = vnode.state.activePage;

    return m(
      'div',
      null,
      m(HeaderComponent, null),
      m(NavBar, { changePage: function changePage(newPage) {
          vnode.state.activePage = newPage;
        } }),
      m(ContentRouter, { activePage: activePage }),
      m(FooterComponent, null)
    );
  }
};

console.log(App);

m.route(document.body, '/', {
  '/': App
});