// Compiled using marko@4.7.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/back-office-temp$1.0.0/views/home/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    layout_template = marko_loadTemplate(require.resolve("./../layout.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXmlAttr = marko_helpers.xa,
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_merge = require("marko/src/runtime/helper-merge"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  include_tag({
      _target: layout_template,
      _arg: marko_merge({
          body: {
              renderBody: function renderBody(out) {
                out.w("<div class=\"content\"><div class=\"content-area\"><div class=\"ui banner-slide\"><div class=\"flexslider\"><ul class=\"slides\"><li><div class=\"micro-video-container\"><div class=\"thumbImg\"><img src=\"http://e0.365dm.com/16/03/16-9/20/danilo-dambrosio-inter-milan_3430481.jpg?20160312224248\" alt=\"\"><div class=\"thumbOverlay\"></div></div><div class=\"recordStatus\">Replay</div><div class=\"micro-video-play\"><img src=\"" +
                  marko_escapeXmlAttr(out.global.app.staticUrl) +
                  "/img/play.png\" alt=\"\"></div><div class=\"titleArea\"><div class=\"leagueName\">Serie A</div><div class=\"matchInfo\"><div class=\"clubName\">Inter Milan <span>VS</span> Udinese</div><div class=\"matchScore\">1 <span>-</span> 3</div></div></div><a href=\"\"></a></div></li><li><div class=\"micro-video-container\"><div class=\"thumbImg\"><img src=\"http://e0.365dm.com/16/03/16-9/20/danilo-dambrosio-inter-milan_3430481.jpg?20160312224248\" alt=\"\"><div class=\"thumbOverlay\"></div></div><div class=\"recordStatus\">Replay</div><div class=\"micro-video-play\"><img src=\"" +
                  marko_escapeXmlAttr(out.global.app.staticUrl) +
                  "/img/play.png\" alt=\"\"></div><div class=\"titleArea\"><div class=\"leagueName\">Serie A</div><div class=\"matchInfo\"><div class=\"clubName\">Inter Milan <span>VS</span> Udinese</div><div class=\"matchScore\">1 <span>-</span> 3</div></div></div><a href=\"\"></a></div></li><li><div class=\"micro-video-container\"><div class=\"thumbImg\"><img src=\"http://e0.365dm.com/16/03/16-9/20/danilo-dambrosio-inter-milan_3430481.jpg?20160312224248\" alt=\"\"><div class=\"thumbOverlay\"></div></div><div class=\"recordStatus\">Replay</div><div class=\"micro-video-play\"><img src=\"" +
                  marko_escapeXmlAttr(out.global.app.staticUrl) +
                  "/img/play.png\" alt=\"\"></div><div class=\"titleArea\"><div class=\"leagueName\">Serie A</div><div class=\"matchInfo\"><div class=\"clubName\">Inter Milan <span>VS</span> Udinese</div><div class=\"matchScore\">1 <span>-</span> 3</div></div></div><a href=\"\"></a></div></li></ul></div></div><div class=\"ui container\"><div class=\"welcome-message\"><h1>Official Partner Page</h1><p>Ikuti semua update terbaru dari Inter Milan mulai dari jadwal, siaran ulang pertandingan sampai wawancara bersama pemain-pemain Inter Milan!</p></div><div class=\"video-wrapper\"><div class=\"ui grid\"><div class=\"sixteen wide mobile eight wide tablet four wide computer column\"><div class=\"micro-video-container official\"><div class=\"thumbImg\"><img src=\"http://e0.365dm.com/16/03/16-9/20/danilo-dambrosio-inter-milan_3430481.jpg?20160312224248\" alt=\"\" class=\"ui image fluid\"><div class=\"thumbOverlay\"></div><div class=\"micro-video-play\"><img src=\"" +
                  marko_escapeXmlAttr(out.global.app.staticUrl) +
                  "/img/play.png\" alt=\"\"></div></div><div class=\"titleArea\"><div class=\"matchInfo\"><div class=\"clubName\">Fiorentina <span>VS</span> Inter</div><div class=\"recordStatus\">Highlights</div></div></div><a href=\"\"></a></div></div><div class=\"sixteen wide mobile eight wide tablet four wide computer column\"><div class=\"micro-video-container official\"><div class=\"thumbImg\"><img src=\"http://e0.365dm.com/16/03/16-9/20/danilo-dambrosio-inter-milan_3430481.jpg?20160312224248\" alt=\"\" class=\"ui image fluid\"><div class=\"thumbOverlay\"></div><div class=\"micro-video-play\"><img src=\"" +
                  marko_escapeXmlAttr(out.global.app.staticUrl) +
                  "/img/play.png\" alt=\"\"></div></div><div class=\"titleArea\"><div class=\"matchInfo\"><div class=\"clubName\">Fiorentina <span>VS</span> Inter</div><div class=\"recordStatus\">Highlights</div></div></div><a href=\"\"></a></div></div><div class=\"sixteen wide mobile eight wide tablet four wide computer column\"><div class=\"micro-video-container official\"><div class=\"thumbImg\"><img src=\"http://e0.365dm.com/16/03/16-9/20/danilo-dambrosio-inter-milan_3430481.jpg?20160312224248\" alt=\"\" class=\"ui image fluid\"><div class=\"thumbOverlay\"></div><div class=\"micro-video-play\"><img src=\"" +
                  marko_escapeXmlAttr(out.global.app.staticUrl) +
                  "/img/play.png\" alt=\"\"></div></div><div class=\"titleArea\"><div class=\"matchInfo\"><div class=\"clubName\">Fiorentina <span>VS</span> Inter</div><div class=\"recordStatus\">Highlights</div></div></div><a href=\"\"></a></div></div><div class=\"sixteen wide mobile eight wide tablet four wide computer column\"><div class=\"micro-video-container official\"><div class=\"thumbImg\"><img src=\"http://e0.365dm.com/16/03/16-9/20/danilo-dambrosio-inter-milan_3430481.jpg?20160312224248\" alt=\"\" class=\"ui image fluid\"><div class=\"thumbOverlay\"></div><div class=\"micro-video-play\"><img src=\"" +
                  marko_escapeXmlAttr(out.global.app.staticUrl) +
                  "/img/play.png\" alt=\"\"></div></div><div class=\"titleArea\"><div class=\"matchInfo\"><div class=\"clubName\">Fiorentina <span>VS</span> Inter</div><div class=\"recordStatus\">Highlights</div></div></div><a href=\"\"></a></div></div></div></div></div><div class=\"live-match-info\"><div class=\"live-now\"><div class=\"ui container\"><h1>Live This Week</h1><div class=\"ui grid\"><div class=\"sixteen wide mobile seven wide computer column\"><div class=\"clubHome\"><img src=\"" +
                  marko_escapeXmlAttr(out.global.app.staticUrl) +
                  "/img/inter-logo.png\" alt=\"\" class=\"ui mini image\"> Inter</div></div><div class=\"sixteen wide mobile two wide computer column\"><div class=\"versusSym\"><div>VS</div></div></div><div class=\"sixteen wide mobile seven wide computer column\"><div class=\"clubAway\">Roma <img src=\"" +
                  marko_escapeXmlAttr(out.global.app.staticUrl) +
                  "/img/roma-logo.png\" alt=\"\" class=\"ui mini image\"></div></div></div></div></div></div><div class=\"ui container\"><div class=\"ui two column centered grid\"><div class=\"fourteen wide mobile ten wide computer column\"><div class=\"scheduledBox\"><h1>Schedule This Season</h1><div class=\"monthCalendar\"><div class=\"year\">2018</div><div class=\"month\"><div class=\"arrow prev\"><a href=\"\"><img src=\"" +
                  marko_escapeXmlAttr(out.global.app.staticUrl) +
                  "/img/arrowprev.png\" alt=\"\"></a></div><div class=\"monthContent\"><div class=\"monthName\">February</div></div><div class=\"arrow next\"><a href=\"\"><img src=\"" +
                  marko_escapeXmlAttr(out.global.app.staticUrl) +
                  "/img/arrownext.png\" alt=\"\"></a></div></div><div class=\"date-wrapper\"><div class=\"date\"><div class=\"datedaytime\"><div class=\"dateday\"><span>Sun</span> 04</div> | <div class=\"time\">02.45 <sup>WIB</sup></div></div><div class=\"clubName\">Inter <span>vs</span> Crotone</div></div><div class=\"date\"><div class=\"datedaytime\"><div class=\"dateday\"><span>Sun</span> 04</div> | <div class=\"time\">02.45 <sup>WIB</sup></div></div><div class=\"clubName\">Inter <span>vs</span> Crotone</div></div><div class=\"date\"><div class=\"datedaytime\"><div class=\"dateday\"><span>Sun</span> 04</div> | <div class=\"time\">02.45 <sup>WIB</sup></div></div><div class=\"clubName\">Inter <span>vs</span> Crotone</div></div><div class=\"date\"><div class=\"datedaytime\"><div class=\"dateday\"><span>Sun</span> 04</div> | <div class=\"time\">02.45 <sup>WIB</sup></div></div><div class=\"clubName\">Inter <span>vs</span> Crotone</div></div><div class=\"date\"><div class=\"datedaytime\"><div class=\"dateday\"><span>Sun</span> 04</div> | <div class=\"time\">02.45 <sup>WIB</sup></div></div><div class=\"clubName\">Inter <span>vs</span> Crotone</div></div></div></div></div></div></div></div><div class=\"ui container\"><div class=\"welcome-message\"><h1>Interviews</h1></div><div class=\"video-wrapper\"><div class=\"ui grid\"><div class=\"sixteen wide mobile eight wide tablet four wide computer column\"><div class=\"micro-video-container interviews\"><div class=\"thumbImg\"><img src=\"http://e0.365dm.com/16/03/16-9/20/danilo-dambrosio-inter-milan_3430481.jpg?20160312224248\" alt=\"\" class=\"ui image fluid\"><div class=\"thumbOverlay\"></div><div class=\"micro-video-play\"><img src=\"" +
                  marko_escapeXmlAttr(out.global.app.staticUrl) +
                  "/img/play.png\" alt=\"\"></div></div><div class=\"titleArea\">Interview: Matrix Impact</div><a href=\"\"></a></div></div><div class=\"sixteen wide mobile eight wide tablet four wide computer column\"><div class=\"micro-video-container interviews\"><div class=\"thumbImg\"><img src=\"http://e0.365dm.com/16/03/16-9/20/danilo-dambrosio-inter-milan_3430481.jpg?20160312224248\" alt=\"\" class=\"ui image fluid\"><div class=\"thumbOverlay\"></div><div class=\"micro-video-play\"><img src=\"" +
                  marko_escapeXmlAttr(out.global.app.staticUrl) +
                  "/img/play.png\" alt=\"\"></div></div><div class=\"titleArea\">Interview: Matrix Impact</div><a href=\"\"></a></div></div><div class=\"sixteen wide mobile eight wide tablet four wide computer column\"><div class=\"micro-video-container interviews\"><div class=\"thumbImg\"><img src=\"http://e0.365dm.com/16/03/16-9/20/danilo-dambrosio-inter-milan_3430481.jpg?20160312224248\" alt=\"\" class=\"ui image fluid\"><div class=\"thumbOverlay\"></div><div class=\"micro-video-play\"><img src=\"" +
                  marko_escapeXmlAttr(out.global.app.staticUrl) +
                  "/img/play.png\" alt=\"\"></div></div><div class=\"titleArea\">Interview: Matrix Impact</div><a href=\"\"></a></div></div><div class=\"sixteen wide mobile eight wide tablet four wide computer column\"><div class=\"micro-video-container interviews\"><div class=\"thumbImg\"><img src=\"http://e0.365dm.com/16/03/16-9/20/danilo-dambrosio-inter-milan_3430481.jpg?20160312224248\" alt=\"\" class=\"ui image fluid\"><div class=\"thumbOverlay\"></div><div class=\"micro-video-play\"><img src=\"" +
                  marko_escapeXmlAttr(out.global.app.staticUrl) +
                  "/img/play.png\" alt=\"\"></div></div><div class=\"titleArea\">Interview: Matrix Impact</div><a href=\"\"></a></div></div></div></div></div></div></div>");
              }
            },
          tail: {
              renderBody: function renderBody(out) {
                out.w("<script>\n      // tail snippet\n    </script>");
              }
            },
          [hasRenderBodyKey]: true
        }, data)
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/back-office-temp$1.0.0/views/home/index.marko",
    tags: [
      "./../layout.marko",
      "marko/src/taglibs/core/include-tag"
    ]
  };
