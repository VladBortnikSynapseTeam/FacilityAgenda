const path = require('path');
var rmdir = require('rmdir');
const mvcAppPath = path.resolve(
  __dirname,
  "../Optimo.FacilityAgendaDisplay"
);
var distPath = path.join(mvcAppPath, "dist");
rmdir(distPath);

module.exports = {
  module: {
    rules: [
      {
        test: /\.cool$/,
        use: 'cool-loader'
      }
    ]
  },
   "entry": {
    "main-diary": [
      "./src\\app\\main.ts"
    ],
    "polyfills": [
      "./src\\polyfills.ts"
    ],
    "styles": [
     "./src\\styles.scss"
    ],

   },
   "output": {
       "path": distPath,
       "filename": "[name].bundle.js",
       "chunkFilename": "[name].chunk.js",
       "crossOriginLoading": false
   },
};
