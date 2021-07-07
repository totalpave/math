
import {
    Unit,
    LINEAR,
    AREA,
    LENGTH_OVER_LENGTH,
    ANGLE
} from './Unit';
import { UnitType } from './UnitType';
import {UnitConverter} from './UnitConverter';

const SUPERSCRIPT_TWO: string = '\u00B2';

export class UnitUtils {
    private constructor() {}

    public static convert(value: number, from: Unit, to: Unit, precision?: number): number {
        // eslint-disable-next-line no-console
        console.warn('UnitUtils.convert is deprecated. Use UnitConverter instead.\n', new Error().stack);
        return UnitConverter.convert(value, from, to);
    }

    public static getUnitType(unit: Unit): UnitType {
        let type: UnitType = null;

        if (!!(unit & AREA)) {
            type = UnitType.AREA;
        }
        else if (!!(unit & LINEAR)) {
            type = UnitType.LINEAR;
        }
        else if (!!(unit & LENGTH_OVER_LENGTH)) {
            type = UnitType.LENGTH_OVER_LENGTH;
        }
        else if (!!(unit & ANGLE)) {
            type = UnitType.ANGLE;
        }
        else {
            throw new Error('Unknown unit');
        }

        return type;
    }

    // Note: If Unit is not recognized, defaults to empty string.
    public static getUnitText(unit: Unit): string {
        switch (unit) {
            case Unit.MILLIMETER:
                return 'mm';
            case Unit.CENTIMETER:
                return 'cm';
            case Unit.METER:
                return 'm';
            case Unit.KILOMETER:
                return 'km';
            case Unit.MILLIMETER_SQUARED:
                return 'mm' + SUPERSCRIPT_TWO;
            case Unit.CENTIMETER_SQUARED:
                return 'cm' + SUPERSCRIPT_TWO;
            case Unit.METER_SQUARED:
                return 'm' + SUPERSCRIPT_TWO;
            case Unit.KILOMETER_SQUARED:
                return 'km' + SUPERSCRIPT_TWO;
            case Unit.INCH:
                return 'in';
            case Unit.FOOT:
                return 'ft';
            case Unit.YARD:
                return 'yd';
            case Unit.MILE:
                return 'mi';
            case Unit.NAUTICAL_MILE:
                return 'nmi';
            case Unit.NAUTICAL_MILE_SQUARED:
                return 'nmi' + SUPERSCRIPT_TWO;
            case Unit.INCH_SQUARED:
                return 'in' + SUPERSCRIPT_TWO;
            case Unit.FOOT_SQUARED:
                return 'ft' + SUPERSCRIPT_TWO;
            case Unit.YARD_SQUARED:
                return 'yd' + SUPERSCRIPT_TWO;
            case Unit.MILE_SQUARED:
                return 'mi' + SUPERSCRIPT_TWO;
            case Unit.RADIAN:
                return 'rad';
            case Unit.DEGREE:
                return '\u00b0';
            case Unit.PER_MILLIMETER:
                return '/' + UnitUtils.getUnitText(Unit.MILLIMETER);
            case Unit.PER_CENTIMETER:
                return '/' + UnitUtils.getUnitText(Unit.CENTIMETER);
            case Unit.PER_METER:
                return '/' + UnitUtils.getUnitText(Unit.METER);
            case Unit.PER_KILOMETER:
                return '/' + UnitUtils.getUnitText(Unit.KILOMETER);
            case Unit.PER_INCH:
                return '/' + UnitUtils.getUnitText(Unit.INCH);
            case Unit.PER_FOOT:
                return '/' + UnitUtils.getUnitText(Unit.FOOT);
            case Unit.PER_YARD:
                return '/' + UnitUtils.getUnitText(Unit.YARD);
            case Unit.PER_MILE:
                return '/' + UnitUtils.getUnitText(Unit.MILE);
            case Unit.PER_NAUTICAL_MILE:
                return '/' + UnitUtils.getUnitText(Unit.NAUTICAL_MILE);
            case Unit.PER_MILLIMETER_SQUARED:
                return '/' + UnitUtils.getUnitText(Unit.MILLIMETER_SQUARED);
            case Unit.PER_CENTIMETER_SQUARED:
                return '/' + UnitUtils.getUnitText(Unit.CENTIMETER_SQUARED);
            case Unit.PER_METER_SQUARED:
                return '/' + UnitUtils.getUnitText(Unit.METER_SQUARED);
            case Unit.PER_KILOMETER_SQUARED:
                return '/' + UnitUtils.getUnitText(Unit.KILOMETER_SQUARED);
            case Unit.PER_INCH_SQUARED:
                return '/' + UnitUtils.getUnitText(Unit.INCH_SQUARED);
            case Unit.PER_FOOT_SQUARED:
                return '/' + UnitUtils.getUnitText(Unit.FOOT_SQUARED);
            case Unit.PER_YARD_SQUARED:
                return '/' + UnitUtils.getUnitText(Unit.YARD_SQUARED);
            case Unit.PER_MILE_SQUARED:
                return '/' + UnitUtils.getUnitText(Unit.MILE_SQUARED);
            case Unit.PER_NAUTICAL_MILE_SQUARED:
                return '/' + UnitUtils.getUnitText(Unit.NAUTICAL_MILE_SQUARED);
            case Unit.PER_DEGREE:
                return '/' + UnitUtils.getUnitText(Unit.DEGREE);
            case Unit.PER_RADIAN:
                return '/' + UnitUtils.getUnitText(Unit.RADIAN);
            default:
                return '';
        }
    }

    public static getUnitList(): Array<Unit> {
        let list: Array<Unit> = [];

        for (let i in Unit) {
            list.push((<any>Unit)[i]);
        }

        return list;
    }
}
