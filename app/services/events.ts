import { request, getErrorMessage } from "../utils/api";
import toast from "react-hot-toast";

export interface Event {
    id: string;
    [key: string]: unknown;
}

export const getEvents = async (): Promise<Event[] | []> => {
    const { data, error } = await request.get<Event[]>("/events");

    if (error) {
        const message = getErrorMessage(error);
        toast.error(message);
    }

    return data || [];
};

