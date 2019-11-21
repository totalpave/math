
import * as api from '../src/api';
import {Math as TPMath} from '../src/Math';
import {SIUnit} from '../src/SIUnit';
import {Unit} from '../src/Unit';
import {UnitType} from '../src/UnitType';
import {UnitUtils} from '../src/UnitUtils';

describe('Public API', () => {
    it('Math', () => {
        expect(api.Math).toBe(TPMath);
    });

    it('SIUnit', () => {
        expect(api.SIUnit).toBe(SIUnit);
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
