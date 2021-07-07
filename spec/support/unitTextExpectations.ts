
import {Unit} from '../../src/Unit';

const SUPERSCRIPT_TWO: string = '\u00B2';

export interface IUnitTextTestCase {
    name: string;
    expectation: string;
}

export const UNIT_TEXTS_CASES: Record<Unit, IUnitTextTestCase> = {
    [Unit.MILLIMETER]: {
        name: 'Unit.MILLIMETER',
        expectation:  'mm'
    },
    [Unit.CENTIMETER]: {
        name: 'Unit.CENTIMETER',
        expectation:  'cm'
    },
    [Unit.METER]: {
        name: 'Unit.METER',
        expectation:  'm'
    },
    [Unit.KILOMETER]: {
        name: 'Unit.KILOMETER',
        expectation:  'km'
    },
    [Unit.MILLIMETER_SQUARED]: {
        name: 'Unit.MILLIMETER_SQUARED',
        expectation:  'mm' + SUPERSCRIPT_TWO
    },
    [Unit.CENTIMETER_SQUARED]: {
        name: 'Unit.CENTIMETER_SQUARED',
        expectation:  'cm' + SUPERSCRIPT_TWO
    },
    [Unit.METER_SQUARED]: {
        name: 'Unit.METER_SQUARED',
        expectation:  'm' + SUPERSCRIPT_TWO
    },
    [Unit.KILOMETER_SQUARED]: {
        name: 'Unit.KILOMETER_SQUARED',
        expectation:  'km' + SUPERSCRIPT_TWO
    },
    [Unit.INCH]: {
        name: 'Unit.INCH',
        expectation:  'in'
    },
    [Unit.FOOT]: {
        name: 'Unit.FOOT',
        expectation:  'ft'
    },
    [Unit.YARD]: {
        name: 'Unit.YARD',
        expectation:  'yd'
    },
    [Unit.MILE]: {
        name: 'Unit.MILE',
        expectation:  'mi'
    },
    [Unit.NAUTICAL_MILE]: {
        name: 'Unit.NAUTICAL_MILE',
        expectation:  'nmi'
    },
    [Unit.INCH_SQUARED]: {
        name: 'Unit.INCH_SQUARED',
        expectation:  'in' + SUPERSCRIPT_TWO
    },
    [Unit.FOOT_SQUARED]: {
        name: 'Unit.FOOT_SQUARED',
        expectation:  'ft' + SUPERSCRIPT_TWO
    },
    [Unit.YARD_SQUARED]: {
        name: 'Unit.YARD_SQUARED',
        expectation:  'yd' + SUPERSCRIPT_TWO
    },
    [Unit.MILE_SQUARED]: {
        name: 'Unit.MILE_SQUARED',
        expectation:  'mi' + SUPERSCRIPT_TWO
    },
    [Unit.NAUTICAL_MILE_SQUARED]: {
        name: 'Unit.NAUTICAL_MILE_SQUARED',
        expectation:  'nmi' + SUPERSCRIPT_TWO
    },
    [Unit.DEGREE]: {
        name: 'Unit.DEGREE',
        expectation:  '\u00b0'
    },
    [Unit.RADIAN]: {
        name: 'Unit.RADIAN',
        expectation:  'rad'
    },
    [Unit.METER_OVER_KILOMETER]: {
        name: 'Unit.METER_OVER_KILOMETER',
        expectation:  ''
    },
    [Unit.INCH_OVER_MILE]: {
        name: 'Unit.INCH_OVER_MILE',
        expectation:  ''
    },
    [Unit.PER_MILLIMETER]: {
        name: 'Unit.PER_MILLIMETER',
        expectation:  '/mm'
    },
    [Unit.PER_CENTIMETER]: {
        name: 'Unit.PER_CENTIMETER',
        expectation:  '/cm'
    },
    [Unit.PER_METER]: {
        name: 'Unit.PER_METER',
        expectation:  '/m'
    },
    [Unit.PER_KILOMETER]: {
        name: 'Unit.PER_KILOMETER',
        expectation:  '/km'
    },
    [Unit.PER_INCH]: {
        name: 'Unit.PER_INCH',
        expectation:  '/in'
    },
    [Unit.PER_FOOT]: {
        name: 'Unit.PER_FOOT',
        expectation:  '/ft'
    },
    [Unit.PER_YARD]: {
        name: 'Unit.PER_YARD',
        expectation:  '/yd'
    },
    [Unit.PER_MILE]: {
        name: 'Unit.PER_MILE',
        expectation:  '/mi'
    },
    [Unit.PER_NAUTICAL_MILE]: {
        name: 'Unit.PER_NAUTICAL_MILE',
        expectation:  '/nmi'
    },
    [Unit.PER_MILLIMETER_SQUARED]: {
        name: 'Unit.PER_MILLIMETER_SQUARED',
        expectation:  '/mm' + SUPERSCRIPT_TWO
    },
    [Unit.PER_CENTIMETER_SQUARED]: {
        name: 'Unit.PER_CENTIMETER_SQUARED',
        expectation:  '/cm' + SUPERSCRIPT_TWO
    },
    [Unit.PER_METER_SQUARED]: {
        name: 'Unit.PER_METER_SQUARED',
        expectation:  '/m' + SUPERSCRIPT_TWO
    },
    [Unit.PER_KILOMETER_SQUARED]: {
        name: 'Unit.PER_KILOMETER_SQUARED',
        expectation:  '/km' + SUPERSCRIPT_TWO
    },
    [Unit.PER_INCH_SQUARED]: {
        name: 'Unit.PER_INCH_SQUARED',
        expectation:  '/in' + SUPERSCRIPT_TWO
    },
    [Unit.PER_FOOT_SQUARED]: {
        name: 'Unit.PER_FOOT_SQUARED',
        expectation:  '/ft' + SUPERSCRIPT_TWO
    },
    [Unit.PER_YARD_SQUARED]: {
        name: 'Unit.PER_YARD_SQUARED',
        expectation:  '/yd' + SUPERSCRIPT_TWO
    },
    [Unit.PER_MILE_SQUARED]: {
        name: 'Unit.PER_MILE_SQUARED',
        expectation:  '/mi' + SUPERSCRIPT_TWO
    },
    [Unit.PER_NAUTICAL_MILE_SQUARED]: {
        name: 'Unit.PER_NAUTICAL_MILE_SQUARED',
        expectation:  '/nmi' + SUPERSCRIPT_TWO
    }
};
