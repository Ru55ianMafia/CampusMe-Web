var m = require('mithril');

var { HeaderComponent } = require('./HeaderComponent.js');
var { NavBar } = require('./NavBar.js');
var { ContentBody } = require('./ContentBody.js');
var { FooterComponent } = require('./FooterComponent.js');
var { ContentRouter } = require('./ContentRouter.js');

var App = {
  oninit: (vnode) => {
    vnode.state.activePage = 'Campus';
  },
  view: (vnode) => {
    var { activePage } = vnode.state;
    return (
      <div>
        <HeaderComponent />
        <NavBar changePage={
          (newPage)=>{
            vnode.state.activePage = newPage;
          }
        }/>
        <ContentRouter activePage={activePage}/>
        <FooterComponent />
      </div>
    );
  }
}

console.log(App);

m.route(document.body, '/', {
  '/': App
});

