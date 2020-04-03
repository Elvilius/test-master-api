import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  id: {
    type: String,
  },
  param1: {
    type: Number,
  },
  param2: {
    type: Number,
  },
  param3: {
    type: Number,
  },
  param4: {
    type: Number,
  },
  param5: {
    type: Number,
  },
  param6: {
    type: Number,
  },
  param7: {
    type: Number,
  },
  param8: {
    type: Number,
  },
  param9: {
    type: Number,
  },
  param10: {
    type: Number,
  },

  param11: {
    type: Number,
  },

  param12: {
    type: Number,
  },

  param13: {
    type: Number,
  },

  param14: {
    type: Number,
  },

  param16: {
    type: Number,
  },

  param17: {
    type: Number,
  },

  param18: {
    type: Number,
  },

  param19: {
    type: Number,
  },

  param20: {
    type: Number,
  },
});

const Entity = mongoose.model('Entity', schema);
export default Entity;
