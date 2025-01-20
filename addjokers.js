let neutral_jokers = [
  {
    name: "Broken Drone",
    text: [
      "Destroys Jokers that try to {C:attention}copy{} this Joker",
      "Gains {X:mult,C:white}X0.75{} Mult per card destroyed this way",
      "{C:inactive}(Currently {X:mult,C:white}X1.5 {C:inactive} Mult)",
    ],
    image_url: "img/j_broken_drone.png",
    rarity: "Uncommon"
  }
]

let patron_jokers = [
  {
    name: "Creator",
    text: [
      "On {C:attention}first hand{} of round, creates a {C:attention}basic{} copy of the first card played increased by {C:attention}1 rank{}",
    ],
    image_url: "img/j_creator.png",
    rarity: "Uncommon"
  }
]

let joker_jokers = [
  {
    name: "Trap",
    text: [
      "When this Joker is obtained, {C:attention}6{} {C:inactive}[0]{} random cards in your deck become {C:attention}fake{}",
      "Gains {C:chips}+9{} Chips per hand played without {C:attention}fake{} cards, otherwise {C:attention}halves{} current Chips",
      "{C:inactive}(Currently{} {C:chips}+0{} {C:inactive}Chips){}",
    ],
    image_url: "img/j_trap.png",
    rarity: "Common"
  },
  {
    name: "Bugged Trap",
    text: [
      "{C:green}1 in 5{} chance for this Joker to retrigger the {C:attention}Joker{} to the left each time up to {C:attention}3{} times",
      "{C:inactive}(Luck-altering Jokers affect first retrigger only){}",
    ],
    image_url: "img/j_bugged_trap.png",
    rarity: "Uncommon"
  },
  {
    name: "Flipper",
    text: [
      "Before scoring, played {C:attention}6s{} turns into {C:attention}9s{} and vice versa",
      "If both ranks are present, turns them into the rank that there is more of in play",
    ],
    image_url: "img/j_flipper.png",
    rarity: "Rare"
  }
]

let wicked_jokers = [
  {
    name: "Destroyer",
    text: [
      "Destroys first scored card {C:attention}directly above [rank]{}",
      "{s:0.8}Rank changes when triggered{}",
    ],
    image_url: "img/j_destroyer.png",
    rarity: "Common"
  }
]

let keeper_jokers = [
  {
    name: "Restoration",
    text: [
      "Restores debuffed cards every {C:attention}10{} {C:inactive}[0]{} scoring cards played",
      "{C:inactive}(Includes Joker cards){}",
      "{C:inactive}(Dispels self-debuffs){}"
    ],
    image_url: "img/j_restoration.png",
    rarity: "Uncommon"
  },
  {
    name: "Keeper's Move Up",
    text: [
      "Gives {C:keeper}Rank Seal{} to the {C:attention}highest{} scoring cards played",
    ],
    image_url: "img/j_move_up.png",
    rarity: "Legendary"
  },
]
let hacker_jokers = [
  {
    name: "Upwards Escalator",
    text: [
      "Gains {C:mult}+1{} Mult or {C:mult}+2{} Mult at the end of every {C:attention}round{}",
      "{C:inactive}(Currently{} {C:mult}+0{} {C:inactive}Mult){}",
    ],
    image_url: "img/j_upwards_escalator.png",
    rarity: "Common"
  },
  {
    name: "Downwards Escalator",
    text: [
      "{C:blue}-1{} hands each round, prevents {C:attention}Ante{} from going up after beating a {C:attention}Boss Blind{}",
      "{S:1.1,C:red,E:2}self destructs{}",
    ],
    image_url: "img/j_downwards_escalator.png",
    rarity: "Rare"
  },
]

let drifter_jokers = [
  {
    name: "Strider",
    text: [
      "If {C:attention}first hand{} of round has only {C:attention}1{} card, add a {C:red}Red Seal{} to it or change it to a {C:drifter}Lift Seal{} if it does already have one",
    ],
    image_url: "img/j_strider.png",
    rarity: "Rare"
  },
]

let spectre_jokers = [
  {
    name: "Random Teleport",
    text: [
      "{C:green}1 in 2{} chance for this Joker to create {C:attention}1{} random {C:attention}temporary{} {C:tarot}Tarot{} or {C:spectral}Spectral{} card at the start of the {C:attention}shop{}",
      "{C:inactive}(Must have room){}",
    ],
    image_url: "img/j_random_teleport.png",
    rarity: "Uncommon"
  },
]

