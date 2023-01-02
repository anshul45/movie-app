const modelOptions = {
  toJSON: {
    virtuals: true,
    transfrom: (_, obj) => {
      delete obj._id;
      return obj;
    },
  },
  toObject: {
    virtuals: true,
    transfrom: (_, obj) => {
      delete obj._id;
      return obj;
    },
  },
  versionKey: false,
  timestamps: true,
};

export default modelOptions;
