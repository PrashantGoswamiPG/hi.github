
//schema for server side validation

const Joi = require('joi');

const productschema = Joi.object({
    name: Joi.string().required(),
    img:Joi.string().required(),
    about:Joi.string().required()
})

const reviewschema = Joi.object({
    rating: Joi.string().required(),
    comment:Joi.string().required()
})

module.exports={productschema,reviewschema};