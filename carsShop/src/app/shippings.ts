export interface Shipping {
    id: number;
    type: string;
    price: number;
}

export const shippings = [
    {
        id: 1,
        type: "Overnight",
        price: 25.99
    },
    {
        id: 2,
        type: "2-Day",
        price: 9.99
    },
    {
        id: 3,
        type: "Postal",
        price: 2.99
    }
];