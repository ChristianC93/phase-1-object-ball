function gameObject() {
    const boxScore = {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
           "Alan Anderson": {
             "number": 0,
             "shoe": 16,
             "points": 22,
             "rebounds": 12,
             "assists": 12,
             "steals": 3,
             "blocks": 1,
             "slamDunks": 1,
          },
          "Reggie Evans": {
             "number": 30,
             "shoe": 14,
             "points": 12,
             "rebounds": 12,
             "assists": 12,
             "steals": 12,
             "blocks": 12,
             "slamDunks": 7,
          },
          "Brook Lopez": {
             "number": 11,
             "shoe": 17,
             "points": 17,
             "rebounds": 19,
             "assists": 10,
             "steals": 3,
             "blocks": 1,
             "slamDunks": 15,
          },
          "Mason Plumlee": {
             "number": 1,
             "shoe": 19,
             "points": 26, 
             "rebounds": 12,
             "assists": 6,
             "steals": 3,
             "blocks": 8,
             "slamDunks": 5,
          },
          "Jason Terry": {
             "number": 31,
             "shoe": 15,
             "points": 19,
             "rebounds": 2,
             "assists": 2,
             "steals": 4,
             "blocks": 11,
             "slamDunks": 1,  
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turqouise", "Purple"],
        players: {
          "Jeff Adrien": {
             "number": 4,
             "shoe": 18,
             "points": 10,
             "rebounds": 1,
             "assists": 1,
             "steals": 2,
             "blocks": 7,
             "slamDunks": 2,
          },
          "Bismak Biyombo": {
             "number": 0,
             "shoe": 16,
             "points": 12,
             "rebounds": 4,
             "assists": 7,
             "steals": 7,
             "blocks": 15,
             "slamDunks": 10,
          },
          "DeSagna Diop": {
             "number": 2,
             "shoe": 14,
             "points": 24,
             "rebounds": 12,
             "assists": 12,
             "steals": 4,
             "blocks": 5,
             "slamDunks": 5,
          },
          "Ben Gordon": {
             "number": 8,
             "shoe": 15,
             "points": 33,
             "rebounds": 3,
             "assists": 2,
             "steals": 1,
             "blocks": 1,
             "slamDunks": 0,
          },
          "Brendan Haywood": {
             "number": 33,
             "shoe": 15,
             "points": 6,
             "rebounds": 12,
             "assists": 12,
             "steals": 22,
             "blocks": 5,
             "slamDunks": 12,
          }
        }
      }
    }
    return boxScore
}

function numPointsScored(player) {
    let game = gameObject()
    for (let gameKey in game) {
      let teamObj = game[gameKey]
      for (let teamKey in teamObj) {
          let info = teamObj[teamKey]
          if (typeof info === 'object' && Array.isArray(info) === false) {
              let players = info
              for (let data in players) {
                  let amount = players[data]
                  if (player === data) {
                      return amount.points
                    }
                }
            } 
        }
    }
}

function shoeSize(player) {
    let game = gameObject()
    for (let gameKey in game) {
      let teamObj = game[gameKey]
      for (let teamKey in teamObj) {
          let info = teamObj[teamKey]
          if (typeof info === 'object' && Array.isArray(info) === false) {
              let players = info
              for (let data in players) {
                  let amount = players[data]
                  if (player === data) {
                      return amount.shoe
                    }
                }
            }
        }
    }          
}

function teamColors(team) {
    let game = gameObject()
    for (let gameKey in game) {
        let teamObj = game[gameKey]
        if (team === teamObj.teamName) {
            return teamObj.colors
        }
    }
}

function teamNames() {
    let game = gameObject()
    let matchup = []
    let homeTeam = game.home.teamName
    let awayTeam = game.away.teamName
    matchup.push(homeTeam, awayTeam)
    return matchup
}

function playerNumbers(team) {
    let game = gameObject()
    let jerseyArray = []
    for (let gameKey in game) {
        let teamObj = game[gameKey]
        if (team === teamObj.teamName) {
            for (let teamKey in teamObj) {
                let teamInfo = teamObj[teamKey]
                if (typeof teamInfo === 'object' && Array.isArray(teamInfo) === false) {
                    let players = teamInfo
                    for (let stats in players) {
                        let numbers = players[stats]
                        jerseyArray.push(numbers.number)   
                    }
                }
            }
        }
    }
    return jerseyArray
}  

function playerStats(name) {
    let game = gameObject()
    for (let gameKey in game) {
        let teamObj = game[gameKey]
        for (let teamKey in teamObj) {
            let teamInfo = teamObj[teamKey]
            if (typeof teamInfo === 'object' && Array.isArray(teamInfo) === false) {
                let players = teamInfo
                for (let playersKey in players) {
                    let playerInfo = players[playersKey]
                    if (name === playersKey) {
                        return playerInfo
                    }
                }
            }
        }
    }
}

function bigShoeRebounds() {
    const name = 'Mason Plumlee'
    let game = gameObject()
    for (let gameKey in game) {
        let teamObj = game[gameKey]
        for (let teamKey in teamObj) {
            let teamInfo = teamObj[teamKey]
            if (typeof teamInfo === 'object' && Array.isArray(teamInfo) === false) {
                let players = teamInfo
                for (let playersKey in players) {
                    let playerInfo = players[playersKey]
                    if (name === playersKey) {
                        return playerInfo.rebounds
                    }
                }
            }
        }
    }
}

function mostPointsScored() {
    const name = 'Ben Gordon'
    let game = gameObject()
    for (let gameKey in game) {
        let teamObj = game[gameKey]
        for (let teamKey in teamObj) {
            let teamInfo = teamObj[teamKey]
            //console.log(teamInfo)
            if (typeof teamInfo === 'object' && Array.isArray(teamInfo) === false) {
                let players = teamInfo
                //console.log(players)
                for (let playersKey in players) {
                    //console.log(playersKey)
                    let playerInfo = players[playersKey]
                    if (name === playersKey) {
                        return name
                    }
                }
            }
        }
    }
}

