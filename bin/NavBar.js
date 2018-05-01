"use strict";

var m = require('mithril');

var NavBar = {
  view: function view(vnode) {
    var changePage = vnode.attrs.changePage;

    return m(
      "nav",
      { "class": "navbar navbar-inverse" },
      m(
        "div",
        { "class": "container-fluid" },
        m(
          "div",
          { "class": "navbar-header", id: "nav-header" },
          m(
            "button",
            { type: "button", "class": "navbar-toggle", "data-toggle": "collapse", "data-target": "#myNavbar" },
            m("span", { "class": "icon-bar" }),
            m("span", { "class": "icon-bar" }),
            m("span", { "class": "icon-bar" })
          )
        ),
        m(
          "div",
          { "class": "collapse navbar-collapse", id: "myNavBar" },
          m(
            "ul",
            { "class": "nav navbar-nav" },
            m(
              "li",
              { id: "home-nav" },
              m(
                "a",
                { href: "#", onclick: function onclick() {
                    changePage('Campus');
                  } },
                "Campus"
              )
            ),
            m(
              "li",
              null,
              m(
                "a",
                { href: "#", onclick: function onclick() {
                    changePage('Me');
                  } },
                "Me"
              )
            ),
            m(
              "li",
              null,
              m(
                "a",
                { href: "#", onclick: function onclick() {
                    changePage('DMs');
                  } },
                "DM's"
              )
            ),
            m(
              "li",
              null,
              m(
                "a",
                { href: "#", onclick: function onclick() {
                    changePage('WhatsPoppin');
                  } },
                "What's Poppin"
              )
            )
          ),
          m(
            "ul",
            { "class": "nav navbar-nav navbar-right" },
            m(
              "li",
              null,
              m(
                "a",
                { href: "#" },
                m("span", { "class": "glyphicon glyphicon-log-in" }),
                "Login"
              )
            )
          )
        )
      )
    );
  }
};

exports.NavBar = NavBar;