// user-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'user';
  const mongooseClient = app.get('mongooseClient');
  const schema = new mongooseClient.Schema({
    first_name: { type: String, unique: false, lowercase: true },
    last_name: { type: String, unique: false, lowercase: true },
    tier: {
      type: String,
      enum : ['trial', 'basic', 'premium'],
      default: 'trial'
    },
    upgrade_date: { 
      type: Date,
      default: Date.now
    },
    registration_date: {
      type: Date,
      default: Date.now
    },
    birth_date: {
      type: Date,
      default: Date.now
    },
    email: { type: String, unique: true, lowercase: true },
    password: { type: String },
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);

};
