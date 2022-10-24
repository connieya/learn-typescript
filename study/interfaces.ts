type Nickname = string;
type Health = number;
type Friends = Array<string>;
type Team = "read" | "blue" | "yellow";
// type Player = {
//   nickname: string;
//   healthBar: number;
//   team?: Team;
// };

interface Player {
  nickname: string;
  healthBar: number;
}

const nico: Player = {
  nickname: "nico",
  healthBar: 10,
};
