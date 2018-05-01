var m = require('mithril');

var WhatsPoppinPage = {
  view: (vnode) => {
    return (
      <div class='container-fluid text-center' id='content-body'>
        <div class='row-content'>
          <div class='col-sm-2 sidenav'/>
          <div class='col-sm-8 text-left'>
            <h1> Whats Poppin Page </h1>
            <p> Lorem ipsum dolor sit amet </p>
            <hr/>
            <h3> Test </h3>
            <p>Cat ipsum</p>
            <p>It's always darkest before the dawn, we are often reassured by people who are totally wrong about how the sun works.</p>
            <hr/>
            <p>The children were right. The floor is lava. But they were wrong about the heat resistance of the sofa cushions.</p>
            <hr/>
          </div>
          <div class="col-sm-2 sidenav" />
        </div>
      </div>
    );
  }
};

exports.WhatsPoppinPage = WhatsPoppinPage;

