
import {UnitUtils} from '../src/UnitUtils';
import { Unit, UnitType } from '../src/api';
import {
    UNIT_TEXTS_CASES,
    IUnitTextTestCase
} from './support/unitTextExpectations';

describe('UnitUtils', () => {
    
    describe('getUnitList', () => {
        let list: Array<Unit> = [
            Unit.MILLIMETER,
            Unit.CENTIMETER,
            Unit.METER,
            Unit.KILOMETER,
            Unit.MILLIMETER_SQUARED,
            Unit.CENTIMETER_SQUARED,
            Unit.METER_SQUARED,
            Unit.KILOMETER_SQUARED,
            Unit.INCH,
            Unit.FOOT,
            Unit.YARD,
            Unit.MILE,
            Unit.NAUTICAL_MILE,
            Unit.INCH_SQUARED,
            Unit.FOOT_SQUARED,
            Unit.YARD_SQUARED,
            Unit.MILE_SQUARED,
            Unit.NAUTICAL_MILE_SQUARED,
            Unit.METER_OVER_KILOMETER,
            Unit.INCH_OVER_MILE,
            Unit.DEGREE,
            Unit.RADIAN,
            Unit.PER_CENTIMETER,
            Unit.PER_MILLIMETER,
            Unit.PER_METER,
            Unit.PER_KILOMETER,
            Unit.PER_INCH,
            Unit.PER_FOOT,
            Unit.PER_YARD,
            Unit.PER_MILE,
            Unit.PER_NAUTICAL_MILE,
            Unit.PER_DEGREE,
            Unit.PER_RADIAN,
            Unit.PER_MILLIMETER_SQUARED,
            Unit.PER_CENTIMETER_SQUARED,
            Unit.PER_METER_SQUARED,
            Unit.PER_KILOMETER_SQUARED,
            Unit.PER_INCH_SQUARED,
            Unit.PER_FOOT_SQUARED,
            Unit.PER_YARD_SQUARED,
            Unit.PER_MILE_SQUARED,
            Unit.PER_NAUTICAL_MILE_SQUARED
        ];

        let unitList: Array<Unit> = UnitUtils.getUnitList();

        for (let i: number = 0; i < list.length; i++) {
            let expectedUnit: Unit = list[i];

            it(`should contain ${UnitUtils.getUnitText(expectedUnit)}`, () => {
                expect(unitList).toContain(expectedUnit);
            });
        }
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
                UnitUtils.getUnitType(<Unit>Infinity);
            }).toThrowError(/Unknown unit/);
        });
    });

    describe('Unit -> getUnitText', () => {
        for (let i in UNIT_TEXTS_CASES) {
            let testCase: IUnitTextTestCase = UNIT_TEXTS_CASES[i];
            it(testCase.name, () => {
                expect(UnitUtils.getUnitText(<Unit><unknown>i)).toBe(testCase.expectation);
            });
        }
    });
});
