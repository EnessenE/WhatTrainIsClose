export interface DisruptionPayload {
    links?:   Links;
    payload?: Disruption[];
    meta?:    Links;
}

export interface Links {
}

export interface Disruption {
    id?:         string;
    type?:       string;
    titel?:      string;
    topic?:      string;
    verstoring?: Verstoring;
}

export interface Verstoring {
    type?:               string;
    id?:                 string;
    geldigheidsLijst?:   any[];
    verwachting?:        string;
    gevolg?:             string;
    fase?:               string;
    alternatiefVervoer?: string;
    landelijk?:          boolean;
    oorzaak?:            string;
    header?:             string;
    meldtijd?:           string;
    trajecten?:          Trajecten[];
    volgnummer?:         string;
}

export interface Trajecten {
    stations?:  string[];
    begintijd?: string;
    eindtijd?:  string;
    richting?:  string;
    gevolg?:    Gevolg;
}

export interface Gevolg {
    stations?: string[];
    niveau?:   string;
}
