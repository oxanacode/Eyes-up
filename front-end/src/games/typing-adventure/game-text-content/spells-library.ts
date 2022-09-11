import { ISpells, IElementalSpells } from '../game-types/interfaces';

export const enSpells: ISpells = {
  1: {
    fire: { name: 'fire', damage: '10' },
    water: { name: 'water', damage: '10' },
    wind: { name: 'wind', damage: '10' },
  },
  2: {
    light: { name: 'light', damage: '10' },
    tunder: { name: 'thunder', damage: '10' },
  },
  3: {
    'heavy flame': { name: 'heavy flame', damage: '50' },
    maelstrom: { name: 'maelstrom', damage: '40' },
    'whirl gale': { name: 'whirl gale', damage: '50' },
  },
  4: {
    soundwave: { name: 'soundwave', damage: '40' },
    'fiery hail': { name: 'fiery hail', damage: '50' },
    'radiant wall': { name: 'radiant wall', damage: '40' },
  },
  5: {
    'blusting blow': { name: 'blusting blow', damage: '40' },
    'rising glow': { name: 'rising glow', damage: '50' },
    cloudburst: { name: 'cloudburst', damage: '50' },
  },
  6: {
    'shining vortex': { name: 'shining vortex', damage: '50' },
    'furious flow': { name: 'furious flow', damage: '50' },
    windspout: { name: 'windspout', damage: '50' },
  },
  7: {
    aquaswirl: { name: 'aquaswirl', damage: '50' },
    'massive tornado': { name: 'massive tornado', damage: '70' },
    'electrical discharge': { name: 'electrical discharge', damage: '70' },
  },
  8: {
    'volcanic hurricane': { name: 'volcanic hurricane', damage: '100' },
    'ferocious twister': { name: 'ferocious twister', damage: '150' },
    'luminous pillar': { name: 'luminous pillar', damage: '150' },
  },
  9: {
    'vortical typhoon': { name: 'vortical typhoon', damage: '150' },
    'burning onslaught': { name: 'burning onslaught', damage: '150' },
    'elemental chars': { name: 'elemental chars', damage: '100' },
  },
  10: {
    'elemental high magic': { name: 'elemental high magic', damage: '250' },
    'elemental great enchantment': { name: 'elemental great enchantment', damage: '300' },
  },
};

export const ruSpells: ISpells = {
  1: {
    fire: { name: 'огонь', damage: '10' },
    water: { name: 'вода', damage: '10' },
    wind: { name: 'ветер', damage: '10' },
  },
  2: {
    light: { name: 'свет', damage: '10' },
    tunder: { name: 'гром', damage: '10' },
  },
  3: {
    'heavy flame': { name: 'сильное пламя', damage: '50' },
    maelstrom: { name: 'водоворот', damage: '40' },
    'whirl gale': { name: 'завихрение ветра', damage: '50' },
  },
  4: {
    soundwave: { name: 'громовая волна', damage: '40' },
    'fiery hail': { name: 'огненный град', damage: '50' },
    'radiant wall': { name: 'стена света', damage: '40' },
  },
  5: {
    'blusting blow': { name: 'удар грома', damage: '40' },
    'rising glow': { name: 'восход сияния', damage: '50' },
    cloudburst: { name: 'водяная буря', damage: '50' },
  },
  6: {
    'shining vortex': { name: 'сияющий вихрь', damage: '50' },
    'furious flow': { name: 'яростный поток', damage: '50' },
    windspout: { name: 'воздушный смерч', damage: '50' },
  },
  7: {
    aquaswirl: { name: 'водяной смерч', damage: '50' },
    'massive tornado': { name: 'гигантский торнадо', damage: '70' },
    'electrical discharge': { name: 'удар молнии', damage: '70' },
  },
  8: {
    'volcanic hurricane': { name: 'пламенный ураган', damage: '100' },
    'ferocious twister': { name: 'яростный шквал', damage: '150' },
    'luminous pillar': { name: 'световой столп', damage: '150' },
  },
  9: {
    'vortical typhoon': { name: 'вихревой тайфун', damage: '150' },
    'burning onslaught': { name: 'огненный натиск', damage: '150' },
    'elemental chars': { name: 'стихийные чары', damage: '100' },
  },
  10: {
    'elemental high magic': { name: 'высшая стихийная магия', damage: '250' },
    'elemental great enchantment': { name: 'великое стихийное волшебство', damage: '300' },
  },
};

export const enElementalSpells: IElementalSpells = {
  thunderSpells: ['thunder', 'blusting blow', 'soundwave', 'electrical discharge', 'vortical typhoon'],
  fireSpells: ['fire', 'heavy flame', 'fiery hail', 'volcanic hurricane', 'burning onslaught'],
  waterSpells: ['water', 'maelstrom', 'furious flow', 'cloudburst', 'aquaswirl'],
  windSpells: ['wind', 'whirl gale', 'windspout', 'massive tornado', 'ferocious twister'],
  lightSpells: ['light', 'radiant wall', 'rising glow', 'shining vortex', 'luminous pillar'],
};

export const ruElementalSpells: IElementalSpells = {
  thunderSpells: ['гром', 'удар грома', 'громовая волна', 'удар молнии', 'вихревая молния'],
  fireSpells: ['огонь', 'огненный вихрь', 'огненный град', 'огненный ураган', 'огненный натиск'],
  waterSpells: ['вода', 'водный вихрь', 'яростный поток', 'водяная буря', 'водяной смерч'],
  windSpells: ['ветер', 'воздушный вихрь', 'водяной смерч', 'гигантский торнадо', 'яростный ветер'],
  lightSpells: ['свет', 'стена света', 'восход сияния', 'сияющий вихрь', 'световой столп'],
};

export const enBeastMoves = {
  physics: { name: 'physics', damage: '10' },
  magic: { name: 'magic', damage: '30' },
};

export const ruBeastMoves = {
  physics: { name: 'сила', damage: '10' },
  magic: { name: 'магия', damage: '30' },
};
