
import {Unit, AREA, LENGTH_OVER_LENGTH, LINEAR, ANGLE} from '../src/Unit';
import {UnitConverter} from '../src/UnitConverter';
import {UnitUtils} from '../src/UnitUtils';
import Math from '../src/Math';

describe('UnitConverter', () => {
    describe('precision', () => {
        it('should round when unit was not converted', () => {
            expect(UnitConverter.convert(1.25, Unit.MILE, Unit.MILE, 1)).toBe(1.3);
        });

        it('should round to two decimal places', () => {
            expect(UnitConverter.convert(1, Unit.MILE, Unit.METER, 2)).toBe(1609.34);
        });
    });
    describe('convert', () => {
        describe('From Millimeter', () => {
            it('To Millimeter', () => {
                expect(UnitConverter.convert(1, Unit.MILLIMETER, Unit.MILLIMETER)).toBe(1);
            });

            it('To Centimeter', () => {
                expect(UnitConverter.convert(1, Unit.MILLIMETER, Unit.CENTIMETER)).toBe(0.1);
            });

            it('To Meter', () => {
                expect(UnitConverter.convert(1, Unit.MILLIMETER, Unit.METER)).toBe(0.001);
            });

            it('To Kilometer', () => {
                expect(UnitConverter.convert(1, Unit.MILLIMETER, Unit.KILOMETER)).toBe(1.0e-6);
            });

            it('To Inch', () => {
                expect(UnitConverter.convert(1, Unit.MILLIMETER, Unit.INCH)).toBe(0.0393700787);
            });

            it('To Foot', () => {
                expect(UnitConverter.convert(1, Unit.MILLIMETER, Unit.FOOT)).toBe(0.0032808398);
            });

            it('To Yard', () => {
                expect(UnitConverter.convert(1, Unit.MILLIMETER, Unit.YARD)).toBe(0.0010936132);
            });

            it('To Mile', () => {
                expect(UnitConverter.convert(1, Unit.MILLIMETER, Unit.MILE)).toBe(6.2137119223733e-7);
            });

            it('To Nautical Mile', () => {
                expect(UnitConverter.convert(1, Unit.MILLIMETER, Unit.NAUTICAL_MILE)).toBe(5.3995680345572e-7);
            });

            let unitList: Array<Unit> = UnitUtils.getUnitList();
            for (let i: number = 0; i < unitList.length; i++) {
                let unit: Unit = unitList[i];

                let notSupported: Array<string> = AREA.concat(LENGTH_OVER_LENGTH).concat(ANGLE);
                if (notSupported.indexOf(unit) > -1) {
                    it('Not Supported: ' + UnitUtils.getUnitText(unit), () => {
                        expect(() => {
                            UnitConverter.convert(1, Unit.MILLIMETER, unit);
                        }).toThrowError(/Not supported "To" unit./);
                    });
                }
            }
        });

        describe('From Centimeter', () => {
            it('To Millimeter', () => {
                expect(UnitConverter.convert(1, Unit.CENTIMETER, Unit.MILLIMETER)).toBe(10);
            });

            it('To Centimeter', () => {
                expect(UnitConverter.convert(1, Unit.CENTIMETER, Unit.CENTIMETER)).toBe(1);
            });

            it('To Meter', () => {
                expect(UnitConverter.convert(1, Unit.CENTIMETER, Unit.METER)).toBe(0.01);
            });

            it('To Kilometer', () => {
                expect(UnitConverter.convert(1, Unit.CENTIMETER, Unit.KILOMETER)).toBe(1.0e-5);
            });

            it('To Inch', () => {
                expect(UnitConverter.convert(1, Unit.CENTIMETER, Unit.INCH)).toBe(0.3937007874);
            });

            it('To Foot', () => {
                expect(UnitConverter.convert(1, Unit.CENTIMETER, Unit.FOOT)).toBe(0.0328083989);
            });

            it('To Yard', () => {
                expect(UnitConverter.convert(1, Unit.CENTIMETER, Unit.YARD)).toBe(0.0109361329);
            });

            it('To Mile', () => {
                expect(UnitConverter.convert(1, Unit.CENTIMETER, Unit.MILE)).toBe(6.2137119223733e-6);
            });

            it('To Nautical Mile', () => {
                expect(UnitConverter.convert(1, Unit.CENTIMETER, Unit.NAUTICAL_MILE)).toBe(5.3995680345572e-6);
            });

            let unitList: Array<Unit> = UnitUtils.getUnitList();
            for (let i: number = 0; i < unitList.length; i++) {
                let unit: Unit = unitList[i];
                
                let notSupported: Array<string> = AREA.concat(LENGTH_OVER_LENGTH).concat(ANGLE);
                if (notSupported.indexOf(unit) > -1) {
                    it('Not Supported: ' + UnitUtils.getUnitText(unit), () => {
                        expect(() => {
                            UnitConverter.convert(1, Unit.CENTIMETER, unit);
                        }).toThrowError(/Not supported "To" unit./);
                    });
                }
            }
        });

        describe('From Meter', () => {
            it('To Millimeter', () => {
                expect(UnitConverter.convert(1, Unit.METER, Unit.MILLIMETER)).toBe(1000);
            });

            it('To Centimeter', () => {
                expect(UnitConverter.convert(1, Unit.METER, Unit.CENTIMETER)).toBe(100);
            });

            it('To Meter', () => {
                expect(UnitConverter.convert(1, Unit.METER, Unit.METER)).toBe(1);
            });

            it('To Kilometer', () => {
                expect(UnitConverter.convert(1, Unit.METER, Unit.KILOMETER)).toBe(0.001);
            });

            it('To Inch', () => {
                expect(UnitConverter.convert(1, Unit.METER, Unit.INCH)).toBe(39.3700787401);
            });

            it('To Foot', () => {
                expect(UnitConverter.convert(1, Unit.METER, Unit.FOOT)).toBe(3.280839895);
            });

            it('To Yard', () => {
                expect(UnitConverter.convert(1, Unit.METER, Unit.YARD)).toBe(1.0936132983);
            });

            it('To Mile', () => {
                expect(UnitConverter.convert(1, Unit.METER, Unit.MILE)).toBe(0.0006213711);
            });

            it('To Nautical Mile', () => {
                expect(UnitConverter.convert(1, Unit.METER, Unit.NAUTICAL_MILE)).toBe(0.0005399568034557236);
            });

            let unitList: Array<Unit> = UnitUtils.getUnitList();
            for (let i: number = 0; i < unitList.length; i++) {
                let unit: Unit = unitList[i];

                let notSupported: Array<string> = AREA.concat(LENGTH_OVER_LENGTH).concat(ANGLE);
                if (notSupported.indexOf(unit) > -1) {
                    it('Not Supported: ' + UnitUtils.getUnitText(unit), () => {
                        expect(() => {
                            UnitConverter.convert(1, Unit.METER, unit);
                        }).toThrowError(/Not supported "To" unit./);
                    });
                }
            }
        });

        describe('From Kilometer', () => {
            it('To Millimeter', () => {
                expect(UnitConverter.convert(1, Unit.KILOMETER, Unit.MILLIMETER)).toBe(1000000);
            });

            it('To Centimeter', () => {
                expect(UnitConverter.convert(1, Unit.KILOMETER, Unit.CENTIMETER)).toBe(100000);
            });

            it('To Meter', () => {
                expect(UnitConverter.convert(1, Unit.KILOMETER, Unit.METER)).toBe(1000);
            });

            it('To Kilometer', () => {
                expect(UnitConverter.convert(1, Unit.KILOMETER, Unit.KILOMETER)).toBe(1);
            });

            it('To Inch', () => {
                expect(UnitConverter.convert(1, Unit.KILOMETER, Unit.INCH)).toBe(39370.078740157);
            });

            it('To Foot', () => {
                expect(UnitConverter.convert(1, Unit.KILOMETER, Unit.FOOT)).toBe(3280.8398950131);
            });

            it('To Yard', () => {
                expect(UnitConverter.convert(1, Unit.KILOMETER, Unit.YARD)).toBe(1093.6132983377);
            });

            it('To Mile', () => {
                expect(UnitConverter.convert(1, Unit.KILOMETER, Unit.MILE)).toBe(0.6213711922);
            });

            it('To Nautical Mile', () => {
                expect(UnitConverter.convert(1, Unit.KILOMETER, Unit.NAUTICAL_MILE)).toBe(0.5399568034);
            });

            let unitList: Array<Unit> = UnitUtils.getUnitList();
            for (let i: number = 0; i < unitList.length; i++) {
                let unit: Unit = unitList[i];

                let notSupported: Array<string> = AREA.concat(LENGTH_OVER_LENGTH).concat(ANGLE);
                if (notSupported.indexOf(unit) > -1) {
                    it('Not Supported: ' + UnitUtils.getUnitText(unit), () => {
                        expect(() => {
                            UnitConverter.convert(1, Unit.KILOMETER, unit);
                        }).toThrowError(/Not supported "To" unit./);
                    });
                }
            }
        });

        describe('From Millimeter\u00B2', () => {
            it('To Millimeter\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.MILLIMETER_SQUARED, Unit.MILLIMETER_SQUARED)).toBe(1);
            });

            it('To Centimeter\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.MILLIMETER_SQUARED, Unit.CENTIMETER_SQUARED)).toBe(0.01);
            });

            it('To Meter\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.MILLIMETER_SQUARED, Unit.METER_SQUARED)).toBe(1.0e-6);
            });

            it('To Kilometer\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.MILLIMETER_SQUARED, Unit.KILOMETER_SQUARED)).toBe(1.0e-12);
            });

            it('To Inch\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.MILLIMETER_SQUARED, Unit.INCH_SQUARED)).toBe(0.0015500031);
            });

            it('To Foot\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.MILLIMETER_SQUARED, Unit.FOOT_SQUARED)).toBe(1.076391e-5);
            });

            it('To Yard\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.MILLIMETER_SQUARED, Unit.YARD_SQUARED)).toBe(1.196e-6);
            });

            it('To Mile\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.MILLIMETER_SQUARED, Unit.MILE_SQUARED)).toBe(3.8610215854245e-13);
            });

            it('To Nautical Mile\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.MILLIMETER_SQUARED, Unit.NAUTICAL_MILE_SQUARED)).toBe(2.91181e-13);
            });

            let unitList: Array<Unit> = UnitUtils.getUnitList();
            for (let i: number = 0; i < unitList.length; i++) {
                let unit: Unit = unitList[i];

                let notSupported: Array<string> = LINEAR.concat(LENGTH_OVER_LENGTH).concat(ANGLE);
                if (notSupported.indexOf(unit) > -1) {
                    it('Not Supported: ' + UnitUtils.getUnitText(unit), () => {
                        expect(() => {
                            UnitConverter.convert(1, Unit.MILLIMETER_SQUARED, unit);
                        }).toThrowError(/Not supported "To" unit./);
                    });
                }
            }
        });

        describe('From Centimeter\u00B2', () => {
            it('To Millimeter\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.CENTIMETER_SQUARED, Unit.MILLIMETER_SQUARED)).toBe(100);
            });

            it('To Centimeter\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.CENTIMETER_SQUARED, Unit.CENTIMETER_SQUARED)).toBe(1);
            });

            it('To Meter\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.CENTIMETER_SQUARED, Unit.METER_SQUARED)).toBe(0.0001);
            });

            it('To Kilometer\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.CENTIMETER_SQUARED, Unit.KILOMETER_SQUARED)).toBe(1.0e-10);
            });

            it('To Inch\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.CENTIMETER_SQUARED, Unit.INCH_SQUARED)).toBe(0.15500031);
            });

            it('To Foot\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.CENTIMETER_SQUARED, Unit.FOOT_SQUARED)).toBe(0.001076391);
            });

            it('To Yard\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.CENTIMETER_SQUARED, Unit.YARD_SQUARED)).toBe(0.0001196);
            });

            it('To Mile\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.CENTIMETER_SQUARED, Unit.MILE_SQUARED)).toBe(3.8610215854245e-11);
            });

            it('To Nautical Mile\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.CENTIMETER_SQUARED, Unit.NAUTICAL_MILE_SQUARED)).toBe(2.91181e-11);
            });

            let unitList: Array<Unit> = UnitUtils.getUnitList();
            for (let i: number = 0; i < unitList.length; i++) {
                let unit: Unit = unitList[i];

                let notSupported: Array<string> = LINEAR.concat(LENGTH_OVER_LENGTH).concat(ANGLE);
                if (notSupported.indexOf(unit) > -1) {
                    it('Not Supported: ' + UnitUtils.getUnitText(unit), () => {
                        expect(() => {
                            UnitConverter.convert(1, Unit.CENTIMETER_SQUARED, unit);
                        }).toThrowError(/Not supported "To" unit./);
                    });
                }
            }
        });

        describe('From Meter\u00B2', () => {
            it('To Millimeter\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.METER_SQUARED, Unit.MILLIMETER_SQUARED)).toBe(1000000);
            });

            it('To Centimeter\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.METER_SQUARED, Unit.CENTIMETER_SQUARED)).toBe(10000);
            });

            it('To Meter\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.METER_SQUARED, Unit.METER_SQUARED)).toBe(1);
            });

            it('To Kilometer\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.METER_SQUARED, Unit.KILOMETER_SQUARED)).toBe(1.0e-6);
            });

            it('To Inch\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.METER_SQUARED, Unit.INCH_SQUARED)).toBe(1550.0031);
            });

            it('To Foot\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.METER_SQUARED, Unit.FOOT_SQUARED)).toBe(10.76391);
            });

            it('To Yard\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.METER_SQUARED, Unit.YARD_SQUARED)).toBe(1.196);
            });

            it('To Mile\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.METER_SQUARED, Unit.MILE_SQUARED)).toBe(3.8610215854245e-7);
            });

            it('To Nautical Mile\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.METER_SQUARED, Unit.NAUTICAL_MILE_SQUARED)).toBe(2.91181e-7);
            });

            let unitList: Array<Unit> = UnitUtils.getUnitList();
            for (let i: number = 0; i < unitList.length; i++) {
                let unit: Unit = unitList[i];

                let notSupported: Array<string> = LINEAR.concat(LENGTH_OVER_LENGTH).concat(ANGLE);
                if (notSupported.indexOf(unit) > -1) {
                    it('Not Supported: ' + UnitUtils.getUnitText(unit), () => {
                        expect(() => {
                            UnitConverter.convert(1, Unit.METER_SQUARED, unit);
                        }).toThrowError(/Not supported "To" unit./);
                    });
                }
            }
        });

        describe('From Kilometer\u00B2', () => {
            it('To Millimeter\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.KILOMETER_SQUARED, Unit.MILLIMETER_SQUARED)).toBe(1000000000000);
            });

            it('To Centimeter\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.KILOMETER_SQUARED, Unit.CENTIMETER_SQUARED)).toBe(10000000000);
            });

            it('To Meter\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.KILOMETER_SQUARED, Unit.METER_SQUARED)).toBe(1000000);
            });

            it('To Kilometer\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.KILOMETER_SQUARED, Unit.KILOMETER_SQUARED)).toBe(1);
            });

            it('To Inch\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.KILOMETER_SQUARED, Unit.INCH_SQUARED)).toBe(1550003100);
            });

            it('To Foot\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.KILOMETER_SQUARED, Unit.FOOT_SQUARED)).toBe(10763910);
            });

            it('To Yard\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.KILOMETER_SQUARED, Unit.YARD_SQUARED)).toBe(1196000);
            });

            it('To Mile\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.KILOMETER_SQUARED, Unit.MILE_SQUARED)).toBe(0.3861021585);
            });

            it('To Nautical Mile\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.KILOMETER_SQUARED, Unit.NAUTICAL_MILE_SQUARED)).toBe(0.291181);
            });

            let unitList: Array<Unit> = UnitUtils.getUnitList();
            for (let i: number = 0; i < unitList.length; i++) {
                let unit: Unit = unitList[i];

                let notSupported: Array<string> = LINEAR.concat(LENGTH_OVER_LENGTH).concat(ANGLE);
                if (notSupported.indexOf(unit) > -1) {
                    it('Not Supported: ' + UnitUtils.getUnitText(unit), () => {
                        expect(() => {
                            UnitConverter.convert(1, Unit.KILOMETER_SQUARED, unit);
                        }).toThrowError(/Not supported "To" unit./);
                    });
                }
            }
        });

        describe('From Inch', () => {
            it('To Millimeter', () => {
                expect(UnitConverter.convert(1, Unit.INCH, Unit.MILLIMETER)).toBe(25.4);
            });

            it('To Centimeter', () => {
                expect(UnitConverter.convert(1, Unit.INCH, Unit.CENTIMETER)).toBe(2.54);
            });

            it('To Meter', () => {
                expect(UnitConverter.convert(1, Unit.INCH, Unit.METER)).toBe(0.0254);
            });

            it('To Kilometer', () => {
                expect(UnitConverter.convert(1, Unit.INCH, Unit.KILOMETER)).toBe(2.54e-5);
            });

            it('To Inch', () => {
                expect(UnitConverter.convert(1, Unit.INCH, Unit.INCH)).toBe(1);
            });

            it('To Foot', () => {
                expect(UnitConverter.convert(1, Unit.INCH, Unit.FOOT)).toBe(0.0833333333);
            });

            it('To Yard', () => {
                expect(UnitConverter.convert(1, Unit.INCH, Unit.YARD)).toBe(0.0277777777);
            });

            it('To Mile', () => {
                expect(UnitConverter.convert(1, Unit.INCH, Unit.MILE)).toBe(1.5782828282828e-5);
            });

            it('To Nautical Mile', () => {
                expect(UnitConverter.convert(1, Unit.INCH, Unit.NAUTICAL_MILE)).toBe(1.3714902807775e-5);
            });

            let unitList: Array<Unit> = UnitUtils.getUnitList();
            for (let i: number = 0; i < unitList.length; i++) {
                let unit: Unit = unitList[i];

                let notSupported: Array<string> = AREA.concat(LENGTH_OVER_LENGTH).concat(ANGLE);
                if (notSupported.indexOf(unit) > -1) {
                    it('Not Supported: ' + UnitUtils.getUnitText(unit), () => {
                        expect(() => {
                            UnitConverter.convert(1, Unit.INCH, unit);
                        }).toThrowError(/Not supported "To" unit./);
                    });
                }
            }
        });

        describe('From Foot', () => {
            it('To Millimeter', () => {
                expect(UnitConverter.convert(1, Unit.FOOT, Unit.MILLIMETER)).toBe(304.8);
            });

            it('To Centimeter', () => {
                expect(UnitConverter.convert(1, Unit.FOOT, Unit.CENTIMETER)).toBe(30.48);
            });

            it('To Meter', () => {
                expect(UnitConverter.convert(1, Unit.FOOT, Unit.METER)).toBe(0.3048);
            });

            it('To Kilometer', () => {
                expect(UnitConverter.convert(1, Unit.FOOT, Unit.KILOMETER)).toBe(0.0003048);
            });

            it('To Inch', () => {
                expect(UnitConverter.convert(1, Unit.FOOT, Unit.INCH)).toBe(12);
            });

            it('To Foot', () => {
                expect(UnitConverter.convert(1, Unit.FOOT, Unit.FOOT)).toBe(1);
            });

            it('To Yard', () => {
                expect(UnitConverter.convert(1, Unit.FOOT, Unit.YARD)).toBe(0.3333333333333333);
            });

            it('To Mile', () => {
                expect(UnitConverter.convert(1, Unit.FOOT, Unit.MILE)).toBe(0.0001893939);
            });

            it('To Nautical Mile', () => {
                expect(UnitConverter.convert(1, Unit.FOOT, Unit.NAUTICAL_MILE)).toBe(0.0001645788);
            });

            let unitList: Array<Unit> = UnitUtils.getUnitList();
            for (let i: number = 0; i < unitList.length; i++) {
                let unit: Unit = unitList[i];

                let notSupported: Array<string> = AREA.concat(LENGTH_OVER_LENGTH).concat(ANGLE);
                if (notSupported.indexOf(unit) > -1) {
                    it('Not Supported: ' + UnitUtils.getUnitText(unit), () => {
                        expect(() => {
                            UnitConverter.convert(1, Unit.FOOT, unit);
                        }).toThrowError(/Not supported "To" unit./);
                    });
                }
            }
        });

        describe('From Yard', () => {
            it('To Millimeter', () => {
                expect(UnitConverter.convert(1, Unit.YARD, Unit.MILLIMETER)).toBe(914.4);
            });

            it('To Centimeter', () => {
                expect(UnitConverter.convert(1, Unit.YARD, Unit.CENTIMETER)).toBe(91.44);
            });

            it('To Meter', () => {
                expect(UnitConverter.convert(1, Unit.YARD, Unit.METER)).toBe(0.9144);
            });

            it('To Kilometer', () => {
                expect(UnitConverter.convert(1, Unit.YARD, Unit.KILOMETER)).toBe(0.0009144);
            });

            it('To Inch', () => {
                expect(UnitConverter.convert(1, Unit.YARD, Unit.INCH)).toBe(36);
            });

            it('To Foot', () => {
                expect(UnitConverter.convert(1, Unit.YARD, Unit.FOOT)).toBe(3);
            });

            it('To Yard', () => {
                expect(UnitConverter.convert(1, Unit.YARD, Unit.YARD)).toBe(1);
            });

            it('To Mile', () => {
                expect(UnitConverter.convert(1, Unit.YARD, Unit.MILE)).toBe(0.0005681818);
            });

            it('To Nautical Mile', () => {
                expect(UnitConverter.convert(1, Unit.YARD, Unit.NAUTICAL_MILE)).toBe(0.0004937365);
            });

            let unitList: Array<Unit> = UnitUtils.getUnitList();
            for (let i: number = 0; i < unitList.length; i++) {
                let unit: Unit = unitList[i];

                let notSupported: Array<string> = AREA.concat(LENGTH_OVER_LENGTH).concat(ANGLE);
                if (notSupported.indexOf(unit) > -1) {
                    it('Not Supported: ' + UnitUtils.getUnitText(unit), () => {
                        expect(() => {
                            UnitConverter.convert(1, Unit.YARD, unit);
                        }).toThrowError(/Not supported "To" unit./);
                    });
                }
            }
        });

        describe('From Mile', () => {
            it('To Millimeter', () => {
                expect(UnitConverter.convert(1, Unit.MILE, Unit.MILLIMETER)).toBe(1609344);
            });

            it('To Centimeter', () => {
                expect(UnitConverter.convert(1, Unit.MILE, Unit.CENTIMETER)).toBe(160934.4);
            });

            it('To Meter', () => {
                expect(UnitConverter.convert(1, Unit.MILE, Unit.METER)).toBe(1609.344);
            });

            it('To Kilometer', () => {
                expect(UnitConverter.convert(1, Unit.MILE, Unit.KILOMETER)).toBe(1.609344);
            });

            it('To Inch', () => {
                expect(UnitConverter.convert(1, Unit.MILE, Unit.INCH)).toBe(63360);
            });

            it('To Foot', () => {
                expect(UnitConverter.convert(1, Unit.MILE, Unit.FOOT)).toBe(5280);
            });

            it('To Yard', () => {
                expect(UnitConverter.convert(1, Unit.MILE, Unit.YARD)).toBe(1760);
            });

            it('To Mile', () => {
                expect(UnitConverter.convert(1, Unit.MILE, Unit.MILE)).toBe(1);
            });

            it('To Nautical Mile', () => {
                expect(UnitConverter.convert(1, Unit.MILE, Unit.NAUTICAL_MILE)).toBe(0.8689762419);
            });

            let unitList: Array<Unit> = UnitUtils.getUnitList();
            for (let i: number = 0; i < unitList.length; i++) {
                let unit: Unit = unitList[i];

                let notSupported: Array<string> = AREA.concat(LENGTH_OVER_LENGTH).concat(ANGLE);
                if (notSupported.indexOf(unit) > -1) {
                    it('Not Supported: ' + UnitUtils.getUnitText(unit), () => {
                        expect(() => {
                            UnitConverter.convert(1, Unit.MILE, unit);
                        }).toThrowError(/Not supported "To" unit./);
                    });
                }
            }
        });

        describe('From Nautical Mile', () => {
            it('To Millimeter', () => {
                expect(UnitConverter.convert(1, Unit.NAUTICAL_MILE, Unit.MILLIMETER)).toBe(1.852e6);
            });

            it('To Centimeter', () => {
                expect(UnitConverter.convert(1, Unit.NAUTICAL_MILE, Unit.CENTIMETER)).toBe(185200);
            });

            it('To Meter', () => {
                expect(UnitConverter.convert(1, Unit.NAUTICAL_MILE, Unit.METER)).toBe(1852);
            });

            it('To Kilometer', () => {
                expect(UnitConverter.convert(1, Unit.NAUTICAL_MILE, Unit.KILOMETER)).toBe(1.852);
            });

            it('To Inch', () => {
                expect(UnitConverter.convert(1, Unit.NAUTICAL_MILE, Unit.INCH)).toBe(72913.392);
            });

            it('To Foot', () => {
                expect(UnitConverter.convert(1, Unit.NAUTICAL_MILE, Unit.FOOT)).toBe(6076.1155);
            });

            it('To Yard', () => {
                expect(UnitConverter.convert(1, Unit.NAUTICAL_MILE, Unit.YARD)).toBe(2025.372);
            });

            it('To Mile', () => {
                expect(UnitConverter.convert(1, Unit.NAUTICAL_MILE, Unit.MILE)).toBe(1.15077945);
            });

            it('To Nautical Mile', () => {
                expect(UnitConverter.convert(1, Unit.NAUTICAL_MILE, Unit.NAUTICAL_MILE)).toBe(1);
            });

            let unitList: Array<Unit> = UnitUtils.getUnitList();
            for (let i: number = 0; i < unitList.length; i++) {
                let unit: Unit = unitList[i];

                let notSupported: Array<string> = AREA.concat(LENGTH_OVER_LENGTH).concat(ANGLE);
                if (notSupported.indexOf(unit) > -1) {
                    it('Not Supported: ' + UnitUtils.getUnitText(unit), () => {
                        expect(() => {
                            UnitConverter.convert(1, Unit.NAUTICAL_MILE, unit);
                        }).toThrowError(/Not supported "To" unit./);
                    });
                }
            }
        });

        describe('From Inch\u00B2', () => {
            it('To Millimeter\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.INCH_SQUARED, Unit.MILLIMETER_SQUARED)).toBe(645.16000000258);
            });

            it('To Centimeter\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.INCH_SQUARED, Unit.CENTIMETER_SQUARED)).toBe(6.4516000000258);
            });

            it('To Meter\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.INCH_SQUARED, Unit.METER_SQUARED)).toBe(0.00064516000000258);
            });

            it('To Kilometer\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.INCH_SQUARED, Unit.KILOMETER_SQUARED)).toBe(6.4516000000258e-10);
            });

            it('To Inch\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.INCH_SQUARED, Unit.INCH_SQUARED)).toBe(1);
            });

            it('To Foot\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.INCH_SQUARED, Unit.FOOT_SQUARED)).toBe(0.0069444441756278);
            });

            it('To Yard\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.INCH_SQUARED, Unit.YARD_SQUARED)).toBe(0.00077161136000309);
            });

            it('To Mile\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.INCH_SQUARED, Unit.MILE_SQUARED)).toBe(2.4909766860624e-10);
            });

            it('To Nautical Mile\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.INCH_SQUARED, Unit.NAUTICAL_MILE_SQUARED)).toBe(1.8785833396075e-10);
            });

            let unitList: Array<Unit> = UnitUtils.getUnitList();
            for (let i: number = 0; i < unitList.length; i++) {
                let unit: Unit = unitList[i];

                let notSupported: Array<string> = LINEAR.concat(LENGTH_OVER_LENGTH).concat(ANGLE);
                if (notSupported.indexOf(unit) > -1) {
                    it('Not Supported: ' + UnitUtils.getUnitText(unit), () => {
                        expect(() => {
                            UnitConverter.convert(1, Unit.INCH_SQUARED, unit);
                        }).toThrowError(/Not supported "To" unit./);
                    });
                }
            }
        });

        describe('From Foot\u00B2', () => {
            it('To Millimeter\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.FOOT_SQUARED, Unit.MILLIMETER_SQUARED)).toBe(92903.043596611);
            });

            it('To Centimeter\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.FOOT_SQUARED, Unit.CENTIMETER_SQUARED)).toBe(929.03043596611);
            });

            it('To Meter\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.FOOT_SQUARED, Unit.METER_SQUARED)).toBe(0.092903043596611);
            });

            it('To Kilometer\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.FOOT_SQUARED, Unit.KILOMETER_SQUARED)).toBe(9.2903043596611e-8);
            });

            it('To Inch\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.FOOT_SQUARED, Unit.INCH_SQUARED)).toBe(144.00000557418);
            });

            it('To Foot\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.FOOT_SQUARED, Unit.FOOT_SQUARED)).toBe(1);
            });

            it('To Yard\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.FOOT_SQUARED, Unit.YARD_SQUARED)).toBe(0.11111204014155);
            });

            it('To Mile\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.FOOT_SQUARED, Unit.MILE_SQUARED)).toBe(3.5870065667815e-8);
            });

            it('To Nautical Mile\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.FOOT_SQUARED, Unit.NAUTICAL_MILE_SQUARED)).toBe(2.7051601137505e-8);
            });

            let unitList: Array<Unit> = UnitUtils.getUnitList();
            for (let i: number = 0; i < unitList.length; i++) {
                let unit: Unit = unitList[i];

                let notSupported: Array<string> = LINEAR.concat(LENGTH_OVER_LENGTH).concat(ANGLE);
                if (notSupported.indexOf(unit) > -1) {
                    it('Not Supported: ' + UnitUtils.getUnitText(unit), () => {
                        expect(() => {
                            UnitConverter.convert(1, Unit.FOOT_SQUARED, unit);
                        }).toThrowError(/Not supported "To" unit./);
                    });
                }
            }
        });

        describe('From Yard\u00B2', () => {
            it('To Millimeter\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.YARD_SQUARED, Unit.MILLIMETER_SQUARED)).toBe(836120.40133779);
            });

            it('To Centimeter\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.YARD_SQUARED, Unit.CENTIMETER_SQUARED)).toBe(8361.2040133779);
            });

            it('To Meter\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.YARD_SQUARED, Unit.METER_SQUARED)).toBe(0.83612040133779);
            });

            it('To Kilometer\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.YARD_SQUARED, Unit.KILOMETER_SQUARED)).toBe(8.3612040133779e-7);
            });

            it('To Inch\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.YARD_SQUARED, Unit.INCH_SQUARED)).toBe(1295.9892140468);
            });

            it('To Foot\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.YARD_SQUARED, Unit.FOOT_SQUARED)).toBe(8.9999247491639);
            });

            it('To Yard\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.YARD_SQUARED, Unit.YARD_SQUARED)).toBe(1);
            });

            it('To Mile\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.YARD_SQUARED, Unit.MILE_SQUARED)).toBe(3.228278917579e-7);
            });

            it('To Nautical Mile\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.YARD_SQUARED, Unit.NAUTICAL_MILE_SQUARED)).toBe(2.4346237458194e-7);
            });

            let unitList: Array<Unit> = UnitUtils.getUnitList();
            for (let i: number = 0; i < unitList.length; i++) {
                let unit: Unit = unitList[i];

                let notSupported: Array<string> = LINEAR.concat(LENGTH_OVER_LENGTH).concat(ANGLE);
                if (notSupported.indexOf(unit) > -1) {
                    it('Not Supported: ' + UnitUtils.getUnitText(unit), () => {
                        expect(() => {
                            UnitConverter.convert(1, Unit.YARD_SQUARED, unit);
                        }).toThrowError(/Not supported "To" unit./);
                    });
                }
            }
        });

        describe('From Mile\u00B2', () => {
            it('To Millimeter\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.MILE_SQUARED, Unit.MILLIMETER_SQUARED)).toBe(2589988110336);
            });

            it('To Centimeter\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.MILE_SQUARED, Unit.CENTIMETER_SQUARED)).toBe(25899881103.36);
            });

            it('To Meter\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.MILE_SQUARED, Unit.METER_SQUARED)).toBe(2589988.110336);
            });

            it('To Kilometer\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.MILE_SQUARED, Unit.KILOMETER_SQUARED)).toBe(2.589988110336);
            });

            it('To Inch\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.MILE_SQUARED, Unit.INCH_SQUARED)).toBe(4014489599.9839);
            });

            it('To Foot\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.MILE_SQUARED, Unit.FOOT_SQUARED)).toBe(27878398.920726);
            });

            it('To Yard\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.MILE_SQUARED, Unit.YARD_SQUARED)).toBe(3097625.7799618);
            });

            it('To Mile\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.MILE_SQUARED, Unit.MILE_SQUARED)).toBe(1);
            });

            it('To Nautical Mile\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.MILE_SQUARED, Unit.NAUTICAL_MILE_SQUARED)).toBe(0.75415532795574);
            });

            let unitList: Array<Unit> = UnitUtils.getUnitList();
            for (let i: number = 0; i < unitList.length; i++) {
                let unit: Unit = unitList[i];

                let notSupported: Array<string> = LINEAR.concat(LENGTH_OVER_LENGTH).concat(ANGLE);
                if (notSupported.indexOf(unit) > -1) {
                    it('Not Supported: ' + UnitUtils.getUnitText(unit), () => {
                        expect(() => {
                            UnitConverter.convert(1, Unit.MILE_SQUARED, unit);
                        }).toThrowError(/Not supported "To" unit./);
                    });
                }
            }
        });

        describe('From Nautical Mile\u00B2', () => {
            it('To Millimeter\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.NAUTICAL_MILE_SQUARED, Unit.MILLIMETER_SQUARED)).toBe(3434290012054.4);
            });

            it('To Centimeter\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.NAUTICAL_MILE_SQUARED, Unit.CENTIMETER_SQUARED)).toBe(34342900120.544);
            });

            it('To Meter\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.NAUTICAL_MILE_SQUARED, Unit.METER_SQUARED)).toBe(3434290.0120544);
            });

            it('To Kilometer\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.NAUTICAL_MILE_SQUARED, Unit.KILOMETER_SQUARED)).toBe(3.4342900120544);
            });

            it('To Inch\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.NAUTICAL_MILE_SQUARED, Unit.INCH_SQUARED)).toBe(5323160164.9833);
            });

            it('To Foot\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.NAUTICAL_MILE_SQUARED, Unit.FOOT_SQUARED)).toBe(36966388.603652);
            });

            it('To Yard\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.NAUTICAL_MILE_SQUARED, Unit.YARD_SQUARED)).toBe(4107410.854417);
            });

            it('To Mile\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.NAUTICAL_MILE_SQUARED, Unit.MILE_SQUARED)).toBe(1.325986786715);
            });

            it('To Nautical Mile\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.NAUTICAL_MILE_SQUARED, Unit.NAUTICAL_MILE_SQUARED)).toBe(1);
            });

            let unitList: Array<Unit> = UnitUtils.getUnitList();
            for (let i: number = 0; i < unitList.length; i++) {
                let unit: Unit = unitList[i];

                let notSupported: Array<string> = LINEAR.concat(LENGTH_OVER_LENGTH).concat(ANGLE);
                if (notSupported.indexOf(unit) > -1) {
                    it('Not Supported: ' + UnitUtils.getUnitText(unit), () => {
                        expect(() => {
                            UnitConverter.convert(1, Unit.NAUTICAL_MILE_SQUARED, unit);
                        }).toThrowError(/Not supported "To" unit./);
                    });
                }
            }
        });

        describe('From Meter / Kilometer', () => {
            it('To Meter / Kilometer', () => {
                expect(UnitConverter.convert(1, Unit.METER_OVER_KILOMETER, Unit.METER_OVER_KILOMETER)).toBe(1);
            });

            it('To Inch / Mile', () => {
                expect(UnitConverter.convert(1, Unit.METER_OVER_KILOMETER, Unit.INCH_OVER_MILE)).toBe(63.36005);
            });

            let unitList: Array<Unit> = UnitUtils.getUnitList();
            for (let i: number = 0; i < unitList.length; i++) {
                let unit: Unit = unitList[i];

                let notSupported: Array<string> = AREA.concat(LINEAR).concat(ANGLE);
                if (notSupported.indexOf(unit) > -1) {
                    it('Not Supported: ' + UnitUtils.getUnitText(unit), () => {
                        expect(() => {
                            UnitConverter.convert(1, Unit.METER_OVER_KILOMETER, unit);
                        }).toThrowError(/Not supported "To" unit./);
                    });
                }
            }
        });

        describe('From Inch / Mile', () => {
            it('To Meter / Kilometer', () => {
                expect(UnitConverter.convert(1, Unit.INCH_OVER_MILE, Unit.METER_OVER_KILOMETER)).toBe(0.015782815827954683);
            });

            it('To Inch / Mile', () => {
                expect(UnitConverter.convert(1, Unit.INCH_OVER_MILE, Unit.INCH_OVER_MILE)).toBe(1);
            });

            let unitList: Array<Unit> = UnitUtils.getUnitList();
            for (let i: number = 0; i < unitList.length; i++) {
                let unit: Unit = unitList[i];

                let notSupported: Array<string> = AREA.concat(LINEAR).concat(ANGLE);
                if (notSupported.indexOf(unit) > -1) {
                    it('Not Supported: ' + UnitUtils.getUnitText(unit), () => {
                        expect(() => {
                            UnitConverter.convert(1, Unit.INCH_OVER_MILE, unit);
                        }).toThrowError(/Not supported "To" unit./);
                    });
                }
            }
        });

        describe('From Degree', () => {
            it('To Degree', () => {
                expect(UnitConverter.convert(1, Unit.DEGREE, Unit.DEGREE)).toBe(1);
            });

            it('To Radian', () => {
                expect(UnitConverter.convert(1, Unit.DEGREE, Unit.RADIAN)).toBe(0.017453292519943295);
            });

            let unitList: Array<Unit> = UnitUtils.getUnitList();
            for (let i: number = 0; i < unitList.length; i++) {
                let unit: Unit = unitList[i];

                let notSupported: Array<string> = AREA.concat(LINEAR).concat(LENGTH_OVER_LENGTH);
                if (notSupported.indexOf(unit) > -1) {
                    it('Not Supported: ' + UnitUtils.getUnitText(unit), () => {
                        expect(() => {
                            UnitConverter.convert(1, Unit.DEGREE, unit);
                        }).toThrowError(/Not supported "To" unit./);
                    });
                }
            }
        });

        describe('From Per Meter', () => {
            it('To Per Foot', () => {
                expect(UnitConverter.convert(1, Unit.PER_METER, Unit.PER_FOOT)).toBe(0.3048000000012192);
            });
        });

        describe('From Per Foot', () => {
            it('To Per Foot', () => {
                expect(UnitConverter.convert(1, Unit.PER_FOOT, Unit.PER_METER)).toBe(3.2808398950);
            });
        });

        describe('From Per Meter\u00B2', () => {
            it('To Per Foot\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.PER_METER_SQUARED, Unit.PER_FOOT_SQUARED)).toBe(0.09290304359661128);
            });
        });

        describe('From Per Foot\u00B2', () => {
            it('To Per Meter\u00B2', () => {
                expect(UnitConverter.convert(1, Unit.PER_FOOT_SQUARED, Unit.PER_METER_SQUARED)).toBe(10.76391);
            });
        });

        describe('From Radian', () => {
            it('To Degree', () => {
                expect(UnitConverter.convert(1, Unit.RADIAN, Unit.DEGREE)).toBe(57.29577951308232);
            });

            it('To Radian', () => {
                expect(UnitConverter.convert(1, Unit.RADIAN, Unit.RADIAN)).toBe(1);
            });

            it('To Millimeter', () => {
                expect(UnitConverter.convert(1, Unit.RADIAN, Unit.MILLIMETER)).toBe(6371008800);
            });

            it('To Centimeter', () => {
                expect(UnitConverter.convert(1, Unit.RADIAN, Unit.CENTIMETER)).toBe(637100880);
            });

            it('To Meter', () => {
                expect(UnitConverter.convert(1, Unit.RADIAN, Unit.METER)).toBe(6371008.8);
            });

            it('To Kilometer', () => {
                expect(UnitConverter.convert(1, Unit.RADIAN, Unit.KILOMETER)).toBe(6371.0088);
            });

            it('To Inch', () => {
                expect(UnitConverter.convert(1, Unit.RADIAN, Unit.INCH)).toBe(250827118.10987);
            });

            it('To Foot', () => {
                expect(UnitConverter.convert(1, Unit.RADIAN, Unit.FOOT)).toBe(20902259.842436075);
            });

            it('To Yard', () => {
                expect(UnitConverter.convert(1, Unit.RADIAN, Unit.YARD)).toBe(6967419.947266324);
            });

            it('To Mile', () => {
                expect(UnitConverter.convert(1, Unit.RADIAN, Unit.MILE)).toBe(3958.7607461656803);
            });

            it('To Nautical Mile', () => {
                expect(UnitConverter.convert(1, Unit.RADIAN, Unit.NAUTICAL_MILE)).toBe(3440.069546436285);
            });

            let unitList: Array<Unit> = UnitUtils.getUnitList();
            for (let i: number = 0; i < unitList.length; i++) {
                let unit: Unit = unitList[i];

                let notSupported: Array<string> = AREA.concat(LENGTH_OVER_LENGTH);
                if (notSupported.indexOf(unit) > -1) {
                    it('Not Supported: ' + UnitUtils.getUnitText(unit), () => {
                        expect(() => {
                            UnitConverter.convert(1, Unit.RADIAN, unit);
                        }).toThrowError(/Not supported "To" unit./);
                    });
                }
            }
        });

        describe('Conversion should be consistent', () => {
            const THRESHOLD = 1.0e-4;

            let unitList: Array<Unit> = UnitUtils.getUnitList();

            let valueTest: Array<number> = [
                0,
                1,
                5,
                10,
                123.5
            ]

            for (let i: number = 0; i < valueTest.length; i++) {
                for (let x: number = 0; x < unitList.length; x++) {
                    for (let y: number = 0; y < unitList.length; y++) {
                        if (x === y) {
                            continue;
                        }

                        let testValue: number = valueTest[i];
                        let unit1: Unit = unitList[x];
                        let unit2: Unit = unitList[y];

                        let unit1name: string = '';
                        let unit2name: string = '';

                        if (unit1 === Unit.METER_OVER_KILOMETER) {
                            unit1name = 'm / km';
                        }
                        else if (unit1 === Unit.INCH_OVER_MILE) {
                            unit1name = 'in / mi';
                        }
                        else {
                            unit1name = UnitUtils.getUnitText(unit1);
                        }

                        if (unit2 === Unit.METER_OVER_KILOMETER) {
                            unit2name = 'm / km';
                        }
                        else if (unit2 === Unit.INCH_OVER_MILE) {
                            unit2name = 'in / mi';
                        }
                        else {
                            unit2name = UnitUtils.getUnitText(unit2);
                        }

                        // Normalize radian/degrees
                        if (unit1 === Unit.RADIAN) {
                            testValue = testValue % (Math.PI * 2);
                        }
                        else if (unit1 === Unit.DEGREE) {
                            testValue = testValue % 360;
                        }

                        it(`${unit1name} <-> ${unit2name} @ ${testValue}`, () => {
                            try {
                                let value: number = UnitConverter.convert(testValue, unit1, unit2);
                                let v: number = UnitConverter.convert(value, unit2, unit1);

                                // Floating point numbers are not accurate, but they should be significantly close.
                                let diff = v - testValue;

                                expect(diff).toBeGreaterThanOrEqual(-THRESHOLD);
                                expect(diff).toBeLessThanOrEqual(THRESHOLD);
                            }
                            catch (ex) {
                                if (!/Not supported/.test(ex.toString())) {
                                    fail(ex);
                                }
                            }
                        });
                    }
                }
            }
        });
    });
});
