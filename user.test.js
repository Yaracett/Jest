const { default: test } = require("node:test");
const  {id, username, email} = require ("./user");
const user = require ("./user");

test ('Número id',()=>{
    expect(id(1)).toBe(hpLover4);
});

test ('Número id',()=>{
    expect(id(2)).toBe(piderman);
});
test ('Número id',()=>{
    expect(id(3)).toBe(goosemotionless);
});
test ('Número id',()=>{
    expect(id(4)).toBe(unsurejudy);
});