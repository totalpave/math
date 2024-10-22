
import {UnitUtils} from '../src/UnitUtils';
import { Unit, UnitType } from '../src/api';

describe('UnitUtils', () => {
    
    it('getUnitList', () => {
        expect(UnitUtils.getUnitList()).toContain(Unit.MILLIMETER);
        expect(UnitUtils.getUnitList()).toContain(Unit.CENTIMETER);
        expect(UnitUtils.getUnitList()).toContain(Unit.METER);
        expect(UnitUtils.getUnitList()).toContain(Unit.KILOMETER);
        expect(UnitUtils.getUnitList()).toContain(Unit.MILLIMETER_SQUARED);
        expect(UnitUtils.getUnitList()).toContain(Unit.CENTIMETER_SQUARED);
        expect(UnitUtils.getUnitList()).toContain(Unit.METER_SQUARED);
        expect(UnitUtils.getUnitList()).toContain(Unit.KILOMETER_SQUARED);
        expect(UnitUtils.getUnitList()).toContain(Unit.INCH);
        expect(UnitUtils.getUnitList()).toContain(Unit.FOOT);
        expect(UnitUtils.getUnitList()).toContain(Unit.YARD);
        expect(UnitUtils.getUnitList()).toContain(Unit.MILE);
        expect(UnitUtils.getUnitList()).toContain(Unit.NAUTICAL_MILE);
        expect(UnitUtils.getUnitList()).toContain(Unit.INCH_SQUARED);
        expect(UnitUtils.getUnitList()).toContain(Unit.FOOT_SQUARED);
        expect(UnitUtils.getUnitList()).toContain(Unit.YARD_SQUARED);
        expect(UnitUtils.getUnitList()).toContain(Unit.MILE_SQUARED);
        expect(UnitUtils.getUnitList()).toContain(Unit.MILE_SQUARED);
        expect(UnitUtils.getUnitList()).toContain(Unit.NAUTICAL_MILE_SQUARED);
        expect(UnitUtils.getUnitList()).toContain(Unit.METER_OVER_KILOMETER);
        expect(UnitUtils.getUnitList()).toContain(Unit.INCH_OVER_MILE);
        expect(UnitUtils.getUnitList()).toContain(Unit.DEGREE);
        expect(UnitUtils.getUnitList()).toContain(Unit.RADIAN);
    });

    describe('Unit -> UnitType', () => {
        it('Unit.MILLIMETER', () => {
            expect(UnitUtils.getUnitType(Unit.MILLIMETER)).toBe(UnitType.LINEAR);
        });

        it('Unit.CENTIMETER', () => {
            expect(UnitUtils.getUnitType(Unit.CENTIMETER)).toBe(UnitType.LINEAR);
        });

        it('Unit.METER', () => {
            expect(UnitUtils.getUnitType(Unit.METER)).toBe(UnitType.LINEAR);
        });

        it('Unit.KILOMETER', () => {
            expect(UnitUtils.getUnitType(Unit.KILOMETER)).toBe(UnitType.LINEAR);
        });

        it('Unit.INCH', () => {
            expect(UnitUtils.getUnitType(Unit.INCH)).toBe(UnitType.LINEAR);
        });

        it('Unit.FOOT', () => {
            expect(UnitUtils.getUnitType(Unit.FOOT)).toBe(UnitType.LINEAR);
        });

        it('Unit.YARD', () => {
            expect(UnitUtils.getUnitType(Unit.YARD)).toBe(UnitType.LINEAR);
        });

        it('Unit.MILE', () => {
            expect(UnitUtils.getUnitType(Unit.MILE)).toBe(UnitType.LINEAR);
        });

        it('Unit.MILLIMETER_SQUARED', () => {
            expect(UnitUtils.getUnitType(Unit.MILLIMETER_SQUARED)).toBe(UnitType.AREA);
        });

        it('Unit.CENTIMETER_SQUARED', () => {
            expect(UnitUtils.getUnitType(Unit.CENTIMETER_SQUARED)).toBe(UnitType.AREA);
        });

        it('Unit.METER_SQUARED', () => {
            expect(UnitUtils.getUnitType(Unit.METER_SQUARED)).toBe(UnitType.AREA);
        });

        it('Unit.KILOMETER_SQUARED', () => {
            expect(UnitUtils.getUnitType(Unit.KILOMETER_SQUARED)).toBe(UnitType.AREA);
        });

        it('Unit.INCH_SQUARED', () => {
            expect(UnitUtils.getUnitType(Unit.INCH_SQUARED)).toBe(UnitType.AREA);
        });

        it('Unit.FOOT_SQUARED', () => {
            expect(UnitUtils.getUnitType(Unit.FOOT_SQUARED)).toBe(UnitType.AREA);
        });

        it('Unit.YARD_SQUARED', () => {
            expect(UnitUtils.getUnitType(Unit.YARD_SQUARED)).toBe(UnitType.AREA);
        });

        it('Unit.MILE_SQUARED', () => {
            expect(UnitUtils.getUnitType(Unit.MILE_SQUARED)).toBe(UnitType.AREA);
        });

        it('Unit.METER_OVER_KILOMETER', () => {
            expect(UnitUtils.getUnitType(Unit.METER_OVER_KILOMETER)).toBe(UnitType.LENGTH_OVER_LENGTH);
        });

        it('Unit.INCH_OVER_MILE', () => {
            expect(UnitUtils.getUnitType(Unit.INCH_OVER_MILE)).toBe(UnitType.LENGTH_OVER_LENGTH);
        });

        it('Unit.RADIAN', () => {
            expect(UnitUtils.getUnitType(Unit.RADIAN)).toBe(UnitType.ANGLE);
        });

        it('Unit.DEGREE', () => {
            expect(UnitUtils.getUnitType(Unit.DEGREE)).toBe(UnitType.ANGLE);
        });

        it('Unknown unit throws', () => {
            expect(() => {
                UnitUtils.getUnitType(('xxx' as Unit));
            }).toThrow(/Unknown unit/);
        });
    });

    describe('Unit -> getUnitText', () => {
        const SUPERSCRIPT_TWO: string = '\u00B2';
        it('Unit.MILLIMETER', () => {
            expect(UnitUtils.getUnitText(Unit.MILLIMETER)).toBe('mm');
        });
        it('Unit.CENTIMETER', () => {
            expect(UnitUtils.getUnitText(Unit.CENTIMETER)).toBe('cm');
        });
        it('Unit.METER', () => {
            expect(UnitUtils.getUnitText(Unit.METER)).toBe('m');
        });
        it('Unit.KILOMETER', () => {
            expect(UnitUtils.getUnitText(Unit.KILOMETER)).toBe('km');
        });
        it('Unit.MILLIMETER_SQUARED', () => {
            expect(UnitUtils.getUnitText(Unit.MILLIMETER_SQUARED)).toBe('mm' + SUPERSCRIPT_TWO);
        });
        it('Unit.CENTIMETER_SQUARED', () => {
            expect(UnitUtils.getUnitText(Unit.CENTIMETER_SQUARED)).toBe('cm' + SUPERSCRIPT_TWO);
        });
        it('Unit.METER_SQUARED', () => {
            expect(UnitUtils.getUnitText(Unit.METER_SQUARED)).toBe('m' + SUPERSCRIPT_TWO);
        });
        it('Unit.KILOMETER_SQUARED', () => {
            expect(UnitUtils.getUnitText(Unit.KILOMETER_SQUARED)).toBe('km' + SUPERSCRIPT_TWO);
        });
        it('Unit.INCH', () => {
            expect(UnitUtils.getUnitText(Unit.INCH)).toBe('in');
        });
        it('Unit.FOOT', () => {
            expect(UnitUtils.getUnitText(Unit.FOOT)).toBe('ft');
        });
        it('Unit.YARD', () => {
            expect(UnitUtils.getUnitText(Unit.YARD)).toBe('yd');
        });
        it('Unit.MILE', () => {
            expect(UnitUtils.getUnitText(Unit.MILE)).toBe('mi');
        });
        it('Unit.INCH_SQUARED', () => {
            expect(UnitUtils.getUnitText(Unit.INCH_SQUARED)).toBe('in' + SUPERSCRIPT_TWO);
        });
        it('Unit.FOOT_SQUARED', () => {
            expect(UnitUtils.getUnitText(Unit.FOOT_SQUARED)).toBe('ft' + SUPERSCRIPT_TWO);
        });
        it('Unit.YARD_SQUARED', () => {
            expect(UnitUtils.getUnitText(Unit.YARD_SQUARED)).toBe('yd' + SUPERSCRIPT_TWO);
        });
        it('Unit.MILE_SQUARED', () => {
            expect(UnitUtils.getUnitText(Unit.MILE_SQUARED)).toBe('mi' + SUPERSCRIPT_TWO);
        });
        it('Unit.METER_OVER_KILOMETER', () => {
            expect(UnitUtils.getUnitText(Unit.METER_OVER_KILOMETER)).toBe('');
        });
        it('Unit.INCH_OVER_MILE', () => {
            expect(UnitUtils.getUnitText(Unit.INCH_OVER_MILE)).toBe('');
        });
        it('Unit.RADIAN', () => {
            expect(UnitUtils.getUnitText(Unit.RADIAN)).toBe('rad');
        });
        it('Unit.DEGREE', () => {
            expect(UnitUtils.getUnitText(Unit.DEGREE)).toBe('\u00b0');
        });
    });
});
