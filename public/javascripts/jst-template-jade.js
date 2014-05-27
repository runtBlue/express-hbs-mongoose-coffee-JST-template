this["JST"] = this["JST"] || {};

this["JST"]["footer"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
buf.push("\n<p class=\"text-muted text-center\">Copyright 2014 hiroki takagishi</p>");;return buf.join("");
};

this["JST"]["history"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
buf.push("\n<p>History</p>");;return buf.join("");
};

this["JST"]["hotpepper"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
buf.push("\n<p>Hotpepper</p>");;return buf.join("");
};

this["JST"]["layout"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
buf.push("\n<header id=\"header\"></header>\n<div id=\"main\" style=\"margin-top: 70px;\">\n  <div class=\"row\">\n    <div id=\"history\" class=\"col-sm-3\">\n      <div id=\"history_title\"></div>\n      <div id=\"history_list\"></div>\n    </div>\n    <div id=\"search_results\" class=\"col-sm-9\"></div>\n  </div>\n</div>\n<footer id=\"footer\"></footer>");;return buf.join("");
};

this["JST"]["search-bar"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
buf.push("\n<nav class=\"navbar-inverse navbar-fixed-top\">\n  <div class=\"navbar-header\"><a href=\"#\" class=\"navbar-brand\">Backbone template practice</a></div>\n  <div class=\"navbar-collapse collase\">\n    <form class=\"navbar-form navbar-right\">\n      <div class=\"form-group\">\n        <input id=\"query\" type=\"text\" placeholder=\"search...\" class=\"form-control\"/>\n      </div><a id=\"btn_search\" type=\"submit\" class=\"btn btn-success\">Click me</a>\n      <div class=\"form-group\">\n        <input id=\"twitter\" type=\"radio\" name=\"service\" class=\"form-control\"/>\n        <label for=\"twitter\" class=\"inline text-muted\">Twitter</label>\n      </div>\n      <div class=\"form-group\">\n        <input id=\"hotpepper\" type=\"radio\" name=\"service\" value=\"hotpepper\" class=\"form-control\"/>\n        <label class=\"inline text-muted\">Hotpepper</label>\n      </div>\n    </form>\n  </div>\n</nav>");;return buf.join("");
};

this["JST"]["tabs"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

var jade_indent = [];
buf.push("\n<p>tabs</p>\n<div id=\"hotpepper_list\"></div>");;return buf.join("");
};