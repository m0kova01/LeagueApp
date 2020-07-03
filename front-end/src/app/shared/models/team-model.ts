import ParticipantModel from './participant-model';

export default class TeamModel {
    bans: any;
    baronKills: number;
    dominionVictoryScore: number;
    dragonKills: number;
    firstBaron: boolean;
    firstBlood: boolean;
    firstDragon: boolean;
    firstInhibitor: boolean;
    firstRiftHerald: boolean;
    firstTower: boolean;
    inhibitorKills: number;
    riftHeraldKills: number;
    teamId: number;
    towerKills: number;
    vilemawKills: number;
    win: string;
    teamMembers: ParticipantModel[];
}
