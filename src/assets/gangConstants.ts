import { LabelObject } from "./megacorpConstants"

export interface GangType {
  name: string,
  income: string,
  strength: string,
  styles: LabelObject[],
  event: string,
  currentGoal: string,
}

export const gangIncomes = [
  "Assassinations",
  "Black marketing",
  "Blackmail",
  "City gov lobbying",
  "Corp hirelings Cyber trade",
  "Drug production",
  "Drug retail",
  "Extortion",
  "Fraud",
  "Hacking",
  "Horrible vices",
  "Human Trafficking",
  "Merc work",
  "Organlegging",
  "Petty theft",
  "Prostitution",
  "Slave labor",
  "Smuggling",
  "VR production",
]

export const gangStyle = {
  Bestial: { name: "Bestial", description: "favoring an almost feral degree of violence and destruction" },
  Chromed: { name: "Chromed", description: "heavily invested in not-always-safe-or-reliable cyberware" },
  Corporate: { name: "Corporate", description: "with tight discipline and an interest only in the bottom line" },
  Degenerate: { name: "Degenerate", description: "favoring self-destructive enjoyments and decadent indulgences" },
  Doctrinaire: { name: "Doctrinaire", description: " obsessed with an ideology or Great Cause despite all obstacles" },
  Familial: { name: "Familial", description: "with personal ties of blood between most members and all leaders" },
  Flamboyant: { name: "Flamboyant", description: "loving style and display over practicality" },
  Greedy: { name: "Greedy", description: "pushing for more turf and money despite the obvious risks involved" },
  Idealistic: { name: "Idealistic", description: "pretending to a noble cause despite the grubby reality" },
  Nihilistic: { name: "Nihilistic", description: "caring for nothing very much" },
  Pious: { name: "Pious", description: "devoted to a particular fringe religion or cult" },
  Pretentious: { name: "Pretentious", description: "overtly seeing themselves as their turf's government and lawful rulers" },
  Sadistic: { name: "Sadistic", description: "preferring lingering pain and horror over quick violence" },
  Sanctioned: { name: "Sanctioned", description: "operating with the tacit support and approval of city government" },
  Terrifying: { name: "Terrifying", description: "focusing on intimidating and cowing all possible foes with raw terror" },
  Themed: { name: "Themed", description: "devoted to a particular visual or aesthetic theme at all costs" },
  Wretched: { name: "Wretched", description: "impoverished and desperate to attain even basic necessities" },
  Nationalist: { name: "Nationalist", description: "supporting a particular nation" },
  Swarming: { name: "Swarming", description: "favoring masses of low-level gangers over fewer" },
  Technical: { name: "Technical", description: " preferring high-tech tools and expertise" },
}

export const gangStyles = [
  gangStyle.Bestial,
  gangStyle.Chromed,
  gangStyle.Corporate,
  gangStyle.Degenerate,
  gangStyle.Doctrinaire,
  gangStyle.Familial,
  gangStyle.Flamboyant,
  gangStyle.Greedy,
  gangStyle.Idealistic,
  gangStyle.Nihilistic,
  gangStyle.Pious,
  gangStyle.Pretentious,
  gangStyle.Sadistic,
  gangStyle.Sanctioned,
  gangStyle.Terrifying,
  gangStyle.Themed,
  gangStyle.Wretched,
  gangStyle.Nationalist,
  gangStyle.Swarming,
  gangStyle.Technical,
]

export const gangStrengths = [
  "They have an elite of cybered pros ",
  "They have close ties with city government ",
  "A local corp is secretly backing them ",
  "The locals genuinely support them ",
  "Their leadership is extremely competent",
  "They have strong gang alliances ",
  "They have a fearsome reputation",
  "They have ties outside the city ",
  "They know secret places in the district ",
  "They have excellent gear and weapons ",
  "They provide a critical district service",
  "A local group views them as protectors ",
  "They're unusually wealthy",
  "They're very selective in their membership",
  "They have a monopoly on something",
  "They have critical blackmail info",
  "They have celebrity members",
  "They have a powerful local patron",
  "They have a web of spies in the area",
  "They're inexplicably lucky"
]

