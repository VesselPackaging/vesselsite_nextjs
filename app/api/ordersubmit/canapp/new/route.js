import { connectToDB } from "@utils/database";
import { CanAppOrder } from "@models/order";

export const POST = async (request) => {
    try {
        await connectToDB();

        const {
            userId,
            location,
            orderType,
            brand,
            canSize,
            numberOfCans,
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

        const newOrder = new CanAppOrder({
            creator: userId,
            location,
            orderType,
            brand,
            canSize,
            numberOfCans,
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
