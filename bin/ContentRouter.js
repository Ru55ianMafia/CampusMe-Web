'use strict';

var m = require('mithril');

var _require = require('./CampusPage.js'),
    CampusPage = _require.CampusPage;

var _require2 = require('./MePage.js'),
    MePage = _require2.MePage;

var _require3 = require('./DMsPage.js'),
    DMsPage = _require3.DMsPage;

var _require4 = require('./WhatsPoppinPage.js'),
    WhatsPoppinPage = _require4.WhatsPoppinPage;

var ContentRouter = {
  view: function view(vnode) {
    var activePage = vnode.attrs.activePage;

    switch (activePage) {
      case 'Campus':
        return m(CampusPage, null);
      case 'Me':
        return m(MePage, null);
      case 'DMs':
        return m(DMsPage, null);
      case 'WhatsPoppin':
        return m(WhatsPoppinPage, null);
    }
    return m(CampusPage, null);
  }
};

exports.ContentRouter = ContentRouter;