export const gangEvents = [
  "The former leader was recently killed",
  "A splinter group split off from the gang",
  "The cops cracked down on the gang",
  "A corp hired them for some dirty work",
  "They badly lost a fight with another group",
  "They conducted some local terrorism",
  "They stole something very valuable",
  "They got caught in two other gangs' fight",
  "A valuable business began on their turf",
  "Their favorite income was squeezed",
  "A gang lieutenant turned traitor",
  "The gang changed their crime focus",
  "They moved their headquarters",
  "They actually did some legit work",
  "They crushed a rival in a bloody clash",
  "They acquired members with a rare skill",
  "They came into a large cash windfall",
  "They got a lot of loot they can't really use",
  "They recently fell into dire poverty",
  "They acquired a powerful gov patron",
]

export const gangGoals = [
  "Wipe out a competitor for their turf",
  "Expand into an under-defended area",
  "Avenge some slight by another group",
  "Cyber up their enforcers with big iron",
  "Make an alliance with another gang",
  "Persuade a corp to recruit their aid",
  "Crush a bothersome local resister",
  "Recruit more useful talent",
  "Take over a local vice trade",
  "Fence an extremely hot item of value",
  "Regroup after some recent reversal",
  "Resolve a serious leadership conflict",
  "Start up a profitable front business",
  "Make inroads in a new profitable crime",
  "Intimidate the locals with some atrocity",
  "Evade a local police crackdown",
  "Fight off an incursion by another gang",
  "Recover a stolen stash or goods",
  "Tighten their grip on their current turf",
  "Forge a useful new public impression",
]

const gangNameElement = {
  StreetName: "Street name",
  Color: "Color",
  ViolentAction: "Violent action",
  Animal: "Animal",
  Direction: "Direction",
  FashionItem: "Fashion item",
  LeaderName: "Leader's name",
  ReligiousFigure: "Religious figure",
  GeographicLocation: "Geographic location",
  DistrictName: "District name",
  ImportantDate: "Important date",
  DrugName: "Drug name",
  BuildingName: "Building name",
  NationName: "Nation name",
  PhysicalTrait: "Physical trait",
  FavoriteCyber: "Favorite cyber",
  IntimidatingAdjective: "Intimidating adjective",
  Weapon: "Weapon",
  BarbarousHabit: "Barbarous habit",
  GangMission: "The gang's mission",
}

export const gangNameElements = [
  gangNameElement.StreetName,
  gangNameElement.Color,
  gangNameElement.ViolentAction,
  gangNameElement.Animal,
  gangNameElement.Direction,
  gangNameElement.FashionItem,
  gangNameElement.LeaderName,
  gangNameElement.ReligiousFigure,
  gangNameElement.GeographicLocation,
  gangNameElement.DistrictName,
  gangNameElement.ImportantDate,
  gangNameElement.DrugName,
  gangNameElement.BuildingName,
  gangNameElement.NationName,
  gangNameElement.PhysicalTrait,
  gangNameElement.FavoriteCyber,
  gangNameElement.IntimidatingAdjective,
  gangNameElement.Weapon,
  gangNameElement.BarbarousHabit,
  gangNameElement.GangMission,
]

export const gangOrgElements = [
  "Army",
  "Association",
  "Boys/Girls",
  "Brotherhood",
  "Clan",
  "Clique",
  "Company",
  "Crew",
  "Gang",
  "Horde",
  "Mob",
  "Organization",
  "Outfit",
  "Pack",
  "Posse",
  "Ring",
  "Set",
  "Society",
  "Squad",
  "Syndicate",
]

const streetNames = [
  "Maple Street",
  "Main Avenue",
  "Oak Lane",
  "Pine Road",
  "Cedar Boulevard",
  "Elm Drive",
  "Willow Lane",
  "Aspen Avenue",
  "Birch Street",
  "Cypress Road",
  "Sycamore Boulevard",
  "Hickory Drive",
  "Mulberry Lane",
  "Poplar Road",
  "Cottonwood Avenue",
  "Magnolia Street",
  "Juniper Lane",
  "Acacia Boulevard",
  "Sassafras Drive",
  "Redwood Avenue"
];

// Color
const colors = [
  "Blue",
  "Red",
  "Green",
  "Black",
  "Silver",
  "Pink",
  "White",
  "Yellow",
  "Purple",
  "Orange",
  "Gray",
  "Brown",
  "Gold",
  "Crimson",
  "Magenta",
  "Turquoise",
  "Violet",
  "Teal",
  "Indigo",
  "Olive"
];

// ViolentAction
const violentActions = [
  "Punch",
  "Kick",
  "Shoot",
  "Stab",
  "Slice",
  "Explosion",
  "Smash",
  "Crush",
  "Blast",
  "Strike",
  "Hack",
  "Slash",
  "EMP Burst",
  "Tackle",
  "Throw",
  "Choke",
  "Grapple",
  "Blow",
  "Wound",
  "Assault"
];

