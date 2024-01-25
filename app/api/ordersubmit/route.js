import { connectToDB } from "@utils/database";
import BlanksOrder from "@models/order";

export const GET = async (request) => {
    try{
        await connectToDB();

        const orders = await BlanksOrder.find({}).populate("creator");
        
        return new Response(JSON.stringify(orders), {status: 200});
    } catch (error) {
        return new Response("Failed to fetch orders", {status: 500});
    };
}