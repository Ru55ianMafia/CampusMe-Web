'use strict';

var m = require('mithril');

var MePage = {
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
            ' Me Page '
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
            'Call me old fashioned but I believe there should be only one continent.'
          ),
          m('hr', null),
          m(
            'p',
            null,
            'Them\'s the brakes kid, said the most annoying driving instructor ever.'
          ),
          m('hr', null)
        ),
        m('div', { 'class': 'col-sm-2 sidenav' })
      )
    );
  }
};

exports.MePage = MePage;