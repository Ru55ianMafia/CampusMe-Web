var m = require('mithril');

var MePage = {
  view: (vnode) => {
    return (
      <div class='container-fluid text-center' id='content-body'>
        <div class='row-content'>
          <div class='col-sm-2 sidenav'/>
          <div class='col-sm-8 text-left'>
            <h1> Me Page </h1>
            <p> Lorem ipsum dolor sit amet </p>
            <hr/>
            <h3> Test </h3>
            <p>Cat ipsum</p>
            <p>Call me old fashioned but I believe there should be only one continent.</p>
            <hr/>
            <p>Them's the brakes kid, said the most annoying driving instructor ever.</p>
            <hr/>
          </div>
          <div class="col-sm-2 sidenav" />
        </div>
      </div>
    );
  }
};

exports.MePage = MePage;

