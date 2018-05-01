'use strict';

var m = require('mithril');

var DMsPage = {
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
            ' DMs Page '
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
            'Do not bite the hand that feeds you. Grab it first. Take the keys. Set yourself free. Then bite the hand, and run.'
          ),
          m('hr', null),
          m(
            'p',
            null,
            'If you could press a button that would give you a great deal of money but it would cause someone you don\'t know in a distant part of the world to die, then you would have a pretty good model for how the current economy works.'
          ),
          m('hr', null)
        ),
        m('div', { 'class': 'col-sm-2 sidenav' })
      )
    );
  }
};

exports.DMsPage = DMsPage;