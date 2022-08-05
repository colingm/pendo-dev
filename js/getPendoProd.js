(function (apiKey) {
  (function (p, e, n, d, o) {
    var v, w, x, y, z;
    o = p[d] = p[d] || {};
    o._q = o._q || [];
    v = ["initialize", "identify", "updateOptions", "pageLoad", "track"];
    for (w = 0, x = v.length; w < x; ++w)
      (function (m) {
        o[m] =
          o[m] ||
          function () {
            o._q[m === v[0] ? "unshift" : "push"](
              [m].concat([].slice.call(arguments, 0))
            );
          };
      })(v[w]);
    y = e.createElement(n);
    y.async = !0;
    y.src =
      "https://cdn.pendo.io/agent/static/" +
      apiKey +
      "/pendo.js";
    z = e.getElementsByTagName(n)[0];
    z.parentNode.insertBefore(y, z);
  })(window, document, "script", "pendo");

  // Call this whenever information about your visitors becomes available
  // Please use Strings, Numbers, or Bools for value types.
  var url = window.location.search;
  var queryString = {};
  // from https://stevenbenner.com/2010/03/javascript-regex-trick-parse-a-query-string-into-an-object/
  url.replace(
    new RegExp("([^?=&]+)(=([^&]*))?", "g"),
    function ($0, $1, $2, $3) {
      queryString[$1] = $3;
    }
  );

  var accounts = [
    {
      zipCode: 90210,
      id: 1,
      city: "Beverly Hills",
      name: "The Empire",
      tag: null,
    },
    {
      zipCode: 27601,
      id: 2,
      city: "Raleigh",
      name: "Rebel Alliance",
      tag: null,
    },
    {
      zipCode: 10001,
      id: 3,
      city: "New York City",
      name: "The Hutts",
      tag: null,
    },
  ];

  var account = accounts[Math.floor(Math.random() * accounts.length)];

  pendo.initialize({
    visitor: {
        id: queryString.visitor || "testuser@pendo",
    },
    apiKey: "45245d5e-ea42-4bd6-4f1e-cf55079d5055",
    account: account,
    // 				sanitizeUrl: function (url) {
    // 					console.debug('sanitizeUrl', url);
    // 					return url === 'https://support.pendo.io' ? 'https://www.google.com' : url;
    // 				}
    excludeText: false,
    enableGuideTimeout: true,
    guideTimeout: 15000,
    events: {
      onClickCaptured: function(pendoEvent) {
        pendoEvent.addEventProperty('customProp', 'this is a custom prop');
      }
    },
    autoFrameInstall: true,
    frameIdentitySync: true
  });
})("45245d5e-ea42-4bd6-4f1e-cf55079d5055");
