var m = require('mithril');

var NavBar = {
  oninit: (vnode) => {
    vnode.state.firstDisplay = true;
    vnode.state.collapsed = true;
  },
  
  toggleCollapse: (vnode) => {
    console.log('Collapse toggle');
    vnode.state.collapsed = !vnode.state.collapsed;
  },

  view: (vnode) => {
    var { changePage } = vnode.attrs;
    var navClass = `collapse navbar-collapse `;
    if (vnode.state.firstDisplay) {
      vnode.state.firstDisplay = false;
    } else {
      navClass+=(vnode.state.collapsed?'nav-navclose in':'nav-navopen in');
    }
    return (
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header" id="nav-header">
            <button type="button" class={`navbar-toggle ${vnode.state.collapsed?'collapsed':''}`} data-toggle="collapse" data-target="#myNavbar" onclick = {()=>{vnode.tag.toggleCollapse(vnode);}}>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={navClass} id="myNavBar">
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


