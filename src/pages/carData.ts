import { EVImages, ICImages } from "../assets/images/Cars";
import { OldTeamImages } from "../assets/images/Team";

interface TeamLead {
    role: string;
    name: string;
    image?: any;
}

interface CarData {
    year: string;
    name: string;
    carPhoto: string;
    specs?: string[];
    performance?: string[];
    teamPhoto?: string;
    teamLeads?: TeamLead[];
    teamMembers?: string[]
}


export const carsData: Record<string, CarData> = {
    "2025": {
        year: "2025",
        name: "Evonne",
        carPhoto: EVImages.y2025,
    },
    "2022": {
        year: "2022",
        name: "Justin",
        carPhoto: ICImages.y2022,
        specs: [
            "Weight: 427 lbs Wheelbase: 60.5 in Engine: Yamaha YZF-R6 Power: 80 HP Torque: 43 lb/ft Tires: Hoosier LC0 Wheels: 10” Keizer Data: AIM EVO5"
        ],
        performance: [
            "Results: Michigan Overall: 7th/89 Endurance: 13th Acceleration: 13th Autocross: 7th Fuel Efficiency: 20th Skidpad: 2nd Design: 27th Business: 36th Cost: 42nd"
        ],
        teamPhoto: OldTeamImages.y2022,
        teamLeads: [
            { role: "Team Captain", name: "Josh Brooks", image: null },
            { role: "President", name: "Kevin Cruz", image: null },
            { role: "Vice President", name: "Holden David", image: null },
            { role: "Treasurer", name: "Colin Roberts", image: null },
            { role: "Chassis Lead", name: "Mason Pesson", image: null },
            { role: "Powertrain Lead", name: "Justin Fields / Thomas Rutter", image: null },
            { role: "Public Relations Manager", name: "Mia Arizmendi", image: null }                    
        ],
        
        teamMembers: [
            "Amer Algalban", "Mia Arizmendi", "Bryce Boada", "Faniw Boone", "Josh Brooks", "Victoria Byrd", "Timmy Capdeboscq", "Kevin Cruz", "Holden David", "Justin Fields", "Cade Giambrone", "Mikhalib Green", "Jacob Holt", "Evan Kerr", "David Kitching", "Jace Knott", "Paxton Longwell", "Nicholas Ormond", "Colin Roberts", "Thomas Rutter", "Waddih Sowma", "Louis Thurmon", "Jack Quander", "Cedric Witkowski"
        ]
    },
    "2021": {
        year: "2021",
        name: "Chloe",
        carPhoto: ICImages.y2021,
    },
    "2019": {
        year: "2019",
        name: "Julia",
        carPhoto: ICImages.y2019,
    },
    "2018": {
        year: "2018",
        name: "Anna",
        carPhoto: ICImages.y2018,
    },
    "2017": {
        year: "2017",
        name: "Sierra",
        carPhoto: ICImages.y2017,
    },
    "2016": {
        year: "2016",
        name: "Kyra",
        carPhoto: ICImages.y2016,
    },
    "2015": {
        year: "2015",
        name: "Chelsea",
        carPhoto: ICImages.y2015,
    },
    "2014": {
        year: "2014",
        name: "Emily",
        carPhoto: ICImages.y2014,
    },
    "2013": {
        year: "2013",
        name: "Carly Rae",
        carPhoto: ICImages.y2013,
    }
}