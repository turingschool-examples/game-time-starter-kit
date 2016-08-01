const validGames = [
  [ // game 1
    ["on", "off", "on", "on", "off"],
    ["off", "on", "on", "on", "off"],
    ["on", "on", "on", "off", "off"],
    ["on", "on", "off", "on", "on"],
    ["off", "off", "off", "on", "on"]
  ],
  [ //game 2
    ["off", "off", "off", "on", "on"],
    ["on", "on", "off", "on", "on"],
    ["on", "on", "on", "off", "off"],
    ["off", "on", "on", "on", "off"],
    ["on", "off", "on", "on", "off"]
  ],
  [ // game 3
    ["off", "on", "on", "off", "on"],
    ["off", "on", "on", "on", "off"],
    ["off", "off", "on", "on", "off"],
    ["on", "on", "off", "on", "on"],
    ["on", "on", "off", "off", "off"]
  ],
  [ // game 4
    ["on", "on", "off", "off", "off"],
    ["on", "on", "off", "on", "on"],
    ["off", "off", "on", "on", "on"],
    ["off", "on", "on", "on", "off"],
    ["off", "on", "on", "off", "on"]
  ],
  [ // game 5
    ["on", "on", "on", "on", "on"],
    ["off", "on", "on", "on", "off"],
    ["off", "off", "on", "off", "off"],
    ["off", "on", "on", "on", "off"],
    ["on", "on", "on", "on", "on"]
  ],
  [ // game 6
    ["on", "off", "on", "on", "on"],
    ["off", "off", "off", "on", "on"],
    ["on", "off", "off", "on", "on"],
    ["on", "off", "off", "off", "on"],
    ["on", "on", "off", "on", "on"]
  ],
  [ // game 7
    ["on", "on", "on", "on", "on"],
    ["on", "on", "on", "on", "on"],
    ["on", "on", "on", "on", "on"],
    ["on", "off", "on", "off", "on"],
    ["off", "off", "on", "off", "off"]
  ],
  [ // game 8
    ["on", "on", "on", "off", "on"],
    ["on", "on", "off", "on", "off"],
    ["on", "on", "off", "on", "off"],
    ["on", "on", "on", "off", "on"],
    ["on", "on", "on", "on", "on"]
  ],
  [ // game 9
    ["on", "on", "on", "on", "on"],
    ["on", "on", "on", "on", "on"],
    ["off", "on", "on", "on", "on"],
    ["on", "off", "on", "on", "on"],
    ["on", "off", "on", "on", "on"]
  ],
  [ // game 10
    ["on", "on", "on", "on", "on"],
    ["off", "on", "off", "on", "off"],
    ["off", "on", "off", "on", "off"],
    ["off", "on", "off", "on", "off"],
    ["on", "on", "on", "on", "on"]
  ],
  [ // game 11
    ["on", "off", "off", "on", "off"],
    ["off", "on", "on", "on", "off"],
    ["on", "off", "off", "on", "off"],
    ["on", "on", "on", "on", "on"],
    ["on", "on", "on", "on", "on"]
  ],
  [ // game 12
    ["on", "on", "on", "on", "on"],
    ["off", "on", "on", "on", "on"],
    ["on", "off", "on", "on", "on"],
    ["off", "off", "on", "on", "on"],
    ["on", "off", "on", "on", "on"]
  ],
  [ // game 13
    ["on", "on", "on", "on", "on"],
    ["on", "on", "on", "on", "on"],
    ["on", "on", "on", "on", "on"],
    ["off", "on", "off", "on", "off"],
    ["off", "on", "off", "on", "off"]
  ],
  [ // game 14
    ["on", "on", "off", "on", "on"],
    ["on", "on", "off", "off", "on"],
    ["on", "on", "on", "off", "off"],
    ["on", "on", "on", "on", "on"],
    ["on", "on", "on", "on", "on"]
  ],
  [ // game 15
    ["on", "off", "on", "off", "on"],
    ["on", "off", "on", "off", "on"],
    ["on", "on", "on", "on", "on"],
    ["on", "off", "on", "off", "on"],
    ["on", "off", "on", "off", "on"]
  ],
  [ // game 16
    ["on", "on", "off", "on", "on"],
    ["on", "on", "off", "on", "on"],
    ["off", "off", "on", "off", "off"],
    ["on", "on", "off", "on", "on"],
    ["on", "on", "off", "on", "on"]
  ],
  [ // game 17
    ["on", "on", "on", "on", "on"],
    ["on", "on", "on", "on", "on"],
    ["on", "on", "on", "on", "on"],
    ["on", "off", "off", "off", "off"],
    ["off", "on", "off", "off", "on"]
  ],
  [ // game 18
    ["on", "on", "on", "on", "on"],
    ["on", "off", "on", "on", "on"],
    ["on", "on", "off", "on", "on"],
    ["on", "on", "off", "on", "on"],
    ["on", "on", "off", "on", "on"]
  ],
  [ // game 19
    ["on", "on", "on", "on", "on"],
    ["off", "on", "on", "on", "on"],
    ["on", "off", "on", "on", "on"],
    ["on", "on", "off", "on", "on"],
    ["on", "on", "on", "off", "on"]
  ],
  [ // game 20
    ["on", "on", "on", "on", "off"],
    ["on", "on", "on", "off", "on"],
    ["on", "on", "off", "on", "on"],
    ["on", "off", "on", "on", "on"],
    ["off", "on", "on", "on", "on"]
  ],
  [ // game 21
    ["on", "off", "off", "off", "on"],
    ["off", "off", "off", "off", "off"],
    ["on", "on", "on", "on", "on"],
    ["on", "on", "on", "on", "on"],
    ["on", "on", "on", "on", "on"]
  ],
  [ // game 22
    ["on", "on", "on", "on", "on"],
    ["on", "off", "on", "off", "on"],
    ["on", "off", "off", "off", "on"],
    ["off", "off", "off", "off", "off"],
    ["off", "on", "off", "on", "off"]
  ],
  [ // game 23
    ["off", "off", "on", "on", "on"],
    ["on", "on", "on", "on", "on"],
    ["off", "off", "on", "on", "on"],
    ["on", "on", "off", "on", "off"],
    ["off", "on", "off", "on", "off"]
  ],
  [ // game 24
    ["on", "off", "off", "off", "off"],
    ["off", "off", "off", "off", "off"],
    ["on", "off", "off", "off", "off"],
    ["off", "off", "off", "off", "off"],
    ["off", "off", "off", "on", "on"]
  ],
  [ // game 25
    ["off", "off", "on", "off", "off"],
    ["off", "off", "on", "off", "off"],
    ["off", "off", "on", "off", "off"],
    ["off", "off", "on", "off", "off"],
    ["off", "off", "on", "off", "off"]
  ],
  [ // game 26
    ["on", "on", "off", "on", "off"],
    ["on", "on", "on", "on", "on"],
    ["off", "on", "on", "on", "off"],
    ["on", "on", "on", "on", "on"],
    ["off", "on", "off", "on", "on"]
  ],
  [ // game 27
    ["on", "off", "on", "off", "on"],
    ["off", "on", "on", "on", "off"],
    ["off", "off", "on", "off", "off"],
    ["off", "on", "on", "on", "off"],
    ["on", "off", "on", "off", "on"]
  ],
  [ // game 28
    ["on", "off", "off", "off", "on"],
    ["off", "on", "on", "on", "off"],
    ["off", "on", "on", "on", "off"],
    ["off", "off", "off", "off", "off"],
    ["off", "on", "on", "on", "off"]
  ],
  [ // game 29
    ["off", "off", "off", "on", "on"],
    ["on", "off", "on", "off", "on"],
    ["off", "off", "on", "off", "off"],
    ["on", "off", "on", "off", "on"],
    ["on", "on", "off", "off", "off"]
  ]
];

module.exports = validGames;
