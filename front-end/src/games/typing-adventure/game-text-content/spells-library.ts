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
    sunfire: { name: 'sunfire', damage: '50' },
    'aqua vortex': { name: 'aqua vortex', damage: '40' },
    'wind vortex': { name: 'wind vortex', damage: '50' },
  },
  4: {
    soundwave: { name: 'soundwave', damage: '40' },
    'fiery hail': { name: 'fiery hail', damage: '50' },
    'ligth wall': { name: 'ligth wall', damage: '40' },
  },
  5: {
    'thunder blow': { name: 'thunder blow', damage: '40' },
    'rising glow': { name: 'rising glow', damage: '50' },
    'water storm': { name: 'water storm', damage: '50' },
  },
  6: {
    'shining vortex': { name: 'shining vortex', damage: '50' },
    'furious flow': { name: 'furious flow', damage: '50' },
    windspout: { name: 'windspout', damage: '50' },
  },
  7: {
    waterspout: { name: 'waterspout', damage: '50' },
    'massive tornado': { name: 'massive tornado', damage: '70' },
    'lightning blast': { name: 'lightning blast', damage: '70' },
  },
  8: {
    'fiery hurricane': { name: 'fiery hurricane', damage: '100' },
    'furious whirlwind': { name: 'furious whirlwind', damage: '150' },
    'luminous pillar': { name: 'luminous pillar', damage: '150' },
  },
  9: {
    'whirlwind lightning': { name: 'whirlwind lightning', damage: '150' },
    'burning onslaught': { name: 'burning onslaught', damage: '150' },
    'elemental magic': { name: 'elemental magic', damage: '100' },
  },
  10: {
    'elemental high magic': { name: 'elemental high magic', damage: '250' },
    'elemental great magic': { name: 'elemental great magic', damage: '300' },
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
    sunfire: { name: 'огненный вихрь', damage: '50' },
    'aqua vortex': { name: 'водный вихрь', damage: '40' },
    'wind vortex': { name: 'воздушный вихрь', damage: '50' },
  },
  4: {
    soundwave: { name: 'громовая волна', damage: '40' },
    'fiery hail': { name: 'огненный град', damage: '50' },
    'ligth wall': { name: 'стена света', damage: '40' },
  },
  5: {
    'thunder blow': { name: 'удар грома', damage: '40' },
    'rising glow': { name: 'восход сияния', damage: '50' },
    'water storm': { name: 'водяная буря', damage: '50' },
  },
  6: {
    'shining vortex': { name: 'сияющий вихрь', damage: '50' },
    'furious flow': { name: 'яростный поток', damage: '50' },
    windspout: { name: 'воздушный смерч', damage: '50' },
  },
  7: {
    waterspout: { name: 'водяной смерч', damage: '50' },
    'massive tornado': { name: 'гигантский торнадо', damage: '70' },
    'lightning blast': { name: 'удар молнии', damage: '70' },
  },
  8: {
    'fiery hurricane': { name: 'огненный ураган', damage: '100' },
    'furious whirlwind': { name: 'яростный ветер', damage: '150' },
    'luminous pillar': { name: 'световой столп', damage: '150' },
  },
  9: {
    'whirlwind lightning': { name: 'вихревая молния', damage: '150' },
    'burning onslaught': { name: 'огненный натиск', damage: '150' },
    'elemental magic': { name: 'стихийная магия', damage: '100' },
  },
  10: {
    'elemental high magic': { name: 'высшая стихийная магия', damage: '250' },
    'elemental great magic': { name: 'великая стихийная магия', damage: '300' },
  },
};

export const enElementalSpells: IElementalSpells = {
  thunderSpells: ['thunder', 'thunder blow', 'soundwave', 'lightning blast', 'whirlwind lightning'],
  fireSpells: ['fire', 'sunfire', 'fiery hail', 'fiery hurricane', 'burning onslaught'],
  waterSpells: ['water', 'aqua vortex', 'furious flow', 'water storm', 'waterspout'],
  windSpells: ['wind', 'wind vortex', 'windspout', 'massive tornado', 'furious whirlwind'],
  lightSpells: ['light', 'ligth wall', 'rising glow', 'shining vortex', 'luminous pillar'],
};

export const ruElementalSpells: IElementalSpells = {
  thunderSpells: ['гром', 'удар грома', 'громовая волна', 'удар молнии', 'вихревая молния'],
  fireSpells: ['огонь', 'огненный вихрь', 'огненный град', 'огненный ураган', 'огненный натиск'],
  waterSpells: ['вода', 'водный вихрь', 'яростный поток', 'водяная буря', 'waterspout'],
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
