export class Weather{
    constructor(public date:string,
        public cityname:string,
        public temp:string,
        public icon: string,
        public weatherKind: string,
        public tempMax: string,
        public tempMin: string,
        public pressure: string,
        public humidity: string,
        public wind: string,
        public country: string){ 
        } 
}