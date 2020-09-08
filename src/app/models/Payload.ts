export interface Payload {
    links:   Links;
    payload: PayloadClass;
    meta:    Links;
}

export interface Links {
}

export interface PayloadClass {
    treinen: SimpleTrain[];
}

export interface SimpleTrain {
    treinNummer:               number;
    ritId:                     string;
    lat:                       number;
    lng:                       number;
    snelheid:                  number;
    richting:                  number;
    horizontaleNauwkeurigheid: number;
    type:                      string;
    bron:                      string;
}
