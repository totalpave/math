
import {
    Unit,
    LINEAR,
    AREA,
    LENGTH_OVER_LENGTH,
    ANGLE
} from './Unit';
import Math from './Math';
import { UnitType } from './UnitType';

const SUPERSCRIPT_TWO: string = '\u00B2';

export class UnitUtils {
    private constructor() {}

    public static convert(value: number, from: Unit, to: Unit): number {
        let result: number = null;

        // if (UnitUtils.getUnitType(from) !== UnitUtils.getUnitType(to)) {
        //     throw new Error('Cannot convert two different unit types.');
        // }

        if (value !== null && from !== to) {
            switch (from) {
                case Unit.MILLIMETER:
                    result = UnitUtils._fromMillimeter(value, to);
                    break;
                case Unit.CENTIMETER:
                    result = UnitUtils._fromCentimeter(value, to);
                    break;
                case Unit.METER:
                    result = UnitUtils._fromMeter(value, to);
                    break;
                case Unit.KILOMETER:
                    result = UnitUtils._fromKilometer(value, to);
                    break;
                case Unit.MILLIMETER_SQUARED:
                    result = UnitUtils._fromMillimeterSquared(value, to);
                    break;
                case Unit.CENTIMETER_SQUARED:
                    result = UnitUtils._fromCentimeterSquared(value, to);
                    break;
                case Unit.METER_SQUARED:
                    result = UnitUtils._fromMeterSquared(value, to);
                    break;
                case Unit.KILOMETER_SQUARED:
                    result = UnitUtils._fromKilometerSquared(value, to);
                    break;
                case Unit.INCH:
                    result = UnitUtils._fromInch(value, to);
                    break;
                case Unit.FOOT:
                    result = UnitUtils._fromFoot(value, to);
                    break;
                case Unit.YARD:
                    result = UnitUtils._fromYard(value, to);
                    break;
                case Unit.MILE:
                    result = UnitUtils._fromMile(value, to);
                    break;
                case Unit.NAUTICAL_MILE:
                    result = UnitUtils._fromNauticalMile(value, to);
                    break;
                case Unit.INCH_SQUARED:
                    result = UnitUtils._fromInchSquared(value, to);
                    break;
                case Unit.FOOT_SQUARED:
                    result = UnitUtils._fromFootSquared(value, to);
                    break;
                case Unit.YARD_SQUARED:
                    result = UnitUtils._fromYardSquared(value, to);
                    break;
                case Unit.MILE_SQUARED:
                    result = UnitUtils._fromMileSquared(value, to);
                    break;
                case Unit.NAUTICAL_MILE_SQUARED:
                    result = UnitUtils._fromNauticalMileSquared(value, to);
                    break;
                case Unit.METER_OVER_KILOMETER:
                    result = UnitUtils._fromMeterOverKilometer(value, to);
                    break;
                case Unit.INCH_OVER_MILE:
                    result = UnitUtils._fromInchOverMile(value, to);
                    break;
                case Unit.RADIAN:
                    result = UnitUtils._fromRadian(value, to);
                    break;
                case Unit.DEGREE:
                    result = UnitUtils._fromDegree(value, to);
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
            default:
                return '';
        }
    }

    private static _fromMillimeter(value: number, to: Unit): number {
        let result: number = null;

        switch (to) {
            case Unit.FOOT:
                result = value * 0.0032808398;
                break;
            case Unit.MILE:
                result = value * 6.2137119223733e-7;
                break;
            case Unit.NAUTICAL_MILE:
                result = value * 5.3995680345572e-7;
                break;
            case Unit.METER:
                result = value * 0.001;
                break;
            case Unit.CENTIMETER:
                result = value * 0.1;
                break;
            case Unit.KILOMETER:
                result = value * 1.0e-6;
                break;
            case Unit.INCH:
                result = value * 0.0393700787;
                break;
            case Unit.YARD:
                result = value * 0.0010936132;
                break;
            default: this._throwNotSupportedToUnit();
        }

        return result;
    }

    private static _fromCentimeter(value: number, to: Unit): number {
        let result: number = null;

        switch (to) {
            case Unit.FOOT:
                result = value * 0.0328083989;
                break;
            case Unit.MILE:
                result = value * 6.2137119223733e-6;
                break;
            case Unit.NAUTICAL_MILE:
                result = value * 5.3995680345572e-6;
                break;
            case Unit.MILLIMETER:
                result = value * 10;
                break;
            case Unit.METER:
                result = value * 0.01;
                break;
            case Unit.KILOMETER:
                result = value * 1.0e-5;
                break;
            case Unit.INCH:
                result = value * 0.3937007874;
                break;
            case Unit.YARD:
                result = value * 0.0109361329;
                break;
            default: this._throwNotSupportedToUnit();
        }

        return result;
    }

    private static _fromInch(value: number, to: Unit): number {
        let result: number = null;

        switch (to) {
            case Unit.FOOT:
                result = value * 0.0833333333;
                break;
            case Unit.MILE:
                result = value * 1.5782828282828e-5;
                break;
            case Unit.NAUTICAL_MILE:
                result = value * 1.3714902807775e-5;
                break;
            case Unit.MILLIMETER:
                result = value * 25.4;
                break;
            case Unit.CENTIMETER:
                result = value * 2.54;
                break;
            case Unit.KILOMETER:
                result = value * 2.54e-5;
                break;
            case Unit.METER:
                result = value * 0.0254;
                break;
            case Unit.YARD:
                result = value * 0.0277777777;
                break;
            default: this._throwNotSupportedToUnit();
        }

        return result;
    }

    private static _fromYard(value: number, to: Unit): number {
        let result: number = null;

        switch (to) {
            case Unit.FOOT:
                result = value * 3;
                break;
            case Unit.MILE:
                result = value * 0.0005681818;
                break;
            case Unit.NAUTICAL_MILE:
                result = value * 0.0004937365;
                break;
            case Unit.MILLIMETER:
                result = value * 914.4;
                break;
            case Unit.CENTIMETER:
                result = value * 91.44;
                break;
            case Unit.KILOMETER:
                result = value * 0.0009144;
                break;
            case Unit.INCH:
                result = value * 36;
                break;
            case Unit.METER:
                result = value * 0.9144;
                break;
            default: this._throwNotSupportedToUnit();
        }

        return result;
    }

    private static _fromNauticalMile(value: number, to: Unit): number {
        let result: number = null;

        switch (to) {
            case Unit.FOOT:
                result = value * 6076.1155;
                break;
            case Unit.MILE:
                result = value * 1.15077945;
                break;
            case Unit.METER:
                result = value * 1852;
                break;
            case Unit.MILLIMETER:
                result = value * 1.852e6;
                break;
            case Unit.CENTIMETER:
                result = value * 185200;
                break;
            case Unit.KILOMETER:
                result = value * 1.852;
                break;
            case Unit.INCH:
                result = value * 72913.392;
                break;
            case Unit.YARD:
                result = value * 2025.372;
                break;
            default: this._throwNotSupportedToUnit();
        }

        return result;
    }

    private static _fromRadian(value: number, to: Unit): number {
        let result: number = null;

        switch (to) {
            case Unit.MILLIMETER:
                result = value * UnitUtils.convert(Math.EARTH_RADIUS, Unit.METER, Unit.MILLIMETER);
                break;
            case Unit.CENTIMETER:
                result = value * UnitUtils.convert(Math.EARTH_RADIUS, Unit.METER, Unit.CENTIMETER);
                break;
            case Unit.METER:
                result = value * Math.EARTH_RADIUS;
                break;
            case Unit.KILOMETER:
                result = value * UnitUtils.convert(Math.EARTH_RADIUS, Unit.METER, Unit.KILOMETER);
                break;
            case Unit.INCH:
                result = value * UnitUtils.convert(Math.EARTH_RADIUS, Unit.METER, Unit.INCH);
                break;
            case Unit.FOOT:
                result = value * UnitUtils.convert(Math.EARTH_RADIUS, Unit.METER, Unit.FOOT);
                break;
            case Unit.YARD:
                result = value * UnitUtils.convert(Math.EARTH_RADIUS, Unit.METER, Unit.YARD);
                break;
            case Unit.MILE:
                result = value * UnitUtils.convert(Math.EARTH_RADIUS, Unit.METER, Unit.MILE);
                break;
            case Unit.NAUTICAL_MILE:
                result = value * UnitUtils.convert(Math.EARTH_RADIUS, Unit.METER, Unit.NAUTICAL_MILE);
                break;
            case Unit.DEGREE:
                result = (value % (2 * Math.PI)) * 180 / Math.PI;
                break;
            default: this._throwNotSupportedToUnit();
        }

        return result;
    }

    private static _fromDegree(value: number, to: Unit): number {
        let result: number = null;

        switch (to) {
            case Unit.RADIAN:
                result = (value % 360) * Math.PI / 180;
                break;
            default: this._throwNotSupportedToUnit();
        }

        return result;
    }

    private static _fromMeterOverKilometer(value: number, to: Unit): number {
        let result: number = null;

        switch (to) {
            case Unit.INCH_OVER_MILE:
                result = value * 63.36005;
                break;
            default: this._throwNotSupportedToUnit();
        }

        return result;
    }

    private static _fromInchOverMile(value: number, to: Unit): number {
        let result: number = null;

        switch (to) {
            case Unit.METER_OVER_KILOMETER:
                result = value / 63.36005;
                break;
            default: this._throwNotSupportedToUnit();
        }

        return result;
    }

    private static _fromYardSquared(value: number, to: Unit): number {
        let result: number = null;

        switch (to) {
            case Unit.CENTIMETER_SQUARED:
                result = value * 8361.2040133779;
                break;
            case Unit.METER_SQUARED:
                result = value * 0.83612040133779;
                break;
            case Unit.KILOMETER_SQUARED:
                result = value * 8.3612040133779e-7;
                break;
            case Unit.INCH_SQUARED:
                result = value * 1295.9892140468;
                break;
            case Unit.FOOT_SQUARED:
                result = value * 8.9999247491639;
                break;
            case Unit.MILLIMETER_SQUARED:
                result = value * 836120.40133779;
                break;
            case Unit.MILE_SQUARED:
                result = value * 3.228278917579e-7;
                break;
            case Unit.NAUTICAL_MILE_SQUARED:
                result = value * 2.4346237458194e-7;
                break;
            default: this._throwNotSupportedToUnit();
        }

        return result;
    }

    private static _fromKilometer(value: number, to: Unit): number {
        let result: number = null;

        switch (to) {
            case Unit.MILLIMETER:
                result = value * 1000000;
                break;
            case Unit.CENTIMETER:
                result = value * 100000;
                break;
            case Unit.METER:
                result = value * 1000;
                break;
            case Unit.INCH:
                result = value * 39370.078740157;
                break;
            case Unit.FOOT:
                result = value * 3280.8398950131;
                break;
            case Unit.YARD:
                result = value * 1093.6132983377;
                break;
            case Unit.MILE:
                result = value * 0.6213711922;
                break;
            case Unit.NAUTICAL_MILE:
                result = value * 0.5399568034;
                break;
            default: this._throwNotSupportedToUnit();
        }

        return result;
    }

    private static _fromMeter(value: number, to: Unit): number {
        let result: number = null;

        switch (to) {
            case Unit.FOOT:
                result = value * 3.2808398950;
                break;
            case Unit.MILE:
                result = value * 0.0006213711;
                break;
            case Unit.NAUTICAL_MILE:
                result = value / 1852;
                break;
            case Unit.MILLIMETER:
                result = value * 1000;
                break;
            case Unit.CENTIMETER:
                result = value * 100;
                break;
            case Unit.KILOMETER:
                result = value * 0.001;
                break;
            case Unit.INCH:
                result = value * 39.3700787401;
                break;
            case Unit.YARD:
                result = value * 1.0936132983;
                break;
            default: this._throwNotSupportedToUnit();
        }

        return result;
    }

    private static _fromMile(value: number, to: Unit): number {
        let result: number = null;

        switch (to) {
            case Unit.MILLIMETER:
                result = value * 1609344;
                break;
            case Unit.CENTIMETER:
                result = value * 160934.4;
                break;
            case Unit.METER:
                result = value * 1609.344;
                break;
            case Unit.KILOMETER:
                result = value * 1.609344;
                break;
            case Unit.INCH:
                result = value * 63360;
                break;
            case Unit.FOOT:
                result = value * 5280;
                break;
            case Unit.YARD:
                result = value * 1760;
                break;
            case Unit.NAUTICAL_MILE:
                result = value * 0.8689762419;
                break;
            default: this._throwNotSupportedToUnit();
        }

        return result;
    }

    private static _fromMillimeterSquared(value: number, to: Unit): number {
        let result: number = null;

        switch (to) {
            case Unit.CENTIMETER_SQUARED:
                result = value * 0.01;
                break;
            case Unit.METER_SQUARED:
                result = value * 1.0e-6;
                break;
            case Unit.KILOMETER_SQUARED:
                result = value * 1.0e-12;
                break;
            case Unit.INCH_SQUARED:
                result = value * 0.0015500031;
                break;
            case Unit.FOOT_SQUARED:
                result = value * 1.076391e-5;
                break;
            case Unit.YARD_SQUARED:
                result = value * 1.196e-6;
                break;
            case Unit.MILE_SQUARED:
                result = value * 3.8610215854245e-13;
                break;
            case Unit.NAUTICAL_MILE_SQUARED:
                result = value * 2.91181e-13;
                break;
            default: this._throwNotSupportedToUnit();
        }

        return result;
    }

    private static _fromCentimeterSquared(value: number, to: Unit): number {
        let result: number = null;

        switch (to) {
            case Unit.MILLIMETER_SQUARED:
                result = value * 100;
                break;
            case Unit.METER_SQUARED:
                result = value * 0.0001;
                break;
            case Unit.KILOMETER_SQUARED:
                result = value * 1.0e-10;
                break;
            case Unit.INCH_SQUARED:
                result = value * 0.15500031;
                break;
            case Unit.FOOT_SQUARED:
                result = value * 0.001076391;
                break;
            case Unit.YARD_SQUARED:
                result = value * 0.0001196;
                break;
            case Unit.MILE_SQUARED:
                result = value * 3.8610215854245e-11;
                break;
            case Unit.NAUTICAL_MILE_SQUARED:
                result = value * 2.91181e-11;
                break;
            default: this._throwNotSupportedToUnit();
        }

        return result;
    }

    private static _fromMeterSquared(value: number, to: Unit): number {
        let result: number = null;

        switch (to) {
            case Unit.MILLIMETER_SQUARED:
                result = value * 1000000;
                break;
            case Unit.CENTIMETER_SQUARED:
                result = value * 10000;
                break;
            case Unit.KILOMETER_SQUARED:
                result = value * 1.0e-6;
                break;
            case Unit.INCH_SQUARED:
                result = value * 1550.0031;
                break;
            case Unit.FOOT_SQUARED:
                result = value * 10.76391;
                break;
            case Unit.YARD_SQUARED:
                result = value * 1.196;
                break;
            case Unit.MILE_SQUARED:
                result = value * 3.8610215854245e-7;
                break;
            case Unit.NAUTICAL_MILE_SQUARED:
                result = value * 2.91181e-7;
                break;
            default: this._throwNotSupportedToUnit();
        }

        return result;
    }

    private static _fromKilometerSquared(value: number, to: Unit): number {
        let result: number = null;

        switch (to) {
            case Unit.MILLIMETER_SQUARED:
                result = value * 1000000000000;
                break;
            case Unit.METER_SQUARED:
                result = value * 1000000;
                break;
            case Unit.CENTIMETER_SQUARED:
                result = value * 10000000000;
                break;
            case Unit.INCH_SQUARED:
                result = value * 1550003100;
                break;
            case Unit.FOOT_SQUARED:
                result = value * 10763910;
                break;
            case Unit.YARD_SQUARED:
                result = value * 1196000;
                break;
            case Unit.MILE_SQUARED:
                result = value * 0.3861021585;
                break;
            case Unit.NAUTICAL_MILE_SQUARED:
                result = value * 0.291181;
                break;
            default: this._throwNotSupportedToUnit();
        }

        return result;
    }

    private static _fromInchSquared(value: number, to: Unit): number {
        let result: number = null;

        switch (to) {
            case Unit.MILLIMETER_SQUARED:
                result = value * 645.16000000258;
                break;
            case Unit.METER_SQUARED:
                result = value * 0.00064516000000258;
                break;
            case Unit.KILOMETER_SQUARED:
                result = value * 6.4516000000258e-10;
                break;
            case Unit.CENTIMETER_SQUARED:
                result = value * 6.4516000000258;
                break;
            case Unit.FOOT_SQUARED:
                result = value * 0.0069444441756278;
                break;
            case Unit.YARD_SQUARED:
                result = value * 0.00077161136000309;
                break;
            case Unit.MILE_SQUARED:
                result = value * 2.4909766860624e-10;
                break;
            case Unit.NAUTICAL_MILE_SQUARED:
                result = value * 1.8785833396075e-10;
                break;
            default: this._throwNotSupportedToUnit();
        }

        return result;
    }

    private static _fromMileSquared(value: number, to: Unit): number {
        let result: number = null;

        switch (to) {
            case Unit.MILLIMETER_SQUARED:
                result = value * 2589988110336;
                break;
            case Unit.METER_SQUARED:
                result = value * 2589988.110336;
                break;
            case Unit.KILOMETER_SQUARED:
                result = value * 2.589988110336;
                break;
            case Unit.INCH_SQUARED:
                result = value * 4014489599.9839;
                break;
            case Unit.FOOT_SQUARED:
                result = value * 27878398.920726;
                break;
            case Unit.YARD_SQUARED:
                result = value * 3097625.7799618;
                break;
            case Unit.CENTIMETER_SQUARED:
                result = value * 25899881103.36;
                break;
            case Unit.NAUTICAL_MILE_SQUARED:
                result = value * 0.75415532795574;
                break;
            default: this._throwNotSupportedToUnit();
        }

        return result;
    }

    private static _fromNauticalMileSquared(value: number, to: Unit): number {
        let result: number = null;

        switch (to) {
            case Unit.MILLIMETER_SQUARED:
                result = value * 3434290012054.4;
                break;
            case Unit.METER_SQUARED:
                result = value * 3434290.0120544;
                break;
            case Unit.KILOMETER_SQUARED:
                result = value * 3.4342900120544;
                break;
            case Unit.INCH_SQUARED:
                result = value * 5323160164.9833;
                break;
            case Unit.FOOT_SQUARED:
                result = value * 36966388.603652;
                break;
            case Unit.YARD_SQUARED:
                result = value * 4107410.854417;
                break;
            case Unit.MILE_SQUARED:
                result = value * 1.325986786715;
                break;
            case Unit.CENTIMETER_SQUARED:
                result = value * 34342900120.544;
                break;
            default: this._throwNotSupportedToUnit();
        }

        return result;
    }

    private static _fromFoot(value: number, to: Unit): number {
        let result: number = null;

        switch (to) {
            case Unit.MILLIMETER:
                result = value * 304.8;
                break;
            case Unit.CENTIMETER:
                result = value * 30.48;
                break;
            case Unit.METER:
                result = value * 0.3048;
                break;
            case Unit.KILOMETER:
                result = value * 0.0003048;
                break;
            case Unit.INCH:
                result = value * 12;
                break;
            case Unit.YARD:
                result = value * 0.3333333333333333;
                break;
            case Unit.MILE:
                result = value * 0.0001893939;
                break;
            case Unit.NAUTICAL_MILE:
                result = value * 0.0001645788;
                break;
            default: this._throwNotSupportedToUnit();
        }

        return result;
    }

    private static _fromFootSquared(value: number, to: Unit): number {
        let result: number = null;

        switch (to) {
            case Unit.MILLIMETER_SQUARED:
                result = value * 92903.043596611;
                break;
            case Unit.METER_SQUARED:
                result = value * 0.092903043596611;
                break;
            case Unit.KILOMETER_SQUARED:
                result = value * 9.2903043596611e-8;
                break;
            case Unit.INCH_SQUARED:
                result = value * 144.00000557418;
                break;
            case Unit.NAUTICAL_MILE_SQUARED:
                result = value * 2.7051601137505e-8;
                break;
            case Unit.YARD_SQUARED:
                result = value * 0.11111204014155;
                break;
            case Unit.MILE_SQUARED:
                result = value * 3.5870065667815e-8;
                break;
            case Unit.CENTIMETER_SQUARED:
                result = value * 929.03043596611;
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

    public static getUnitList(): Array<Unit> {
        let list: Array<Unit> = [];

        for (let i in Unit) {
            list.push((<any>Unit)[i]);
        }

        return list;
    }
}
