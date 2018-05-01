var m = require('mithril');

var { CampusPage } = require('./CampusPage.js');
var { MePage } = require('./MePage.js');
var { DMsPage } = require('./DMsPage.js');
var { WhatsPoppinPage } = require('./WhatsPoppinPage.js');

var ContentRouter = {
  view: (vnode) => {
    var { activePage } = vnode.attrs;
    switch (activePage) {
      case 'Campus': return <CampusPage />;
      case 'Me': return <MePage />;
      case 'DMs': return <DMsPage />;
      case 'WhatsPoppin': return <WhatsPoppinPage />;
    }
    return <CampusPage />;
  }
};

exports.ContentRouter = ContentRouter;

