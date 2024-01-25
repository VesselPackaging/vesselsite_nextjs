import { connectToDB } from "@utils/database";
import { BlanksOrder } from "@models/order";

export const POST = async (request) => {
    try {
        const {
            userId,
            location,
            orderType,
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

        const newOrder = new BlanksOrder({
            creator: userId,
            location,
            orderType,
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
        return new Response(JSON.stringify(newOrder), { status: 201 });
    } catch (error) {
        console.error("Error Creating Order:", error);
        return new Response("Something went wrong", { status: 500 });
    }
};
