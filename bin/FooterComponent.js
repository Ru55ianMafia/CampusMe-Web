'use strict';

var m = require('mithril');

var FooterComponent = {
  view: function view(vnode) {
    return m(
      'footer',
      { 'class': 'container-fluid text-center' },
      m(
        'p',
        null,
        ' Footer Text '
      )
    );
  }
};

exports.FooterComponent = FooterComponent;