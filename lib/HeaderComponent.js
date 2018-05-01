var m = require('mithril');

var HeaderComponent = {
  view: (vnode) => {
    return (
      <div class='container' id='jumbotron'>
        <div class='jumbotron'>
          <h1 id='campusme-header'> CAMPUS ME </h1>
        </div>
      </div>
    );
  }
};

exports.HeaderComponent = HeaderComponent;


