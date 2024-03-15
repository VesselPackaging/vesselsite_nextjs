import React from 'react';
import { useOrderStore } from '../../../utils/state/store/Order';

const CurrentOrder = () => {
    const order = useOrderStore((state) => state.order);

    return (
        <div className="p-4 bg-white rounded shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-vp-yellow">Order Review</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2 text-vp-copper">Contact Information</h3>
                        <p><span className="order_confirm_key">Company Name:</span> {order.companyName}</p>
                        <p><span className="order_confirm_key">Contact Name:</span> {order.contactName}</p>
                        <p><span className="order_confirm_key">Contact Email:</span> {order.contactEmail}</p>
                        <p><span className="order_confirm_key">Contact Phone:</span> {order.contactPhone}</p>
                        <p><span className="order_confirm_key">Location:</span> {order.location}</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2 text-vp-copper">Order Details</h3>
                        <p><span className="order_confirm_key">Order Type:</span> {order.orderType}</p>
                        <p><span className="order_confirm_key">New Or Reorder:</span> {order.newOrReorder}</p>
                        <p><span className="order_confirm_key">Can Size:</span> {order.canSize}</p>
                        <p><span className="order_confirm_key">Brand:</span> {order.brand}</p>
                        <p><span className="order_confirm_key">Application:</span> {order.application}</p>
                        <p><span className="order_confirm_key">Number Of Cans:</span> {order.numberOfCans}</p>
                        <p><span className="order_confirm_key">End Type:</span> {order.endType}</p>
                        <p><span className="order_confirm_key">Number Of Sleeves:</span> {order.numberOfSleeves}</p>
                        <p><span className="order_confirm_key">PakTech Type:</span> {order.pakTechType}</p>
                        <p><span className="order_confirm_key">Number Of Boxes:</span> {order.numberOfBoxes}</p>
                        <p><span className="order_confirm_key">Tray Type:</span> {order.trayType}</p>
                        <p><span className="order_confirm_key">Bundles of Trays:</span> {order.bundlesofTrays}</p>
                    </div>
                </div>
                <div>
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2 text-vp-copper">Additional Information</h3>
                        <p><span className="order_confirm_key">Address:</span> {order.address}</p>
                        <p><span className="order_confirm_key">PO:</span> {order.PO}</p>
                        <p><span className="order_confirm_key">Delivery Method:</span> {order.deliveryMethod}</p>
                        <p><span className="order_confirm_key">Dunnage Type:</span> {order.dunnageType}</p>
                        <p><span className="order_confirm_key">Date:</span> {order.date}</p>
                        <p><span className="order_confirm_key">Copacker Email:</span> {order.copackerEmail}</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-vp-copper">Comments</h3>
                        <p>{order.comments}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentOrder;
