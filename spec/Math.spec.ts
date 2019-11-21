import * as api from '../src/api';
import {Math as TPMath} from '../src/Math';

describe('Math', () => {
    describe('Public API', () => {
        it('Math', () => {
            expect(api.Math).toBe(TPMath);
        });
    });

    describe('Methods should produce the same output as native Math', () => {
        it('abs', () => {
            expect(TPMath.abs(-123)).toBe(Math.abs(-123));
        });
    
        it('acos', () => {
            expect(TPMath.acos(0)).toBe(Math.acos(0));
        });
    
        it('asin', () => {
            expect(TPMath.asin(0)).toBe(Math.asin(0));
        });
    
        it('atan', () => {
            expect(TPMath.atan(0)).toBe(Math.atan(0));
        });
    
        it('atan2', () => {
            expect(TPMath.atan2(123, 456)).toBe(Math.atan2(123, 456));
        });
    
        it('ceil', () => {
            expect(TPMath.ceil(123.567)).toBe(Math.ceil(123.567));
        });

        it('cos', () => {
            expect(TPMath.cos(123)).toBe(Math.cos(123));
        });

        it('exp', () => {
            expect(TPMath.exp(123)).toBe(Math.exp(123));
        });

        it('floor', () => {
            expect(TPMath.floor(123.456)).toBe(Math.floor(123.456));
        });

        it('log', () => {
            expect(TPMath.log(123)).toBe(Math.log(123));
        });

        it('max', () => {
            expect(TPMath.max(123, 456, 678)).toBe(Math.max(123, 456, 678));
        });

        it('min', () => {
            expect(TPMath.min(123, 456, 678)).toBe(Math.min(123, 456, 678));
        });

        it('random', () => {
            let num: number = TPMath.random();
            expect(num).toBeGreaterThanOrEqual(0);
            expect(num).toBeLessThanOrEqual(1);
        });

        it('round', () => {
            expect(TPMath.round(123.456)).toBe(Math.round(123.456));
            expect(TPMath.round(123.568)).toBe(Math.round(123.568));
        });

        it('sin', () => {
            expect(TPMath.sin(123)).toBe(Math.sin(123));
        });

        it('sqrt', () => {
            expect(TPMath.sin(123)).toBe(Math.sin(123));
        });

        it('sqrt', () => {
            expect(TPMath.sqrt(123)).toBe(Math.sqrt(123));
        });

        it('tan', () => {
            expect(TPMath.tan(123)).toBe(Math.tan(123));
        });

        it('clz32', () => {
            expect(TPMath.clz32(123)).toBe(Math.clz32(123));
        });

        it('imul', () => {
            expect(TPMath.imul(123, 123)).toBe(Math.imul(123, 123));
        });

        it('sign', () => {
            expect(TPMath.sign(123)).toBe(Math.sign(123));
        });

        it('log10', () => {
            expect(TPMath.log10(123)).toBe(Math.log10(123));
        });

        it('log2', () => {
            expect(TPMath.log2(123)).toBe(Math.log2(123));
        });

        it('log1p', () => {
            expect(TPMath.log1p(123)).toBe(Math.log1p(123));
        });

        it('expm1', () => {
            expect(TPMath.expm1(123)).toBe(Math.expm1(123));
        });

        it('cosh', () => {
            expect(TPMath.cosh(123)).toBe(Math.cosh(123));
        });

        it('sinh', () => {
            expect(TPMath.sinh(123)).toBe(Math.sinh(123));
        });

        it('tanh', () => {
            expect(TPMath.tanh(123)).toBe(Math.tanh(123));
        });

        it('acosh', () => {
            expect(TPMath.acosh(123)).toBe(Math.acosh(123));
        });

        it('asinh', () => {
            expect(TPMath.asinh(123)).toBe(Math.asinh(123));
        });

        it('atanh', () => {
            expect(TPMath.atanh(-0.1)).toBe(Math.atanh(-0.1));
        });

        it('hypot', () => {
            expect(TPMath.hypot()).toBe(Math.hypot());
            expect(TPMath.hypot(123)).toBe(Math.hypot(123));
            expect(TPMath.hypot(Infinity)).toBe(Math.hypot(Infinity));
            expect(TPMath.hypot(NaN)).toEqual(Math.hypot(NaN));
            expect(TPMath.hypot(0)).toBe(Math.hypot(0));
            expect(TPMath.hypot(123, 456, 789)).toBe(Math.hypot(123, 456, 789));
        });

        it('trunc', () => {
            expect(TPMath.trunc(123)).toBe(Math.trunc(123));
        });

        it('fround', () => {
            expect(TPMath.fround(123.5)).toBe(Math.fround(123.5));
        });

        it('cbrt', () => {
            expect(TPMath.cbrt(123)).toBe(Math.cbrt(123));
        });
    });
});
