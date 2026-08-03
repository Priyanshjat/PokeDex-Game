export const pokemons = [
  // Generation 1 (1-151)
  "Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard",
  "Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree",
  "Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot",
  "Rattata","Raticate","Spearow","Fearow","Ekans","Arbok",
  "Pikachu","Raichu","Sandshrew","Sandslash","Nidoran♀","Nidorina",
  "Nidoqueen","Nidoran♂","Nidorino","Nidoking","Clefairy","Clefable",
  "Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat",
  "Oddish","Gloom","Vileplume","Paras","Parasect","Venonat",
  "Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck", 
  "Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag",
  "Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop",
  "Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool",
  "Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash",
  "Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo",
  "Dodrio","Seel","Dewgong","Grimer","Muk","Shellder",
  "Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee",
  "Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute",
  "Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung",
  "Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela",
  "Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu",
  "Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar",
  "Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto",
  "Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte",
  "Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno",
  "Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew",

  // Generation 2 (152-251)
  "Chikorita","Bayleef","Meganium","Cyndaquil","Quilava","Typhlosion",
  "Totodile","Croconaw","Feraligatr","Sentret","Furret","Hoothoot",
  "Noctowl","Ledyba","Ledian","Spinarak","Ariados","Crobat",
  "Chinchou","Lanturn","Pichu","Cleffa","Igglybuff","Togepi",
  "Togetic","Natu","Xatu","Mareep","Flaaffy","Ampharos",
  "Bellossom","Marill","Azumarill","Sudowoodo","Politoed","Hoppip",
  "Skiploom","Jumpluff","Aipom","Sunkern","Sunflora","Yanma",
  "Wooper","Quagsire","Espeon","Umbreon","Murkrow","Slowking",
  "Misdreavus","Unown","Wobbuffet","Girafarig","Pineco","Forretress",
  "Dunsparce","Gligar","Steelix","Snubbull","Granbull","Qwilfish",
  "Scizor","Shuckle","Heracross","Sneasel","Teddiursa","Ursaring",
  "Slugma","Magcargo","Swinub","Piloswine","Corsola","Remoraid",
  "Octillery","Delibird","Mantine","Skarmory","Houndour","Houndoom",
  "Kingdra","Phanpy","Donphan","Porygon2","Stantler","Smeargle",
  "Tyrogue","Hitmontop","Smoochum","Elekid","Magby","Miltank",
  "Blissey","Raikou","Entei","Suicune","Larvitar","Pupitar",
  "Tyranitar","Lugia","Ho-Oh","Celebi"
];





export const fetchPokemon=async(id)=>{
    const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data=await response.json()
    const name=data.name.toUpperCase()
    const image=data.sprites.other.dream_world.front_default
   
    const options=[name.toUpperCase(),pokemons[Math.floor(Math.random()*251) ].toUpperCase(),pokemons[Math.floor(Math.random()*251)  ].toUpperCase(),pokemons[Math.floor(Math.random()*251) ].toUpperCase()].sort()

    return{name,image,options}

}
