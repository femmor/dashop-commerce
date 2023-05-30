import { Schema, model } from 'mongoose';

const reviewSchema = Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const productSchema = Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User', // reference to the User model
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema], // array of review object
    rating: {
      type: Number,
      required: true,
      default: 0, // default rating is 0
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0, // default number of reviews is 0
    },
    price: {
      type: Number,
      required: true,
      default: 0, // default price is 0
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0, // default price is 0
    },
  },
  {
    timestamps: true,
  }
);

const Product = model('Product', productSchema);

export default Product;