// works the same. 
let consumables = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Tarot"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Planet"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Spectral"
  // },
]

let card_modifications = [
  {
    name: "Fake Card",
    text: [
      "Scores negative of base Chips value",
      "Can't be traced unless triggered",
    ],
    image_url: "img/enh_fake.png",
    rarity: "Enhancement"
  },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Edition"
  // },
  {
    name: "Lift Seal",
    text: [
      "Retrigger this card {C:attention}2{} times",
    ],
    image_url: "img/seal_lift.png",
    rarity: "Seal"
  },
  {
    name: "Rank Seal",
    text: [
      "When this card is played and scores, increase rank by {C:attention}1{}",
      "{C:inactive}(Cannot be applied to Aces){}",
    ],
    image_url: "img/seal_rank.png",
    rarity: "Seal"
  },
]

let decks = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Deck"
  // },
]

let stickers = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/sticker_example.png",
  //   rarity: "Sticker"
  // },
]

let blinds = [
  // {
  //   name: "The Wall",
  //   text: [
  //     "Extra large blind",
  //     "{C:inactive}({C:red}4x{C:inactive} Base for {C:attention}$$$$${C:inactive})",
  //     "{C:inactive}(Appears from Ante 2)"
  //   ],
  //   image_url: "img/the_wall.png",
  //   rarity: "Boss Blind"
  // },
  // {
  //   name: "Violet Vessel",
  //   text: [
  //     "Very large blind",
  //     "{C:inactive}({C:red}6x{C:inactive} Base for {C:attention}$$$$$$$${C:inactive})",
  //     "{C:inactive}(Appears from Ante 8)"
  //   ],
  //   image_url: "img/violet_vessel.png",
  //   rarity: "Showdown"
  // },
]

let shop_items = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Voucher"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Pack"
  // },
]

let cols = {
  
  MULT: "#FE5F55",
  CHIPS: "#009dff",
  MONEY: "#f3b958",
  XMULT: "#FE5F55",
  FILTER: "#ff9a00",
  ATTENTION: "#ff9a00",
  BLUE: "#009dff",
  RED: "#FE5F55",
  GREEN: "#4BC292",
  PALE_GREEN: "#56a887",
  ORANGE: "#fda200",
  IMPORTANT: "#ff9a00",
  GOLD: "#eac058",
  YELLOW: "#ffff00",
  CLEAR: "#00000000", 
  WHITE: "#ffffff",
  PURPLE: "#8867a5",
  BLACK: "#374244",
  L_BLACK: "#4f6367",
  GREY: "#5f7377",
  CHANCE: "#4BC292",
  JOKER_GREY: "#bfc7d5",
  VOUCHER: "#cb724c",
  BOOSTER: "#646eb7",
  EDITION: "#ffffff",
  DARK_EDITION: "#5d5dff",
  ETERNAL: "#c75985",
  INACTIVE: "#ffffff99",
  HEARTS: "#f03464",
  DIAMONDS: "#f06b3f",
  SPADES: "#403995",
  CLUBS: "#235955",
  ENHANCED: "#8389DD",
  JOKER: "#708b91",
  TAROT: "#a782d1",
  PLANET: "#13afce",
  SPECTRAL: "#4584fa",
  VOUCHER: "#fd682b",
  EDITION: "#4ca893",
  PATRON: "#8bfe0f",
  JOKER: "#fefe15",
  WICKED: "#f80404",
  KEEPER: "#BA4800",
  MUGGLE: "#cccccc",
  HACKER: "#febfe9",
  THIEF: "#0146fe",
  ARCHON: "#23ee9c",
  DRIFTER: "#6c9648",
  HERETIC: "#b9a0e6",
  SPECTRE: "#0dfefe",
  CHAM: "#cc03ed",
}

let rarities = {
  "Common": "#009dff", 
  "Uncommon": "#4BC292",
  "Rare": "#fe5f55",
  "Legendary": "#b26cbb",
  "Joker": "#708b91",
  "Tarot": "#a782d1",
  "Planet": "#13afce",
  "Spectral": "#4584fa",
  "Voucher": "#fd682b",
  "Pack": "#9bb6bd",
  "Enhancement": "#8389DD",
  "Edition": "#4ca893",
  "Seal": "#4584fa",
  "Deck": "#9bb6bd",
  "Sticker": "#5d5dff",
  "Boss Blind": "#5d5dff",
  "Showdown": "#4584fa",
}

regex = /{([^}]+)}/g;

