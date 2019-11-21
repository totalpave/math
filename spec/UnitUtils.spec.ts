
import {UnitUtils} from '../src/UnitUtils';
import { Unit, UnitType } from '../src/api';

describe('UnitUtils', () => {
    describe('convert', () => {
        /**
         * TODO:
         *      Further organize these tests by from -> to. Example
         *      describe('From Meter')
         *          it('To Foot')
         *          it('To Kilometer)
         *          ...
         *      describe("From Meter Squared')
         *          it('To Foot Squared')
         *          ...
         */

        it('Meter -> Foot', () => {
            expect(UnitUtils.convert(10, Unit.METER, Unit.FOOT)).toBe(32.808398950131235);
        });

        it('Meter Squared -> Foot Squared', () => {
            expect(UnitUtils.convert(10, Unit.METER_SQUARED, Unit.FOOT_SQUARED)).toBe(107.63915051182416);
        });

        it('Meter/Kilometer -> Inch/Mile', () => {
            expect(UnitUtils.convert(10, Unit.METER_OVER_KILOMETER, Unit.INCH_OVER_MILE)).toBe(633.6005);
        });

        it('Feet -> Meter', () => {
            expect(UnitUtils.convert(10, Unit.FOOT, Unit.METER))
        });

        it('Mile -> Meter', () => {
            expect(UnitUtils.convert(10, Unit.MILE, Unit.METER)).toBe(16093.4);
        });

        it('Kilometer -> Meter', () => {
            expect(UnitUtils.convert(10, Unit.KILOMETER, Unit.METER)).toBe(10000);
        });

        it('Yard Squared -> Meter Squared', () => {
            expect(UnitUtils.convert(10, Unit.YARD_SQUARED, Unit.METER_SQUARED)).toBe(8.36127);
        });

        it('Foot Squared -> Meter Squared', () => {
            expect(UnitUtils.convert(10, Unit.FOOT_SQUARED, Unit.METER_SQUARED)).toBe(0.92903);
        });

        it('Should throw on unit type mismatch', () => {
            expect(() => {
                expect(UnitUtils.convert(10, Unit.METER, Unit.METER_SQUARED));
            }).toThrowError(/Cannot convert/);
        });
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
    });
});
