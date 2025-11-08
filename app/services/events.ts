import { request, getErrorMessage } from "../utils/api";
import toast from "react-hot-toast";

export interface Category {
    id: number;
    name?: string;
    description?: string;
}

export interface CityHall {
    id: number;
    name?: string;
}

export interface User {
    id: number;
    name: string;
    birthday: string;
    email: string;
    password?: string;
    street?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    zipcode?: string;
    addressNumber?: string;
    complement?: string;
    createdAt: string;
    updatedAt: string;
    cityHall?: CityHall | null;
}

export interface EventImage {
    id: number;
    base64: string;
    type: string;
    createdAt: string;
    event?: Event | null;
}

export interface Event {
    id: number;
    title: string;
    description?: string;
    status: string;
    priority?: string;
    street?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    zipcode?: string;
    addressNumber?: string;
    latitude?: number;
    longitude?: number;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string | null;
    category?: Category | null;
    user?: User | null;
    images?: EventImage[];
}

export const getEvents = async (): Promise<Event[] | []> => {
    const { data, error } = await request.get<Event[]>("/events");

    if (error) {
        const message = getErrorMessage(error);
        toast.error(message);
    }

    return data || [];
};

