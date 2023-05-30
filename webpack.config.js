const { shareAll, share, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const moduleFederationConfig = withModuleFederationPlugin({

  remotes: {
    //mfUser: "http://localhost:4201/remoteEntry.js",  
  },

  /* shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  }, */
  shared: share({
    "@angular/core": { singleton: true, strictVersion: true },
    //"@angular/common": { singleton: true, strictVersion: true },
    "@angular/router": { singleton: true, strictVersion: true },
    "@angular/common/http": { singleton: true, strictVersion: true },
    "@mycne/lib-design-system":  { singleton: true, strictVersion: true, requiredVersion: '0.0.9' },
  }),

  
});

moduleFederationConfig.output.publicPath = 'http://localhost:4200/'
//moduleFederationConfig.output.publicPath = 'http://localhost/mf-shell/';
module.exports = moduleFederationConfig;