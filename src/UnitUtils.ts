
import {
    Unit,
    LINEAR,
    AREA,
    LENGTH_OVER_LENGTH,
    ANGLE
} from './Unit';
import { UnitType } from './UnitType';

const SUPERSCRIPT_TWO: string = '\u00B2';

export class UnitUtils {
    private constructor() {}

    public static getUnitType(unit: Unit): UnitType {
        let type: UnitType = null;

        if (AREA.indexOf(unit) > -1) {
            type = UnitType.AREA;
        }
        else if (LINEAR.indexOf(unit) > -1) {
            type = UnitType.LINEAR;
        }
        else if (LENGTH_OVER_LENGTH.indexOf(unit) > -1) {
            type = UnitType.LENGTH_OVER_LENGTH;
        }
        else if (ANGLE.indexOf(unit) > -1) {
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
