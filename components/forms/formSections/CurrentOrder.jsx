import React from 'react';
import { useOrderStore } from '@utils/state/store/Order.js';

const CurrentOrder = () => {
    const order = useOrderStore((state) => state.order);

    return (
        <div className="grid grid-cols-2 gap-4 p-4 bg-white rounded shadow">
            <div className="font-bold">Company Name:</div>
            <div>{order.companyName}</div>

            <div className="font-bold">Contact Name:</div>
            <div>{order.contactName}</div>
            <div>Contact Email: {order.contactEmail}</div>
            <div>Contact Phone: {order.contactPhone}</div>
            <div>Location: {order.location}</div>
            <div>Order Type: {order.orderType}</div>
            <div>New Or Reorder: {order.newOrReorder}</div>
            <div>Can Size: {order.canSize}</div>
            <div>Brand: {order.brand}</div>
            <div>Application: {order.application}</div>
            <div>Number Of Cans: {order.numberOfCans}</div>
            <div>End Type: {order.endType}</div>
            <div>Number Of Sleeves: {order.numberOfSleeves}</div>
            <div>PakTech Type: {order.pakTechType}</div>
            <div>Number Of Boxes: {order.numberOfBoxes}</div>
            <div>Tray Type: {order.trayType}</div>
            <div>Bundles of Trays: {order.bundlesofTrays}</div>
            <div>Address: {order.address}</div>
            <div>PO: {order.PO}</div>
            <div>Delivery Method: {order.deliveryMethod}</div>
            <div>Dunnage Type: {order.dunnageType}</div>
            <div>Date: {order.date}</div>
            <div>Copacker Email: {order.copackerEmail}</div>
            <div>Comments: {order.comments}</div>
        </div>
    );
};

export default CurrentOrder;