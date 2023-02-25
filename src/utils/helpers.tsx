import { IStyle } from "@fluentui/react";

export const enum Colors {
    Red = "#F64A4A",
    Orange = "#FB7C58",
    Yellow = "#F8CD65",
    NeonGreen = "#A4FFAF",
    AlmostWhite="#E6E5EA",
    Grey="#817D92",
    DarkGrey="#24232C",
    VeryDarkGrey="#18171F"
}

export const SVGIcons = {
    icons:{
        'public-arrow-right':(<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/></svg>),
        'public-check':(<svg width="14" height="12" xmlns="http://www.w3.org/2000/svg"><path stroke="#18171F" strokeWidth="3" fill="none" d="M1 5.607 4.393 9l8-8"/></svg>),
        'public-copy':(<svg width="21" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z" fill="#A4FFAF"/></svg>)
    }
}

export const passwordOptions = [
    "Include Uppercase Letters",
    "Include Lowercase Letters",
    "Include Numbers",
    "Include Symbols",
  ];

export const ratings = new Map<string,[string,string]>();
ratings.set('0',[`${Colors.Red}`,"TOO WEAK!"]);
ratings.set('1',[`${Colors.Red}`,"TOO WEAK!"]);
ratings.set('2',[`${Colors.Orange}`,"WEAK"]);
ratings.set('3',[`${Colors.Yellow}`,'MEDIUM']);
ratings.set('4',[`${Colors.NeonGreen}`,'STRONG']);

export const hints = new Map<string,string>();
hints.set('a','ape');
hints.set('b','buffalo');
hints.set('c','crab');
hints.set('d','dog');
hints.set('e','elephant');
hints.set('f','falcon');
hints.set('g','goat');
hints.set('h','hawk');
hints.set('i','ibex');
hints.set('j','jackal');
hints.set('k','kangaroo');
hints.set('l','liger');
hints.set('m','moose');
hints.set('n','newt');
hints.set('o','owl');
hints.set('p','puma');
hints.set('q','quail');
hints.set('r','rooster');
hints.set('s','swan');
hints.set('t','turtle');
hints.set('u','unicorn');
hints.set('v','viper');
hints.set('w','weasel');
hints.set('x','xeme');
hints.set('y','yak');
hints.set('z','zebra');
hints.set('!','BANG');
hints.set('@','AT');
hints.set('#','HASH');
hints.set('$','CASH');
hints.set('%','MOD');
hints.set('^','UPCARROT');
hints.set('&','AND');
hints.set('*','STAR');
hints.set('(','LEFTSMILE');
hints.set(')','RIGHTSMILE');
hints.set('{','LEFTCURLY');
hints.set('}','RIGHTCURLY');
hints.set('[','LEFTBOXY');
hints.set(']','RIGHTBOXY');
hints.set('=','IS');
hints.set('<','LEFTCARROT');
hints.set('>','RIGHTCARROT');
hints.set('/','LEANRIGHT');
hints.set(',','COMMA');
hints.set('.','DOT');
hints.set('0','ZERO');
hints.set('1','ONE');
hints.set('2','TWO');
hints.set('3','THREE');
hints.set('4','FOUR');
hints.set('5','FIVE');
hints.set('6','SIX');
hints.set('7','SEVEN');
hints.set('8','EIGHT');
hints.set('9','NINE');
