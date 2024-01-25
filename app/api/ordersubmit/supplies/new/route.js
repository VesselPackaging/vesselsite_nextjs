import { connectToDB } from "@utils/database";
import { SuppliesOnlyOrder } from '@models/order';

export const POST = async (request) => {
    try {
        await connectToDB();

        const {
            userId,
            location,
            orderType,
            endType,
            numberOfSleeves,
            pakTechType,
            numberOfBoxes,
            trayType,
            bundlesofTrays,
            address,
            PO,
            deliveryMethod,
            dunnageType,
            date,
            copackerEmail,
            comments
        } = await request.json();

        const newOrder = new SuppliesOnlyOrder({
            creator: userId,
            location,
            orderType,
            endType,
            numberOfSleeves,
            pakTechType,
            numberOfBoxes,
            trayType,
            bundlesofTrays,
            address,
            PO,
            deliveryMethod,
            dunnageType,
            date,
            copackerEmail,
            comments
        }); 

        await newOrder.save();
        return new Response(JSON.stringify(newOrder), { status: 201 });
    } catch (error) {
        console.error("Error Creating Order:", error);
        return new Response("Something went wrong", { status: 500 });
    }
};
