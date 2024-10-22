
// NOTE: If you add/remove units from here, please update UnitUtils.getUnitText.
export enum Unit {
    // METRIC
    MILLIMETER              = 'mm',
    CENTIMETER              = 'cm',
    METER                   = 'm',
    KILOMETER               = 'km',

    MILLIMETER_SQUARED      = 'mm2',
    CENTIMETER_SQUARED      = 'cm2',
    METER_SQUARED           = 'm2',
    KILOMETER_SQUARED       = 'km2',

    // Imperial
    INCH                    = 'in',
    FOOT                    = 'ft',
    YARD                    = 'yd',
    MILE                    = 'mi',
    NAUTICAL_MILE           = 'nmi',

    INCH_SQUARED            = 'in2',
    FOOT_SQUARED            = 'ft2',
    YARD_SQUARED            = 'yd2',
    MILE_SQUARED            = 'mi2',
    NAUTICAL_MILE_SQUARED   = 'nmi2',

    METER_OVER_KILOMETER    = 'm/km',
    INCH_OVER_MILE          = 'in/mi',

    DEGREE                  = 'deg',
    RADIAN                  = 'rad',

    // Per Unit Conversions
    PER_METER               = 'x/m',
    PER_FOOT                = 'x/ft',
    PER_METER_SQUARED       = 'x/m2',
    PER_FOOT_SQUARED        = 'x/ft2'
}

export const LINEAR: string[] = [
    Unit.MILLIMETER,
    Unit.CENTIMETER,
    Unit.METER,
    Unit.KILOMETER,
    Unit.INCH,
    Unit.FOOT,
    Unit.YARD,
    Unit.MILE,
    Unit.NAUTICAL_MILE
];

export const AREA: string[] = [
    Unit.METER_SQUARED,
    Unit.MILLIMETER_SQUARED,
    Unit.CENTIMETER_SQUARED,
    Unit.KILOMETER_SQUARED,
    Unit.INCH_SQUARED,
    Unit.YARD_SQUARED,
    Unit.FOOT_SQUARED,
    Unit.MILE_SQUARED,
    Unit.NAUTICAL_MILE_SQUARED
];

export const LENGTH_OVER_LENGTH: string[] = [ Unit.METER_OVER_KILOMETER, Unit.INCH_OVER_MILE ];
export const ANGLE: string[] = [ Unit.DEGREE, Unit.RADIAN ];

export const PER_UNIT: string[] = [
    Unit.PER_FOOT,
    Unit.PER_METER,
    Unit.PER_FOOT_SQUARED,
    Unit.PER_METER_SQUARED
];
