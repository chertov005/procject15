const mongoose = require('mongoose');
const {myToken} = require('../../secret/tokenPublic')

mongoose.connect(`mongodb+srv://${myToken.db_name}:${myToken.db_password}@cluster.w5tvj76.mongodb.net/Store`)
  .then(() => console.log('Connected! to Store'));