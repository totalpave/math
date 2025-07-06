
let native: Math = Math;

/**
 * @since 2.2.0
 */
export interface IRatioInput {
    num1: number;
    num2: number;
}

class TPMath implements Math {
    public E: number                = native.E;
    public LN10: number             = native.LN10;
    public LN2: number              = native.LN2;
    public LOG2E: number            = native.LOG2E;
    public LOG10E: number           = native.LOG10E;
    public PI: number               = native.PI;
    public SQRT1_2: number          = native.SQRT1_2;
    public SQRT2: number            = native.SQRT2;
    public EARTH_RADIUS: number     = 6371008.8;
    
    [Symbol.toStringTag]: string;

    public abs(x: number): number {
        return native.abs(x);
    }
    
    public acos(x: number): number {
        return native.acos(x);
    }
    
    public asin(x: number): number {
        return native.asin(x);
    }
    
    public atan(x: number): number {
        return native.atan(x);
    }
    
    public atan2(y: number, x: number): number {
        return native.atan2(y, x);
    }
    
    public ceil(x: number): number {
        return native.ceil(x);
    }
    
    public cos(x: number): number {
        return native.cos(x);
    }
    
    public exp(x: number): number {
        return native.exp(x);
    }
    
    public floor(x: number, decimalPlaces: number = 0): number {
        let precision = Math.pow(10, Math.floor(decimalPlaces));
        return native.floor(x * precision) / precision;
    }
    
    public log(x: number): number {
        return native.log(x);
    }
    
    public max(...values: number[]): number {
        return native.max(...values);
    }
    
    public min(...values: number[]): number {
        return native.min(...values);
    }
    
    public pow(x: number, y: number): number {
        return native.pow(x, y);
    }
    
    public random(): number {
        return native.random();
    }
    
    public round(x: number, decimalPlaces: number = 0): number {
        let precision = Math.pow(10, Math.floor(decimalPlaces));
        let value: number = native.round(x * precision) / precision;
        return value;
    }
    
    public sin(x: number): number {
        return native.sin(x);
    }
    
    public sqrt(x: number): number {
        return native.sqrt(x);
    }

    public tan(x: number): number {
        return native.tan(x);
    }

    /**
     * Returns the number of leading zero bits in the 32-bit binary representation of a number.
     * @param x A numeric expression.
     */
    public clz32(x: number): number {
        return native.clz32(x);
    }

    /**
     * Returns the result of 32-bit multiplication of two numbers.
     * @param x First number
     * @param y Second number
     */
    public imul(x: number, y: number): number {
        return native.imul(x, y);
    }

    /**
     * Returns the sign of the x, indicating whether x is positive, negative or zero.
     * @param x The numeric expression to test
     */
    public sign(x: number): number {
        return native.sign(x);
    }

    /**
     * Returns the base 10 logarithm of a number.
     * @param x A numeric expression.
     */
    public log10(x: number): number {
        return native.log10(x);
    }

    /**
     * Returns the base 2 logarithm of a number.
     * @param x A numeric expression.
     */
    public log2(x: number): number {
        return native.log2(x);
    }

    /**
     * Returns the natural logarithm of 1 + x.
     * @param x A numeric expression.
     */
    public log1p(x: number): number {
        return native.log1p(x);
    }

    /**
     * Returns the result of (e^x - 1), which is an implementation-dependent approximation to
     * subtracting 1 from the exponential function of x (e raised to the power of x, where e
     * is the base of the natural logarithms).
     * @param x A numeric expression.
     */
    public expm1(x: number): number {
        return native.expm1(x);
    }

    /**
     * Returns the hyperbolic cosine of a number.
     * @param x A numeric expression that contains an angle measured in radians.
     */
    public cosh(x: number): number {
        return native.cosh(x);
    }

    /**
     * Returns the hyperbolic sine of a number.
     * @param x A numeric expression that contains an angle measured in radians.
     */
    public sinh(x: number): number {
        return native.sinh(x);
    }

    /**
     * Returns the hyperbolic tangent of a number.
     * @param x A numeric expression that contains an angle measured in radians.
     */
    public tanh(x: number): number {
        return native.tanh(x);
    }

    /**
     * Returns the inverse hyperbolic cosine of a number.
     * @param x A numeric expression that contains an angle measured in radians.
     */
    public acosh(x: number): number {
        return native.acosh(x);
    }

    /**
     * Returns the inverse hyperbolic sine of a number.
     * @param x A numeric expression that contains an angle measured in radians.
     */
    public asinh(x: number): number {
        return native.asinh(x);
    }

    /**
     * Returns the inverse hyperbolic tangent of a number.
     * @param x A numeric expression that contains an angle measured in radians.
     */
    public atanh(x: number): number {
        return native.atanh(x);
    }

    /**
     * Returns the square root of the sum of squares of its arguments.
     * @param values Values to compute the square root for.
     *     If no arguments are passed, the result is +0.
     *     If there is only one argument, the result is the absolute value.
     *     If any argument is +Infinity or -Infinity, the result is +Infinity.
     *     If any argument is NaN, the result is NaN.
     *     If all arguments are either +0 or −0, the result is +0.
     */
    public hypot(...values: number[]): number {
        return native.hypot(...values);
    }

    /**
     * Returns the integral part of the a numeric expression, x, removing any fractional digits.
     * If x is already an integer, the result is x.
     * @param x A numeric expression.
     */
    public trunc(x: number): number {
        return native.trunc(x);
    }

    /**
     * Returns the nearest single precision float representation of a number.
     * @param x A numeric expression.
     */
    public fround(x: number): number {
        return native.fround(x);
    }

    /**
     * Returns an implementation-dependent approximation to the cube root of number.
     * @param x A numeric expression.
     */
    public cbrt(x: number): number {
        return native.cbrt(x);
    }

    /**
     * Returns a sample standard deviation
     * @param data 
     */
    public sd(data: number[], population?: boolean): number {
        let n: number = data.length;
        let sum: number = data.reduce((p: number, c: number) => {
            return p + c;
        }, 0);
        let mean: number = sum / n;
        let variance: number = 0;
        data.forEach((v: number) => {
            variance += Math.pow(v - mean, 2);
        });
        variance /= n - (population ? 0 : 1);
        return Math.sqrt(variance);
        // let s: number = Math.sqrt(variance);
        // return s / Math.sqrt(n);
    }

    /**
     * Calcultes the mission value in the right side of a ratio equation.
     * 
     * For example, if X is the missing value this function will solve either:
     * 
     * 1. A : B = C : X
     * 2. A : B = X : D
     * 
     * Arguments:
     *  - ratio     Object Literal      Should have properties num1 and num2 to create a ratio of num1 : num2
     *  - value     Object Literal      Should have properties num1 OR num2. This object must only possess 1 property.
     * 
     * 
     * Finds value.num1 or value.num2 and returns the value. 
     * 
     * The value to found is determined by which property is missing. If num2 is not supplied, num2 will be found.
     * 
     * @since 2.2.0
    */
    public calculateRatio(ratio: IRatioInput, value: Partial<IRatioInput>): number {
        let a: number = ratio.num1;
        let b: number = ratio.num2;
        let c: number | undefined | null = value.num1;
        let d: number | undefined | null = value.num2;

        if (c) {
            return c * (b / a);
        }
        else if (d) {
            return d * (a / b);
        }
        else {
            throw new Error("MathUtils.calculateRatio could not determine missing value. value should only contain 1 property named either num1 or num2.");
        }
    }

    public f16round(x: number): number {
        return Math.f16round(x);
    }
}

let math: TPMath = new TPMath();

export {math as Math};
export default math;
