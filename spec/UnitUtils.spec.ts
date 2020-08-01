
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

        describe('From Meter', () => {

            it('To Millimeter', () => {
                expect(UnitUtils.convert(1, Unit.METER, Unit.MILLIMETER)).toBe(1000);
            });

            it('To Centimeter', () => {
                expect(UnitUtils.convert(1, Unit.METER, Unit.CENTIMETER)).toBe(100);
            });

            it('To Meter', () => {
                expect(UnitUtils.convert(1, Unit.METER, Unit.METER)).toBe(1);
            });

            it('To Kilometer', () => {
                expect(UnitUtils.convert(1, Unit.METER, Unit.KILOMETER)).toBe(0.001);
            });

            it('To Inch', () => {
                expect(UnitUtils.convert(1, Unit.METER, Unit.INCH)).toBe(39.3701);
            });

            it('To Foot', () => {
                expect(UnitUtils.convert(1, Unit.METER, Unit.FOOT)).toBe(3.280839895013123);
            });

            it('To Yard', () => {
                expect(UnitUtils.convert(1, Unit.METER, Unit.YARD)).toBe(1.09361);
            });

            it('To Mile', () => {
                expect(UnitUtils.convert(1, Unit.METER, Unit.MILE)).toBe(0.0006213727366498068);
            });

            it('To Nautical Mile', () => {
                expect(UnitUtils.convert(1, Unit.METER, Unit.NAUTICAL_MILE)).toBe(0.0005399568034557236);
            });

            let notSupported: Array<Unit> = [
                Unit.INCH_SQUARED,
                Unit.FOOT_SQUARED,
                Unit.YARD_SQUARED,
                Unit.MILE_SQUARED,
                Unit.NAUTICAL_MILE_SQUARED,
                Unit.MILLIMETER_SQUARED,
                Unit.CENTIMETER_SQUARED,
                Unit.METER_SQUARED,
                Unit.KILOMETER_SQUARED,
                Unit.METER_OVER_KILOMETER,
                Unit.INCH_OVER_MILE,
                Unit.DEGREE,
                Unit.RADIAN
            ];

            for (let i: number = 0; i < notSupported.length; i++) {
                let unit: Unit = notSupported[i];

                it('Not Supported: ' + UnitUtils.getUnitText(unit), () => {
                    expect(() => {
                        UnitUtils.convert(1, Unit.METER, unit);
                    }).toThrowError(/Not supported "To" unit./);
                });
            }
        });

        describe('From Meter / Kilometer', () => {
            it('To Meter / Kilometer', () => {
                expect(UnitUtils.convert(1, Unit.METER_OVER_KILOMETER, Unit.METER_OVER_KILOMETER)).toBe(1);
            });

            it('To Inch / Mile', () => {
                expect(UnitUtils.convert(1, Unit.METER_OVER_KILOMETER, Unit.INCH_OVER_MILE)).toBe(63.36005);
            });

            let notSupported: Array<Unit> = [
                Unit.MILLIMETER,
                Unit.CENTIMETER,
                Unit.METER,
                Unit.KILOMETER,
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
                Unit.MILLIMETER_SQUARED,
                Unit.CENTIMETER_SQUARED,
                Unit.METER_SQUARED,
                Unit.KILOMETER_SQUARED,
                Unit.DEGREE,
                Unit.RADIAN
            ];

            for (let i: number = 0; i < notSupported.length; i++) {
                let unit: Unit = notSupported[i];

                it('Not Supported: ' + UnitUtils.getUnitText(unit), () => {
                    expect(() => {
                        UnitUtils.convert(1, Unit.METER_OVER_KILOMETER, unit);
                    }).toThrowError(/Not supported "To" unit./);
                });
            }
        });

        describe('From Degree', () => {
            it('To Degree', () => {
                expect(UnitUtils.convert(1, Unit.DEGREE, Unit.DEGREE)).toBe(1);
            });

            it('To Radian', () => {
                expect(UnitUtils.convert(1, Unit.DEGREE, Unit.RADIAN)).toBe(0.017453292519943295);
            });

            let notSupported: Array<Unit> = [
                Unit.MILLIMETER,
                Unit.CENTIMETER,
                Unit.METER,
                Unit.KILOMETER,
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
                Unit.MILLIMETER_SQUARED,
                Unit.CENTIMETER_SQUARED,
                Unit.METER_SQUARED,
                Unit.KILOMETER_SQUARED,
                Unit.METER_OVER_KILOMETER,
                Unit.INCH_OVER_MILE
            ];

            for (let i: number = 0; i < notSupported.length; i++) {
                let unit: Unit = notSupported[i];

                it('Not Supported: ' + UnitUtils.getUnitText(unit), () => {
                    expect(() => {
                        UnitUtils.convert(1, Unit.DEGREE, unit);
                    }).toThrowError(/Not supported "To" unit./);
                });
            }
        });

        describe('From Radian', () => {
            it('To Degree', () => {
                expect(UnitUtils.convert(1, Unit.RADIAN, Unit.DEGREE)).toBe(57.29577951308232);
            });

            it('To Radian', () => {
                expect(UnitUtils.convert(1, Unit.RADIAN, Unit.RADIAN)).toBe(1);
            });

            it('To Millimeter', () => {
                expect(UnitUtils.convert(1, Unit.RADIAN, Unit.MILLIMETER)).toBe(6371008800);
            });

            it('To Centimeter', () => {
                expect(UnitUtils.convert(1, Unit.RADIAN, Unit.CENTIMETER)).toBe(637100880);
            });

            it('To Meter', () => {
                expect(UnitUtils.convert(1, Unit.RADIAN, Unit.METER)).toBe(6371008.8);
            });

            it('To Kilometer', () => {
                expect(UnitUtils.convert(1, Unit.RADIAN, Unit.KILOMETER)).toBe(6371.0088);
            });

            it('To Inch', () => {
                expect(UnitUtils.convert(1, Unit.RADIAN, Unit.INCH)).toBe(250827253.55688);
            });

            it('To Foot', () => {
                expect(UnitUtils.convert(1, Unit.RADIAN, Unit.FOOT)).toBe(20902259.842519682);
            });

            it('To Yard', () => {
                expect(UnitUtils.convert(1, Unit.RADIAN, Unit.YARD)).toBe(6967398.9337679995);
            });

            it('To Mile', () => {
                expect(UnitUtils.convert(1, Unit.RADIAN, Unit.MILE)).toBe(3958.7711732760013);
            });

            it('To Nautical Mile', () => {
                expect(UnitUtils.convert(1, Unit.RADIAN, Unit.NAUTICAL_MILE)).toBe(3440.069546436285);
            });

            let notSupported: Array<Unit> = [
                Unit.INCH_SQUARED,
                Unit.FOOT_SQUARED,
                Unit.YARD_SQUARED,
                Unit.MILE_SQUARED,
                Unit.NAUTICAL_MILE_SQUARED,
                Unit.MILLIMETER_SQUARED,
                Unit.CENTIMETER_SQUARED,
                Unit.METER_SQUARED,
                Unit.KILOMETER_SQUARED,
                Unit.METER_OVER_KILOMETER,
                Unit.INCH_OVER_MILE
            ];

            for (let i: number = 0; i < notSupported.length; i++) {
                let unit: Unit = notSupported[i];

                it('Not Supported: ' + UnitUtils.getUnitText(unit), () => {
                    expect(() => {
                        UnitUtils.convert(1, Unit.RADIAN, unit);
                    }).toThrowError(/Not supported "To" unit./);
                });
            }
        });

        // describe('From Yard', () => {
        //     it('To Yard', () => {
        //         expect(UnitUtils.convert(1, Unit.YARD, Unit.YARD)).toBe(1);
        //     });

        //     it('To Meter', () => {
        //         expect(UnitUtils.convert(1, Unit.YARD, Unit.METER)).toBe(null);
        //     });
        // });

        describe('From Kilometer', () => {
            it('To Kilometer', () => {
                expect(UnitUtils.convert(1, Unit.KILOMETER, Unit.KILOMETER)).toBe(1);
            });

            it('To Meter', () => {
                expect(UnitUtils.convert(1, Unit.KILOMETER, Unit.METER)).toBe(1000);
            });
        });

        describe('From Meter\u00B2', () => {
            it('To Meter\u00B2', () => {
                expect(UnitUtils.convert(1, Unit.METER_SQUARED, Unit.METER_SQUARED)).toBe(1);
            });

            it('To Foot\u00B2', () => {
                expect(UnitUtils.convert(1, Unit.METER_SQUARED, Unit.FOOT_SQUARED)).toBe(10.763915051182416);
            });
        });

        describe('From Foot', () => {
            it('To Foot', () => {
                expect(UnitUtils.convert(1, Unit.FOOT, Unit.FOOT)).toBe(1);
            });

            it('To Meter', () => {
                expect(UnitUtils.convert(1, Unit.FOOT, Unit.METER)).toBe(0.3048);
            });
        });

        describe('From Mile', () => {
            it('To Mile', () => {
                expect(UnitUtils.convert(1, Unit.MILE, Unit.MILE)).toBe(1);
            });

            it('To Meter', () => {
                expect(UnitUtils.convert(1, Unit.MILE, Unit.METER)).toBe(1609.34);
            });
        });

        describe('From Yard\u00B2', () => {
            it('To Yard\u00B2', () => {
                expect(UnitUtils.convert(1, Unit.YARD_SQUARED, Unit.YARD_SQUARED)).toBe(1);
            });

            it('To Meter\u00B2', () => {
                expect(UnitUtils.convert(1, Unit.YARD_SQUARED, Unit.METER_SQUARED)).toBe(0.836127);
            });
        });

        describe('From Foot\u00B2', () => {
            it('To Foot\u00B2', () => {
                expect(UnitUtils.convert(1, Unit.FOOT_SQUARED, Unit.FOOT_SQUARED)).toBe(1);
            });

            it('To Meter\u00B2', () => {
                expect(UnitUtils.convert(1, Unit.FOOT_SQUARED, Unit.METER_SQUARED)).toBe(0.092903);
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
