import { Schema, model } from 'mongoose';

const orderSchema = Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User', // reference to the User model
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: 'Product', // reference to the Product model
        },
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: { type: String, required: true },
    paymentResult: {
      // this is the object that PayPal sends back
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    taxPrice: { type: Number, required: true, default: 0.0 }, // tax is 0 by default
    shippingPrice: { type: Number, required: true, default: 0.0 }, // shipping is 0 by default
    totalPrice: { type: Number, required: true, default: 0.0 }, // total is 0 by default
    isPaid: { type: Boolean, required: true, default: false }, // not paid by default
    paidAt: { type: Date }, // date when payment was made
    isDelivered: { type: Boolean, required: true, default: false }, // not delivered by default
    deliveredAt: { type: Date }, // date when order was delivered
  },
  {
    timestamps: true,
  }
);

const Order = model('Order', orderSchema);

export default Order;
