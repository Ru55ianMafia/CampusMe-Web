var m = require('mithril');

var NavBar = {
  view: (vnode) => {
    var { changePage } = vnode.attrs;
    return (
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header" id="nav-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="myNavBar">
            <ul class="nav navbar-nav">
              <li id="home-nav"><a href="#" onclick={()=>{changePage('Campus');}}>Campus</a></li>
              <li><a href="#" onclick={()=>{changePage('Me');}}>Me</a></li>
              <li><a href="#" onclick={()=>{changePage('DMs');}}>DM's</a></li>
              <li><a href="#" onclick={()=>{changePage('WhatsPoppin');}}>What's Poppin</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><a href="#"><span class="glyphicon glyphicon-log-in"></span>Login</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
};

exports.NavBar = NavBar;


