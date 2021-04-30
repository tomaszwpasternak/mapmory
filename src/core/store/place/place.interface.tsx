import { LatLng } from "react-native-maps";
import { TagInterface } from "../tag/tag.interface";

export interface PlaceInterface {
    name: string;
    description: string;
    tags: TagInterface[],
    localization: LatLng,
    photos: PhotoInterface[],
    profile: string
}

export interface PhotoInterface {
    uri: string;
    localization: LatLng;
    firstPoint: LatLng;
    secondPoint: LatLng;
}