var m = require('mithril');

var CampusPage = {
  view: (vnode) => {
    return (
      <div class='container-fluid text-center' id='content-body'>
        <div class='row-content'>
          <div class='col-sm-2 sidenav'/>
          <div class='col-sm-8 text-left'>
            <h1> Campus Page </h1>
            <p> Lorem ipsum dolor sit amet </p>
            <hr/>
            <h3> Test </h3>
            <p>Cat ipsum</p>
            <p>When one door closes, another one opens. This is why there are so many raccoons in the house.</p>
            <hr/>
            <p>If you're happy and you know it then the chemtrails are working.</p>
            <hr/>
          </div>
          <div class="col-sm-2 sidenav" />
        </div>
      </div>
    );
  }
};

exports.CampusPage = CampusPage;

