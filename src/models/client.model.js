// client-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'client';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    organization_name: {
      type: String,
      required: true
    },
    contact: {
      first_name: {
        type: String,
        required: true
      },
      last_name: {
        type: String,
        required: false
      },
      email: {
        type: String,
        required: true,
        lowercase: true,
      },
      phone_number: {
        type: String, //kept as a string to define area code. example: '+19195555555'
        required: false,
      },
    },
    address: {
      street: {
        type: String,
        required: true,
        lowercase: true,
      },
      zip_code: {
        type: Number,
        required: true,
      },
      state: {
        type: String,
        required: true,
        lowercase: true,
      }
    },
    website_url: {
      type: String,
      required: false,
    },
    notes: {
      type: String,
      required: false,
    },
    client_type: {
      type: String,
      enum : [
        'individual',
        'organization',
      ],
      default: 'individual'
    }
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
