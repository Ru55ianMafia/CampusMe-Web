var m = require('mithril');

var DMsPage = {
  view: (vnode) => {
    return (
      <div class='container-fluid text-center' id='content-body'>
        <div class='row-content'>
          <div class='col-sm-2 sidenav'/>
          <div class='col-sm-8 text-left'>
            <h1> DMs Page </h1>
            <p> Lorem ipsum dolor sit amet </p>
            <hr/>
            <h3> Test </h3>
            <p>Cat ipsum</p>
            <p>Do not bite the hand that feeds you. Grab it first. Take the keys. Set yourself free. Then bite the hand, and run.</p>
            <hr/>
            <p>If you could press a button that would give you a great deal of money but it would cause someone you don't know in a distant part of the world to die, then you would have a pretty good model for how the current economy works.</p>
            <hr/>
          </div>
          <div class="col-sm-2 sidenav" />
        </div>
      </div>
    );
  }
};

exports.DMsPage = DMsPage;

