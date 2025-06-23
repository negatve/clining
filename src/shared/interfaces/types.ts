export interface Service {
    rating(rating: any): import("react").ReactNode;
    is_popular: any;
    id: number;
    name: string;
    description: string;
    price: number;
    unit: string;
    image_url?: string;
}