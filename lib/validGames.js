const validGames = [
  [ // game 0
    ["on", "off", "on", "on", "off"],
    ["off", "on", "on", "on", "off"],
    ["on", "on", "on", "off", "off"],
    ["on", "on", "off", "on", "on"],
    ["off", "off", "off", "on", "on"]
  ],
  [ //game 1
    ["off", "off", "off", "on", "on"],
    ["on", "on", "off", "on", "on"],
    ["on", "on", "on", "off", "off"],
    ["off", "on", "on", "on", "off"],
    ["on", "off", "on", "on", "off"]
  ],
  [ // game 2
    ["off", "on", "on", "off", "on"],
    ["off", "on", "on", "on", "off"],
    ["off", "off", "on", "on", "off"],
    ["on", "on", "off", "on", "on"],
    ["on", "on", "off", "off", "off"]
  ],
  [ // game 3
    ["on", "on", "off", "off", "off"],
    ["on", "on", "off", "on", "on"],
    ["off", "off", "on", "on", "on"],
    ["off", "on", "on", "on", "off"],
    ["off", "on", "on", "off", "on"]
  ],
  [ // game 4
    ["on", "on", "on", "on", "on"],
    ["off", "on", "on", "on", "off"],
    ["off", "off", "on", "off", "off"],
    ["off", "on", "on", "on", "off"],
    ["on", "on", "on", "on", "on"]
  ],
  [ // game 5
    ["on", "off", "on", "on", "on"],
    ["off", "off", "off", "on", "on"],
    ["on", "off", "off", "on", "on"],
    ["on", "off", "off", "off", "on"],
    ["on", "on", "off", "on", "on"]
  ],
  [ // game 6
    ["on", "on", "on", "on", "on"],
    ["on", "on", "on", "on", "on"],
    ["on", "on", "on", "on", "on"],
    ["on", "off", "on", "off", "on"],
    ["off", "off", "on", "off", "off"]
  ],
  [ // game 7
    ["on", "on", "on", "off", "on"],
    ["on", "on", "off", "on", "off"],
    ["on", "on", "off", "on", "off"],
    ["on", "on", "on", "off", "on"],
    ["on", "on", "on", "on", "on"]
  ],
  [ // game 8
    ["on", "on", "on", "on", "on"],
    ["on", "on", "on", "on", "on"],
    ["off", "on", "on", "on", "on"],
    ["on", "off", "on", "on", "on"],
    ["on", "off", "on", "on", "on"]
  ],
  [ // game 9
    ["on", "on", "on", "on", "on"],
    ["off", "on", "off", "on", "off"],
    ["off", "on", "off", "on", "off"],
    ["off", "on", "off", "on", "off"],
    ["on", "on", "on", "on", "on"]
  ],
  [ // game 10
    ["on", "off", "off", "on", "off"],
    ["off", "on", "on", "on", "off"],
    ["on", "off", "off", "on", "off"],
    ["on", "on", "on", "on", "on"],
    ["on", "on", "on", "on", "on"]
  ],
  [ // game 11
    ["on", "on", "on", "on", "on"],
    ["off", "on", "on", "on", "on"],
    ["on", "off", "on", "on", "on"],
    ["off", "off", "on", "on", "on"],
    ["on", "off", "on", "on", "on"]
  ],
  [ // game 12
    ["on", "on", "on", "on", "on"],
    ["on", "on", "on", "on", "on"],
    ["on", "on", "on", "on", "on"],
    ["off", "on", "off", "on", "off"],
    ["off", "on", "off", "on", "off"]
  ],
  [ // game 13
    ["on", "on", "off", "on", "on"],
    ["on", "on", "off", "off", "on"],
    ["on", "on", "on", "off", "off"],
    ["on", "on", "on", "on", "on"],
    ["on", "on", "on", "on", "on"]
  ],
  [ // game 14
    ["on", "off", "on", "off", "on"],
    ["on", "off", "on", "off", "on"],
    ["on", "on", "on", "on", "on"],
    ["on", "off", "on", "off", "on"],
    ["on", "off", "on", "off", "on"]
  ],
  [ // game 15
    ["on", "on", "off", "on", "on"],
    ["on", "on", "off", "on", "on"],
    ["off", "off", "on", "off", "off"],
    ["on", "on", "off", "on", "on"],
    ["on", "on", "off", "on", "on"]
  ],
  [ // game 16
    ["on", "on", "on", "on", "on"],
    ["on", "on", "on", "on", "on"],
    ["on", "on", "on", "on", "on"],
    ["on", "off", "off", "off", "off"],
    ["off", "on", "off", "off", "on"]
  ],
  [ // game 17
    ["on", "on", "on", "on", "on"],
    ["on", "off", "on", "on", "on"],
    ["on", "on", "off", "on", "on"],
    ["on", "on", "off", "on", "on"],
    ["on", "on", "off", "on", "on"]
  ],
  [ // game 18
    ["on", "on", "on", "on", "on"],
    ["off", "on", "on", "on", "on"],
    ["on", "off", "on", "on", "on"],
    ["on", "on", "off", "on", "on"],
    ["on", "on", "on", "off", "on"]
  ],
  [ // game 19
    ["on", "on", "on", "on", "off"],
    ["on", "on", "on", "off", "on"],
    ["on", "on", "off", "on", "on"],
    ["on", "off", "on", "on", "on"],
    ["off", "on", "on", "on", "on"]
  ],
  [ // game 20
    ["on", "off", "off", "off", "on"],
    ["off", "off", "off", "off", "off"],
    ["on", "on", "on", "on", "on"],
    ["on", "on", "on", "on", "on"],
    ["on", "on", "on", "on", "on"]
  ],
  [ // game 21
    ["on", "on", "on", "on", "on"],
    ["on", "off", "on", "off", "on"],
    ["on", "off", "off", "off", "on"],
    ["off", "off", "off", "off", "off"],
    ["off", "on", "off", "on", "off"]
  ],
  [ // game 22
    ["off", "off", "on", "on", "on"],
    ["on", "on", "on", "on", "on"],
    ["off", "off", "on", "on", "on"],
    ["on", "on", "off", "on", "off"],
    ["off", "on", "off", "on", "off"]
  ],
  [ // game 23
    ["on", "off", "off", "off", "off"],
    ["off", "off", "off", "off", "off"],
    ["on", "off", "off", "off", "off"],
    ["off", "off", "off", "off", "off"],
    ["off", "off", "off", "on", "on"]
  ],
  [ // game 24
    ["off", "off", "on", "off", "off"],
    ["off", "off", "on", "off", "off"],
    ["off", "off", "on", "off", "off"],
    ["off", "off", "on", "off", "off"],
    ["off", "off", "on", "off", "off"]
  ],
  [ // game 25
    ["on", "on", "off", "on", "off"],
    ["on", "on", "on", "on", "on"],
    ["off", "on", "on", "on", "off"],
    ["on", "on", "on", "on", "on"],
    ["off", "on", "off", "on", "on"]
  ],
  [ // game 26
    ["on", "off", "on", "off", "on"],
    ["off", "on", "on", "on", "off"],
    ["off", "off", "on", "off", "off"],
    ["off", "on", "on", "on", "off"],
    ["on", "off", "on", "off", "on"]
  ],
  [ // game 27
    ["on", "off", "off", "off", "on"],
    ["off", "on", "on", "on", "off"],
    ["off", "on", "on", "on", "off"],
    ["off", "off", "off", "off", "off"],
    ["off", "on", "on", "on", "off"]
  ],
  [ // game 28
    ["off", "off", "off", "on", "on"],
    ["on", "off", "on", "off", "on"],
    ["off", "off", "on", "off", "off"],
    ["on", "off", "on", "off", "on"],
    ["on", "on", "off", "off", "off"]
  ],
  [ // test game
  ["off", "off", "off", "off", "off"],
    ["off", "off", "off", "off", "off"],
    ["off", "off", "off", "off", "off"],
    ["off", "off", "off", "off", "on"],
    ["off", "off", "off", "on", "on"]
  ]
];

module.exports = validGames;
