class Team {
	constructor(name, wins=0, losses=0) {
		this.name = name;
		this.w = wins;
		this.l = losses;
        this.pf = 0;
        this.pa = 0;
        this.ranking = 0;
	}

	winPercentage() {
		return this.w / (this.w + this.l);
	}

	gamesAhead(that) {
		return (this.w - this.l - that.w + that.l) / 2;
	}

	static playGame(winner, loser, pointW, pointL) {
		winner.w++;
		loser.l++;
        winner.pf += pointW;
        loser.pa += pointL;
	}
    static rank(teams) {
        teams.sort((a, b) => b.winPercentage() - a.winPercentage());
        for (let i = 0; i < teams.length; i++) {
            teams[i].ranking = i + 1;
        }
    }
}

const cal = new Team('California', 4, 3);
const uw = new Team('Washington', 6, 2);
const ucLa = new Team('UCLA', 2, 6);
const lsjU = new Team('Leland Stanford Jr. University', 5, 3);
const wsu = new Team('California', 7, 1);
const ua = new Team('California', 4, 5);
const asu = new Team('California', 4, 4);
const col = new Team('Colorado', 5, 3);
const uo = new Team('Oregon', 5, 3);
const osu = new Team('Oregon State', 2, 6);
const usc = new Team('Southern California', 4, 4);
const utah = new Team('Utah', 6, 2);

Team.playGame(ua,cal);
for(i = 0; i < 4; i++) 
{
    Team.playGame(ucLa,uw)
    Team.playGame(osu,utah)
}
for(i = 0; i < 2; i++)
{
    Team.playGame(lsjU,wsu)
    Team.playGame(uo,wsu)
    Team.playGame(col,wsu)
}
