// Compiled using marko@4.7.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/back-office-temp$1.0.0/views/layout.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    marko_escapeScript = marko_helpers.xs,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>Inter Milan Microsite</title><link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" type=\"text/css\" href=\"" +
    marko_escapeXmlAttr(out.global.app.staticUrl) +
    "/css/flexslider.css?" +
    marko_escapeXmlAttr(out.global.app.assetsVersion) +
    "\"><link rel=\"stylesheet\" type=\"text/css\" href=\"" +
    marko_escapeXmlAttr(out.global.app.staticUrl) +
    "/css/style.css?" +
    marko_escapeXmlAttr(out.global.app.assetsVersion) +
    "\">");

  include_tag({
      _target: input.head
    }, out, __component, "8");

  out.w("</head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"mobile-head navigation\"><div class=\"ui container\"><div class=\"ui equal width grid\"><div class=\"left aligned align-left column\"><div id=\"main\"><span style=\"color:#818181;font-size:34px;cursor:pointer\" onclick=\"openNav()\">&#9776;</span></div></div><div class=\"center aligned align-center column\"><a href=\"\"><img src=\"" +
    marko_escapeXmlAttr(out.global.app.staticUrl) +
    "/img/inter-hd-logo.png\" width=\"50\" height=\"50\" alt=\"\" class=\"ui image\"></a></div><div class=\"right aligned column nav-has-icon\"><a href=\"\"><i class=\"ssicon-search\"></i></a></div></div></div></div><div id=\"mySidenav\" class=\"sidenav\"><a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">&times; <i class=\"ssicon-closebtn\"></i></a><li><a href=\"\">Channels</a></li><li><a href=\"\">Shows</a></li><li><a href=\"\">Live/Replay</a></li><li><a href=\"\">News</a></li><li><a href=\"\">Buy Package</a></li><li><a href=\"\">Help</a></li><li class=\"separator\"></li><li class=\"alternate\"><a href=\"\">Login</a></li><li class=\"alternate\"><a href=\"\">Register</a></li></div>");

  include_tag({
      _target: input.body
    }, out, __component, "42");

  out.w("<footer><p>&copy; 2018 Super Soccer TV</p></footer><script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js\"></script><script src=\"" +
    marko_escapeXmlAttr(out.global.app.staticUrl) +
    "/js/semantic.min.js\"></script><script>\n  \t\t$('.ui.dropdown')\n  \t\t\t.dropdown()\n        ;\n  \t</script><script src=\"" +
    marko_escapeXmlAttr(out.global.app.staticUrl) +
    "/js/jquery.flexslider.js\"></script><script>\n  \t\t$(window).load(function() {\n  \t\t\t$('.flexslider').flexslider({\n  \t\t\t\tanimation: \"slide\",\n  \t\t\t});\n  \t\t});\n\n  \t</script><script>\n      function openNav() {\n          document.getElementById(\"mySidenav\").style.width = \"250px\";\n          document.getElementById(\"main\").style.marginLeft = \"250px\";\n          document.body.style.backgroundColor = \"rgba(0,0,0,0.4)\";\n      }\n\n      function closeNav() {\n          document.getElementById(\"mySidenav\").style.width = \"0\";\n          document.getElementById(\"main\").style.marginLeft= \"0\";\n          document.body.style.backgroundColor = \"white\";\n      }\n    </script><script src=\"" +
    marko_escapeXmlAttr(out.global.app.staticUrl) +
    "/js/jquery.easing.js\"></script><script src=\"" +
    marko_escapeXmlAttr(out.global.app.staticUrl) +
    "/js/jquery.mousewheel.js\"></script><script>\n      window._ = window._ || {};\n      window._.hostname = '" +
    marko_escapeScript(out.global.app.hostname) +
    "';\n      window._.url = '" +
    marko_escapeScript(out.global.url) +
    "';\n    </script>");

  include_tag({
      _target: input.tail
    }, out, __component, "54");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "55");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/back-office-temp$1.0.0/views/layout.marko",
    tags: [
      "marko/src/taglibs/core/include-tag",
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
