import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    category_id: {
      type: Number,
      required: false
    },
    category_name: {
      type: String,
      required: false
    },
    image: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    stars: {
      type: Number,
      required: false
    },
    ratings: {
      type: String,
      required: false
    },
    reviews: {
      type: String,
      required: false
    },
    warranty: {
      type: String,
      required: false
    },
    new_price: {
      type: Number,
      required: false
    },
    old_price: {
      type: Number,
      required: false
    },
    discount: {
      type: Number,
      required: false
    },
    delivery_type: {
      type: String,
      required: false
    },
    offer: {
      type: String,
      required: false
    },
    offer2: {
      type: String,
      required: false
    },
    hidden_stars: {
      type: Number,
      required: false
    },
    item_id: {
      type: Number,
      required: false
    },
    quantity: {
      type: Number,
      default: 1
    },
    size: {
      type: String,
      required: false
    },
    more_data: {
      type: String,
      required: false
    },
    color: {
      type: String,
      required: false
    },
    brand: {
      type: String,
      required: false
    }
  },
  {
    versionKey: false,
    timestamps: false
  }
);
const cartItemModel = mongoose.model("cartItem", cartItemSchema);

export default cartItemModel;
