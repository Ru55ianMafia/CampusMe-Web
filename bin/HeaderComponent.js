'use strict';

var m = require('mithril');

var HeaderComponent = {
  view: function view(vnode) {
    return m(
      'div',
      { 'class': 'container', id: 'jumbotron' },
      m(
        'div',
        { 'class': 'jumbotron' },
        m(
          'h1',
          { id: 'campusme-header' },
          ' CAMPUS ME '
        )
      )
    );
  }
};

exports.HeaderComponent = HeaderComponent;