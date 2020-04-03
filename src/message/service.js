import entity from './models/entity';

export const create = (obj) => entity.create(obj);

export const update = (ob, params) => entity.updateOne({ id: ob.id }, { $set: params });

export const findOne = (cond) => entity.findOne(cond);

export const findAll = () => entity.findAll();
