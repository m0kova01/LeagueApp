export class ChampionModel {
    blurb: string;
    id: string;
    image: {
        full: string;
        group: string;
        h: number
        sprite: string;
        w: number
        x: number
        y: number
    };
    info: {
        attack: number
        defense: number
        difficulty: number
        magic: number
    };
    key: string;
    name: string;
    partype: string;
    stats: {
        armor: number
        armorperlevel: number
        attackdamage: number
        attackdamageperlevel: number
        attackrange: number
        attackspeed: number
        attackspeedperlevel: number
        crit: number
        critperlevel: number
        hp: number
        hpperlevel: number
        hpregen: number
        hpregenperlevel: number
        movespeed: number
        mp: number
        mpperlevel: number
        mpregen: number
        mpregenperlevel: number
        spellblock: number
        spellblockperlevel: number
    };
    tags: {
        0: string;
        1: string;
    };
    title: string;
    version: string;
}
