// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test(
    'phone number true 1', () => {
        expect(functions.isPhoneNumber('210-453-9032')).toBe(true);
    }
);

test(
    'phone number true 2', () => {
        expect(functions.isPhoneNumber('(210)-453-9032')).toBe(true);
    }
);

test(
    'phone number false 1', () => {
        expect(functions.isPhoneNumber('210-453-903')).toBe(false);
    }
);

test(
    'phone number false 2', () => {
        expect(functions.isPhoneNumber('23121920032')).toBe(false);
    }
);

test(
    'email true 1', () => {
        expect(functions.isEmail('oeiruowiwu201931@oaueroi.ow')).toBe(true);
    }
);

test(
    'email true 2', () => {
        expect(functions.isEmail('oeiruowiwu201931@oaueroi.owr')).toBe(true);
    }
);

test(
    'email false 1', () => {
        expect(functions.isEmail('oeiruowiwu 201931@oaueroi.ow')).toBe(false);
    }
);

test(
    'email false 2', () => {
        expect(functions.isEmail('oeiruowiwu201931@oaueroi.owre')).toBe(false);
    }
);

test(
    'password true 1', () => {
        expect(functions.isStrongPassword('uoweiuroa')).toBe(true);
    }
);

test(
    'password true 2', () => {
        expect(functions.isStrongPassword('PQWiwqo910_oq')).toBe(true);
    }
);

test(
    'password false 1', () => {
        expect(functions.isStrongPassword('qi')).toBe(false);
    }
);

test(
    'password false 2', () => {
        expect(functions.isStrongPassword('@#*!()!@*&')).toBe(false);
    }
);

test(
    'date true 1', () => {
        expect(functions.isDate('1/5/7823')).toBe(true);
    }
);

test(
    'date true 2', () => {
        expect(functions.isDate('1/52/7823')).toBe(true);
    }
);

test(
    'date false 1', () => {
        expect(functions.isDate('01057823')).toBe(false);
    }
);

test(
    'date false 2', () => {
        expect(functions.isDate('34/32/910')).toBe(false);
    }
);

test(
    'color true 1', () => {
        expect(functions.isHexColor('#120993')).toBe(true);
    }
);

test(
    'color true 2', () => {
        expect(functions.isHexColor('#ffffff')).toBe(true);
    }
);

test(
    'color false 1', () => {
        expect(functions.isHexColor('#0713')).toBe(false);
    }
);

test(
    'color false 2', () => {
        expect(functions.isHexColor('this is not a color')).toBe(false);
    }
);