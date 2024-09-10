import React from 'react';
declare global {
    interface Window {
        initMap: () => void;
    }
}
type MapComponentProps = {
    setPlace?: (value: {
        lat: number;
        lng: number;
        placeId: string;
        city?: string;
        state?: string;
        country?: string;
        route?: string;
        postalCode?: string;
        formattedAddress?: string;
    } | null) => void;
    key: string;
};
export declare const MapComponent: ({ setPlace, key }: MapComponentProps) => React.JSX.Element;
export {};
