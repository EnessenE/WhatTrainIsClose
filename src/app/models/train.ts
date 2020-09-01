export interface CollectionOfPosition {
    type:     string;
    features: Train[];
}

export interface Train {
    type:       FeatureType;
    properties: Properties;
    geometry:   Geometry;
}

export interface Geometry {
    coordinates: number[];
    type:        GeometryType;
}

export enum GeometryType {
    Point = "Point",
}

export interface Properties {
    icon:   string;
    label:  string;
    ref:    string;
    type:   string;
    delay?: string;
}

export enum FeatureType {
    Feature = "Feature",
}
