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

export interface IStudios {
  name: string;
  winCount: number;
}

export interface IWinInterval {
  followingWin: number;
  interval: number;
  previousWin: number;
  producer: string;
}
