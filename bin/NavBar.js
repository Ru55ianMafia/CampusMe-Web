'use strict';

var m = require('mithril');

var NavBar = {
  oninit: function oninit(vnode) {
    vnode.state.firstDisplay = true;
    vnode.state.collapsed = true;
  },

  toggleCollapse: function toggleCollapse(vnode) {
    console.log('Collapse toggle');
    vnode.state.collapsed = !vnode.state.collapsed;
  },

  view: function view(vnode) {
    var changePage = vnode.attrs.changePage;

    var navClass = 'collapse navbar-collapse ';
    if (vnode.state.firstDisplay) {
      //vnode.state.firstDisplay = false;
    } else {
      navClass += vnode.state.collapsed ? 'nav-navclose in' : 'nav-navopen in';
    }
    return m(
      'nav',
      { 'class': 'navbar navbar-inverse' },
      m(
        'div',
        { 'class': 'container-fluid' },
        m(
          'div',
          { 'class': 'navbar-header', id: 'nav-header' },
          m(
            'button',
            { type: 'button',
              'class': 'navbar-toggle ' + (vnode.state.collapsed ? 'collapsed' : ''),
              'data-toggle': 'collapse',
              'data-target': '#myNavbar',
              onclick: function onclick() {
                vnode.state.firstDisplay = false;
                vnode.tag.toggleCollapse(vnode);
              } },
            m('span', { 'class': 'icon-bar' }),
            m('span', { 'class': 'icon-bar' }),
            m('span', { 'class': 'icon-bar' })
          )
        ),
        m(
          'div',
          { 'class': navClass, id: 'myNavBar' },
          m(
            'ul',
            { 'class': 'nav navbar-nav' },
            m(
              'li',
              { id: 'home-nav' },
              m(
                'a',
                { href: '#', onclick: function onclick() {
                    changePage('Campus');
                  } },
                'Campus'
              )
            ),
            m(
              'li',
              null,
              m(
                'a',
                { href: '#', onclick: function onclick() {
                    changePage('Me');
                  } },
                'Me'
              )
            ),
            m(
              'li',
              null,
              m(
                'a',
                { href: '#', onclick: function onclick() {
                    changePage('DMs');
                  } },
                'DM\'s'
              )
            ),
            m(
              'li',
              null,
              m(
                'a',
                { href: '#', onclick: function onclick() {
                    changePage('WhatsPoppin');
                  } },
                'What\'s Poppin'
              )
            )
          ),
          m(
            'ul',
            { 'class': 'nav navbar-nav navbar-right' },
            m(
              'li',
              null,
              m(
                'a',
                { href: '#' },
                m('span', { 'class': 'glyphicon glyphicon-log-in' }),
                'Login'
              )
            )
          )
        )
      )
    );
  }
};

exports.NavBar = NavBar;