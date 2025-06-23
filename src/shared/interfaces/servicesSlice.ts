import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Service {
    id: number;
    name: string;
    description: string;
    price: number;
    unit: string;
    duration: number;
    category: string;
    is_active: boolean;
    image_url?: string;
    discount?: number;
    is_popular?: boolean;
    service_code: string;
    rating?: number;
}

interface ServicesState {
    services: Service[];
}

const initialState: ServicesState = {
    services: [],
};

const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        setServices(state, action: PayloadAction<Service[]>) {
            state.services = action.payload;
        },
        addService(state, action: PayloadAction<Service>) {
            state.services.push(action.payload);
        },
        updateService(state, action: PayloadAction<Service>) {
            const index = state.services.findIndex(service => service.id === action.payload.id);
            if (index !== -1) {
                state.services[index] = action.payload;
            }
        },
        deleteService(state, action: PayloadAction<number>) {
            state.services = state.services.filter(service => service.id !== action.payload);
        },
    },
});

export const { setServices, addService, updateService, deleteService } = servicesSlice.actions;
export default servicesSlice.reducer;