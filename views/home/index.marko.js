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
    marko_forEach = marko_helpers.f,
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_escapeXml = marko_helpers.x,
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
                out.w("<div class=\"content\"><div class=\"content-area\"><div class=\"ui banner-slide\"><div class=\"flexslider\"><ul class=\"slides\">");

                marko_forEach(data.data.enable.id1, function(head) {
                  out.w("<li><div class=\"micro-video-container\"><div class=\"thumbImg\"><img src=\"" +
                    marko_escapeXmlAttr(head.attributes.imageUrl) +
                    "\" alt=\"\"><div class=\"thumbOverlay\"></div></div><div class=\"recordStatus\">" +
                    marko_escapeXml(head.attributes.title) +
                    "</div><div class=\"micro-video-play\"><img src=\"" +
                    marko_escapeXmlAttr(out.global.app.staticUrl) +
                    "/img/play.png\" alt=\"\"></div><div class=\"titleArea\"><div class=\"leagueName\">" +
                    marko_escapeXml(head.attributes.leagueName) +
                    "</div><div class=\"matchInfo\"><div class=\"clubName\">" +
                    marko_escapeXml(head.attributes.clubNameHome) +
                    " <span>VS</span> " +
                    marko_escapeXml(head.attributes.clubNameAway) +
                    "</div><div class=\"matchScore\">" +
                    marko_escapeXml(head.attributes.matchScoreHome) +
                    " <span>-</span> " +
                    marko_escapeXml(head.attributes.matchScoreAway) +
                    "</div></div></div><a href=\"\"></a></div></li>");
                });

                out.w("</ul></div></div><div class=\"ui container\"><div class=\"welcome-message\">");

                marko_forEach(data.data.enable.id2, function(body) {
                  out.w("<h1>" +
                    marko_escapeXml(body.attributes.title) +
                    "</h1><p>" +
                    marko_escapeXml(body.attributes.description) +
                    "</p>");
                });

                out.w("</div><div class=\"video-wrapper\"><div class=\"ui grid\">");

                marko_forEach(data.data.enable.id3, function(highlights) {
                  out.w("<div class=\"sixteen wide mobile eight wide tablet four wide computer column\"><div class=\"micro-video-container official\"><div class=\"thumbImg\"><img src=\"" +
                    marko_escapeXmlAttr(highlights.attributes.imageUrl) +
                    "\" alt=\"\" class=\"ui image fluid\"><div class=\"thumbOverlay\"></div><div class=\"micro-video-play\"><img src=\"" +
                    marko_escapeXmlAttr(out.global.app.staticUrl) +
                    "/img/play.png\" alt=\"\"></div></div><div class=\"titleArea\"><div class=\"matchInfo\"><div class=\"clubName\">" +
                    marko_escapeXml(highlights.attributes.clubHome) +
                    " <span>VS</span> " +
                    marko_escapeXml(highlights.attributes.clubAway) +
                    "</div><div class=\"recordStatus\">" +
                    marko_escapeXml(highlights.attributes.recordStatus) +
                    "</div></div></div><a href=\"\"></a></div></div>");
                });

                out.w("</div></div></div><div class=\"live-match-info\"><div class=\"live-now\"><div class=\"ui container\">");

                marko_forEach(data.data.enable.id4, function(week) {
                  out.w("<h1>" +
                    marko_escapeXml(week.attributes.title) +
                    "</h1><div class=\"ui grid\"><div class=\"sixteen wide mobile seven wide computer column\"><div class=\"clubHome\"><img src=\"" +
                    marko_escapeXmlAttr(out.global.app.staticUrl) +
                    "/img/inter-logo.png\" alt=\"\" class=\"ui mini image\"> " +
                    marko_escapeXml(week.attributes.clubHome) +
                    "</div></div><div class=\"sixteen wide mobile two wide computer column\"><div class=\"versusSym\"><div>VS</div></div></div><div class=\"sixteen wide mobile seven wide computer column\"><div class=\"clubAway\">" +
                    marko_escapeXml(week.attributes.clubAway) +
                    " <img src=\"" +
                    marko_escapeXmlAttr(out.global.app.staticUrl) +
                    "/img/roma-logo.png\" alt=\"\" class=\"ui mini image\"></div></div></div>");
                });

                out.w("</div></div></div><div class=\"ui container\"><div class=\"ui two column centered grid\"><div class=\"fourteen wide mobile ten wide computer column\"><div class=\"scheduledBox\">");

                marko_forEach(data.data.id5, function(season) {
                  out.w("<h1>" +
                    marko_escapeXml(season.attributes.title) +
                    "</h1><div class=\"monthCalendar\"><div class=\"year\">" +
                    marko_escapeXml(season.attributes.year) +
                    "</div><div class=\"month\"><div class=\"arrow prev\"><a href=\"\"><img src=\"" +
                    marko_escapeXmlAttr(out.global.app.staticUrl) +
                    "/img/arrowprev.png\" alt=\"\"></a></div><div class=\"monthContent\"><div class=\"monthName\">" +
                    marko_escapeXml(season.attributes.month) +
                    "</div></div><div class=\"arrow next\"><a href=\"\"><img src=\"" +
                    marko_escapeXmlAttr(out.global.app.staticUrl) +
                    "/img/arrownext.png\" alt=\"\"></a></div></div><div class=\"date-wrapper\">");

                  marko_forEach(season.scheduleDetail, function(details) {
                    out.w("<div class=\"date\"><div class=\"datedaytime\"><div class=\"dateday\"><span>" +
                      marko_escapeXml(details.attributes.day) +
                      " </span>" +
                      marko_escapeXml(details.attributes.date) +
                      "</div> | <div class=\"time\">" +
                      marko_escapeXml(details.attributes.time) +
                      " <sup>" +
                      marko_escapeXml(details.attributes.timeloc) +
                      "</sup></div></div><div class=\"clubName\">" +
                      marko_escapeXml(details.attributes.clubHome) +
                      " <span>vs</span> " +
                      marko_escapeXml(details.attributes.clubAway) +
                      "</div></div>");
                  });

                  out.w("</div></div>");
                });

                out.w("</div></div></div></div><div class=\"ui container\"><div class=\"welcome-message\"><h1>Interviews</h1></div><div class=\"video-wrapper\"><div class=\"ui grid\">");

                marko_forEach(data.data.enable.id7, function(interviews) {
                  out.w("<div class=\"sixteen wide mobile eight wide tablet four wide computer column\"><div class=\"micro-video-container interviews\"><div class=\"thumbImg\"><img src=\"" +
                    marko_escapeXmlAttr(interviews.attributes.imageUrl) +
                    "\" alt=\"\" class=\"ui image fluid\"><div class=\"thumbOverlay\"></div><div class=\"micro-video-play\"><img src=\"" +
                    marko_escapeXmlAttr(out.global.app.staticUrl) +
                    "/img/play.png\" alt=\"\"></div></div><div class=\"titleArea\">" +
                    marko_escapeXml(interviews.attributes.title) +
                    "</div><a href=\"\"></a></div></div>");
                });

                out.w("</div></div></div></div></div>");
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
