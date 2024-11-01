/**
 * Plugin TinyMCE for Trail-Passion...
 */

(function() {
window.addEventListener("DOMContentLoaded",function(){document.body.parentNode.$data={},require("wordpress.plugin.trail-passion")});var require=function(){var e={};return function(r,o){var n;if(o=window["#"+r],"undefined"==typeof o){var t=new Error("Required module not found: "+r);throw console.error(t.stack),t}if(n=e[r],"undefined"==typeof n){n={exports:{}};var i=n.exports;o(i,n),e[r]=n.exports,n=n.exports,console.log("Module initialized: "+r)}return n}}();
window['#tfw.promise']=function(exports,module){window.Promise||function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function n(t){return"function"==typeof t}function e(t){return"object"==typeof t&&null!==t}function r(){}function o(){return function(){process.nextTick(c)}}function i(){var t=0,n=new F(c),e=document.createTextNode("");return n.observe(e,{characterData:!0}),function(){e.data=t=++t%2}}function s(){var t=new MessageChannel;return t.port1.onmessage=c,function(){t.port2.postMessage(0)}}function u(){return function(){setTimeout(c,1)}}function c(){for(var t=0;Y>t;t+=2){var n=N[t],e=N[t+1];n(e),N[t]=void 0,N[t+1]=void 0}Y=0}function a(){}function f(){return new TypeError("You cannot resolve a promise with itself")}function l(){return new TypeError("A promises callback cannot return that same promise.")}function h(t){try{return t.then}catch(n){return z.error=n,z}}function _(t,n,e,r){try{t.call(n,e,r)}catch(o){return o}}function p(t,n,e){x(function(t){var r=!1,o=_(e,n,function(e){r||(r=!0,n!==e?m(t,e):w(t,e))},function(n){r||(r=!0,b(t,n))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,b(t,o))},t)}function v(t,n){n._state===W?w(t,n._result):t._state===q?b(t,n._result):g(n,void 0,function(n){m(t,n)},function(n){b(t,n)})}function d(t,e){if(e.constructor===t.constructor)v(t,e);else{var r=h(e);r===z?b(t,z.error):void 0===r?w(t,e):n(r)?p(t,e,r):w(t,e)}}function m(n,e){n===e?b(n,f()):t(e)?d(n,e):w(n,e)}function y(t){t._onerror&&t._onerror(t._result),A(t)}function w(t,n){t._state===U&&(t._result=n,t._state=W,0===t._subscribers.length||x(A,t))}function b(t,n){t._state===U&&(t._state=q,t._result=n,x(y,t))}function g(t,n,e,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=n,o[i+W]=e,o[i+q]=r,0===i&&t._state&&x(A,t)}function A(t){var n=t._subscribers,e=t._state;if(0!==n.length){for(var r,o,i=t._result,s=0;s<n.length;s+=3)r=n[s],o=n[s+e],r?P(e,r,o,i):o(i);t._subscribers.length=0}}function j(){this.error=null}function E(t,n){try{return t(n)}catch(e){return B.error=e,B}}function P(t,e,r,o){var i,s,u,c,a=n(r);if(a){if(i=E(r,o),i===B?(c=!0,s=i.error,i=null):u=!0,e===i)return void b(e,l())}else i=o,u=!0;e._state!==U||(a&&u?m(e,i):c?b(e,s):t===W?w(e,i):t===q&&b(e,i))}function T(t,n){try{n(function(n){m(t,n)},function(n){b(t,n)})}catch(e){b(t,e)}}function S(t,n,e,r){this._instanceConstructor=t,this.promise=new t(a,r),this._abortOnReject=e,this._validateInput(n)?(this._input=n,this.length=n.length,this._remaining=n.length,this._init(),0===this.length?w(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&w(this.promise,this._result))):b(this.promise,this._validationError())}function k(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function M(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function O(t,e){this._id=V++,this._label=e,this._state=void 0,this._result=void 0,this._subscribers=[],a!==t&&(n(t)||k(),this instanceof O||M(),T(this,t))}var C;C=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var R,D=C,Y=(Date.now||function(){return(new Date).getTime()},Object.create||function(t){if(arguments.length>1)throw new Error("Second argument not supported");if("object"!=typeof t)throw new TypeError("Argument must be an object");return r.prototype=t,new r},0),x=function(t,n){N[Y]=t,N[Y+1]=n,Y+=2,2===Y&&R()},I="undefined"!=typeof window?window:{},F=I.MutationObserver||I.WebKitMutationObserver,K="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,N=new Array(1e3);R="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)?o():F?i():K?s():u();var U=void 0,W=1,q=2,z=new j,B=new j;S.prototype._validateInput=function(t){return D(t)},S.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},S.prototype._init=function(){this._result=new Array(this.length)};var G=S;S.prototype._enumerate=function(){for(var t=this.length,n=this.promise,e=this._input,r=0;n._state===U&&t>r;r++)this._eachEntry(e[r],r)},S.prototype._eachEntry=function(t,n){var r=this._instanceConstructor;e(t)?t.constructor===r&&t._state!==U?(t._onerror=null,this._settledAt(t._state,n,t._result)):this._willSettleAt(r.resolve(t),n):(this._remaining--,this._result[n]=this._makeResult(W,n,t))},S.prototype._settledAt=function(t,n,e){var r=this.promise;r._state===U&&(this._remaining--,this._abortOnReject&&t===q?b(r,e):this._result[n]=this._makeResult(t,n,e)),0===this._remaining&&w(r,this._result)},S.prototype._makeResult=function(t,n,e){return e},S.prototype._willSettleAt=function(t,n){var e=this;g(t,void 0,function(t){e._settledAt(W,n,t)},function(t){e._settledAt(q,n,t)})};var H=function(t,n){return new G(this,t,!0,n).promise},J=function(t,n){function e(t){m(i,t)}function r(t){b(i,t)}var o=this,i=new o(a,n);if(!D(t))return b(i,new TypeError("You must pass an array to race.")),i;for(var s=t.length,u=0;i._state===U&&s>u;u++)g(o.resolve(t[u]),void 0,e,r);return i},L=function(t,n){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var r=new e(a,n);return m(r,t),r},Q=function(t,n){var e=this,r=new e(a,n);return b(r,t),r},V=0,X=O;O.all=H,O.race=J,O.resolve=L,O.reject=Q,O.prototype={constructor:O,then:function(t,n,e){var r=this,o=r._state;if(o===W&&!t||o===q&&!n)return this;r._onerror=null;var i=new this.constructor(a,e),s=r._result;if(o){var u=arguments[o-1];x(function(){P(o,i,u,s)})}else g(r,i,t,n);return i},"catch":function(t,n){return this.then(null,t,n)}};var Z=function(){var t;t="undefined"!=typeof global?global:"undefined"!=typeof window&&window.document?window:self;var e="Promise"in t&&"resolve"in t.Promise&&"reject"in t.Promise&&"all"in t.Promise&&"race"in t.Promise&&function(){var e;return new t.Promise(function(t){e=t}),n(e)}();e||(t.Promise=X)};Z()}.call(this);};
window['#tfw.web-service']=function(exports,module){require("tfw.promise"),exports.get=function(e,n,r){return new Promise(function(t,o){"undefined"==typeof r&&(r="");var i=new XMLHttpRequest({mozSystem:!0});i.onload=function(){var n=i.responseText;if("string"==typeof n)try{t(JSON.parse(n))}catch(r){o(Error('Service "'+e+'" should return a valid JSON!\n'+r))}else o(Error('Service "'+e+'" should return a string!'))},i.onerror=function(){o(Error('Connection to service "'+e+'" failed!\n'+i.statusText))},i.open("POST",r+"tfw/svc.php",!0);var s="s="+encodeURIComponent(e)+"&i="+encodeURIComponent(JSON.stringify(n));i.setRequestHeader("Content-type","application/x-www-form-urlencoded"),i.withCredentials=!0,i.send(s)})},window.$$&&(window.$$.service=function(e,n,r,t,o){var i=exports.get(e,n);i.then(function(e){return t?r[t].call(r,e):e},function(e){return o?r[o].call(r,e):e})});};


window['#wordpress.plugin.trail-passion'] = function(exports, module){
var WS = require("tfw.web-service");
var SEARCH_LIMIT = 8;

function $(tag, content, attribs) {
    if (typeof tag === 'undefined') tag = 'div';
    if (typeof attribs === 'undefined') attribs = {};
    var e = document.createElement(tag),
    key, val;
    for (key in attribs) {
        val = attribs[key];
        e.setAttribute(key, val);
    }
    if (typeof content !== 'undefined') e.textContent = content;
    return e;
}

function row(key, tag, content, attribs) {
    var e = $(tag, content, attribs);
    var row = $();
    row.className = "row";
    row.appendChild($("span", lang.fr[key]));
    row.appendChild(e);
    inputs[key] = e;
    return row;
}

var lang = {
    fr: {
        id: "ID : ",
        width: "Width: ",
        height: "Height: "
/*
        width: "Largeur : ",
        height: "Hauteur : "
*/
    },
    en : {
        id: "ID: ",
        width: "Width: ",
        height: "Height: "
    }
};

var searchAsked = true;
var inputs = {};
var editor;
var screen = document.createElement("div");
screen.className = "trailpassion-gui";
var close = $("div", "Cancel");
close.className = "close";
close.addEventListener(
    "click",
    function() {
        screen.parentNode.removeChild(screen);
    },
    true
);
screen.appendChild(close);
var div1 = $();
div1.appendChild($("h1", "1 - Trace"));
var div2 = $();
div2.appendChild($("h1", "2 - Options"));
var div3 = $();
div3.appendChild($("h1", "3 - Display"));
screen.appendChild(div1);
screen.appendChild(div2);
screen.appendChild(div3);

div1.appendChild(row("id", "input", undefined, {size: 6, autofocus: "true"}));
var filter = $("input", undefined, {placeholder: "Search by name..."});
filter.className = "trailpassion-filter";
filter.addEventListener(
    "keyup",
    function() { searchAsked = true; },
    false
);
var user = $("input", undefined, {placeholder: "Search by user..."});
user.className = "trailpassion-filter";
user.addEventListener(
    "keyup",
    function() { searchAsked = true; },
    false
);
div1.appendChild($("br"));
div1.appendChild(filter);
div1.appendChild($("br"));
div1.appendChild(user);
div1.appendChild($("br"));
var traces = [];
var trace;
for (var i = 0 ; i < SEARCH_LIMIT ; i++) {
    trace = $();
    trace.addEventListener(
        "click",
        function() {
            inputs.id.value = this.ID;
            inputs.id.focus();
        }
    );
    trace.className = "trace hide";
    trace.index = i;
    trace.innerHTML = "???";
    traces.push(trace);
    div1.appendChild(trace);
}

div2.appendChild(row("width", "input", undefined, {size: 6, placeholder: "100%"}));
div2.appendChild(row("height", "input", undefined, {size: 6, placeholder: "600"}));



function search() {
    if (searchAsked) {
        searchAsked = false;
        WS.get(
            "tp3.ListTraces",
            {
                modes: ["all"],
                name: filter.value,
                user: user.value,
                limit: SEARCH_LIMIT
            },
            "http://trail-passion.net/"
        ).then(
            function(v) {
                var i;
                console.log(v);
                traces.forEach(
                    function(t) {
                        t.classList.add("hide");
                    }
                );
                var all = v.all;
                var t;
                for (i = 0 ; i < all.I.length ; i++) {
                    t = traces[i];
                    t.ID = all.I[i];
                    t.classList.remove("hide");
                    t.innerHTML = "<b>" + all.N[i] + "</b> " + all.P[i] + "<br/> "
                        + all.K[i] + " km / " + all.A[i] + " D+ / " + all.D[i] + " D-";
                }
                window.setTimeout(search, 1);
            }
        );
    } else {
        window.setTimeout(search, 300);
    }
}



["trace", "profil", "fly", "follow"].forEach(
    function(id) {
        var btn = $("button");
        btn.appendChild($("div", id));
        btn.className = id;
        div3.appendChild(btn);
        btn.id = id;
        btn.addEventListener(
            "click",
            function() {
                var page = this.id;
                var w = parseInt(inputs.width.value);
                var h = parseInt(inputs.width.value);
                if (isNaN(w)) w = "100%";
                if (isNaN(h)) h = "600";
                var out = '[trail-passion '
                    + 'id="' + inputs.id.value.trim() + '"'
                    + ' width="' + w + '"'
                    + ' height="' + h + '"'
                    + ' view="' + page + '"'
                    + ']';
                editor.execCommand('mceInsertContent' ,0, out);
                screen.parentNode.removeChild(screen);
            },
            false
        );
    }
);


window.guiTP = function(ed, selected_text, body) {
    editor = ed;
    body.appendChild(screen);
    search();
    filter.focus();
};

module.exports = guiTP;
};


     tinymce.create(
         'tinymce.plugins.Trailpassion',
         {
             /**
              * Initializes the plugin, this will be executed after the plugin has been created.
              * This call is done before the editor instance has finished it's initialization so use the onInit event
              * of the editor instance to intercept that event.
              *
              * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
              * @param {string} url Absolute URL to where the plugin is located.
              */
             init : function(ed, url) {
                 ed.addButton(
                     'trailpassion',
                     {
                         title : "Embed Trail-Passion's map",
                         cmd : 'trailpassion',
                         image : url + '/trail-passion.png'
                     }
                 );
                 ed.addCommand(
                     'trailpassion', 
                     function() {
                         window.scrollTo(0, 0);
                         var selected_text = ed.selection.getContent();
                         var body = window.document.body; //ed.contentDocument.body;
                         var gui = require("wordpress.plugin.trail-passion");
                         gui(ed, selected_text, body);
                     }
                 );
             },

             /**
              * Creates control instances based in the incomming name. This method is normally not
              * needed since the addButton method of the tinymce.Editor class is a more easy way of adding buttons
              * but you sometimes need to create more complex controls like listboxes, split buttons etc then this
              * method can be used to create those.
              *
              * @param {String} n Name of the control to create.
              * @param {tinymce.ControlManager} cm Control manager to use inorder to create new control.
              * @return {tinymce.ui.Control} New control instance or null if no control was created.
              */
             createControl : function(n, cm) {
                 return null;
             },

             /**
              * Returns information about the plugin as a name/value array.
              * The current keys are longname, author, authorurl, infourl and version.
              *
              * @return {Object} Name/value array containing information about the plugin.
              */
             getInfo : function() {
                 return {
                     longname : 'Trailpassion Buttons',
                     author : 'Tolokoban',
                     authorurl : 'http://trail-passion.net',
                     infourl : 'http://trail-passion.net',
                     version : "0.1"
                 };
             }
         });

     // Register plugin
     tinymce.PluginManager.add('trailpassion', tinymce.plugins.Trailpassion);
 })();



