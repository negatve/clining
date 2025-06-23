'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/redux/store';

const ServicesList = () => {
    const services = useSelector((state) => state.services.services);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Послуги</h2>
            <ul>
                {services.map(service => (
                    <li key={service.id} className="mb-2">
                        <h3 className="font-bold">{service.name}</h3>
                        <p>{service.description}</p>
                        <p>Ціна: {service.price} грн</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServicesList;