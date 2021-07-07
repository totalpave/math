
import * as api from '../src/api';
import {Math as TPMath} from '../src/Math';
import {UnitMode} from '../src/UnitMode';
import {Unit} from '../src/Unit';
import {UnitType} from '../src/UnitType';
import {UnitUtils} from '../src/UnitUtils';
import {UnitConverter} from '../src/UnitConverter';

describe('Public API', () => {
    it('Math', () => {
        expect(api.Math).toBe(TPMath);
    });

    it('UnitConverter', () => {
        expect(api.UnitConverter).toBe(UnitConverter);
    });

    it('UnitMode', () => {
        expect(api.UnitMode).toBe(UnitMode);
    });

    it('Unit', () => {
        expect(api.Unit).toBe(Unit);
    });

    it('UnitType', () => {
        expect(api.UnitType).toBe(UnitType);
    });

    it('UnitUtils', () => {
        expect(api.UnitUtils).toBe(UnitUtils);
    });
});
