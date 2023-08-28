const path=require('path');

module.exports = path.dirname(require.main.filename);

// would return the path of app.js