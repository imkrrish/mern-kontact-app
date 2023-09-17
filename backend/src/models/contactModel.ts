import { model, Schema } from 'mongoose';
import { Icontact } from '../types/ContactTypes';

const ContactSchema: Schema = new Schema(
  {
    name: String,
    phone: Number,
    email: String,
  },
  { timestamps: true }
);

export default model<Icontact>('contacts', ContactSchema);
