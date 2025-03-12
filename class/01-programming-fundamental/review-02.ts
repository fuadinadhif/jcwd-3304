const player1Status = {
  name: "John Doe",
  achievement: ["Gold Medal", "Silver Medal", "Bronze Medal"],
  score: 98,
  level: 5,
  winRate: 90,
  isOnline: true,
};

const player2Status = {
  name: "Jane Smith",
  achievement: ["Gold Medal", "Silver Medal", "Bronze Medal"],
  score: 98,
  level: 5,
  winRate: 90,
  isOnline: true,
};

const player3Status = {
  name: "Yono Bakrie",
  achievement: ["Gold Medal", "Silver Medal", "Bronze Medal"],
  score: 98,
  level: 5,
  winRate: 90,
  isOnline: true,
};

class PlayerStatus {
  name: string;
  achievement: string[] = [];
  score: number = 0;
  level: number = 1;
  winRate: number = 0;
  isOnline: boolean;

  constructor(paramName: string, paramIsOnline: boolean) {
    this.name = paramName;
    this.isOnline = paramIsOnline;
  }
}

const yonoStatus = new PlayerStatus("Yono", true);
const ridhoStatus = new PlayerStatus("Ridho", false);

console.log(yonoStatus);
console.log(ridhoStatus);
