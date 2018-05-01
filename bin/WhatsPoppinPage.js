'use strict';

var m = require('mithril');

var WhatsPoppinPage = {
  view: function view(vnode) {
    return m(
      'div',
      { 'class': 'container-fluid text-center', id: 'content-body' },
      m(
        'div',
        { 'class': 'row-content' },
        m('div', { 'class': 'col-sm-2 sidenav' }),
        m(
          'div',
          { 'class': 'col-sm-8 text-left' },
          m(
            'h1',
            null,
            ' Whats Poppin Page '
          ),
          m(
            'p',
            null,
            ' Lorem ipsum dolor sit amet '
          ),
          m('hr', null),
          m(
            'h3',
            null,
            ' Test '
          ),
          m(
            'p',
            null,
            'Cat ipsum'
          ),
          m(
            'p',
            null,
            'It\'s always darkest before the dawn, we are often reassured by people who are totally wrong about how the sun works.'
          ),
          m('hr', null),
          m(
            'p',
            null,
            'The children were right. The floor is lava. But they were wrong about the heat resistance of the sofa cushions.'
          ),
          m('hr', null)
        ),
        m('div', { 'class': 'col-sm-2 sidenav' })
      )
    );
  }
};

exports.WhatsPoppinPage = WhatsPoppinPage;