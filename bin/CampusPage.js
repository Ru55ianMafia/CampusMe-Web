'use strict';

var m = require('mithril');

var CampusPage = {
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
            ' Campus Page '
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
            'When one door closes, another one opens. This is why there are so many raccoons in the house.'
          ),
          m('hr', null),
          m(
            'p',
            null,
            'If you\'re happy and you know it then the chemtrails are working.'
          ),
          m('hr', null)
        ),
        m('div', { 'class': 'col-sm-2 sidenav' })
      )
    );
  }
};

exports.CampusPage = CampusPage;