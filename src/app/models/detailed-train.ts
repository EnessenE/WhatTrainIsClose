export interface DetailedPayload {
    type:       string;
    properties: DetailedTrain;
}

export interface DetailedTrain {
    crowdInfoResponse:      CrowdInfoRequest;
    crowdInfoRequest:       CrowdInfoRequest;
    bron:                   Bron;
    ritnummer:              Lengte;
    station:                CrowdInfoRequest;
    type:                   CrowdInfoRequest;
    vervoerder:             CrowdInfoRequest;
    spoor:                  CrowdInfoRequest;
    materieeldelen:         Materieeldelen;
    geplandeMaterieeldelen: Materieeldelen;
    ingekort:               Ingekort;
    lengte:                 Lengte;
    lengteInMeters:         Lengte;
    lengteInPixels:         Bakbord;
    geplandeLengte:         Bakbord;
    perronVoorzieningen:    PerronVoorzieningen;
    bakbord:                Bakbord;
    rijrichting:            Rijrichting;
    drukteVoorspelling:     CrowdInfoRequest;
    treinDelen:             TreinDelen;
}

export interface Bakbord {
    type:      BakbordType;
    format:    Format;
    writeOnly: boolean;
}

export enum Format {
    Int32 = "int32",
}

export enum BakbordType {
    Integer = "integer",
}

export interface Bron {
    enum:      string[];
    type:      BronType;
    writeOnly: boolean;
}

export enum BronType {
    Object = "object",
    String = "string",
}

export interface CrowdInfoRequest {
    type: BronType;
}

export interface Materieeldelen {
    type:  string;
    items: GeplandeMaterieeldelenItems;
}

export interface GeplandeMaterieeldelenItems {
    type:       BronType;
    properties: PurpleProperties;
}

export interface PurpleProperties {
    materieelType:    Rijrichting;
    drukteSVGPath:    CrowdInfoRequest;
    materieelnummer:  Lengte;
    type:             CrowdInfoRequest;
    faciliteiten:     Faciliteiten;
    afbeelding:       CrowdInfoRequest;
    eindbestemming:   Ingekort;
    bakken:           Bakken;
    afbeeldingsSpecs: AfbeeldingsSpecs;
    zitplaatsInfo:    ZitplaatsInfo;
}

export interface AfbeeldingsSpecs {
    type:       BronType;
    properties: AfbeeldingsSpecsProperties;
    writeOnly:  boolean;
}

export interface AfbeeldingsSpecsProperties {
    imageUrl: CrowdInfoRequest;
    width:    Lengte;
    height:   Lengte;
}

export interface Lengte {
    type:   BakbordType;
    format: Format;
}

export interface Bakken {
    type:  string;
    items: BakkenItems;
}

export interface BakkenItems {
    type:       BronType;
    properties: FluffyProperties;
}

export interface FluffyProperties {
    afbeelding: Ingekort;
    drukte:     Rijrichting;
}

export interface Ingekort {
    type:      string;
    writeOnly: boolean;
}

export interface Rijrichting {
    enum: string[];
    type: BronType;
}

export interface Faciliteiten {
    type:      string;
    items:     Rijrichting;
    writeOnly: boolean;
}

export interface ZitplaatsInfo {
    type:       BronType;
    properties: ZitplaatsInfoProperties;
    writeOnly:  boolean;
}

export interface ZitplaatsInfoProperties {
    staanplaatsEersteKlas: Lengte;
    staanplaatsTweedeKlas: Lengte;
    zitplaatsEersteKlas:   Lengte;
    zitplaatsTweedeKlas:   Lengte;
    klapstoelEersteKlas:   Lengte;
    klapstoelTweedeKlas:   Lengte;
}

export interface PerronVoorzieningen {
    type:  string;
    items: PerronVoorzieningenItems;
}

export interface PerronVoorzieningenItems {
    type:       BronType;
    properties: TentacledProperties;
}

export interface TentacledProperties {
    paddingLeft: Lengte;
    width:       Lengte;
    type:        CrowdInfoRequest;
    description: CrowdInfoRequest;
}

export interface TreinDelen {
    type:      string;
    items:     GeplandeMaterieeldelenItems;
    writeOnly: boolean;
}