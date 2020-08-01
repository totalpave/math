
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

        it('Radian -> Degree', () => {
            expect(UnitUtils.convert(1, Unit.RADIAN, Unit.DEGREE)).toBe(57.29577951308232);
        });

        it('Degree -> Radian', () => {
            expect(UnitUtils.convert(57.29577951308232, Unit.DEGREE, Unit.RADIAN)).toBe(1);
        });

        it('Should throw on unit type mismatch', () => {
            expect(() => {
                expect(UnitUtils.convert(10, Unit.METER, Unit.METER_SQUARED));
            }).toThrowError(/Not supported/);
        });

        describe('No conversion', () => {
            let units: Array<Unit> = [
                Unit.METER,
                Unit.METER_SQUARED,
                Unit.FOOT,
                Unit.FOOT_SQUARED,
                Unit.MILE,
                Unit.KILOMETER,
                Unit.YARD_SQUARED,
                Unit.METER_OVER_KILOMETER,
                Unit.DEGREE,
                Unit.RADIAN
            ];

            for (let i: number = 0; i < units.length; i++) {
                let unit: Unit = units[i];
                it(`No Conversion Test #${i + 1}`, () => {
                    expect(UnitUtils.convert(1000, unit, unit)).toBe(1000);
                });
            }
        });

        describe('Unsupported conversions', () => {
            const fromError: string = 'Not supported "From" unit. Looks like we have a PR to make :)';
            const toError: string = 'Not supported "To" unit. Looks like we have a PR to make :)';

            it('Millimeter -> Meter', () => {
                expect(() => {
                    UnitUtils.convert(1000, Unit.MILLIMETER, Unit.MILE);
                }).toThrowError(fromError);
            });

            it('Mile -> Millimeter', () => {
                expect(() => {
                    UnitUtils.convert(1000, Unit.MILE, Unit.MILLIMETER);
                }).toThrowError(toError);
            });
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
