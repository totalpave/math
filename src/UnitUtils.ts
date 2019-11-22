
import {
    Unit,
    LINEAR,
    AREA,
    LENGTH_OVER_LENGTH
} from './Unit';
import { UnitType } from './UnitType';

const SUPERSCRIPT_TWO: string = '\u00B2';
const METER_FOOT: number = 0.3048;
const METER_FOOT_SQUARED: number = 0.092903;
const METER_MILE: number = 1609.34;
const METER_KILOMETER: number = 1000;
const METER_YARD_SQUARED: number = 0.836127;

const METER_OVER_KILOMETER_INCH_OVER_MILE: number = 63.36005;

export class UnitUtils {
    private constructor() {}

    public static convert(value: number, from: Unit, to: Unit): number {
        let result: number = null;

        if (UnitUtils.getUnitType(from) !== UnitUtils.getUnitType(to)) {
            throw new Error('Cannot convert two different unit types.');
        }

        if (value !== null && from !== to) {
            switch (from) {
                case Unit.METER:
                    result = UnitUtils._fromMeter(value, to);
                    break;
                case Unit.METER_SQUARED:
                    result = UnitUtils._fromMeterSquared(value, to);
                    break;
                case Unit.FOOT:
                    result = UnitUtils._fromFoot(value, to);
                    break;
                case Unit.FOOT_SQUARED:
                    result = UnitUtils._fromFootSquared(value, to);
                    break;
                case Unit.MILE:
                    result = UnitUtils._fromMile(value, to);
                    break;
                case Unit.KILOMETER:
                    result = UnitUtils._fromKilometer(value, to);
                    break;
                case Unit.YARD_SQUARED:
                    result = UnitUtils._fromYardSquared(value, to);
                    break;
                case Unit.METER_OVER_KILOMETER:
                    result = UnitUtils._fromMeterOverKilometer(value, to);
                    break;
                default: this._throwNotSupportedFromUnit();
            }
        }
        else {
            result = value;
        }

        return result;
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
            case Unit.INCH_SQUARED:
                return 'in' + SUPERSCRIPT_TWO;
            case Unit.FOOT_SQUARED:
                return 'ft' + SUPERSCRIPT_TWO;
            case Unit.YARD_SQUARED:
                return 'yd' + SUPERSCRIPT_TWO;
            case Unit.MILE_SQUARED:
                return 'mi' + SUPERSCRIPT_TWO;
            default:
                return '';
        }
    }

    private static _fromMeterOverKilometer(value: number, to: Unit): number {
        let result: number = null;

        switch (to) {
            case Unit.INCH_OVER_MILE:
                result = value * METER_OVER_KILOMETER_INCH_OVER_MILE;
                break;
            default: this._throwNotSupportedToUnit();
        }

        return result;
    }

    private static _fromYardSquared(value: number, to: Unit): number {
        let result: number = null;

        switch (to) {
            case Unit.METER_SQUARED:
                result = value * METER_YARD_SQUARED;
                break;
            default: this._throwNotSupportedToUnit();
        }

        return result;
    }

    private static _fromKilometer(value: number, to: Unit): number {
        let result: number = null;

        switch (to) {
            case Unit.METER:
                result = value * METER_KILOMETER;
                break;
            default: this._throwNotSupportedToUnit();
        }

        return result;
    }

    private static _fromMeter(value: number, to: Unit): number {
        let result: number = null;

        switch (to) {
            case Unit.FOOT:
                result = value / METER_FOOT;
                break;
            case Unit.MILE:
                result = value / METER_MILE;
                break;
            default: this._throwNotSupportedToUnit();
        }

        return result;
    }

    private static _fromMile(value: number, to: Unit): number {
        let result: number = null;

        switch (to) {
            case Unit.METER:
                result = value * METER_MILE;
                break;
            default: this._throwNotSupportedToUnit();
        }

        return result;
    }

    private static _fromMeterSquared(value: number, to: Unit): number {
        let result: number = null;

        switch (to) {
            case Unit.FOOT_SQUARED:
                result = value / METER_FOOT_SQUARED;
                break;
            default: this._throwNotSupportedToUnit();
        }

        return result;
    }

    private static _fromFoot(value: number, to: Unit): number {
        let result: number = null;

        switch (to) {
            case Unit.METER:
                result = value * METER_FOOT;
                break;
            default: this._throwNotSupportedToUnit();
        }

        return result;
    }

    private static _fromFootSquared(value: number, to: Unit): number {
        let result: number = null;

        switch (to) {
            case Unit.METER_SQUARED:
                result = value * METER_FOOT_SQUARED;
                break;
            default: this._throwNotSupportedToUnit();
        }

        return result;
    }

    private static _throwNotSupportedFromUnit(): void {
        throw new Error('Not supported "From" unit. Looks like we have a PR to make :)');
    }

    private static _throwNotSupportedToUnit(): void {
        throw new Error('Not supported "To" unit. Looks like we have a PR to make :)');
    }
}