// Animal
const animals = [
  "Dog",
  "Cat",
  "Bird",
  "Fish",
  "Snake",
  "Horse",
  "Lion",
  "Tiger",
  "Bear",
  "Shark",
  "Monkey",
  "Elephant",
  "Giraffe",
  "Kangaroo",
  "Fox",
  "Wolf",
  "Deer",
  "Rabbit",
  "Squirrel",
  "Owl"
];

// Direction
const directions = [
  "North",
  "East",
  "West",
  "South",
  "Up",
  "Down",
  "Left",
  "Right",
  "Forward",
  "Backward",
  "Clockwise",
  "Counterclockwise",
  "Ascend",
  "Descend",
  "Spinward",
  "Antispinward",
  "Inward",
  "Outward",
  "High",
  "Low"
];

// FashionItem
const fashionItems = [
  "Hat",
  "Jacket",
  "Shoes",
  "Gloves",
  "Goggles",
  "Jumpsuit",
  "Scarf",
  "Hoodie",
  "Arm Sleeve",
  "Leggings",
  "Bracelet",
  "Space Suit",
  "Belt",
  "Mask",
  "Earrings",
  "Cape",
  "Skirt",
  "Headband",
  "Wristband",
  "Sneakers"
];

// LeaderName
const leaderNames = [
  "Boss",
  "Chief",
  "Captain",
  "Commander",
  "Master",
  "Overlord",
  "Kingpin",
  "Warlord",
  "Monarch",
  "Sultan",
  "Emperor",
  "Lord",
  "Commandant",
  "Chieftain",
  "Ruler",
  "Dictator",
  "Majesty",
  "Sovereign",
  "Potentate",
  "Despot"
];

// ReligiousFigure
const religiousFigures = [
  "Priest",
  "Oracle",
  "Prophet",
  "Diviner",
  "Hierophant",
  "Cleric",
  "Shaman",
  "High Priest",
  "Zealot",
  "Bishop",
  "Sage",
  "Monk",
  "Avatara",
  "Seraph",
  "Pontiff",
  "Deity",
  "Saint",
  "Lama",
  "Guru",
  "Pope"
];

// GeographicLocation
const geographicLocations = [
  "Wasteland",
  "Cityscape",
  "Megapolis",
  "Haven",
  "Archipelago",
  "Badlands",
  "Outpost",
  "Enclave",
  "Wilderness",
  "Citadel",
  "Oasis",
  "Frontier",
  "Ruins",
  "Metropolis",
  "Undercity",
  "Expanse",
  "Sector",
  "Abyss",
  "Island",
  "Desert"
];

// DistrictName
const districtNames = [
  "Core District",
  "Heights",
  "Sector",
  "Nexus",
  "Precinct",
  "Borough",
  "Quarter",
  "Ward",
  "Township",
  "Block",
  "Borough",
  "Sector",
  "Enclave",
  "Zone",
  "Precinct",
  "Borough",
  "Ward",
  "District",
  "Zone",
  "Quarter"
];

// ImportantDate
const importantDates = [
  "Dawn",
  "Eclipse",
  "Reckoning",
  "Uprising",
  "Ascendance",
  "Convergence",
  "Revolution",
  "Singularity",
  "Emergence",
  "Genesis",
  "Cataclysm",
  "Apotheosis",
  "Genesis",
  "Revolution",
  "Ascendance",
  "Convergence",
  "Eclipse",
  "Uprising",
  "Cataclysm",
  "Singularity"
];

// DrugName
const drugNames = [
  "Dream",
  "Bliss",
  "Quicksilver",
  "Dose",
  "Nectar",
  "Pixie",
  "Pop",
  "Venom",
  "Tranquil",
  "Infusion",
  "Zephyr",
  "Grind",
  "Crave",
  "Rush",
  "Xanadu",
  "Nirvana",
  "Phantasm",
  "Surge",
  "Breeze",
  "Haze"
];

// BuildingName
const buildingNames = [
  "Tower",
  "Spire",
  "Citadel",
  "Nexus",
  "Palace",
  "Plaza",
  "Vault",
  "Temple",
  "Arcology",
  "Garrison",
  "Citadel",
  "Roost",
  "Bastion",
  "Nexus",
  "Fortress",
  "Stronghold",
  "Bunker",
  "Haven",
  "Sanctuary",
  "Shelter"
];

