import { Schema, model, models } from "mongoose";

const CommonFields = {
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  location: {
    type: String,
    required: [true, "Location is required"],
  },
  orderType: {
    type: String,
    required: [true, "Order Type is required"],
  },
  PO: {
    type: String,
  },
  comments: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  date: {
    type: String,
  },
  deliveryMethod: {
    type: String,
},
dunnageType: {
    type: String,
},
endType: {
    type: String,
},
numberOfSleeves: {
    type: Number,
},
pakTechType: {
    type: String,
},
numberOfBoxes: {
    type: Number,
},
trayType: {
    type: String,
},
bundlesofTrays: {
    type: Number,
},
};

const BlanksSchema = new Schema({
  ...CommonFields,
  canSize: {
    type: String,
    required: [true, "Can Size is required"],
  },
  numberOfCans: {
    type: Number,
    required: [true, "Number of Cans is required"],
  },


});

const SuppliesOnlyOrderSchema = new Schema({
  ...CommonFields,
});

const CanAppSchema = new Schema({ ...CommonFields,
  canSize: {
    type: String,
    required: [true, "Can Size is required"],
  },
  numberOfCans: {
    type: Number,
    required: [true, "Number of Cans is required"],
  },
  brand: {
    type: String,
    required: [true, "Brand is required"],
  },
});

const BlanksOrder = models.BlanksOrders || model("BlanksOrders", BlanksSchema);
const SuppliesOnlyOrder = models.suppliesOnlyOrders || model("suppliesOnlyOrders", SuppliesOnlyOrderSchema);
const CanAppOrder = models.canAppOrders || model("canAppOrders", CanAppSchema);

export { BlanksOrder, SuppliesOnlyOrder, CanAppOrder };

