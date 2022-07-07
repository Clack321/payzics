// Invoice-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'invoice';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    title: {
      type: String,
      required: false
    },
    logo_url: {
      type: String,
      required: false
    },
    currency: {
      type: String,
      default: '$'
    },
    issuing_date: {
      type: Date,
      default: Date.now
    },
    invoice_due: {
      type: Date,
      default: Date.now
    },
    from: {
      
    }
    /*
Title
		Invoice Number (Increments per user/business)
		Logo_Url
		Currency
		Issuing date
		Invoice Due
		Purchase Order Number
		From (This should come from business profile order)
			First Name
			Last Name
			Address
		To (Client Id) many to many join

    */
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
