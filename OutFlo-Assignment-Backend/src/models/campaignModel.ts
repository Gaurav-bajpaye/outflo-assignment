import mongoose from 'mongoose';

const campaignSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  status: {
    type: String,
    enum: ['ACTIVE', 'INACTIVE', 'DELETED'],
    default: 'ACTIVE'
  },
  leads: [String],
  accountIDs: [{ type: mongoose.Schema.Types.ObjectId }]
}, { timestamps: true });

export default mongoose.model('Campaign', campaignSchema);
