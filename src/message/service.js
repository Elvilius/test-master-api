import entity from './models/entity';

export const create = (obj) => entity.create(obj);

export const update = (obj, params) => entity.updateOne({ id: obj.id }, { $set: params });

export const findOne = (cond) => entity.findOne(cond);

export const findAll = () => entity.find();
