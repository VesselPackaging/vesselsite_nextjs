import { Schema, model, models } from 'mongoose';

const AddressSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  addressLine1: { type: String, default: '' },
  addressLine2: { type: String, default: '' },
  city: { type: String, default: '' },
  country: { type: String, default: '' },
  stateProvince: { type: String, default: '' },
  zipCode: { type: String, default: '' },
});

const Address = models.Address || model('Address', AddressSchema);

export default Address;
