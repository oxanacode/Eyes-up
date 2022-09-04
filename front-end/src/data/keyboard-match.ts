const matchKeyboard: Match = {
  ё: 'apostrophe',
  й: 'q',
  ц: 'w',
  у: 'e',
  к: 'r',
  е: 't',
  н: 'y',
  г: 'u',
  ш: 'i',
  щ: 'o',
  з: 'p',
  х: 'left-bracket',
  ъ: 'right-bracket',
  ф: 'a',
  ы: 's',
  в: 'd',
  а: 'f',
  п: 'g',
  р: 'h',
  о: 'j',
  л: 'k',
  д: 'l',
  ж: 'semicolon',
  э: `single-quote`,
  я: 'z',
  ч: 'x',
  с: 'c',
  м: 'v',
  и: 'b',
  т: 'n',
  ь: 'm',
  б: 'comma',
  ю: 'dot',
};

export default matchKeyboard;

type Match = {
  [key: string]: string;
};