let add_cards_to_div = (jokers, jokers_div) => {
  for (let joker of jokers) {
    console.log("adding joker", joker.name);
  
    joker.text = joker.text.map((line) => { return line + "{}"});
  
    joker.text = joker.text.join("<br/>");
    joker.text = joker.text.replaceAll("{}", "</span>");
    joker.text = joker.text.replace(regex, function replacer(match, p1, offset, string, groups) {
      let classes = p1.split(",");
  
      let css_styling = "";
  
      for (let i = 0; i < classes.length; i++) {
        let parts = classes[i].split(":");
        if (parts[0] === "C") {
          css_styling += `color: ${cols[parts[1].toUpperCase()]};`;
        } else if (parts[0] === "X") {
          css_styling += `background-color: ${cols[parts[1].toUpperCase()]}; border-radius: 5px; padding: 0 5px;`;
        }
      }
  
      return `</span><span style='${css_styling}'>`;
    });
  
    let joker_div = document.createElement("div");
    joker_div.classList.add("joker");
    if (joker.rarity === "Sticker" || joker.rarity == "Seal") {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" class="hasback" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    } else if (joker.soul) {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <span class="soulholder">
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-bg" />
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-top" />
        </span>
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    } else {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    }
  
    jokers_div.appendChild(joker_div);
  }
}

if (neutral_jokers.length === 0) {
  document.querySelector(".neutralfull").style.display = "none"
} else {
  let neutral_div = document.querySelector(".neutral");
  add_cards_to_div(neutral_jokers, neutral_div);
}

if (patron_jokers.length === 0) {
  document.querySelector(".patronfull").style.display = "none"
} else {
  let patron_div = document.querySelector(".patron");
  add_cards_to_div(patron_jokers, patron_div);
}

if (joker_jokers.length === 0) {
  document.querySelector(".jokerfull").style.display = "none"
} else {
  let cs_joker_div = document.querySelector(".cs_joker");
  add_cards_to_div(joker_jokers, cs_joker_div);
}

if (wicked_jokers.length === 0) {
  document.querySelector(".wickedfull").style.display = "none"
} else {
  let wicked_div = document.querySelector(".wicked");
  add_cards_to_div(wicked_jokers, wicked_div);
}

if (keeper_jokers.length === 0) {
  document.querySelector(".keeperfull").style.display = "none"
} else {
  let keeper_div = document.querySelector(".keeper");
  add_cards_to_div(keeper_jokers, keeper_div);
}

if (hacker_jokers.length === 0) {
  document.querySelector(".hackerfull").style.display = "none"
} else {
  let hacker_div = document.querySelector(".hacker");
  add_cards_to_div(hacker_jokers, hacker_div);
}

if (drifter_jokers.length === 0) {
  document.querySelector(".drifterfull").style.display = "none"
} else {
  let drifter_div = document.querySelector(".drifter");
  add_cards_to_div(drifter_jokers, drifter_div);
}

if (spectre_jokers.length === 0) {
  document.querySelector(".spectrefull").style.display = "none"
} else {
  let spectre_div = document.querySelector(".spectre");
  add_cards_to_div(spectre_jokers, spectre_div);
}

if (consumables.length === 0) {
  document.querySelector(".consumablesfull").style.display = "none"
} else {
  let consumables_div = document.querySelector(".consumables");
  add_cards_to_div(consumables, consumables_div);
}

if (card_modifications.length === 0) {
  document.querySelector(".cardmodsfull").style.display = "none"
} else {
  let cardmods_div = document.querySelector(".cardmods");
  add_cards_to_div(card_modifications, cardmods_div);
}

if (decks.length === 0) {
  document.querySelector(".decksfull").style.display = "none"
} else {
  let decks_div = document.querySelector(".decks");
  add_cards_to_div(decks, decks_div);
}

if (stickers.length === 0) {
  document.querySelector(".stickersfull").style.display = "none"
} else {
  let stickers_div = document.querySelector(".stickers");
  add_cards_to_div(stickers, stickers_div);
}

if (blinds.length === 0) {
  document.querySelector(".blindsfull").style.display = "none"
} else {
  let blinds_div = document.querySelector(".blinds");
  add_cards_to_div(blinds, blinds_div);
}

if (shop_items.length === 0) {
  document.querySelector(".shopitemsfull").style.display = "none"
} else {
  let shopitems_div = document.querySelector(".shopitems");
  add_cards_to_div(shop_items, shopitems_div);
}