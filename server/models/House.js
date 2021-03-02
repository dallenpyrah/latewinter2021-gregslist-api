import mongoose from "mongoose";
const Schema = mongoose.Schema;

const House = new Schema(
    {
    price: { type: Number, required: true},
    bedrooms: { type: Number, required: true},
    bathrooms: { type: Number, required: true},
    levels: { type: Number, required: true},
    imgUrl: { type: String, required: true, defualt: "http://placehold.it/200x200"},
    year: { type: Number, required: true},
    description: { type: String}
    },
    { timestamps: true, toJSON: { virtuals: true } }
);


export default House;