// NationName
const nationNames = [
  "Topia",
  "Dominion",
  "Syndicate",
  "Republic",
  "Federation",
  "Coalition",
  "Empire",
  "Union",
  "Alliance",
  "Republic",
  "Realm",
  "Collective",
  "State",
  "Territory",
  "Nation",
  "Commonwealth",
  "Federation",
  "Kingdom",
  "Domain",
  "Hegemony"
];

// PhysicalTrait
const physicalTraits = [
  "Implants",
  "Arm",
  "Leg",
  "Eye",
  "Hand",
  "Ear",
  "Spine",
  "Heart",
  "Lung",
  "Skin",
  "Hair",
  "Brain",
  "Nerve",
  "Muscle",
  "Joint",
  "Bone",
  "Blood",
  "Organ",
  "Tissue",
  "Cell"
];

// FavoriteCyber
const favoriteCybers = [
  "Neural Interface",
  "Cybernetic Limb",
  "Augmented Eyes",
  "Enhanced Reflexes",
  "Data Jack",
  "Synthetic Organs",
  "Holographic Display",
  "Nanobot Swarm",
  "Enhanced Hearing",
  "Biometric Implant",
  "Virtual Reality Gear",
  "Neural Implant",
  "Bionic Spine",
  "Cybernetic Heart",
  "Augmented Lungs",
  "Smart Skin",
  "Biohacking Module",
  "Muscle Enhancement",
  "Neural Sensor",
  "Invisibility Cloak"
];

// IntimidatingAdjective
const intimidatingAdjectives = [
  "Sinister",
  "Menacing",
  "Dreadful",
  "Ominous",
  "Threatening",
  "Fearsome",
  "Terrifying",
  "Foreboding",
  "Chilling",
  "Formidable",
  "Intimidating",
  "Unnerving",
  "Spine-chilling",
  "Haunting",
  "Eerie",
  "Majestic",
  "Imposing",
  "Demonic",
  "Monstrous",
  "Harrowing"
];

// Weapon
const weapons = [
  "Blade",
  "Gun",
  "Rifle",
  "Sword",
  "Dagger",
  "Axe",
  "Hammer",
  "Whip",
  "Grenade",
  "Crossbow",
  "Shuriken",
  "Staff",
  "Taser",
  "Sniper Rifle",
  "Energy Pistol",
  "Plasma Cannon",
  "Railgun",
  "Nanobot Disruptor",
  "Pulse Rifle",
  "Ion Blade"
];

// BarbarousHabit
const barbarousHabits = [
  "Bounty Hunting",
  "Smuggling",
  "Illegal Racing",
  "Black Market Trading",
  "Hacking",
  "Brawling",
  "Street Racing",
  "Weapon Dealing",
  "Contraband Trafficking",
  "Gang Warfare",
  "Assassination",
  "Robbery",
  "Kidnapping",
  "Sabotage",
  "Cybernetic Piracy",
  "Mercenary Work",
  "Raiding",
  "Drug Manufacturing",
  "Corporate Espionage",
  "Body Augmentation Theft"
];

// GangMission
const gangMissions = [
  "Save the Cheeleader",
  "Save the World"
];


export const gangNameElementList = {
  [gangNameElement.StreetName]: streetNames,
  [gangNameElement.Color]: colors,
  [gangNameElement.ViolentAction]: violentActions,
  [gangNameElement.Animal]: animals,
  [gangNameElement.Direction]: directions,
  [gangNameElement.FashionItem]: fashionItems,
  [gangNameElement.LeaderName]: leaderNames,
  [gangNameElement.ReligiousFigure]: religiousFigures,
  [gangNameElement.GeographicLocation]: geographicLocations,
  [gangNameElement.DistrictName]: districtNames,
  [gangNameElement.ImportantDate]: importantDates,
  [gangNameElement.DrugName]: drugNames,
  [gangNameElement.BuildingName]: buildingNames,
  [gangNameElement.NationName]: nationNames,
  [gangNameElement.PhysicalTrait]: physicalTraits,
  [gangNameElement.FavoriteCyber]: favoriteCybers,
  [gangNameElement.IntimidatingAdjective]: intimidatingAdjectives,
  [gangNameElement.Weapon]: weapons,
  [gangNameElement.BarbarousHabit]: barbarousHabits,
  [gangNameElement.GangMission]: gangMissions,
}



















