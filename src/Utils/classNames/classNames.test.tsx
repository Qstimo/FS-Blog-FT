import { classNames } from "./classNames";


describe('classNames', () => {
    test('cls test', () => {
        expect(classNames('someClassName', {}, [])).toBe('someClassName');
    });
    test('cls test2', () => {
        expect(classNames('someClassName', { 'true': true, 'false': false }, ['cls1'])).toBe('someClassName cls1 true');
    });
})