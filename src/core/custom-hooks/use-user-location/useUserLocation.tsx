import { useEffect, useState } from "react";
import * as Location from 'expo-location';

export function useUserLocation(deps = []) {
    const [userLocation, setUserLocation] = useState<any>(null)

    useEffect(() => {
        (async () => {
            let { coords } = await Location.getCurrentPositionAsync()
            setUserLocation({ latitude: coords.latitude, longitude: coords.longitude })
        })();

    }, deps);

    return userLocation;
}