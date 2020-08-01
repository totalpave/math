
// NOTE: If you add/remove units from here, please update UnitUtils.getUnitText.
export enum Unit {
    // METRIC
    MILLIMETER              = 1,
    CENTIMETER              = Unit.MILLIMETER << 1,
    METER                   = Unit.CENTIMETER << 1,
    KILOMETER               = Unit.METER << 1,

    MILLIMETER_SQUARED      = Unit.KILOMETER << 1,
    CENTIMETER_SQUARED      = Unit.MILLIMETER_SQUARED << 1,
    METER_SQUARED           = Unit.CENTIMETER_SQUARED << 1,
    KILOMETER_SQUARED       = Unit.METER_SQUARED << 1,

    // Imperial
    INCH                    = Unit.KILOMETER_SQUARED << 1,
    FOOT                    = Unit.INCH << 1,
    YARD                    = Unit.FOOT << 1,
    MILE                    = Unit.YARD << 1,

    INCH_SQUARED            = Unit.MILE << 1,
    FOOT_SQUARED            = Unit.INCH_SQUARED << 1,
    YARD_SQUARED            = Unit.FOOT_SQUARED << 1,
    MILE_SQUARED            = Unit.YARD_SQUARED << 1,

    METER_OVER_KILOMETER    = Unit.MILE_SQUARED << 1,
    INCH_OVER_MILE          = Unit.METER_OVER_KILOMETER << 1,

    DEGREE                  = Unit.INCH_OVER_MILE << 1,
    RADIAN                  = Unit.DEGREE << 1
}

export const LINEAR: number = (
    Unit.MILLIMETER |
    Unit.CENTIMETER |
    Unit.METER |
    Unit.KILOMETER |
    Unit.INCH |
    Unit.FOOT |
    Unit.YARD |
    Unit.MILE
);

export const AREA: number = (
    Unit.METER_SQUARED |
    Unit.MILLIMETER_SQUARED |
    Unit.CENTIMETER_SQUARED |
    Unit.KILOMETER_SQUARED |
    Unit.INCH_SQUARED |
    Unit.YARD_SQUARED |
    Unit.FOOT_SQUARED |
    Unit.MILE_SQUARED
);

export const LENGTH_OVER_LENGTH: number = Unit.METER_OVER_KILOMETER | Unit.INCH_OVER_MILE;

export const ANGLE: number = Unit.DEGREE | Unit.RADIAN;
