const STRING_TXT_DATA =
    `FIRST_NAME     LAST_NAME        NUMBER               EMAIL                        ADDRESS                                  
Debra          Burks            880012XXXX           debra.burks@yahoo.com        9273 Thome Ave., Orchard Park, NY - 14127
Kasha          Todd             null                 kasha.todd@yahoo.com         910, Vine Street, Campbell, CA - 95008
\n`;

const STRING_CSV_DATA = `FIRST_NAME,LAST_NAME,NUMBER,EMAIL,ADDRESS
Debra,Burks,880012XXXX,debra.burks@yahoo.com,"9273 Thome Ave., Orchard Park, NY - 14127"
Kasha,Todd,null,kasha.todd@yahoo.com,"910, Vine Street, Campbell, CA - 95008"`;

const OBJ_FOR_LINE_1 = {
    FIRST_NAME: "Debra",
    LAST_NAME: "Burks",
    NUMBER: "880012XXXX",
    EMAIL: "debra.burks@yahoo.com",
    ADDRESS: "9273 Thome Ave., Orchard Park, NY - 14127"
};

const OBJ_FOR_LINE_2 = {
    FIRST_NAME: "Kasha",
    LAST_NAME: "Todd",
    NUMBER: null,
    EMAIL: "kasha.todd@yahoo.com",
    ADDRESS: "910, Vine Street, Campbell, CA - 95008"
};

module.exports = {
    STRING_TXT_DATA,
    STRING_CSV_DATA,
    OBJ_FOR_LINE_1,
    OBJ_FOR_LINE_2
};
