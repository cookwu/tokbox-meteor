Package.describe({
  summary: "Integrate real-time communications into your website and mobile apps using the OpenTok WebRTC API.",
  version: "2.4.0",
  name: "cookwu:tokbox",
  git: "https://github.com/cookwu/tokbox-meteor"
});

Npm.depends({"opentok" : "2.4.0"});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.1');
  api.addFiles('server/index.js', 'server');
  api.addFiles(['client/opentok.min.js', 'client/opentok-layout.min.js'], 'client');
  api.export(['OpenTok', 'OpenTokClient'], 'server');
});
