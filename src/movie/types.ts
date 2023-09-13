export interface IMovie {
  id: number;
  title: string;
  winner: boolean;
  year: number;
};

export interface IYearWinner {
  year: number;
  winnerCount: number;
}