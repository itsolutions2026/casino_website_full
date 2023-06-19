(self["webpackChunk"] = self["webpackChunk"] || []).push([["vendor/solana"],{

/***/ "./node_modules/@solana/buffer-layout/lib/Layout.js":
/*!**********************************************************!*\
  !*** ./node_modules/@solana/buffer-layout/lib/Layout.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* The MIT License (MIT)
 *
 * Copyright 2015-2018 Peter A. Bigot
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * Support for translating between Uint8Array instances and JavaScript
 * native types.
 *
 * {@link module:Layout~Layout|Layout} is the basis of a class
 * hierarchy that associates property names with sequences of encoded
 * bytes.
 *
 * Layouts are supported for these scalar (numeric) types:
 * * {@link module:Layout~UInt|Unsigned integers in little-endian
 *   format} with {@link module:Layout.u8|8-bit}, {@link
 *   module:Layout.u16|16-bit}, {@link module:Layout.u24|24-bit},
 *   {@link module:Layout.u32|32-bit}, {@link
 *   module:Layout.u40|40-bit}, and {@link module:Layout.u48|48-bit}
 *   representation ranges;
 * * {@link module:Layout~UIntBE|Unsigned integers in big-endian
 *   format} with {@link module:Layout.u16be|16-bit}, {@link
 *   module:Layout.u24be|24-bit}, {@link module:Layout.u32be|32-bit},
 *   {@link module:Layout.u40be|40-bit}, and {@link
 *   module:Layout.u48be|48-bit} representation ranges;
 * * {@link module:Layout~Int|Signed integers in little-endian
 *   format} with {@link module:Layout.s8|8-bit}, {@link
 *   module:Layout.s16|16-bit}, {@link module:Layout.s24|24-bit},
 *   {@link module:Layout.s32|32-bit}, {@link
 *   module:Layout.s40|40-bit}, and {@link module:Layout.s48|48-bit}
 *   representation ranges;
 * * {@link module:Layout~IntBE|Signed integers in big-endian format}
 *   with {@link module:Layout.s16be|16-bit}, {@link
 *   module:Layout.s24be|24-bit}, {@link module:Layout.s32be|32-bit},
 *   {@link module:Layout.s40be|40-bit}, and {@link
 *   module:Layout.s48be|48-bit} representation ranges;
 * * 64-bit integral values that decode to an exact (if magnitude is
 *   less than 2^53) or nearby integral Number in {@link
 *   module:Layout.nu64|unsigned little-endian}, {@link
 *   module:Layout.nu64be|unsigned big-endian}, {@link
 *   module:Layout.ns64|signed little-endian}, and {@link
 *   module:Layout.ns64be|unsigned big-endian} encodings;
 * * 32-bit floating point values with {@link
 *   module:Layout.f32|little-endian} and {@link
 *   module:Layout.f32be|big-endian} representations;
 * * 64-bit floating point values with {@link
 *   module:Layout.f64|little-endian} and {@link
 *   module:Layout.f64be|big-endian} representations;
 * * {@link module:Layout.const|Constants} that take no space in the
 *   encoded expression.
 *
 * and for these aggregate types:
 * * {@link module:Layout.seq|Sequence}s of instances of a {@link
 *   module:Layout~Layout|Layout}, with JavaScript representation as
 *   an Array and constant or data-dependent {@link
 *   module:Layout~Sequence#count|length};
 * * {@link module:Layout.struct|Structure}s that aggregate a
 *   heterogeneous sequence of {@link module:Layout~Layout|Layout}
 *   instances, with JavaScript representation as an Object;
 * * {@link module:Layout.union|Union}s that support multiple {@link
 *   module:Layout~VariantLayout|variant layouts} over a fixed
 *   (padded) or variable (not padded) span of bytes, using an
 *   unsigned integer at the start of the data or a separate {@link
 *   module:Layout.unionLayoutDiscriminator|layout element} to
 *   determine which layout to use when interpreting the buffer
 *   contents;
 * * {@link module:Layout.bits|BitStructure}s that contain a sequence
 *   of individual {@link
 *   module:Layout~BitStructure#addField|BitField}s packed into an 8,
 *   16, 24, or 32-bit unsigned integer starting at the least- or
 *   most-significant bit;
 * * {@link module:Layout.cstr|C strings} of varying length;
 * * {@link module:Layout.blob|Blobs} of fixed- or variable-{@link
 *   module:Layout~Blob#length|length} raw data.
 *
 * All {@link module:Layout~Layout|Layout} instances are immutable
 * after construction, to prevent internal state from becoming
 * inconsistent.
 *
 * @local Layout
 * @local ExternalLayout
 * @local GreedyCount
 * @local OffsetLayout
 * @local UInt
 * @local UIntBE
 * @local Int
 * @local IntBE
 * @local NearUInt64
 * @local NearUInt64BE
 * @local NearInt64
 * @local NearInt64BE
 * @local Float
 * @local FloatBE
 * @local Double
 * @local DoubleBE
 * @local Sequence
 * @local Structure
 * @local UnionDiscriminator
 * @local UnionLayoutDiscriminator
 * @local Union
 * @local VariantLayout
 * @local BitStructure
 * @local BitField
 * @local Boolean
 * @local Blob
 * @local CString
 * @local Constant
 * @local bindConstructorLayout
 * @module Layout
 * @license MIT
 * @author Peter A. Bigot
 * @see {@link https://github.com/pabigot/buffer-layout|buffer-layout on GitHub}
 */

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.s16 = exports.s8 = exports.nu64be = exports.u48be = exports.u40be = exports.u32be = exports.u24be = exports.u16be = exports.nu64 = exports.u48 = exports.u40 = exports.u32 = exports.u24 = exports.u16 = exports.u8 = exports.offset = exports.greedy = exports.Constant = exports.UTF8 = exports.CString = exports.Blob = exports.Boolean = exports.BitField = exports.BitStructure = exports.VariantLayout = exports.Union = exports.UnionLayoutDiscriminator = exports.UnionDiscriminator = exports.Structure = exports.Sequence = exports.DoubleBE = exports.Double = exports.FloatBE = exports.Float = exports.NearInt64BE = exports.NearInt64 = exports.NearUInt64BE = exports.NearUInt64 = exports.IntBE = exports.Int = exports.UIntBE = exports.UInt = exports.OffsetLayout = exports.GreedyCount = exports.ExternalLayout = exports.bindConstructorLayout = exports.nameWithProperty = exports.Layout = exports.uint8ArrayToBuffer = exports.checkUint8Array = void 0;
exports.constant = exports.utf8 = exports.cstr = exports.blob = exports.unionLayoutDiscriminator = exports.union = exports.seq = exports.bits = exports.struct = exports.f64be = exports.f64 = exports.f32be = exports.f32 = exports.ns64be = exports.s48be = exports.s40be = exports.s32be = exports.s24be = exports.s16be = exports.ns64 = exports.s48 = exports.s40 = exports.s32 = exports.s24 = void 0;
const buffer_1 = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js");
/* Check if a value is a Uint8Array.
 *
 * @ignore */
function checkUint8Array(b) {
    if (!(b instanceof Uint8Array)) {
        throw new TypeError('b must be a Uint8Array');
    }
}
exports.checkUint8Array = checkUint8Array;
/* Create a Buffer instance from a Uint8Array.
 *
 * @ignore */
function uint8ArrayToBuffer(b) {
    checkUint8Array(b);
    return buffer_1.Buffer.from(b.buffer, b.byteOffset, b.length);
}
exports.uint8ArrayToBuffer = uint8ArrayToBuffer;
/**
 * Base class for layout objects.
 *
 * **NOTE** This is an abstract base class; you can create instances
 * if it amuses you, but they won't support the {@link
 * Layout#encode|encode} or {@link Layout#decode|decode} functions.
 *
 * @param {Number} span - Initializer for {@link Layout#span|span}.  The
 * parameter must be an integer; a negative value signifies that the
 * span is {@link Layout#getSpan|value-specific}.
 *
 * @param {string} [property] - Initializer for {@link
 * Layout#property|property}.
 *
 * @abstract
 */
class Layout {
    constructor(span, property) {
        if (!Number.isInteger(span)) {
            throw new TypeError('span must be an integer');
        }
        /** The span of the layout in bytes.
         *
         * Positive values are generally expected.
         *
         * Zero will only appear in {@link Constant}s and in {@link
         * Sequence}s where the {@link Sequence#count|count} is zero.
         *
         * A negative value indicates that the span is value-specific, and
         * must be obtained using {@link Layout#getSpan|getSpan}. */
        this.span = span;
        /** The property name used when this layout is represented in an
         * Object.
         *
         * Used only for layouts that {@link Layout#decode|decode} to Object
         * instances.  If left undefined the span of the unnamed layout will
         * be treated as padding: it will not be mutated by {@link
         * Layout#encode|encode} nor represented as a property in the
         * decoded Object. */
        this.property = property;
    }
    /** Function to create an Object into which decoded properties will
     * be written.
     *
     * Used only for layouts that {@link Layout#decode|decode} to Object
     * instances, which means:
     * * {@link Structure}
     * * {@link Union}
     * * {@link VariantLayout}
     * * {@link BitStructure}
     *
     * If left undefined the JavaScript representation of these layouts
     * will be Object instances.
     *
     * See {@link bindConstructorLayout}.
     */
    makeDestinationObject() {
        return {};
    }
    /**
     * Calculate the span of a specific instance of a layout.
     *
     * @param {Uint8Array} b - the buffer that contains an encoded instance.
     *
     * @param {Number} [offset] - the offset at which the encoded instance
     * starts.  If absent a zero offset is inferred.
     *
     * @return {Number} - the number of bytes covered by the layout
     * instance.  If this method is not overridden in a subclass the
     * definition-time constant {@link Layout#span|span} will be
     * returned.
     *
     * @throws {RangeError} - if the length of the value cannot be
     * determined.
     */
    getSpan(b, offset) {
        if (0 > this.span) {
            throw new RangeError('indeterminate span');
        }
        return this.span;
    }
    /**
     * Replicate the layout using a new property.
     *
     * This function must be used to get a structurally-equivalent layout
     * with a different name since all {@link Layout} instances are
     * immutable.
     *
     * **NOTE** This is a shallow copy.  All fields except {@link
     * Layout#property|property} are strictly equal to the origin layout.
     *
     * @param {String} property - the value for {@link
     * Layout#property|property} in the replica.
     *
     * @returns {Layout} - the copy with {@link Layout#property|property}
     * set to `property`.
     */
    replicate(property) {
        const rv = Object.create(this.constructor.prototype);
        Object.assign(rv, this);
        rv.property = property;
        return rv;
    }
    /**
     * Create an object from layout properties and an array of values.
     *
     * **NOTE** This function returns `undefined` if invoked on a layout
     * that does not return its value as an Object.  Objects are
     * returned for things that are a {@link Structure}, which includes
     * {@link VariantLayout|variant layouts} if they are structures, and
     * excludes {@link Union}s.  If you want this feature for a union
     * you must use {@link Union.getVariant|getVariant} to select the
     * desired layout.
     *
     * @param {Array} values - an array of values that correspond to the
     * default order for properties.  As with {@link Layout#decode|decode}
     * layout elements that have no property name are skipped when
     * iterating over the array values.  Only the top-level properties are
     * assigned; arguments are not assigned to properties of contained
     * layouts.  Any unused values are ignored.
     *
     * @return {(Object|undefined)}
     */
    fromArray(values) {
        return undefined;
    }
}
exports.Layout = Layout;
/* Provide text that carries a name (such as for a function that will
 * be throwing an error) annotated with the property of a given layout
 * (such as one for which the value was unacceptable).
 *
 * @ignore */
function nameWithProperty(name, lo) {
    if (lo.property) {
        return name + '[' + lo.property + ']';
    }
    return name;
}
exports.nameWithProperty = nameWithProperty;
/**
 * Augment a class so that instances can be encoded/decoded using a
 * given layout.
 *
 * Calling this function couples `Class` with `layout` in several ways:
 *
 * * `Class.layout_` becomes a static member property equal to `layout`;
 * * `layout.boundConstructor_` becomes a static member property equal
 *    to `Class`;
 * * The {@link Layout#makeDestinationObject|makeDestinationObject()}
 *   property of `layout` is set to a function that returns a `new
 *   Class()`;
 * * `Class.decode(b, offset)` becomes a static member function that
 *   delegates to {@link Layout#decode|layout.decode}.  The
 *   synthesized function may be captured and extended.
 * * `Class.prototype.encode(b, offset)` provides an instance member
 *   function that delegates to {@link Layout#encode|layout.encode}
 *   with `src` set to `this`.  The synthesized function may be
 *   captured and extended, but when the extension is invoked `this`
 *   must be explicitly bound to the instance.
 *
 * @param {class} Class - a JavaScript class with a nullary
 * constructor.
 *
 * @param {Layout} layout - the {@link Layout} instance used to encode
 * instances of `Class`.
 */
// `Class` must be a constructor Function, but the assignment of a `layout_` property to it makes it difficult to type
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function bindConstructorLayout(Class, layout) {
    if ('function' !== typeof Class) {
        throw new TypeError('Class must be constructor');
    }
    if (Object.prototype.hasOwnProperty.call(Class, 'layout_')) {
        throw new Error('Class is already bound to a layout');
    }
    if (!(layout && (layout instanceof Layout))) {
        throw new TypeError('layout must be a Layout');
    }
    if (Object.prototype.hasOwnProperty.call(layout, 'boundConstructor_')) {
        throw new Error('layout is already bound to a constructor');
    }
    Class.layout_ = layout;
    layout.boundConstructor_ = Class;
    layout.makeDestinationObject = (() => new Class());
    Object.defineProperty(Class.prototype, 'encode', {
        value(b, offset) {
            return layout.encode(this, b, offset);
        },
        writable: true,
    });
    Object.defineProperty(Class, 'decode', {
        value(b, offset) {
            return layout.decode(b, offset);
        },
        writable: true,
    });
}
exports.bindConstructorLayout = bindConstructorLayout;
/**
 * An object that behaves like a layout but does not consume space
 * within its containing layout.
 *
 * This is primarily used to obtain metadata about a member, such as a
 * {@link OffsetLayout} that can provide data about a {@link
 * Layout#getSpan|value-specific span}.
 *
 * **NOTE** This is an abstract base class; you can create instances
 * if it amuses you, but they won't support {@link
 * ExternalLayout#isCount|isCount} or other {@link Layout} functions.
 *
 * @param {Number} span - initializer for {@link Layout#span|span}.
 * The parameter can range from 1 through 6.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @abstract
 * @augments {Layout}
 */
class ExternalLayout extends Layout {
    /**
     * Return `true` iff the external layout decodes to an unsigned
     * integer layout.
     *
     * In that case it can be used as the source of {@link
     * Sequence#count|Sequence counts}, {@link Blob#length|Blob lengths},
     * or as {@link UnionLayoutDiscriminator#layout|external union
     * discriminators}.
     *
     * @abstract
     */
    isCount() {
        throw new Error('ExternalLayout is abstract');
    }
}
exports.ExternalLayout = ExternalLayout;
/**
 * An {@link ExternalLayout} that determines its {@link
 * Layout#decode|value} based on offset into and length of the buffer
 * on which it is invoked.
 *
 * *Factory*: {@link module:Layout.greedy|greedy}
 *
 * @param {Number} [elementSpan] - initializer for {@link
 * GreedyCount#elementSpan|elementSpan}.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {ExternalLayout}
 */
class GreedyCount extends ExternalLayout {
    constructor(elementSpan = 1, property) {
        if ((!Number.isInteger(elementSpan)) || (0 >= elementSpan)) {
            throw new TypeError('elementSpan must be a (positive) integer');
        }
        super(-1, property);
        /** The layout for individual elements of the sequence.  The value
         * must be a positive integer.  If not provided, the value will be
         * 1. */
        this.elementSpan = elementSpan;
    }
    /** @override */
    isCount() {
        return true;
    }
    /** @override */
    decode(b, offset = 0) {
        checkUint8Array(b);
        const rem = b.length - offset;
        return Math.floor(rem / this.elementSpan);
    }
    /** @override */
    encode(src, b, offset) {
        return 0;
    }
}
exports.GreedyCount = GreedyCount;
/**
 * An {@link ExternalLayout} that supports accessing a {@link Layout}
 * at a fixed offset from the start of another Layout.  The offset may
 * be before, within, or after the base layout.
 *
 * *Factory*: {@link module:Layout.offset|offset}
 *
 * @param {Layout} layout - initializer for {@link
 * OffsetLayout#layout|layout}, modulo `property`.
 *
 * @param {Number} [offset] - Initializes {@link
 * OffsetLayout#offset|offset}.  Defaults to zero.
 *
 * @param {string} [property] - Optional new property name for a
 * {@link Layout#replicate| replica} of `layout` to be used as {@link
 * OffsetLayout#layout|layout}.  If not provided the `layout` is used
 * unchanged.
 *
 * @augments {Layout}
 */
class OffsetLayout extends ExternalLayout {
    constructor(layout, offset = 0, property) {
        if (!(layout instanceof Layout)) {
            throw new TypeError('layout must be a Layout');
        }
        if (!Number.isInteger(offset)) {
            throw new TypeError('offset must be integer or undefined');
        }
        super(layout.span, property || layout.property);
        /** The subordinated layout. */
        this.layout = layout;
        /** The location of {@link OffsetLayout#layout} relative to the
         * start of another layout.
         *
         * The value may be positive or negative, but an error will thrown
         * if at the point of use it goes outside the span of the Uint8Array
         * being accessed.  */
        this.offset = offset;
    }
    /** @override */
    isCount() {
        return ((this.layout instanceof UInt)
            || (this.layout instanceof UIntBE));
    }
    /** @override */
    decode(b, offset = 0) {
        return this.layout.decode(b, offset + this.offset);
    }
    /** @override */
    encode(src, b, offset = 0) {
        return this.layout.encode(src, b, offset + this.offset);
    }
}
exports.OffsetLayout = OffsetLayout;
/**
 * Represent an unsigned integer in little-endian format.
 *
 * *Factory*: {@link module:Layout.u8|u8}, {@link
 *  module:Layout.u16|u16}, {@link module:Layout.u24|u24}, {@link
 *  module:Layout.u32|u32}, {@link module:Layout.u40|u40}, {@link
 *  module:Layout.u48|u48}
 *
 * @param {Number} span - initializer for {@link Layout#span|span}.
 * The parameter can range from 1 through 6.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */
class UInt extends Layout {
    constructor(span, property) {
        super(span, property);
        if (6 < this.span) {
            throw new RangeError('span must not exceed 6 bytes');
        }
    }
    /** @override */
    decode(b, offset = 0) {
        return uint8ArrayToBuffer(b).readUIntLE(offset, this.span);
    }
    /** @override */
    encode(src, b, offset = 0) {
        uint8ArrayToBuffer(b).writeUIntLE(src, offset, this.span);
        return this.span;
    }
}
exports.UInt = UInt;
/**
 * Represent an unsigned integer in big-endian format.
 *
 * *Factory*: {@link module:Layout.u8be|u8be}, {@link
 * module:Layout.u16be|u16be}, {@link module:Layout.u24be|u24be},
 * {@link module:Layout.u32be|u32be}, {@link
 * module:Layout.u40be|u40be}, {@link module:Layout.u48be|u48be}
 *
 * @param {Number} span - initializer for {@link Layout#span|span}.
 * The parameter can range from 1 through 6.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */
class UIntBE extends Layout {
    constructor(span, property) {
        super(span, property);
        if (6 < this.span) {
            throw new RangeError('span must not exceed 6 bytes');
        }
    }
    /** @override */
    decode(b, offset = 0) {
        return uint8ArrayToBuffer(b).readUIntBE(offset, this.span);
    }
    /** @override */
    encode(src, b, offset = 0) {
        uint8ArrayToBuffer(b).writeUIntBE(src, offset, this.span);
        return this.span;
    }
}
exports.UIntBE = UIntBE;
/**
 * Represent a signed integer in little-endian format.
 *
 * *Factory*: {@link module:Layout.s8|s8}, {@link
 *  module:Layout.s16|s16}, {@link module:Layout.s24|s24}, {@link
 *  module:Layout.s32|s32}, {@link module:Layout.s40|s40}, {@link
 *  module:Layout.s48|s48}
 *
 * @param {Number} span - initializer for {@link Layout#span|span}.
 * The parameter can range from 1 through 6.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */
class Int extends Layout {
    constructor(span, property) {
        super(span, property);
        if (6 < this.span) {
            throw new RangeError('span must not exceed 6 bytes');
        }
    }
    /** @override */
    decode(b, offset = 0) {
        return uint8ArrayToBuffer(b).readIntLE(offset, this.span);
    }
    /** @override */
    encode(src, b, offset = 0) {
        uint8ArrayToBuffer(b).writeIntLE(src, offset, this.span);
        return this.span;
    }
}
exports.Int = Int;
/**
 * Represent a signed integer in big-endian format.
 *
 * *Factory*: {@link module:Layout.s8be|s8be}, {@link
 * module:Layout.s16be|s16be}, {@link module:Layout.s24be|s24be},
 * {@link module:Layout.s32be|s32be}, {@link
 * module:Layout.s40be|s40be}, {@link module:Layout.s48be|s48be}
 *
 * @param {Number} span - initializer for {@link Layout#span|span}.
 * The parameter can range from 1 through 6.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */
class IntBE extends Layout {
    constructor(span, property) {
        super(span, property);
        if (6 < this.span) {
            throw new RangeError('span must not exceed 6 bytes');
        }
    }
    /** @override */
    decode(b, offset = 0) {
        return uint8ArrayToBuffer(b).readIntBE(offset, this.span);
    }
    /** @override */
    encode(src, b, offset = 0) {
        uint8ArrayToBuffer(b).writeIntBE(src, offset, this.span);
        return this.span;
    }
}
exports.IntBE = IntBE;
const V2E32 = Math.pow(2, 32);
/* True modulus high and low 32-bit words, where low word is always
 * non-negative. */
function divmodInt64(src) {
    const hi32 = Math.floor(src / V2E32);
    const lo32 = src - (hi32 * V2E32);
    return { hi32, lo32 };
}
/* Reconstruct Number from quotient and non-negative remainder */
function roundedInt64(hi32, lo32) {
    return hi32 * V2E32 + lo32;
}
/**
 * Represent an unsigned 64-bit integer in little-endian format when
 * encoded and as a near integral JavaScript Number when decoded.
 *
 * *Factory*: {@link module:Layout.nu64|nu64}
 *
 * **NOTE** Values with magnitude greater than 2^52 may not decode to
 * the exact value of the encoded representation.
 *
 * @augments {Layout}
 */
class NearUInt64 extends Layout {
    constructor(property) {
        super(8, property);
    }
    /** @override */
    decode(b, offset = 0) {
        const buffer = uint8ArrayToBuffer(b);
        const lo32 = buffer.readUInt32LE(offset);
        const hi32 = buffer.readUInt32LE(offset + 4);
        return roundedInt64(hi32, lo32);
    }
    /** @override */
    encode(src, b, offset = 0) {
        const split = divmodInt64(src);
        const buffer = uint8ArrayToBuffer(b);
        buffer.writeUInt32LE(split.lo32, offset);
        buffer.writeUInt32LE(split.hi32, offset + 4);
        return 8;
    }
}
exports.NearUInt64 = NearUInt64;
/**
 * Represent an unsigned 64-bit integer in big-endian format when
 * encoded and as a near integral JavaScript Number when decoded.
 *
 * *Factory*: {@link module:Layout.nu64be|nu64be}
 *
 * **NOTE** Values with magnitude greater than 2^52 may not decode to
 * the exact value of the encoded representation.
 *
 * @augments {Layout}
 */
class NearUInt64BE extends Layout {
    constructor(property) {
        super(8, property);
    }
    /** @override */
    decode(b, offset = 0) {
        const buffer = uint8ArrayToBuffer(b);
        const hi32 = buffer.readUInt32BE(offset);
        const lo32 = buffer.readUInt32BE(offset + 4);
        return roundedInt64(hi32, lo32);
    }
    /** @override */
    encode(src, b, offset = 0) {
        const split = divmodInt64(src);
        const buffer = uint8ArrayToBuffer(b);
        buffer.writeUInt32BE(split.hi32, offset);
        buffer.writeUInt32BE(split.lo32, offset + 4);
        return 8;
    }
}
exports.NearUInt64BE = NearUInt64BE;
/**
 * Represent a signed 64-bit integer in little-endian format when
 * encoded and as a near integral JavaScript Number when decoded.
 *
 * *Factory*: {@link module:Layout.ns64|ns64}
 *
 * **NOTE** Values with magnitude greater than 2^52 may not decode to
 * the exact value of the encoded representation.
 *
 * @augments {Layout}
 */
class NearInt64 extends Layout {
    constructor(property) {
        super(8, property);
    }
    /** @override */
    decode(b, offset = 0) {
        const buffer = uint8ArrayToBuffer(b);
        const lo32 = buffer.readUInt32LE(offset);
        const hi32 = buffer.readInt32LE(offset + 4);
        return roundedInt64(hi32, lo32);
    }
    /** @override */
    encode(src, b, offset = 0) {
        const split = divmodInt64(src);
        const buffer = uint8ArrayToBuffer(b);
        buffer.writeUInt32LE(split.lo32, offset);
        buffer.writeInt32LE(split.hi32, offset + 4);
        return 8;
    }
}
exports.NearInt64 = NearInt64;
/**
 * Represent a signed 64-bit integer in big-endian format when
 * encoded and as a near integral JavaScript Number when decoded.
 *
 * *Factory*: {@link module:Layout.ns64be|ns64be}
 *
 * **NOTE** Values with magnitude greater than 2^52 may not decode to
 * the exact value of the encoded representation.
 *
 * @augments {Layout}
 */
class NearInt64BE extends Layout {
    constructor(property) {
        super(8, property);
    }
    /** @override */
    decode(b, offset = 0) {
        const buffer = uint8ArrayToBuffer(b);
        const hi32 = buffer.readInt32BE(offset);
        const lo32 = buffer.readUInt32BE(offset + 4);
        return roundedInt64(hi32, lo32);
    }
    /** @override */
    encode(src, b, offset = 0) {
        const split = divmodInt64(src);
        const buffer = uint8ArrayToBuffer(b);
        buffer.writeInt32BE(split.hi32, offset);
        buffer.writeUInt32BE(split.lo32, offset + 4);
        return 8;
    }
}
exports.NearInt64BE = NearInt64BE;
/**
 * Represent a 32-bit floating point number in little-endian format.
 *
 * *Factory*: {@link module:Layout.f32|f32}
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */
class Float extends Layout {
    constructor(property) {
        super(4, property);
    }
    /** @override */
    decode(b, offset = 0) {
        return uint8ArrayToBuffer(b).readFloatLE(offset);
    }
    /** @override */
    encode(src, b, offset = 0) {
        uint8ArrayToBuffer(b).writeFloatLE(src, offset);
        return 4;
    }
}
exports.Float = Float;
/**
 * Represent a 32-bit floating point number in big-endian format.
 *
 * *Factory*: {@link module:Layout.f32be|f32be}
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */
class FloatBE extends Layout {
    constructor(property) {
        super(4, property);
    }
    /** @override */
    decode(b, offset = 0) {
        return uint8ArrayToBuffer(b).readFloatBE(offset);
    }
    /** @override */
    encode(src, b, offset = 0) {
        uint8ArrayToBuffer(b).writeFloatBE(src, offset);
        return 4;
    }
}
exports.FloatBE = FloatBE;
/**
 * Represent a 64-bit floating point number in little-endian format.
 *
 * *Factory*: {@link module:Layout.f64|f64}
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */
class Double extends Layout {
    constructor(property) {
        super(8, property);
    }
    /** @override */
    decode(b, offset = 0) {
        return uint8ArrayToBuffer(b).readDoubleLE(offset);
    }
    /** @override */
    encode(src, b, offset = 0) {
        uint8ArrayToBuffer(b).writeDoubleLE(src, offset);
        return 8;
    }
}
exports.Double = Double;
/**
 * Represent a 64-bit floating point number in big-endian format.
 *
 * *Factory*: {@link module:Layout.f64be|f64be}
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */
class DoubleBE extends Layout {
    constructor(property) {
        super(8, property);
    }
    /** @override */
    decode(b, offset = 0) {
        return uint8ArrayToBuffer(b).readDoubleBE(offset);
    }
    /** @override */
    encode(src, b, offset = 0) {
        uint8ArrayToBuffer(b).writeDoubleBE(src, offset);
        return 8;
    }
}
exports.DoubleBE = DoubleBE;
/**
 * Represent a contiguous sequence of a specific layout as an Array.
 *
 * *Factory*: {@link module:Layout.seq|seq}
 *
 * @param {Layout} elementLayout - initializer for {@link
 * Sequence#elementLayout|elementLayout}.
 *
 * @param {(Number|ExternalLayout)} count - initializer for {@link
 * Sequence#count|count}.  The parameter must be either a positive
 * integer or an instance of {@link ExternalLayout}.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */
class Sequence extends Layout {
    constructor(elementLayout, count, property) {
        if (!(elementLayout instanceof Layout)) {
            throw new TypeError('elementLayout must be a Layout');
        }
        if (!(((count instanceof ExternalLayout) && count.isCount())
            || (Number.isInteger(count) && (0 <= count)))) {
            throw new TypeError('count must be non-negative integer '
                + 'or an unsigned integer ExternalLayout');
        }
        let span = -1;
        if ((!(count instanceof ExternalLayout))
            && (0 < elementLayout.span)) {
            span = count * elementLayout.span;
        }
        super(span, property);
        /** The layout for individual elements of the sequence. */
        this.elementLayout = elementLayout;
        /** The number of elements in the sequence.
         *
         * This will be either a non-negative integer or an instance of
         * {@link ExternalLayout} for which {@link
         * ExternalLayout#isCount|isCount()} is `true`. */
        this.count = count;
    }
    /** @override */
    getSpan(b, offset = 0) {
        if (0 <= this.span) {
            return this.span;
        }
        let span = 0;
        let count = this.count;
        if (count instanceof ExternalLayout) {
            count = count.decode(b, offset);
        }
        if (0 < this.elementLayout.span) {
            span = count * this.elementLayout.span;
        }
        else {
            let idx = 0;
            while (idx < count) {
                span += this.elementLayout.getSpan(b, offset + span);
                ++idx;
            }
        }
        return span;
    }
    /** @override */
    decode(b, offset = 0) {
        const rv = [];
        let i = 0;
        let count = this.count;
        if (count instanceof ExternalLayout) {
            count = count.decode(b, offset);
        }
        while (i < count) {
            rv.push(this.elementLayout.decode(b, offset));
            offset += this.elementLayout.getSpan(b, offset);
            i += 1;
        }
        return rv;
    }
    /** Implement {@link Layout#encode|encode} for {@link Sequence}.
     *
     * **NOTE** If `src` is shorter than {@link Sequence#count|count} then
     * the unused space in the buffer is left unchanged.  If `src` is
     * longer than {@link Sequence#count|count} the unneeded elements are
     * ignored.
     *
     * **NOTE** If {@link Layout#count|count} is an instance of {@link
     * ExternalLayout} then the length of `src` will be encoded as the
     * count after `src` is encoded. */
    encode(src, b, offset = 0) {
        const elo = this.elementLayout;
        const span = src.reduce((span, v) => {
            return span + elo.encode(v, b, offset + span);
        }, 0);
        if (this.count instanceof ExternalLayout) {
            this.count.encode(src.length, b, offset);
        }
        return span;
    }
}
exports.Sequence = Sequence;
/**
 * Represent a contiguous sequence of arbitrary layout elements as an
 * Object.
 *
 * *Factory*: {@link module:Layout.struct|struct}
 *
 * **NOTE** The {@link Layout#span|span} of the structure is variable
 * if any layout in {@link Structure#fields|fields} has a variable
 * span.  When {@link Layout#encode|encoding} we must have a value for
 * all variable-length fields, or we wouldn't be able to figure out
 * how much space to use for storage.  We can only identify the value
 * for a field when it has a {@link Layout#property|property}.  As
 * such, although a structure may contain both unnamed fields and
 * variable-length fields, it cannot contain an unnamed
 * variable-length field.
 *
 * @param {Layout[]} fields - initializer for {@link
 * Structure#fields|fields}.  An error is raised if this contains a
 * variable-length field for which a {@link Layout#property|property}
 * is not defined.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @param {Boolean} [decodePrefixes] - initializer for {@link
 * Structure#decodePrefixes|property}.
 *
 * @throws {Error} - if `fields` contains an unnamed variable-length
 * layout.
 *
 * @augments {Layout}
 */
class Structure extends Layout {
    constructor(fields, property, decodePrefixes) {
        if (!(Array.isArray(fields)
            && fields.reduce((acc, v) => acc && (v instanceof Layout), true))) {
            throw new TypeError('fields must be array of Layout instances');
        }
        if (('boolean' === typeof property)
            && (undefined === decodePrefixes)) {
            decodePrefixes = property;
            property = undefined;
        }
        /* Verify absence of unnamed variable-length fields. */
        for (const fd of fields) {
            if ((0 > fd.span)
                && (undefined === fd.property)) {
                throw new Error('fields cannot contain unnamed variable-length layout');
            }
        }
        let span = -1;
        try {
            span = fields.reduce((span, fd) => span + fd.getSpan(), 0);
        }
        catch (e) {
            // ignore error
        }
        super(span, property);
        /** The sequence of {@link Layout} values that comprise the
         * structure.
         *
         * The individual elements need not be the same type, and may be
         * either scalar or aggregate layouts.  If a member layout leaves
         * its {@link Layout#property|property} undefined the
         * corresponding region of the buffer associated with the element
         * will not be mutated.
         *
         * @type {Layout[]} */
        this.fields = fields;
        /** Control behavior of {@link Layout#decode|decode()} given short
         * buffers.
         *
         * In some situations a structure many be extended with additional
         * fields over time, with older installations providing only a
         * prefix of the full structure.  If this property is `true`
         * decoding will accept those buffers and leave subsequent fields
         * undefined, as long as the buffer ends at a field boundary.
         * Defaults to `false`. */
        this.decodePrefixes = !!decodePrefixes;
    }
    /** @override */
    getSpan(b, offset = 0) {
        if (0 <= this.span) {
            return this.span;
        }
        let span = 0;
        try {
            span = this.fields.reduce((span, fd) => {
                const fsp = fd.getSpan(b, offset);
                offset += fsp;
                return span + fsp;
            }, 0);
        }
        catch (e) {
            throw new RangeError('indeterminate span');
        }
        return span;
    }
    /** @override */
    decode(b, offset = 0) {
        checkUint8Array(b);
        const dest = this.makeDestinationObject();
        for (const fd of this.fields) {
            if (undefined !== fd.property) {
                dest[fd.property] = fd.decode(b, offset);
            }
            offset += fd.getSpan(b, offset);
            if (this.decodePrefixes
                && (b.length === offset)) {
                break;
            }
        }
        return dest;
    }
    /** Implement {@link Layout#encode|encode} for {@link Structure}.
     *
     * If `src` is missing a property for a member with a defined {@link
     * Layout#property|property} the corresponding region of the buffer is
     * left unmodified. */
    encode(src, b, offset = 0) {
        const firstOffset = offset;
        let lastOffset = 0;
        let lastWrote = 0;
        for (const fd of this.fields) {
            let span = fd.span;
            lastWrote = (0 < span) ? span : 0;
            if (undefined !== fd.property) {
                const fv = src[fd.property];
                if (undefined !== fv) {
                    lastWrote = fd.encode(fv, b, offset);
                    if (0 > span) {
                        /* Read the as-encoded span, which is not necessarily the
                         * same as what we wrote. */
                        span = fd.getSpan(b, offset);
                    }
                }
            }
            lastOffset = offset;
            offset += span;
        }
        /* Use (lastOffset + lastWrote) instead of offset because the last
         * item may have had a dynamic length and we don't want to include
         * the padding between it and the end of the space reserved for
         * it. */
        return (lastOffset + lastWrote) - firstOffset;
    }
    /** @override */
    fromArray(values) {
        const dest = this.makeDestinationObject();
        for (const fd of this.fields) {
            if ((undefined !== fd.property)
                && (0 < values.length)) {
                dest[fd.property] = values.shift();
            }
        }
        return dest;
    }
    /**
     * Get access to the layout of a given property.
     *
     * @param {String} property - the structure member of interest.
     *
     * @return {Layout} - the layout associated with `property`, or
     * undefined if there is no such property.
     */
    layoutFor(property) {
        if ('string' !== typeof property) {
            throw new TypeError('property must be string');
        }
        for (const fd of this.fields) {
            if (fd.property === property) {
                return fd;
            }
        }
        return undefined;
    }
    /**
     * Get the offset of a structure member.
     *
     * @param {String} property - the structure member of interest.
     *
     * @return {Number} - the offset in bytes to the start of `property`
     * within the structure, or undefined if `property` is not a field
     * within the structure.  If the property is a member but follows a
     * variable-length structure member a negative number will be
     * returned.
     */
    offsetOf(property) {
        if ('string' !== typeof property) {
            throw new TypeError('property must be string');
        }
        let offset = 0;
        for (const fd of this.fields) {
            if (fd.property === property) {
                return offset;
            }
            if (0 > fd.span) {
                offset = -1;
            }
            else if (0 <= offset) {
                offset += fd.span;
            }
        }
        return undefined;
    }
}
exports.Structure = Structure;
/**
 * An object that can provide a {@link
 * Union#discriminator|discriminator} API for {@link Union}.
 *
 * **NOTE** This is an abstract base class; you can create instances
 * if it amuses you, but they won't support the {@link
 * UnionDiscriminator#encode|encode} or {@link
 * UnionDiscriminator#decode|decode} functions.
 *
 * @param {string} [property] - Default for {@link
 * UnionDiscriminator#property|property}.
 *
 * @abstract
 */
class UnionDiscriminator {
    constructor(property) {
        /** The {@link Layout#property|property} to be used when the
         * discriminator is referenced in isolation (generally when {@link
         * Union#decode|Union decode} cannot delegate to a specific
         * variant). */
        this.property = property;
    }
    /** Analog to {@link Layout#decode|Layout decode} for union discriminators.
     *
     * The implementation of this method need not reference the buffer if
     * variant information is available through other means. */
    decode(b, offset) {
        throw new Error('UnionDiscriminator is abstract');
    }
    /** Analog to {@link Layout#decode|Layout encode} for union discriminators.
     *
     * The implementation of this method need not store the value if
     * variant information is maintained through other means. */
    encode(src, b, offset) {
        throw new Error('UnionDiscriminator is abstract');
    }
}
exports.UnionDiscriminator = UnionDiscriminator;
/**
 * An object that can provide a {@link
 * UnionDiscriminator|discriminator API} for {@link Union} using an
 * unsigned integral {@link Layout} instance located either inside or
 * outside the union.
 *
 * @param {ExternalLayout} layout - initializes {@link
 * UnionLayoutDiscriminator#layout|layout}.  Must satisfy {@link
 * ExternalLayout#isCount|isCount()}.
 *
 * @param {string} [property] - Default for {@link
 * UnionDiscriminator#property|property}, superseding the property
 * from `layout`, but defaulting to `variant` if neither `property`
 * nor layout provide a property name.
 *
 * @augments {UnionDiscriminator}
 */
class UnionLayoutDiscriminator extends UnionDiscriminator {
    constructor(layout, property) {
        if (!((layout instanceof ExternalLayout)
            && layout.isCount())) {
            throw new TypeError('layout must be an unsigned integer ExternalLayout');
        }
        super(property || layout.property || 'variant');
        /** The {@link ExternalLayout} used to access the discriminator
         * value. */
        this.layout = layout;
    }
    /** Delegate decoding to {@link UnionLayoutDiscriminator#layout|layout}. */
    decode(b, offset) {
        return this.layout.decode(b, offset);
    }
    /** Delegate encoding to {@link UnionLayoutDiscriminator#layout|layout}. */
    encode(src, b, offset) {
        return this.layout.encode(src, b, offset);
    }
}
exports.UnionLayoutDiscriminator = UnionLayoutDiscriminator;
/**
 * Represent any number of span-compatible layouts.
 *
 * *Factory*: {@link module:Layout.union|union}
 *
 * If the union has a {@link Union#defaultLayout|default layout} that
 * layout must have a non-negative {@link Layout#span|span}.  The span
 * of a fixed-span union includes its {@link
 * Union#discriminator|discriminator} if the variant is a {@link
 * Union#usesPrefixDiscriminator|prefix of the union}, plus the span
 * of its {@link Union#defaultLayout|default layout}.
 *
 * If the union does not have a default layout then the encoded span
 * of the union depends on the encoded span of its variant (which may
 * be fixed or variable).
 *
 * {@link VariantLayout#layout|Variant layout}s are added through
 * {@link Union#addVariant|addVariant}.  If the union has a default
 * layout, the span of the {@link VariantLayout#layout|layout
 * contained by the variant} must not exceed the span of the {@link
 * Union#defaultLayout|default layout} (minus the span of a {@link
 * Union#usesPrefixDiscriminator|prefix disriminator}, if used).  The
 * span of the variant will equal the span of the union itself.
 *
 * The variant for a buffer can only be identified from the {@link
 * Union#discriminator|discriminator} {@link
 * UnionDiscriminator#property|property} (in the case of the {@link
 * Union#defaultLayout|default layout}), or by using {@link
 * Union#getVariant|getVariant} and examining the resulting {@link
 * VariantLayout} instance.
 *
 * A variant compatible with a JavaScript object can be identified
 * using {@link Union#getSourceVariant|getSourceVariant}.
 *
 * @param {(UnionDiscriminator|ExternalLayout|Layout)} discr - How to
 * identify the layout used to interpret the union contents.  The
 * parameter must be an instance of {@link UnionDiscriminator}, an
 * {@link ExternalLayout} that satisfies {@link
 * ExternalLayout#isCount|isCount()}, or {@link UInt} (or {@link
 * UIntBE}).  When a non-external layout element is passed the layout
 * appears at the start of the union.  In all cases the (synthesized)
 * {@link UnionDiscriminator} instance is recorded as {@link
 * Union#discriminator|discriminator}.
 *
 * @param {(Layout|null)} defaultLayout - initializer for {@link
 * Union#defaultLayout|defaultLayout}.  If absent defaults to `null`.
 * If `null` there is no default layout: the union has data-dependent
 * length and attempts to decode or encode unrecognized variants will
 * throw an exception.  A {@link Layout} instance must have a
 * non-negative {@link Layout#span|span}, and if it lacks a {@link
 * Layout#property|property} the {@link
 * Union#defaultLayout|defaultLayout} will be a {@link
 * Layout#replicate|replica} with property `content`.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */
class Union extends Layout {
    constructor(discr, defaultLayout, property) {
        let discriminator;
        if ((discr instanceof UInt)
            || (discr instanceof UIntBE)) {
            discriminator = new UnionLayoutDiscriminator(new OffsetLayout(discr));
        }
        else if ((discr instanceof ExternalLayout)
            && discr.isCount()) {
            discriminator = new UnionLayoutDiscriminator(discr);
        }
        else if (!(discr instanceof UnionDiscriminator)) {
            throw new TypeError('discr must be a UnionDiscriminator '
                + 'or an unsigned integer layout');
        }
        else {
            discriminator = discr;
        }
        if (undefined === defaultLayout) {
            defaultLayout = null;
        }
        if (!((null === defaultLayout)
            || (defaultLayout instanceof Layout))) {
            throw new TypeError('defaultLayout must be null or a Layout');
        }
        if (null !== defaultLayout) {
            if (0 > defaultLayout.span) {
                throw new Error('defaultLayout must have constant span');
            }
            if (undefined === defaultLayout.property) {
                defaultLayout = defaultLayout.replicate('content');
            }
        }
        /* The union span can be estimated only if there's a default
         * layout.  The union spans its default layout, plus any prefix
         * variant layout.  By construction both layouts, if present, have
         * non-negative span. */
        let span = -1;
        if (defaultLayout) {
            span = defaultLayout.span;
            if ((0 <= span) && ((discr instanceof UInt)
                || (discr instanceof UIntBE))) {
                span += discriminator.layout.span;
            }
        }
        super(span, property);
        /** The interface for the discriminator value in isolation.
         *
         * This a {@link UnionDiscriminator} either passed to the
         * constructor or synthesized from the `discr` constructor
         * argument.  {@link
         * Union#usesPrefixDiscriminator|usesPrefixDiscriminator} will be
         * `true` iff the `discr` parameter was a non-offset {@link
         * Layout} instance. */
        this.discriminator = discriminator;
        /** `true` if the {@link Union#discriminator|discriminator} is the
         * first field in the union.
         *
         * If `false` the discriminator is obtained from somewhere
         * else. */
        this.usesPrefixDiscriminator = (discr instanceof UInt)
            || (discr instanceof UIntBE);
        /** The layout for non-discriminator content when the value of the
         * discriminator is not recognized.
         *
         * This is the value passed to the constructor.  It is
         * structurally equivalent to the second component of {@link
         * Union#layout|layout} but may have a different property
         * name. */
        this.defaultLayout = defaultLayout;
        /** A registry of allowed variants.
         *
         * The keys are unsigned integers which should be compatible with
         * {@link Union.discriminator|discriminator}.  The property value
         * is the corresponding {@link VariantLayout} instances assigned
         * to this union by {@link Union#addVariant|addVariant}.
         *
         * **NOTE** The registry remains mutable so that variants can be
         * {@link Union#addVariant|added} at any time.  Users should not
         * manipulate the content of this property. */
        this.registry = {};
        /* Private variable used when invoking getSourceVariant */
        let boundGetSourceVariant = this.defaultGetSourceVariant.bind(this);
        /** Function to infer the variant selected by a source object.
         *
         * Defaults to {@link
         * Union#defaultGetSourceVariant|defaultGetSourceVariant} but may
         * be overridden using {@link
         * Union#configGetSourceVariant|configGetSourceVariant}.
         *
         * @param {Object} src - as with {@link
         * Union#defaultGetSourceVariant|defaultGetSourceVariant}.
         *
         * @returns {(undefined|VariantLayout)} The default variant
         * (`undefined`) or first registered variant that uses a property
         * available in `src`. */
        this.getSourceVariant = function (src) {
            return boundGetSourceVariant(src);
        };
        /** Function to override the implementation of {@link
         * Union#getSourceVariant|getSourceVariant}.
         *
         * Use this if the desired variant cannot be identified using the
         * algorithm of {@link
         * Union#defaultGetSourceVariant|defaultGetSourceVariant}.
         *
         * **NOTE** The provided function will be invoked bound to this
         * Union instance, providing local access to {@link
         * Union#registry|registry}.
         *
         * @param {Function} gsv - a function that follows the API of
         * {@link Union#defaultGetSourceVariant|defaultGetSourceVariant}. */
        this.configGetSourceVariant = function (gsv) {
            boundGetSourceVariant = gsv.bind(this);
        };
    }
    /** @override */
    getSpan(b, offset = 0) {
        if (0 <= this.span) {
            return this.span;
        }
        /* Default layouts always have non-negative span, so we don't have
         * one and we have to recognize the variant which will in turn
         * determine the span. */
        const vlo = this.getVariant(b, offset);
        if (!vlo) {
            throw new Error('unable to determine span for unrecognized variant');
        }
        return vlo.getSpan(b, offset);
    }
    /**
     * Method to infer a registered Union variant compatible with `src`.
     *
     * The first satisfied rule in the following sequence defines the
     * return value:
     * * If `src` has properties matching the Union discriminator and
     *   the default layout, `undefined` is returned regardless of the
     *   value of the discriminator property (this ensures the default
     *   layout will be used);
     * * If `src` has a property matching the Union discriminator, the
     *   value of the discriminator identifies a registered variant, and
     *   either (a) the variant has no layout, or (b) `src` has the
     *   variant's property, then the variant is returned (because the
     *   source satisfies the constraints of the variant it identifies);
     * * If `src` does not have a property matching the Union
     *   discriminator, but does have a property matching a registered
     *   variant, then the variant is returned (because the source
     *   matches a variant without an explicit conflict);
     * * An error is thrown (because we either can't identify a variant,
     *   or we were explicitly told the variant but can't satisfy it).
     *
     * @param {Object} src - an object presumed to be compatible with
     * the content of the Union.
     *
     * @return {(undefined|VariantLayout)} - as described above.
     *
     * @throws {Error} - if `src` cannot be associated with a default or
     * registered variant.
     */
    defaultGetSourceVariant(src) {
        if (Object.prototype.hasOwnProperty.call(src, this.discriminator.property)) {
            if (this.defaultLayout && this.defaultLayout.property
                && Object.prototype.hasOwnProperty.call(src, this.defaultLayout.property)) {
                return undefined;
            }
            const vlo = this.registry[src[this.discriminator.property]];
            if (vlo
                && ((!vlo.layout)
                    || (vlo.property && Object.prototype.hasOwnProperty.call(src, vlo.property)))) {
                return vlo;
            }
        }
        else {
            for (const tag in this.registry) {
                const vlo = this.registry[tag];
                if (vlo.property && Object.prototype.hasOwnProperty.call(src, vlo.property)) {
                    return vlo;
                }
            }
        }
        throw new Error('unable to infer src variant');
    }
    /** Implement {@link Layout#decode|decode} for {@link Union}.
     *
     * If the variant is {@link Union#addVariant|registered} the return
     * value is an instance of that variant, with no explicit
     * discriminator.  Otherwise the {@link Union#defaultLayout|default
     * layout} is used to decode the content. */
    decode(b, offset = 0) {
        let dest;
        const dlo = this.discriminator;
        const discr = dlo.decode(b, offset);
        const clo = this.registry[discr];
        if (undefined === clo) {
            const defaultLayout = this.defaultLayout;
            let contentOffset = 0;
            if (this.usesPrefixDiscriminator) {
                contentOffset = dlo.layout.span;
            }
            dest = this.makeDestinationObject();
            dest[dlo.property] = discr;
            // defaultLayout.property can be undefined, but this is allowed by buffer-layout
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            dest[defaultLayout.property] = defaultLayout.decode(b, offset + contentOffset);
        }
        else {
            dest = clo.decode(b, offset);
        }
        return dest;
    }
    /** Implement {@link Layout#encode|encode} for {@link Union}.
     *
     * This API assumes the `src` object is consistent with the union's
     * {@link Union#defaultLayout|default layout}.  To encode variants
     * use the appropriate variant-specific {@link VariantLayout#encode}
     * method. */
    encode(src, b, offset = 0) {
        const vlo = this.getSourceVariant(src);
        if (undefined === vlo) {
            const dlo = this.discriminator;
            // this.defaultLayout is not undefined when vlo is undefined
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const clo = this.defaultLayout;
            let contentOffset = 0;
            if (this.usesPrefixDiscriminator) {
                contentOffset = dlo.layout.span;
            }
            dlo.encode(src[dlo.property], b, offset);
            // clo.property is not undefined when vlo is undefined
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            return contentOffset + clo.encode(src[clo.property], b, offset + contentOffset);
        }
        return vlo.encode(src, b, offset);
    }
    /** Register a new variant structure within a union.  The newly
     * created variant is returned.
     *
     * @param {Number} variant - initializer for {@link
     * VariantLayout#variant|variant}.
     *
     * @param {Layout} layout - initializer for {@link
     * VariantLayout#layout|layout}.
     *
     * @param {String} property - initializer for {@link
     * Layout#property|property}.
     *
     * @return {VariantLayout} */
    addVariant(variant, layout, property) {
        const rv = new VariantLayout(this, variant, layout, property);
        this.registry[variant] = rv;
        return rv;
    }
    /**
     * Get the layout associated with a registered variant.
     *
     * If `vb` does not produce a registered variant the function returns
     * `undefined`.
     *
     * @param {(Number|Uint8Array)} vb - either the variant number, or a
     * buffer from which the discriminator is to be read.
     *
     * @param {Number} offset - offset into `vb` for the start of the
     * union.  Used only when `vb` is an instance of {Uint8Array}.
     *
     * @return {({VariantLayout}|undefined)}
     */
    getVariant(vb, offset = 0) {
        let variant;
        if (vb instanceof Uint8Array) {
            variant = this.discriminator.decode(vb, offset);
        }
        else {
            variant = vb;
        }
        return this.registry[variant];
    }
}
exports.Union = Union;
/**
 * Represent a specific variant within a containing union.
 *
 * **NOTE** The {@link Layout#span|span} of the variant may include
 * the span of the {@link Union#discriminator|discriminator} used to
 * identify it, but values read and written using the variant strictly
 * conform to the content of {@link VariantLayout#layout|layout}.
 *
 * **NOTE** User code should not invoke this constructor directly.  Use
 * the union {@link Union#addVariant|addVariant} helper method.
 *
 * @param {Union} union - initializer for {@link
 * VariantLayout#union|union}.
 *
 * @param {Number} variant - initializer for {@link
 * VariantLayout#variant|variant}.
 *
 * @param {Layout} [layout] - initializer for {@link
 * VariantLayout#layout|layout}.  If absent the variant carries no
 * data.
 *
 * @param {String} [property] - initializer for {@link
 * Layout#property|property}.  Unlike many other layouts, variant
 * layouts normally include a property name so they can be identified
 * within their containing {@link Union}.  The property identifier may
 * be absent only if `layout` is is absent.
 *
 * @augments {Layout}
 */
class VariantLayout extends Layout {
    constructor(union, variant, layout, property) {
        if (!(union instanceof Union)) {
            throw new TypeError('union must be a Union');
        }
        if ((!Number.isInteger(variant)) || (0 > variant)) {
            throw new TypeError('variant must be a (non-negative) integer');
        }
        if (('string' === typeof layout)
            && (undefined === property)) {
            property = layout;
            layout = null;
        }
        if (layout) {
            if (!(layout instanceof Layout)) {
                throw new TypeError('layout must be a Layout');
            }
            if ((null !== union.defaultLayout)
                && (0 <= layout.span)
                && (layout.span > union.defaultLayout.span)) {
                throw new Error('variant span exceeds span of containing union');
            }
            if ('string' !== typeof property) {
                throw new TypeError('variant must have a String property');
            }
        }
        let span = union.span;
        if (0 > union.span) {
            span = layout ? layout.span : 0;
            if ((0 <= span) && union.usesPrefixDiscriminator) {
                span += union.discriminator.layout.span;
            }
        }
        super(span, property);
        /** The {@link Union} to which this variant belongs. */
        this.union = union;
        /** The unsigned integral value identifying this variant within
         * the {@link Union#discriminator|discriminator} of the containing
         * union. */
        this.variant = variant;
        /** The {@link Layout} to be used when reading/writing the
         * non-discriminator part of the {@link
         * VariantLayout#union|union}.  If `null` the variant carries no
         * data. */
        this.layout = layout || null;
    }
    /** @override */
    getSpan(b, offset = 0) {
        if (0 <= this.span) {
            /* Will be equal to the containing union span if that is not
             * variable. */
            return this.span;
        }
        let contentOffset = 0;
        if (this.union.usesPrefixDiscriminator) {
            contentOffset = this.union.discriminator.layout.span;
        }
        /* Span is defined solely by the variant (and prefix discriminator) */
        let span = 0;
        if (this.layout) {
            span = this.layout.getSpan(b, offset + contentOffset);
        }
        return contentOffset + span;
    }
    /** @override */
    decode(b, offset = 0) {
        const dest = this.makeDestinationObject();
        if (this !== this.union.getVariant(b, offset)) {
            throw new Error('variant mismatch');
        }
        let contentOffset = 0;
        if (this.union.usesPrefixDiscriminator) {
            contentOffset = this.union.discriminator.layout.span;
        }
        if (this.layout) {
            dest[this.property] = this.layout.decode(b, offset + contentOffset);
        }
        else if (this.property) {
            dest[this.property] = true;
        }
        else if (this.union.usesPrefixDiscriminator) {
            dest[this.union.discriminator.property] = this.variant;
        }
        return dest;
    }
    /** @override */
    encode(src, b, offset = 0) {
        let contentOffset = 0;
        if (this.union.usesPrefixDiscriminator) {
            contentOffset = this.union.discriminator.layout.span;
        }
        if (this.layout
            && (!Object.prototype.hasOwnProperty.call(src, this.property))) {
            throw new TypeError('variant lacks property ' + this.property);
        }
        this.union.discriminator.encode(this.variant, b, offset);
        let span = contentOffset;
        if (this.layout) {
            this.layout.encode(src[this.property], b, offset + contentOffset);
            span += this.layout.getSpan(b, offset + contentOffset);
            if ((0 <= this.union.span)
                && (span > this.union.span)) {
                throw new Error('encoded variant overruns containing union');
            }
        }
        return span;
    }
    /** Delegate {@link Layout#fromArray|fromArray} to {@link
     * VariantLayout#layout|layout}. */
    fromArray(values) {
        if (this.layout) {
            return this.layout.fromArray(values);
        }
        return undefined;
    }
}
exports.VariantLayout = VariantLayout;
/** JavaScript chose to define bitwise operations as operating on
 * signed 32-bit values in 2's complement form, meaning any integer
 * with bit 31 set is going to look negative.  For right shifts that's
 * not a problem, because `>>>` is a logical shift, but for every
 * other bitwise operator we have to compensate for possible negative
 * results. */
function fixBitwiseResult(v) {
    if (0 > v) {
        v += 0x100000000;
    }
    return v;
}
/**
 * Contain a sequence of bit fields as an unsigned integer.
 *
 * *Factory*: {@link module:Layout.bits|bits}
 *
 * This is a container element; within it there are {@link BitField}
 * instances that provide the extracted properties.  The container
 * simply defines the aggregate representation and its bit ordering.
 * The representation is an object containing properties with numeric
 * or {@link Boolean} values.
 *
 * {@link BitField}s are added with the {@link
 * BitStructure#addField|addField} and {@link
 * BitStructure#addBoolean|addBoolean} methods.

 * @param {Layout} word - initializer for {@link
 * BitStructure#word|word}.  The parameter must be an instance of
 * {@link UInt} (or {@link UIntBE}) that is no more than 4 bytes wide.
 *
 * @param {bool} [msb] - `true` if the bit numbering starts at the
 * most significant bit of the containing word; `false` (default) if
 * it starts at the least significant bit of the containing word.  If
 * the parameter at this position is a string and `property` is
 * `undefined` the value of this argument will instead be used as the
 * value of `property`.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */
class BitStructure extends Layout {
    constructor(word, msb, property) {
        if (!((word instanceof UInt)
            || (word instanceof UIntBE))) {
            throw new TypeError('word must be a UInt or UIntBE layout');
        }
        if (('string' === typeof msb)
            && (undefined === property)) {
            property = msb;
            msb = false;
        }
        if (4 < word.span) {
            throw new RangeError('word cannot exceed 32 bits');
        }
        super(word.span, property);
        /** The layout used for the packed value.  {@link BitField}
         * instances are packed sequentially depending on {@link
         * BitStructure#msb|msb}. */
        this.word = word;
        /** Whether the bit sequences are packed starting at the most
         * significant bit growing down (`true`), or the least significant
         * bit growing up (`false`).
         *
         * **NOTE** Regardless of this value, the least significant bit of
         * any {@link BitField} value is the least significant bit of the
         * corresponding section of the packed value. */
        this.msb = !!msb;
        /** The sequence of {@link BitField} layouts that comprise the
         * packed structure.
         *
         * **NOTE** The array remains mutable to allow fields to be {@link
         * BitStructure#addField|added} after construction.  Users should
         * not manipulate the content of this property.*/
        this.fields = [];
        /* Storage for the value.  Capture a variable instead of using an
         * instance property because we don't want anything to change the
         * value without going through the mutator. */
        let value = 0;
        this._packedSetValue = function (v) {
            value = fixBitwiseResult(v);
            return this;
        };
        this._packedGetValue = function () {
            return value;
        };
    }
    /** @override */
    decode(b, offset = 0) {
        const dest = this.makeDestinationObject();
        const value = this.word.decode(b, offset);
        this._packedSetValue(value);
        for (const fd of this.fields) {
            if (undefined !== fd.property) {
                dest[fd.property] = fd.decode(b);
            }
        }
        return dest;
    }
    /** Implement {@link Layout#encode|encode} for {@link BitStructure}.
     *
     * If `src` is missing a property for a member with a defined {@link
     * Layout#property|property} the corresponding region of the packed
     * value is left unmodified.  Unused bits are also left unmodified. */
    encode(src, b, offset = 0) {
        const value = this.word.decode(b, offset);
        this._packedSetValue(value);
        for (const fd of this.fields) {
            if (undefined !== fd.property) {
                const fv = src[fd.property];
                if (undefined !== fv) {
                    fd.encode(fv);
                }
            }
        }
        return this.word.encode(this._packedGetValue(), b, offset);
    }
    /** Register a new bitfield with a containing bit structure.  The
     * resulting bitfield is returned.
     *
     * @param {Number} bits - initializer for {@link BitField#bits|bits}.
     *
     * @param {string} property - initializer for {@link
     * Layout#property|property}.
     *
     * @return {BitField} */
    addField(bits, property) {
        const bf = new BitField(this, bits, property);
        this.fields.push(bf);
        return bf;
    }
    /** As with {@link BitStructure#addField|addField} for single-bit
     * fields with `boolean` value representation.
     *
     * @param {string} property - initializer for {@link
     * Layout#property|property}.
     *
     * @return {Boolean} */
    // `Boolean` conflicts with the native primitive type
    // eslint-disable-next-line @typescript-eslint/ban-types
    addBoolean(property) {
        // This is my Boolean, not the Javascript one.
        const bf = new Boolean(this, property);
        this.fields.push(bf);
        return bf;
    }
    /**
     * Get access to the bit field for a given property.
     *
     * @param {String} property - the bit field of interest.
     *
     * @return {BitField} - the field associated with `property`, or
     * undefined if there is no such property.
     */
    fieldFor(property) {
        if ('string' !== typeof property) {
            throw new TypeError('property must be string');
        }
        for (const fd of this.fields) {
            if (fd.property === property) {
                return fd;
            }
        }
        return undefined;
    }
}
exports.BitStructure = BitStructure;
/**
 * Represent a sequence of bits within a {@link BitStructure}.
 *
 * All bit field values are represented as unsigned integers.
 *
 * **NOTE** User code should not invoke this constructor directly.
 * Use the container {@link BitStructure#addField|addField} helper
 * method.
 *
 * **NOTE** BitField instances are not instances of {@link Layout}
 * since {@link Layout#span|span} measures 8-bit units.
 *
 * @param {BitStructure} container - initializer for {@link
 * BitField#container|container}.
 *
 * @param {Number} bits - initializer for {@link BitField#bits|bits}.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 */
class BitField {
    constructor(container, bits, property) {
        if (!(container instanceof BitStructure)) {
            throw new TypeError('container must be a BitStructure');
        }
        if ((!Number.isInteger(bits)) || (0 >= bits)) {
            throw new TypeError('bits must be positive integer');
        }
        const totalBits = 8 * container.span;
        const usedBits = container.fields.reduce((sum, fd) => sum + fd.bits, 0);
        if ((bits + usedBits) > totalBits) {
            throw new Error('bits too long for span remainder ('
                + (totalBits - usedBits) + ' of '
                + totalBits + ' remain)');
        }
        /** The {@link BitStructure} instance to which this bit field
         * belongs. */
        this.container = container;
        /** The span of this value in bits. */
        this.bits = bits;
        /** A mask of {@link BitField#bits|bits} bits isolating value bits
         * that fit within the field.
         *
         * That is, it masks a value that has not yet been shifted into
         * position within its containing packed integer. */
        this.valueMask = (1 << bits) - 1;
        if (32 === bits) { // shifted value out of range
            this.valueMask = 0xFFFFFFFF;
        }
        /** The offset of the value within the containing packed unsigned
         * integer.  The least significant bit of the packed value is at
         * offset zero, regardless of bit ordering used. */
        this.start = usedBits;
        if (this.container.msb) {
            this.start = totalBits - usedBits - bits;
        }
        /** A mask of {@link BitField#bits|bits} isolating the field value
         * within the containing packed unsigned integer. */
        this.wordMask = fixBitwiseResult(this.valueMask << this.start);
        /** The property name used when this bitfield is represented in an
         * Object.
         *
         * Intended to be functionally equivalent to {@link
         * Layout#property}.
         *
         * If left undefined the corresponding span of bits will be
         * treated as padding: it will not be mutated by {@link
         * Layout#encode|encode} nor represented as a property in the
         * decoded Object. */
        this.property = property;
    }
    /** Store a value into the corresponding subsequence of the containing
     * bit field. */
    decode(b, offset) {
        const word = this.container._packedGetValue();
        const wordValue = fixBitwiseResult(word & this.wordMask);
        const value = wordValue >>> this.start;
        return value;
    }
    /** Store a value into the corresponding subsequence of the containing
     * bit field.
     *
     * **NOTE** This is not a specialization of {@link
     * Layout#encode|Layout.encode} and there is no return value. */
    encode(value) {
        if ('number' !== typeof value
            || !Number.isInteger(value)
            || (value !== fixBitwiseResult(value & this.valueMask))) {
            throw new TypeError(nameWithProperty('BitField.encode', this)
                + ' value must be integer not exceeding ' + this.valueMask);
        }
        const word = this.container._packedGetValue();
        const wordValue = fixBitwiseResult(value << this.start);
        this.container._packedSetValue(fixBitwiseResult(word & ~this.wordMask)
            | wordValue);
    }
}
exports.BitField = BitField;
/**
 * Represent a single bit within a {@link BitStructure} as a
 * JavaScript boolean.
 *
 * **NOTE** User code should not invoke this constructor directly.
 * Use the container {@link BitStructure#addBoolean|addBoolean} helper
 * method.
 *
 * @param {BitStructure} container - initializer for {@link
 * BitField#container|container}.
 *
 * @param {string} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {BitField}
 */
/* eslint-disable no-extend-native */
class Boolean extends BitField {
    constructor(container, property) {
        super(container, 1, property);
    }
    /** Override {@link BitField#decode|decode} for {@link Boolean|Boolean}.
     *
     * @returns {boolean} */
    decode(b, offset) {
        return !!super.decode(b, offset);
    }
    /** @override */
    encode(value) {
        if ('boolean' === typeof value) {
            // BitField requires integer values
            value = +value;
        }
        super.encode(value);
    }
}
exports.Boolean = Boolean;
/* eslint-enable no-extend-native */
/**
 * Contain a fixed-length block of arbitrary data, represented as a
 * Uint8Array.
 *
 * *Factory*: {@link module:Layout.blob|blob}
 *
 * @param {(Number|ExternalLayout)} length - initializes {@link
 * Blob#length|length}.
 *
 * @param {String} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */
class Blob extends Layout {
    constructor(length, property) {
        if (!(((length instanceof ExternalLayout) && length.isCount())
            || (Number.isInteger(length) && (0 <= length)))) {
            throw new TypeError('length must be positive integer '
                + 'or an unsigned integer ExternalLayout');
        }
        let span = -1;
        if (!(length instanceof ExternalLayout)) {
            span = length;
        }
        super(span, property);
        /** The number of bytes in the blob.
         *
         * This may be a non-negative integer, or an instance of {@link
         * ExternalLayout} that satisfies {@link
         * ExternalLayout#isCount|isCount()}. */
        this.length = length;
    }
    /** @override */
    getSpan(b, offset) {
        let span = this.span;
        if (0 > span) {
            span = this.length.decode(b, offset);
        }
        return span;
    }
    /** @override */
    decode(b, offset = 0) {
        let span = this.span;
        if (0 > span) {
            span = this.length.decode(b, offset);
        }
        return uint8ArrayToBuffer(b).slice(offset, offset + span);
    }
    /** Implement {@link Layout#encode|encode} for {@link Blob}.
     *
     * **NOTE** If {@link Layout#count|count} is an instance of {@link
     * ExternalLayout} then the length of `src` will be encoded as the
     * count after `src` is encoded. */
    encode(src, b, offset) {
        let span = this.length;
        if (this.length instanceof ExternalLayout) {
            span = src.length;
        }
        if (!(src instanceof Uint8Array && span === src.length)) {
            throw new TypeError(nameWithProperty('Blob.encode', this)
                + ' requires (length ' + span + ') Uint8Array as src');
        }
        if ((offset + span) > b.length) {
            throw new RangeError('encoding overruns Uint8Array');
        }
        const srcBuffer = uint8ArrayToBuffer(src);
        uint8ArrayToBuffer(b).write(srcBuffer.toString('hex'), offset, span, 'hex');
        if (this.length instanceof ExternalLayout) {
            this.length.encode(span, b, offset);
        }
        return span;
    }
}
exports.Blob = Blob;
/**
 * Contain a `NUL`-terminated UTF8 string.
 *
 * *Factory*: {@link module:Layout.cstr|cstr}
 *
 * **NOTE** Any UTF8 string that incorporates a zero-valued byte will
 * not be correctly decoded by this layout.
 *
 * @param {String} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */
class CString extends Layout {
    constructor(property) {
        super(-1, property);
    }
    /** @override */
    getSpan(b, offset = 0) {
        checkUint8Array(b);
        let idx = offset;
        while ((idx < b.length) && (0 !== b[idx])) {
            idx += 1;
        }
        return 1 + idx - offset;
    }
    /** @override */
    decode(b, offset = 0) {
        const span = this.getSpan(b, offset);
        return uint8ArrayToBuffer(b).slice(offset, offset + span - 1).toString('utf-8');
    }
    /** @override */
    encode(src, b, offset = 0) {
        /* Must force this to a string, lest it be a number and the
         * "utf8-encoding" below actually allocate a buffer of length
         * src */
        if ('string' !== typeof src) {
            src = String(src);
        }
        const srcb = buffer_1.Buffer.from(src, 'utf8');
        const span = srcb.length;
        if ((offset + span) > b.length) {
            throw new RangeError('encoding overruns Buffer');
        }
        const buffer = uint8ArrayToBuffer(b);
        srcb.copy(buffer, offset);
        buffer[offset + span] = 0;
        return span + 1;
    }
}
exports.CString = CString;
/**
 * Contain a UTF8 string with implicit length.
 *
 * *Factory*: {@link module:Layout.utf8|utf8}
 *
 * **NOTE** Because the length is implicit in the size of the buffer
 * this layout should be used only in isolation, or in a situation
 * where the length can be expressed by operating on a slice of the
 * containing buffer.
 *
 * @param {Number} [maxSpan] - the maximum length allowed for encoded
 * string content.  If not provided there is no bound on the allowed
 * content.
 *
 * @param {String} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */
class UTF8 extends Layout {
    constructor(maxSpan, property) {
        if (('string' === typeof maxSpan) && (undefined === property)) {
            property = maxSpan;
            maxSpan = undefined;
        }
        if (undefined === maxSpan) {
            maxSpan = -1;
        }
        else if (!Number.isInteger(maxSpan)) {
            throw new TypeError('maxSpan must be an integer');
        }
        super(-1, property);
        /** The maximum span of the layout in bytes.
         *
         * Positive values are generally expected.  Zero is abnormal.
         * Attempts to encode or decode a value that exceeds this length
         * will throw a `RangeError`.
         *
         * A negative value indicates that there is no bound on the length
         * of the content. */
        this.maxSpan = maxSpan;
    }
    /** @override */
    getSpan(b, offset = 0) {
        checkUint8Array(b);
        return b.length - offset;
    }
    /** @override */
    decode(b, offset = 0) {
        const span = this.getSpan(b, offset);
        if ((0 <= this.maxSpan)
            && (this.maxSpan < span)) {
            throw new RangeError('text length exceeds maxSpan');
        }
        return uint8ArrayToBuffer(b).slice(offset, offset + span).toString('utf-8');
    }
    /** @override */
    encode(src, b, offset = 0) {
        /* Must force this to a string, lest it be a number and the
         * "utf8-encoding" below actually allocate a buffer of length
         * src */
        if ('string' !== typeof src) {
            src = String(src);
        }
        const srcb = buffer_1.Buffer.from(src, 'utf8');
        const span = srcb.length;
        if ((0 <= this.maxSpan)
            && (this.maxSpan < span)) {
            throw new RangeError('text length exceeds maxSpan');
        }
        if ((offset + span) > b.length) {
            throw new RangeError('encoding overruns Buffer');
        }
        srcb.copy(uint8ArrayToBuffer(b), offset);
        return span;
    }
}
exports.UTF8 = UTF8;
/**
 * Contain a constant value.
 *
 * This layout may be used in cases where a JavaScript value can be
 * inferred without an expression in the binary encoding.  An example
 * would be a {@link VariantLayout|variant layout} where the content
 * is implied by the union {@link Union#discriminator|discriminator}.
 *
 * @param {Object|Number|String} value - initializer for {@link
 * Constant#value|value}.  If the value is an object (or array) and
 * the application intends the object to remain unchanged regardless
 * of what is done to values decoded by this layout, the value should
 * be frozen prior passing it to this constructor.
 *
 * @param {String} [property] - initializer for {@link
 * Layout#property|property}.
 *
 * @augments {Layout}
 */
class Constant extends Layout {
    constructor(value, property) {
        super(0, property);
        /** The value produced by this constant when the layout is {@link
         * Constant#decode|decoded}.
         *
         * Any JavaScript value including `null` and `undefined` is
         * permitted.
         *
         * **WARNING** If `value` passed in the constructor was not
         * frozen, it is possible for users of decoded values to change
         * the content of the value. */
        this.value = value;
    }
    /** @override */
    decode(b, offset) {
        return this.value;
    }
    /** @override */
    encode(src, b, offset) {
        /* Constants take no space */
        return 0;
    }
}
exports.Constant = Constant;
/** Factory for {@link GreedyCount}. */
exports.greedy = ((elementSpan, property) => new GreedyCount(elementSpan, property));
/** Factory for {@link OffsetLayout}. */
exports.offset = ((layout, offset, property) => new OffsetLayout(layout, offset, property));
/** Factory for {@link UInt|unsigned int layouts} spanning one
 * byte. */
exports.u8 = ((property) => new UInt(1, property));
/** Factory for {@link UInt|little-endian unsigned int layouts}
 * spanning two bytes. */
exports.u16 = ((property) => new UInt(2, property));
/** Factory for {@link UInt|little-endian unsigned int layouts}
 * spanning three bytes. */
exports.u24 = ((property) => new UInt(3, property));
/** Factory for {@link UInt|little-endian unsigned int layouts}
 * spanning four bytes. */
exports.u32 = ((property) => new UInt(4, property));
/** Factory for {@link UInt|little-endian unsigned int layouts}
 * spanning five bytes. */
exports.u40 = ((property) => new UInt(5, property));
/** Factory for {@link UInt|little-endian unsigned int layouts}
 * spanning six bytes. */
exports.u48 = ((property) => new UInt(6, property));
/** Factory for {@link NearUInt64|little-endian unsigned int
 * layouts} interpreted as Numbers. */
exports.nu64 = ((property) => new NearUInt64(property));
/** Factory for {@link UInt|big-endian unsigned int layouts}
 * spanning two bytes. */
exports.u16be = ((property) => new UIntBE(2, property));
/** Factory for {@link UInt|big-endian unsigned int layouts}
 * spanning three bytes. */
exports.u24be = ((property) => new UIntBE(3, property));
/** Factory for {@link UInt|big-endian unsigned int layouts}
 * spanning four bytes. */
exports.u32be = ((property) => new UIntBE(4, property));
/** Factory for {@link UInt|big-endian unsigned int layouts}
 * spanning five bytes. */
exports.u40be = ((property) => new UIntBE(5, property));
/** Factory for {@link UInt|big-endian unsigned int layouts}
 * spanning six bytes. */
exports.u48be = ((property) => new UIntBE(6, property));
/** Factory for {@link NearUInt64BE|big-endian unsigned int
 * layouts} interpreted as Numbers. */
exports.nu64be = ((property) => new NearUInt64BE(property));
/** Factory for {@link Int|signed int layouts} spanning one
 * byte. */
exports.s8 = ((property) => new Int(1, property));
/** Factory for {@link Int|little-endian signed int layouts}
 * spanning two bytes. */
exports.s16 = ((property) => new Int(2, property));
/** Factory for {@link Int|little-endian signed int layouts}
 * spanning three bytes. */
exports.s24 = ((property) => new Int(3, property));
/** Factory for {@link Int|little-endian signed int layouts}
 * spanning four bytes. */
exports.s32 = ((property) => new Int(4, property));
/** Factory for {@link Int|little-endian signed int layouts}
 * spanning five bytes. */
exports.s40 = ((property) => new Int(5, property));
/** Factory for {@link Int|little-endian signed int layouts}
 * spanning six bytes. */
exports.s48 = ((property) => new Int(6, property));
/** Factory for {@link NearInt64|little-endian signed int layouts}
 * interpreted as Numbers. */
exports.ns64 = ((property) => new NearInt64(property));
/** Factory for {@link Int|big-endian signed int layouts}
 * spanning two bytes. */
exports.s16be = ((property) => new IntBE(2, property));
/** Factory for {@link Int|big-endian signed int layouts}
 * spanning three bytes. */
exports.s24be = ((property) => new IntBE(3, property));
/** Factory for {@link Int|big-endian signed int layouts}
 * spanning four bytes. */
exports.s32be = ((property) => new IntBE(4, property));
/** Factory for {@link Int|big-endian signed int layouts}
 * spanning five bytes. */
exports.s40be = ((property) => new IntBE(5, property));
/** Factory for {@link Int|big-endian signed int layouts}
 * spanning six bytes. */
exports.s48be = ((property) => new IntBE(6, property));
/** Factory for {@link NearInt64BE|big-endian signed int layouts}
 * interpreted as Numbers. */
exports.ns64be = ((property) => new NearInt64BE(property));
/** Factory for {@link Float|little-endian 32-bit floating point} values. */
exports.f32 = ((property) => new Float(property));
/** Factory for {@link FloatBE|big-endian 32-bit floating point} values. */
exports.f32be = ((property) => new FloatBE(property));
/** Factory for {@link Double|little-endian 64-bit floating point} values. */
exports.f64 = ((property) => new Double(property));
/** Factory for {@link DoubleBE|big-endian 64-bit floating point} values. */
exports.f64be = ((property) => new DoubleBE(property));
/** Factory for {@link Structure} values. */
exports.struct = ((fields, property, decodePrefixes) => new Structure(fields, property, decodePrefixes));
/** Factory for {@link BitStructure} values. */
exports.bits = ((word, msb, property) => new BitStructure(word, msb, property));
/** Factory for {@link Sequence} values. */
exports.seq = ((elementLayout, count, property) => new Sequence(elementLayout, count, property));
/** Factory for {@link Union} values. */
exports.union = ((discr, defaultLayout, property) => new Union(discr, defaultLayout, property));
/** Factory for {@link UnionLayoutDiscriminator} values. */
exports.unionLayoutDiscriminator = ((layout, property) => new UnionLayoutDiscriminator(layout, property));
/** Factory for {@link Blob} values. */
exports.blob = ((length, property) => new Blob(length, property));
/** Factory for {@link CString} values. */
exports.cstr = ((property) => new CString(property));
/** Factory for {@link UTF8} values. */
exports.utf8 = ((maxSpan, property) => new UTF8(maxSpan, property));
/** Factory for {@link Constant} values. */
exports.constant = ((value, property) => new Constant(value, property));
//# sourceMappingURL=Layout.js.map

/***/ }),

/***/ "./node_modules/@solana/web3.js/lib/index.browser.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@solana/web3.js/lib/index.browser.esm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Account": () => (/* binding */ Account),
/* harmony export */   "AddressLookupTableAccount": () => (/* binding */ AddressLookupTableAccount),
/* harmony export */   "AddressLookupTableInstruction": () => (/* binding */ AddressLookupTableInstruction),
/* harmony export */   "AddressLookupTableProgram": () => (/* binding */ AddressLookupTableProgram),
/* harmony export */   "Authorized": () => (/* binding */ Authorized),
/* harmony export */   "BLOCKHASH_CACHE_TIMEOUT_MS": () => (/* binding */ BLOCKHASH_CACHE_TIMEOUT_MS),
/* harmony export */   "BPF_LOADER_DEPRECATED_PROGRAM_ID": () => (/* binding */ BPF_LOADER_DEPRECATED_PROGRAM_ID),
/* harmony export */   "BPF_LOADER_PROGRAM_ID": () => (/* binding */ BPF_LOADER_PROGRAM_ID),
/* harmony export */   "BpfLoader": () => (/* binding */ BpfLoader),
/* harmony export */   "COMPUTE_BUDGET_INSTRUCTION_LAYOUTS": () => (/* binding */ COMPUTE_BUDGET_INSTRUCTION_LAYOUTS),
/* harmony export */   "ComputeBudgetInstruction": () => (/* binding */ ComputeBudgetInstruction),
/* harmony export */   "ComputeBudgetProgram": () => (/* binding */ ComputeBudgetProgram),
/* harmony export */   "Connection": () => (/* binding */ Connection),
/* harmony export */   "Ed25519Program": () => (/* binding */ Ed25519Program),
/* harmony export */   "Enum": () => (/* binding */ Enum),
/* harmony export */   "EpochSchedule": () => (/* binding */ EpochSchedule),
/* harmony export */   "FeeCalculatorLayout": () => (/* binding */ FeeCalculatorLayout),
/* harmony export */   "Keypair": () => (/* binding */ Keypair),
/* harmony export */   "LAMPORTS_PER_SOL": () => (/* binding */ LAMPORTS_PER_SOL),
/* harmony export */   "LOOKUP_TABLE_INSTRUCTION_LAYOUTS": () => (/* binding */ LOOKUP_TABLE_INSTRUCTION_LAYOUTS),
/* harmony export */   "Loader": () => (/* binding */ Loader),
/* harmony export */   "Lockup": () => (/* binding */ Lockup),
/* harmony export */   "MAX_SEED_LENGTH": () => (/* binding */ MAX_SEED_LENGTH),
/* harmony export */   "Message": () => (/* binding */ Message),
/* harmony export */   "MessageAccountKeys": () => (/* binding */ MessageAccountKeys),
/* harmony export */   "MessageV0": () => (/* binding */ MessageV0),
/* harmony export */   "NONCE_ACCOUNT_LENGTH": () => (/* binding */ NONCE_ACCOUNT_LENGTH),
/* harmony export */   "NonceAccount": () => (/* binding */ NonceAccount),
/* harmony export */   "PACKET_DATA_SIZE": () => (/* binding */ PACKET_DATA_SIZE),
/* harmony export */   "PUBLIC_KEY_LENGTH": () => (/* binding */ PUBLIC_KEY_LENGTH),
/* harmony export */   "PublicKey": () => (/* binding */ PublicKey),
/* harmony export */   "SIGNATURE_LENGTH_IN_BYTES": () => (/* binding */ SIGNATURE_LENGTH_IN_BYTES),
/* harmony export */   "SOLANA_SCHEMA": () => (/* binding */ SOLANA_SCHEMA),
/* harmony export */   "STAKE_CONFIG_ID": () => (/* binding */ STAKE_CONFIG_ID),
/* harmony export */   "STAKE_INSTRUCTION_LAYOUTS": () => (/* binding */ STAKE_INSTRUCTION_LAYOUTS),
/* harmony export */   "SYSTEM_INSTRUCTION_LAYOUTS": () => (/* binding */ SYSTEM_INSTRUCTION_LAYOUTS),
/* harmony export */   "SYSVAR_CLOCK_PUBKEY": () => (/* binding */ SYSVAR_CLOCK_PUBKEY),
/* harmony export */   "SYSVAR_EPOCH_SCHEDULE_PUBKEY": () => (/* binding */ SYSVAR_EPOCH_SCHEDULE_PUBKEY),
/* harmony export */   "SYSVAR_INSTRUCTIONS_PUBKEY": () => (/* binding */ SYSVAR_INSTRUCTIONS_PUBKEY),
/* harmony export */   "SYSVAR_RECENT_BLOCKHASHES_PUBKEY": () => (/* binding */ SYSVAR_RECENT_BLOCKHASHES_PUBKEY),
/* harmony export */   "SYSVAR_RENT_PUBKEY": () => (/* binding */ SYSVAR_RENT_PUBKEY),
/* harmony export */   "SYSVAR_REWARDS_PUBKEY": () => (/* binding */ SYSVAR_REWARDS_PUBKEY),
/* harmony export */   "SYSVAR_SLOT_HASHES_PUBKEY": () => (/* binding */ SYSVAR_SLOT_HASHES_PUBKEY),
/* harmony export */   "SYSVAR_SLOT_HISTORY_PUBKEY": () => (/* binding */ SYSVAR_SLOT_HISTORY_PUBKEY),
/* harmony export */   "SYSVAR_STAKE_HISTORY_PUBKEY": () => (/* binding */ SYSVAR_STAKE_HISTORY_PUBKEY),
/* harmony export */   "Secp256k1Program": () => (/* binding */ Secp256k1Program),
/* harmony export */   "SendTransactionError": () => (/* binding */ SendTransactionError),
/* harmony export */   "SolanaJSONRPCError": () => (/* binding */ SolanaJSONRPCError),
/* harmony export */   "SolanaJSONRPCErrorCode": () => (/* binding */ SolanaJSONRPCErrorCode),
/* harmony export */   "StakeAuthorizationLayout": () => (/* binding */ StakeAuthorizationLayout),
/* harmony export */   "StakeInstruction": () => (/* binding */ StakeInstruction),
/* harmony export */   "StakeProgram": () => (/* binding */ StakeProgram),
/* harmony export */   "Struct": () => (/* binding */ Struct),
/* harmony export */   "SystemInstruction": () => (/* binding */ SystemInstruction),
/* harmony export */   "SystemProgram": () => (/* binding */ SystemProgram),
/* harmony export */   "Transaction": () => (/* binding */ Transaction),
/* harmony export */   "TransactionExpiredBlockheightExceededError": () => (/* binding */ TransactionExpiredBlockheightExceededError),
/* harmony export */   "TransactionExpiredNonceInvalidError": () => (/* binding */ TransactionExpiredNonceInvalidError),
/* harmony export */   "TransactionExpiredTimeoutError": () => (/* binding */ TransactionExpiredTimeoutError),
/* harmony export */   "TransactionInstruction": () => (/* binding */ TransactionInstruction),
/* harmony export */   "TransactionMessage": () => (/* binding */ TransactionMessage),
/* harmony export */   "TransactionStatus": () => (/* binding */ TransactionStatus),
/* harmony export */   "VALIDATOR_INFO_KEY": () => (/* binding */ VALIDATOR_INFO_KEY),
/* harmony export */   "VERSION_PREFIX_MASK": () => (/* binding */ VERSION_PREFIX_MASK),
/* harmony export */   "VOTE_PROGRAM_ID": () => (/* binding */ VOTE_PROGRAM_ID),
/* harmony export */   "ValidatorInfo": () => (/* binding */ ValidatorInfo),
/* harmony export */   "VersionedMessage": () => (/* binding */ VersionedMessage),
/* harmony export */   "VersionedTransaction": () => (/* binding */ VersionedTransaction),
/* harmony export */   "VoteAccount": () => (/* binding */ VoteAccount),
/* harmony export */   "VoteAuthorizationLayout": () => (/* binding */ VoteAuthorizationLayout),
/* harmony export */   "VoteInit": () => (/* binding */ VoteInit),
/* harmony export */   "VoteInstruction": () => (/* binding */ VoteInstruction),
/* harmony export */   "VoteProgram": () => (/* binding */ VoteProgram),
/* harmony export */   "clusterApiUrl": () => (/* binding */ clusterApiUrl),
/* harmony export */   "sendAndConfirmRawTransaction": () => (/* binding */ sendAndConfirmRawTransaction),
/* harmony export */   "sendAndConfirmTransaction": () => (/* binding */ sendAndConfirmTransaction)
/* harmony export */ });
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js");
/* harmony import */ var _noble_hashes_sha512__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @noble/hashes/sha512 */ "./node_modules/@noble/hashes/esm/sha512.js");
/* harmony import */ var _noble_ed25519__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @noble/ed25519 */ "./node_modules/@noble/ed25519/lib/esm/index.js");
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js");
/* harmony import */ var bn_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bn_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bs58 */ "./node_modules/@solana/web3.js/node_modules/bs58/index.js");
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bs58__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @noble/hashes/sha256 */ "./node_modules/@noble/hashes/esm/sha256.js");
/* harmony import */ var borsh__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! borsh */ "./node_modules/borsh/lib/index.js");
/* harmony import */ var borsh__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(borsh__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @solana/buffer-layout */ "./node_modules/@solana/buffer-layout/lib/Layout.js");
/* harmony import */ var bigint_buffer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bigint-buffer */ "./node_modules/bigint-buffer/dist/browser.js");
/* harmony import */ var superstruct__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! superstruct */ "./node_modules/superstruct/lib/index.es.js");
/* harmony import */ var jayson_lib_client_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jayson/lib/client/browser */ "./node_modules/jayson/lib/client/browser/index.js");
/* harmony import */ var jayson_lib_client_browser__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jayson_lib_client_browser__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rpc_websockets_dist_lib_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rpc-websockets/dist/lib/client */ "./node_modules/rpc-websockets/dist/lib/client.js");
/* harmony import */ var rpc_websockets_dist_lib_client_websocket_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rpc-websockets/dist/lib/client/websocket.browser */ "./node_modules/rpc-websockets/dist/lib/client/websocket.browser.js");
/* harmony import */ var _noble_hashes_sha3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @noble/hashes/sha3 */ "./node_modules/@noble/hashes/esm/sha3.js");
/* harmony import */ var _noble_hashes_hmac__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @noble/hashes/hmac */ "./node_modules/@noble/hashes/esm/hmac.js");
/* harmony import */ var _noble_secp256k1__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @noble/secp256k1 */ "./node_modules/@noble/secp256k1/lib/esm/index.js");


















/**
 * A 64 byte secret key, the first 32 bytes of which is the
 * private scalar and the last 32 bytes is the public key.
 * Read more: https://blog.mozilla.org/warner/2011/11/29/ed25519-keys/
 */

_noble_ed25519__WEBPACK_IMPORTED_MODULE_2__.utils.sha512Sync = (...m) => (0,_noble_hashes_sha512__WEBPACK_IMPORTED_MODULE_1__.sha512)(_noble_ed25519__WEBPACK_IMPORTED_MODULE_2__.utils.concatBytes(...m));
const generatePrivateKey = _noble_ed25519__WEBPACK_IMPORTED_MODULE_2__.utils.randomPrivateKey;
const generateKeypair = () => {
  const privateScalar = _noble_ed25519__WEBPACK_IMPORTED_MODULE_2__.utils.randomPrivateKey();
  const publicKey = getPublicKey(privateScalar);
  const secretKey = new Uint8Array(64);
  secretKey.set(privateScalar);
  secretKey.set(publicKey, 32);
  return {
    publicKey,
    secretKey
  };
};
const getPublicKey = _noble_ed25519__WEBPACK_IMPORTED_MODULE_2__.sync.getPublicKey;
function isOnCurve(publicKey) {
  try {
    _noble_ed25519__WEBPACK_IMPORTED_MODULE_2__.Point.fromHex(publicKey, true /* strict */);
    return true;
  } catch {
    return false;
  }
}
const sign = (message, secretKey) => _noble_ed25519__WEBPACK_IMPORTED_MODULE_2__.sync.sign(message, secretKey.slice(0, 32));
const verify = _noble_ed25519__WEBPACK_IMPORTED_MODULE_2__.sync.verify;

const toBuffer = arr => {
  if (buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.isBuffer(arr)) {
    return arr;
  } else if (arr instanceof Uint8Array) {
    return buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from(arr.buffer, arr.byteOffset, arr.byteLength);
  } else {
    return buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from(arr);
  }
};

// Class wrapping a plain object
class Struct {
  constructor(properties) {
    Object.assign(this, properties);
  }
  encode() {
    return buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from((0,borsh__WEBPACK_IMPORTED_MODULE_6__.serialize)(SOLANA_SCHEMA, this));
  }
  static decode(data) {
    return (0,borsh__WEBPACK_IMPORTED_MODULE_6__.deserialize)(SOLANA_SCHEMA, this, data);
  }
  static decodeUnchecked(data) {
    return (0,borsh__WEBPACK_IMPORTED_MODULE_6__.deserializeUnchecked)(SOLANA_SCHEMA, this, data);
  }
}

// Class representing a Rust-compatible enum, since enums are only strings or
// numbers in pure JS
class Enum extends Struct {
  constructor(properties) {
    super(properties);
    this.enum = '';
    if (Object.keys(properties).length !== 1) {
      throw new Error('Enum can only take single value');
    }
    Object.keys(properties).map(key => {
      this.enum = key;
    });
  }
}
const SOLANA_SCHEMA = new Map();

let _Symbol$toStringTag;

/**
 * Maximum length of derived pubkey seed
 */
const MAX_SEED_LENGTH = 32;

/**
 * Size of public key in bytes
 */
const PUBLIC_KEY_LENGTH = 32;

/**
 * Value to be converted into public key
 */

function isPublicKeyData(value) {
  return value._bn !== undefined;
}

// local counter used by PublicKey.unique()
let uniquePublicKeyCounter = 1;

/**
 * A public key
 */
_Symbol$toStringTag = Symbol.toStringTag;
class PublicKey extends Struct {
  /** @internal */

  /**
   * Create a new PublicKey object
   * @param value ed25519 public key as buffer or base-58 encoded string
   */
  constructor(value) {
    super({});
    this._bn = void 0;
    if (isPublicKeyData(value)) {
      this._bn = value._bn;
    } else {
      if (typeof value === 'string') {
        // assume base 58 encoding by default
        const decoded = bs58__WEBPACK_IMPORTED_MODULE_4___default().decode(value);
        if (decoded.length != PUBLIC_KEY_LENGTH) {
          throw new Error(`Invalid public key input`);
        }
        this._bn = new (bn_js__WEBPACK_IMPORTED_MODULE_3___default())(decoded);
      } else {
        this._bn = new (bn_js__WEBPACK_IMPORTED_MODULE_3___default())(value);
      }
      if (this._bn.byteLength() > PUBLIC_KEY_LENGTH) {
        throw new Error(`Invalid public key input`);
      }
    }
  }

  /**
   * Returns a unique PublicKey for tests and benchmarks using a counter
   */
  static unique() {
    const key = new PublicKey(uniquePublicKeyCounter);
    uniquePublicKeyCounter += 1;
    return new PublicKey(key.toBuffer());
  }

  /**
   * Default public key value. The base58-encoded string representation is all ones (as seen below)
   * The underlying BN number is 32 bytes that are all zeros
   */

  /**
   * Checks if two publicKeys are equal
   */
  equals(publicKey) {
    return this._bn.eq(publicKey._bn);
  }

  /**
   * Return the base-58 representation of the public key
   */
  toBase58() {
    return bs58__WEBPACK_IMPORTED_MODULE_4___default().encode(this.toBytes());
  }
  toJSON() {
    return this.toBase58();
  }

  /**
   * Return the byte array representation of the public key in big endian
   */
  toBytes() {
    const buf = this.toBuffer();
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
  }

  /**
   * Return the Buffer representation of the public key in big endian
   */
  toBuffer() {
    const b = this._bn.toArrayLike(buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer);
    if (b.length === PUBLIC_KEY_LENGTH) {
      return b;
    }
    const zeroPad = buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.alloc(32);
    b.copy(zeroPad, 32 - b.length);
    return zeroPad;
  }
  get [_Symbol$toStringTag]() {
    return `PublicKey(${this.toString()})`;
  }

  /**
   * Return the base-58 representation of the public key
   */
  toString() {
    return this.toBase58();
  }

  /**
   * Derive a public key from another key, a seed, and a program ID.
   * The program ID will also serve as the owner of the public key, giving
   * it permission to write data to the account.
   */
  /* eslint-disable require-await */
  static async createWithSeed(fromPublicKey, seed, programId) {
    const buffer = buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.concat([fromPublicKey.toBuffer(), buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from(seed), programId.toBuffer()]);
    const publicKeyBytes = (0,_noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_5__.sha256)(buffer);
    return new PublicKey(publicKeyBytes);
  }

  /**
   * Derive a program address from seeds and a program ID.
   */
  /* eslint-disable require-await */
  static createProgramAddressSync(seeds, programId) {
    let buffer = buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.alloc(0);
    seeds.forEach(function (seed) {
      if (seed.length > MAX_SEED_LENGTH) {
        throw new TypeError(`Max seed length exceeded`);
      }
      buffer = buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.concat([buffer, toBuffer(seed)]);
    });
    buffer = buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.concat([buffer, programId.toBuffer(), buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from('ProgramDerivedAddress')]);
    const publicKeyBytes = (0,_noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_5__.sha256)(buffer);
    if (isOnCurve(publicKeyBytes)) {
      throw new Error(`Invalid seeds, address must fall off the curve`);
    }
    return new PublicKey(publicKeyBytes);
  }

  /**
   * Async version of createProgramAddressSync
   * For backwards compatibility
   *
   * @deprecated Use {@link createProgramAddressSync} instead
   */
  /* eslint-disable require-await */
  static async createProgramAddress(seeds, programId) {
    return this.createProgramAddressSync(seeds, programId);
  }

  /**
   * Find a valid program address
   *
   * Valid program addresses must fall off the ed25519 curve.  This function
   * iterates a nonce until it finds one that when combined with the seeds
   * results in a valid program address.
   */
  static findProgramAddressSync(seeds, programId) {
    let nonce = 255;
    let address;
    while (nonce != 0) {
      try {
        const seedsWithNonce = seeds.concat(buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from([nonce]));
        address = this.createProgramAddressSync(seedsWithNonce, programId);
      } catch (err) {
        if (err instanceof TypeError) {
          throw err;
        }
        nonce--;
        continue;
      }
      return [address, nonce];
    }
    throw new Error(`Unable to find a viable program address nonce`);
  }

  /**
   * Async version of findProgramAddressSync
   * For backwards compatibility
   *
   * @deprecated Use {@link findProgramAddressSync} instead
   */
  static async findProgramAddress(seeds, programId) {
    return this.findProgramAddressSync(seeds, programId);
  }

  /**
   * Check that a pubkey is on the ed25519 curve.
   */
  static isOnCurve(pubkeyData) {
    const pubkey = new PublicKey(pubkeyData);
    return isOnCurve(pubkey.toBytes());
  }
}
PublicKey.default = new PublicKey('11111111111111111111111111111111');
SOLANA_SCHEMA.set(PublicKey, {
  kind: 'struct',
  fields: [['_bn', 'u256']]
});

/**
 * An account key pair (public and secret keys).
 *
 * @deprecated since v1.10.0, please use {@link Keypair} instead.
 */
class Account {
  /** @internal */

  /** @internal */

  /**
   * Create a new Account object
   *
   * If the secretKey parameter is not provided a new key pair is randomly
   * created for the account
   *
   * @param secretKey Secret key for the account
   */
  constructor(secretKey) {
    this._publicKey = void 0;
    this._secretKey = void 0;
    if (secretKey) {
      const secretKeyBuffer = toBuffer(secretKey);
      if (secretKey.length !== 64) {
        throw new Error('bad secret key size');
      }
      this._publicKey = secretKeyBuffer.slice(32, 64);
      this._secretKey = secretKeyBuffer.slice(0, 32);
    } else {
      this._secretKey = toBuffer(generatePrivateKey());
      this._publicKey = toBuffer(getPublicKey(this._secretKey));
    }
  }

  /**
   * The public key for this account
   */
  get publicKey() {
    return new PublicKey(this._publicKey);
  }

  /**
   * The **unencrypted** secret key for this account. The first 32 bytes
   * is the private scalar and the last 32 bytes is the public key.
   * Read more: https://blog.mozilla.org/warner/2011/11/29/ed25519-keys/
   */
  get secretKey() {
    return buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.concat([this._secretKey, this._publicKey], 64);
  }
}

const BPF_LOADER_DEPRECATED_PROGRAM_ID = new PublicKey('BPFLoader1111111111111111111111111111111111');

/**
 * Maximum over-the-wire size of a Transaction
 *
 * 1280 is IPv6 minimum MTU
 * 40 bytes is the size of the IPv6 header
 * 8 bytes is the size of the fragment header
 */
const PACKET_DATA_SIZE = 1280 - 40 - 8;
const VERSION_PREFIX_MASK = 0x7f;
const SIGNATURE_LENGTH_IN_BYTES = 64;

class TransactionExpiredBlockheightExceededError extends Error {
  constructor(signature) {
    super(`Signature ${signature} has expired: block height exceeded.`);
    this.signature = void 0;
    this.signature = signature;
  }
}
Object.defineProperty(TransactionExpiredBlockheightExceededError.prototype, 'name', {
  value: 'TransactionExpiredBlockheightExceededError'
});
class TransactionExpiredTimeoutError extends Error {
  constructor(signature, timeoutSeconds) {
    super(`Transaction was not confirmed in ${timeoutSeconds.toFixed(2)} seconds. It is ` + 'unknown if it succeeded or failed. Check signature ' + `${signature} using the Solana Explorer or CLI tools.`);
    this.signature = void 0;
    this.signature = signature;
  }
}
Object.defineProperty(TransactionExpiredTimeoutError.prototype, 'name', {
  value: 'TransactionExpiredTimeoutError'
});
class TransactionExpiredNonceInvalidError extends Error {
  constructor(signature) {
    super(`Signature ${signature} has expired: the nonce is no longer valid.`);
    this.signature = void 0;
    this.signature = signature;
  }
}
Object.defineProperty(TransactionExpiredNonceInvalidError.prototype, 'name', {
  value: 'TransactionExpiredNonceInvalidError'
});

class MessageAccountKeys {
  constructor(staticAccountKeys, accountKeysFromLookups) {
    this.staticAccountKeys = void 0;
    this.accountKeysFromLookups = void 0;
    this.staticAccountKeys = staticAccountKeys;
    this.accountKeysFromLookups = accountKeysFromLookups;
  }
  keySegments() {
    const keySegments = [this.staticAccountKeys];
    if (this.accountKeysFromLookups) {
      keySegments.push(this.accountKeysFromLookups.writable);
      keySegments.push(this.accountKeysFromLookups.readonly);
    }
    return keySegments;
  }
  get(index) {
    for (const keySegment of this.keySegments()) {
      if (index < keySegment.length) {
        return keySegment[index];
      } else {
        index -= keySegment.length;
      }
    }
    return;
  }
  get length() {
    return this.keySegments().flat().length;
  }
  compileInstructions(instructions) {
    // Bail early if any account indexes would overflow a u8
    const U8_MAX = 255;
    if (this.length > U8_MAX + 1) {
      throw new Error('Account index overflow encountered during compilation');
    }
    const keyIndexMap = new Map();
    this.keySegments().flat().forEach((key, index) => {
      keyIndexMap.set(key.toBase58(), index);
    });
    const findKeyIndex = key => {
      const keyIndex = keyIndexMap.get(key.toBase58());
      if (keyIndex === undefined) throw new Error('Encountered an unknown instruction account key during compilation');
      return keyIndex;
    };
    return instructions.map(instruction => {
      return {
        programIdIndex: findKeyIndex(instruction.programId),
        accountKeyIndexes: instruction.keys.map(meta => findKeyIndex(meta.pubkey)),
        data: instruction.data
      };
    });
  }
}

/**
 * Layout for a public key
 */
const publicKey = (property = 'publicKey') => {
  return _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.blob(32, property);
};

/**
 * Layout for a signature
 */
const signature = (property = 'signature') => {
  return _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.blob(64, property);
};
/**
 * Layout for a Rust String type
 */
const rustString = (property = 'string') => {
  const rsl = _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('length'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('lengthPadding'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.blob(_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.offset(_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32(), -8), 'chars')], property);
  const _decode = rsl.decode.bind(rsl);
  const _encode = rsl.encode.bind(rsl);
  const rslShim = rsl;
  rslShim.decode = (b, offset) => {
    const data = _decode(b, offset);
    return data['chars'].toString();
  };
  rslShim.encode = (str, b, offset) => {
    const data = {
      chars: buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from(str, 'utf8')
    };
    return _encode(data, b, offset);
  };
  rslShim.alloc = str => {
    return _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32().span + _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32().span + buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from(str, 'utf8').length;
  };
  return rslShim;
};

/**
 * Layout for an Authorized object
 */
const authorized = (property = 'authorized') => {
  return _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([publicKey('staker'), publicKey('withdrawer')], property);
};

/**
 * Layout for a Lockup object
 */
const lockup = (property = 'lockup') => {
  return _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.ns64('unixTimestamp'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.ns64('epoch'), publicKey('custodian')], property);
};

/**
 *  Layout for a VoteInit object
 */
const voteInit = (property = 'voteInit') => {
  return _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([publicKey('nodePubkey'), publicKey('authorizedVoter'), publicKey('authorizedWithdrawer'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8('commission')], property);
};

/**
 *  Layout for a VoteAuthorizeWithSeedArgs object
 */
const voteAuthorizeWithSeedArgs = (property = 'voteAuthorizeWithSeedArgs') => {
  return _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('voteAuthorizationType'), publicKey('currentAuthorityDerivedKeyOwnerPubkey'), rustString('currentAuthorityDerivedKeySeed'), publicKey('newAuthorized')], property);
};
function getAlloc(type, fields) {
  const getItemAlloc = item => {
    if (item.span >= 0) {
      return item.span;
    } else if (typeof item.alloc === 'function') {
      return item.alloc(fields[item.property]);
    } else if ('count' in item && 'elementLayout' in item) {
      const field = fields[item.property];
      if (Array.isArray(field)) {
        return field.length * getItemAlloc(item.elementLayout);
      }
    } else if ('fields' in item) {
      // This is a `Structure` whose size needs to be recursively measured.
      return getAlloc({
        layout: item
      }, fields[item.property]);
    }
    // Couldn't determine allocated size of layout
    return 0;
  };
  let alloc = 0;
  type.layout.fields.forEach(item => {
    alloc += getItemAlloc(item);
  });
  return alloc;
}

function decodeLength(bytes) {
  let len = 0;
  let size = 0;
  for (;;) {
    let elem = bytes.shift();
    len |= (elem & 0x7f) << size * 7;
    size += 1;
    if ((elem & 0x80) === 0) {
      break;
    }
  }
  return len;
}
function encodeLength(bytes, len) {
  let rem_len = len;
  for (;;) {
    let elem = rem_len & 0x7f;
    rem_len >>= 7;
    if (rem_len == 0) {
      bytes.push(elem);
      break;
    } else {
      elem |= 0x80;
      bytes.push(elem);
    }
  }
}

function assert (condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

class CompiledKeys {
  constructor(payer, keyMetaMap) {
    this.payer = void 0;
    this.keyMetaMap = void 0;
    this.payer = payer;
    this.keyMetaMap = keyMetaMap;
  }
  static compile(instructions, payer) {
    const keyMetaMap = new Map();
    const getOrInsertDefault = pubkey => {
      const address = pubkey.toBase58();
      let keyMeta = keyMetaMap.get(address);
      if (keyMeta === undefined) {
        keyMeta = {
          isSigner: false,
          isWritable: false,
          isInvoked: false
        };
        keyMetaMap.set(address, keyMeta);
      }
      return keyMeta;
    };
    const payerKeyMeta = getOrInsertDefault(payer);
    payerKeyMeta.isSigner = true;
    payerKeyMeta.isWritable = true;
    for (const ix of instructions) {
      getOrInsertDefault(ix.programId).isInvoked = true;
      for (const accountMeta of ix.keys) {
        const keyMeta = getOrInsertDefault(accountMeta.pubkey);
        keyMeta.isSigner || (keyMeta.isSigner = accountMeta.isSigner);
        keyMeta.isWritable || (keyMeta.isWritable = accountMeta.isWritable);
      }
    }
    return new CompiledKeys(payer, keyMetaMap);
  }
  getMessageComponents() {
    const mapEntries = [...this.keyMetaMap.entries()];
    assert(mapEntries.length <= 256, 'Max static account keys length exceeded');
    const writableSigners = mapEntries.filter(([, meta]) => meta.isSigner && meta.isWritable);
    const readonlySigners = mapEntries.filter(([, meta]) => meta.isSigner && !meta.isWritable);
    const writableNonSigners = mapEntries.filter(([, meta]) => !meta.isSigner && meta.isWritable);
    const readonlyNonSigners = mapEntries.filter(([, meta]) => !meta.isSigner && !meta.isWritable);
    const header = {
      numRequiredSignatures: writableSigners.length + readonlySigners.length,
      numReadonlySignedAccounts: readonlySigners.length,
      numReadonlyUnsignedAccounts: readonlyNonSigners.length
    };

    // sanity checks
    {
      assert(writableSigners.length > 0, 'Expected at least one writable signer key');
      const [payerAddress] = writableSigners[0];
      assert(payerAddress === this.payer.toBase58(), 'Expected first writable signer key to be the fee payer');
    }
    const staticAccountKeys = [...writableSigners.map(([address]) => new PublicKey(address)), ...readonlySigners.map(([address]) => new PublicKey(address)), ...writableNonSigners.map(([address]) => new PublicKey(address)), ...readonlyNonSigners.map(([address]) => new PublicKey(address))];
    return [header, staticAccountKeys];
  }
  extractTableLookup(lookupTable) {
    const [writableIndexes, drainedWritableKeys] = this.drainKeysFoundInLookupTable(lookupTable.state.addresses, keyMeta => !keyMeta.isSigner && !keyMeta.isInvoked && keyMeta.isWritable);
    const [readonlyIndexes, drainedReadonlyKeys] = this.drainKeysFoundInLookupTable(lookupTable.state.addresses, keyMeta => !keyMeta.isSigner && !keyMeta.isInvoked && !keyMeta.isWritable);

    // Don't extract lookup if no keys were found
    if (writableIndexes.length === 0 && readonlyIndexes.length === 0) {
      return;
    }
    return [{
      accountKey: lookupTable.key,
      writableIndexes,
      readonlyIndexes
    }, {
      writable: drainedWritableKeys,
      readonly: drainedReadonlyKeys
    }];
  }

  /** @internal */
  drainKeysFoundInLookupTable(lookupTableEntries, keyMetaFilter) {
    const lookupTableIndexes = new Array();
    const drainedKeys = new Array();
    for (const [address, keyMeta] of this.keyMetaMap.entries()) {
      if (keyMetaFilter(keyMeta)) {
        const key = new PublicKey(address);
        const lookupTableIndex = lookupTableEntries.findIndex(entry => entry.equals(key));
        if (lookupTableIndex >= 0) {
          assert(lookupTableIndex < 256, 'Max lookup table index exceeded');
          lookupTableIndexes.push(lookupTableIndex);
          drainedKeys.push(key);
          this.keyMetaMap.delete(address);
        }
      }
    }
    return [lookupTableIndexes, drainedKeys];
  }
}

/**
 * An instruction to execute by a program
 *
 * @property {number} programIdIndex
 * @property {number[]} accounts
 * @property {string} data
 */

/**
 * List of instructions to be processed atomically
 */
class Message {
  constructor(args) {
    this.header = void 0;
    this.accountKeys = void 0;
    this.recentBlockhash = void 0;
    this.instructions = void 0;
    this.indexToProgramIds = new Map();
    this.header = args.header;
    this.accountKeys = args.accountKeys.map(account => new PublicKey(account));
    this.recentBlockhash = args.recentBlockhash;
    this.instructions = args.instructions;
    this.instructions.forEach(ix => this.indexToProgramIds.set(ix.programIdIndex, this.accountKeys[ix.programIdIndex]));
  }
  get version() {
    return 'legacy';
  }
  get staticAccountKeys() {
    return this.accountKeys;
  }
  get compiledInstructions() {
    return this.instructions.map(ix => ({
      programIdIndex: ix.programIdIndex,
      accountKeyIndexes: ix.accounts,
      data: bs58__WEBPACK_IMPORTED_MODULE_4___default().decode(ix.data)
    }));
  }
  get addressTableLookups() {
    return [];
  }
  getAccountKeys() {
    return new MessageAccountKeys(this.staticAccountKeys);
  }
  static compile(args) {
    const compiledKeys = CompiledKeys.compile(args.instructions, args.payerKey);
    const [header, staticAccountKeys] = compiledKeys.getMessageComponents();
    const accountKeys = new MessageAccountKeys(staticAccountKeys);
    const instructions = accountKeys.compileInstructions(args.instructions).map(ix => ({
      programIdIndex: ix.programIdIndex,
      accounts: ix.accountKeyIndexes,
      data: bs58__WEBPACK_IMPORTED_MODULE_4___default().encode(ix.data)
    }));
    return new Message({
      header,
      accountKeys: staticAccountKeys,
      recentBlockhash: args.recentBlockhash,
      instructions
    });
  }
  isAccountSigner(index) {
    return index < this.header.numRequiredSignatures;
  }
  isAccountWritable(index) {
    const numSignedAccounts = this.header.numRequiredSignatures;
    if (index >= this.header.numRequiredSignatures) {
      const unsignedAccountIndex = index - numSignedAccounts;
      const numUnsignedAccounts = this.accountKeys.length - numSignedAccounts;
      const numWritableUnsignedAccounts = numUnsignedAccounts - this.header.numReadonlyUnsignedAccounts;
      return unsignedAccountIndex < numWritableUnsignedAccounts;
    } else {
      const numWritableSignedAccounts = numSignedAccounts - this.header.numReadonlySignedAccounts;
      return index < numWritableSignedAccounts;
    }
  }
  isProgramId(index) {
    return this.indexToProgramIds.has(index);
  }
  programIds() {
    return [...this.indexToProgramIds.values()];
  }
  nonProgramIds() {
    return this.accountKeys.filter((_, index) => !this.isProgramId(index));
  }
  serialize() {
    const numKeys = this.accountKeys.length;
    let keyCount = [];
    encodeLength(keyCount, numKeys);
    const instructions = this.instructions.map(instruction => {
      const {
        accounts,
        programIdIndex
      } = instruction;
      const data = Array.from(bs58__WEBPACK_IMPORTED_MODULE_4___default().decode(instruction.data));
      let keyIndicesCount = [];
      encodeLength(keyIndicesCount, accounts.length);
      let dataCount = [];
      encodeLength(dataCount, data.length);
      return {
        programIdIndex,
        keyIndicesCount: buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from(keyIndicesCount),
        keyIndices: accounts,
        dataLength: buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from(dataCount),
        data
      };
    });
    let instructionCount = [];
    encodeLength(instructionCount, instructions.length);
    let instructionBuffer = buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.alloc(PACKET_DATA_SIZE);
    buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from(instructionCount).copy(instructionBuffer);
    let instructionBufferLength = instructionCount.length;
    instructions.forEach(instruction => {
      const instructionLayout = _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8('programIdIndex'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.blob(instruction.keyIndicesCount.length, 'keyIndicesCount'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.seq(_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8('keyIndex'), instruction.keyIndices.length, 'keyIndices'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.blob(instruction.dataLength.length, 'dataLength'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.seq(_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8('userdatum'), instruction.data.length, 'data')]);
      const length = instructionLayout.encode(instruction, instructionBuffer, instructionBufferLength);
      instructionBufferLength += length;
    });
    instructionBuffer = instructionBuffer.slice(0, instructionBufferLength);
    const signDataLayout = _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.blob(1, 'numRequiredSignatures'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.blob(1, 'numReadonlySignedAccounts'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.blob(1, 'numReadonlyUnsignedAccounts'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.blob(keyCount.length, 'keyCount'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.seq(publicKey('key'), numKeys, 'keys'), publicKey('recentBlockhash')]);
    const transaction = {
      numRequiredSignatures: buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from([this.header.numRequiredSignatures]),
      numReadonlySignedAccounts: buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from([this.header.numReadonlySignedAccounts]),
      numReadonlyUnsignedAccounts: buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from([this.header.numReadonlyUnsignedAccounts]),
      keyCount: buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from(keyCount),
      keys: this.accountKeys.map(key => toBuffer(key.toBytes())),
      recentBlockhash: bs58__WEBPACK_IMPORTED_MODULE_4___default().decode(this.recentBlockhash)
    };
    let signData = buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.alloc(2048);
    const length = signDataLayout.encode(transaction, signData);
    instructionBuffer.copy(signData, length);
    return signData.slice(0, length + instructionBuffer.length);
  }

  /**
   * Decode a compiled message into a Message object.
   */
  static from(buffer) {
    // Slice up wire data
    let byteArray = [...buffer];
    const numRequiredSignatures = byteArray.shift();
    if (numRequiredSignatures !== (numRequiredSignatures & VERSION_PREFIX_MASK)) {
      throw new Error('Versioned messages must be deserialized with VersionedMessage.deserialize()');
    }
    const numReadonlySignedAccounts = byteArray.shift();
    const numReadonlyUnsignedAccounts = byteArray.shift();
    const accountCount = decodeLength(byteArray);
    let accountKeys = [];
    for (let i = 0; i < accountCount; i++) {
      const account = byteArray.slice(0, PUBLIC_KEY_LENGTH);
      byteArray = byteArray.slice(PUBLIC_KEY_LENGTH);
      accountKeys.push(new PublicKey(buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from(account)));
    }
    const recentBlockhash = byteArray.slice(0, PUBLIC_KEY_LENGTH);
    byteArray = byteArray.slice(PUBLIC_KEY_LENGTH);
    const instructionCount = decodeLength(byteArray);
    let instructions = [];
    for (let i = 0; i < instructionCount; i++) {
      const programIdIndex = byteArray.shift();
      const accountCount = decodeLength(byteArray);
      const accounts = byteArray.slice(0, accountCount);
      byteArray = byteArray.slice(accountCount);
      const dataLength = decodeLength(byteArray);
      const dataSlice = byteArray.slice(0, dataLength);
      const data = bs58__WEBPACK_IMPORTED_MODULE_4___default().encode(buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from(dataSlice));
      byteArray = byteArray.slice(dataLength);
      instructions.push({
        programIdIndex,
        accounts,
        data
      });
    }
    const messageArgs = {
      header: {
        numRequiredSignatures,
        numReadonlySignedAccounts,
        numReadonlyUnsignedAccounts
      },
      recentBlockhash: bs58__WEBPACK_IMPORTED_MODULE_4___default().encode(buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from(recentBlockhash)),
      accountKeys,
      instructions
    };
    return new Message(messageArgs);
  }
}

/**
 * Message constructor arguments
 */

class MessageV0 {
  constructor(args) {
    this.header = void 0;
    this.staticAccountKeys = void 0;
    this.recentBlockhash = void 0;
    this.compiledInstructions = void 0;
    this.addressTableLookups = void 0;
    this.header = args.header;
    this.staticAccountKeys = args.staticAccountKeys;
    this.recentBlockhash = args.recentBlockhash;
    this.compiledInstructions = args.compiledInstructions;
    this.addressTableLookups = args.addressTableLookups;
  }
  get version() {
    return 0;
  }
  get numAccountKeysFromLookups() {
    let count = 0;
    for (const lookup of this.addressTableLookups) {
      count += lookup.readonlyIndexes.length + lookup.writableIndexes.length;
    }
    return count;
  }
  getAccountKeys(args) {
    let accountKeysFromLookups;
    if (args && 'accountKeysFromLookups' in args && args.accountKeysFromLookups) {
      if (this.numAccountKeysFromLookups != args.accountKeysFromLookups.writable.length + args.accountKeysFromLookups.readonly.length) {
        throw new Error('Failed to get account keys because of a mismatch in the number of account keys from lookups');
      }
      accountKeysFromLookups = args.accountKeysFromLookups;
    } else if (args && 'addressLookupTableAccounts' in args && args.addressLookupTableAccounts) {
      accountKeysFromLookups = this.resolveAddressTableLookups(args.addressLookupTableAccounts);
    } else if (this.addressTableLookups.length > 0) {
      throw new Error('Failed to get account keys because address table lookups were not resolved');
    }
    return new MessageAccountKeys(this.staticAccountKeys, accountKeysFromLookups);
  }
  isAccountSigner(index) {
    return index < this.header.numRequiredSignatures;
  }
  isAccountWritable(index) {
    const numSignedAccounts = this.header.numRequiredSignatures;
    const numStaticAccountKeys = this.staticAccountKeys.length;
    if (index >= numStaticAccountKeys) {
      const lookupAccountKeysIndex = index - numStaticAccountKeys;
      const numWritableLookupAccountKeys = this.addressTableLookups.reduce((count, lookup) => count + lookup.writableIndexes.length, 0);
      return lookupAccountKeysIndex < numWritableLookupAccountKeys;
    } else if (index >= this.header.numRequiredSignatures) {
      const unsignedAccountIndex = index - numSignedAccounts;
      const numUnsignedAccounts = numStaticAccountKeys - numSignedAccounts;
      const numWritableUnsignedAccounts = numUnsignedAccounts - this.header.numReadonlyUnsignedAccounts;
      return unsignedAccountIndex < numWritableUnsignedAccounts;
    } else {
      const numWritableSignedAccounts = numSignedAccounts - this.header.numReadonlySignedAccounts;
      return index < numWritableSignedAccounts;
    }
  }
  resolveAddressTableLookups(addressLookupTableAccounts) {
    const accountKeysFromLookups = {
      writable: [],
      readonly: []
    };
    for (const tableLookup of this.addressTableLookups) {
      const tableAccount = addressLookupTableAccounts.find(account => account.key.equals(tableLookup.accountKey));
      if (!tableAccount) {
        throw new Error(`Failed to find address lookup table account for table key ${tableLookup.accountKey.toBase58()}`);
      }
      for (const index of tableLookup.writableIndexes) {
        if (index < tableAccount.state.addresses.length) {
          accountKeysFromLookups.writable.push(tableAccount.state.addresses[index]);
        } else {
          throw new Error(`Failed to find address for index ${index} in address lookup table ${tableLookup.accountKey.toBase58()}`);
        }
      }
      for (const index of tableLookup.readonlyIndexes) {
        if (index < tableAccount.state.addresses.length) {
          accountKeysFromLookups.readonly.push(tableAccount.state.addresses[index]);
        } else {
          throw new Error(`Failed to find address for index ${index} in address lookup table ${tableLookup.accountKey.toBase58()}`);
        }
      }
    }
    return accountKeysFromLookups;
  }
  static compile(args) {
    const compiledKeys = CompiledKeys.compile(args.instructions, args.payerKey);
    const addressTableLookups = new Array();
    const accountKeysFromLookups = {
      writable: new Array(),
      readonly: new Array()
    };
    const lookupTableAccounts = args.addressLookupTableAccounts || [];
    for (const lookupTable of lookupTableAccounts) {
      const extractResult = compiledKeys.extractTableLookup(lookupTable);
      if (extractResult !== undefined) {
        const [addressTableLookup, {
          writable,
          readonly
        }] = extractResult;
        addressTableLookups.push(addressTableLookup);
        accountKeysFromLookups.writable.push(...writable);
        accountKeysFromLookups.readonly.push(...readonly);
      }
    }
    const [header, staticAccountKeys] = compiledKeys.getMessageComponents();
    const accountKeys = new MessageAccountKeys(staticAccountKeys, accountKeysFromLookups);
    const compiledInstructions = accountKeys.compileInstructions(args.instructions);
    return new MessageV0({
      header,
      staticAccountKeys,
      recentBlockhash: args.recentBlockhash,
      compiledInstructions,
      addressTableLookups
    });
  }
  serialize() {
    const encodedStaticAccountKeysLength = Array();
    encodeLength(encodedStaticAccountKeysLength, this.staticAccountKeys.length);
    const serializedInstructions = this.serializeInstructions();
    const encodedInstructionsLength = Array();
    encodeLength(encodedInstructionsLength, this.compiledInstructions.length);
    const serializedAddressTableLookups = this.serializeAddressTableLookups();
    const encodedAddressTableLookupsLength = Array();
    encodeLength(encodedAddressTableLookupsLength, this.addressTableLookups.length);
    const messageLayout = _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8('prefix'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8('numRequiredSignatures'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8('numReadonlySignedAccounts'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8('numReadonlyUnsignedAccounts')], 'header'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.blob(encodedStaticAccountKeysLength.length, 'staticAccountKeysLength'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.seq(publicKey(), this.staticAccountKeys.length, 'staticAccountKeys'), publicKey('recentBlockhash'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.blob(encodedInstructionsLength.length, 'instructionsLength'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.blob(serializedInstructions.length, 'serializedInstructions'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.blob(encodedAddressTableLookupsLength.length, 'addressTableLookupsLength'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.blob(serializedAddressTableLookups.length, 'serializedAddressTableLookups')]);
    const serializedMessage = new Uint8Array(PACKET_DATA_SIZE);
    const MESSAGE_VERSION_0_PREFIX = 1 << 7;
    const serializedMessageLength = messageLayout.encode({
      prefix: MESSAGE_VERSION_0_PREFIX,
      header: this.header,
      staticAccountKeysLength: new Uint8Array(encodedStaticAccountKeysLength),
      staticAccountKeys: this.staticAccountKeys.map(key => key.toBytes()),
      recentBlockhash: bs58__WEBPACK_IMPORTED_MODULE_4___default().decode(this.recentBlockhash),
      instructionsLength: new Uint8Array(encodedInstructionsLength),
      serializedInstructions,
      addressTableLookupsLength: new Uint8Array(encodedAddressTableLookupsLength),
      serializedAddressTableLookups
    }, serializedMessage);
    return serializedMessage.slice(0, serializedMessageLength);
  }
  serializeInstructions() {
    let serializedLength = 0;
    const serializedInstructions = new Uint8Array(PACKET_DATA_SIZE);
    for (const instruction of this.compiledInstructions) {
      const encodedAccountKeyIndexesLength = Array();
      encodeLength(encodedAccountKeyIndexesLength, instruction.accountKeyIndexes.length);
      const encodedDataLength = Array();
      encodeLength(encodedDataLength, instruction.data.length);
      const instructionLayout = _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8('programIdIndex'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.blob(encodedAccountKeyIndexesLength.length, 'encodedAccountKeyIndexesLength'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.seq(_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8(), instruction.accountKeyIndexes.length, 'accountKeyIndexes'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.blob(encodedDataLength.length, 'encodedDataLength'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.blob(instruction.data.length, 'data')]);
      serializedLength += instructionLayout.encode({
        programIdIndex: instruction.programIdIndex,
        encodedAccountKeyIndexesLength: new Uint8Array(encodedAccountKeyIndexesLength),
        accountKeyIndexes: instruction.accountKeyIndexes,
        encodedDataLength: new Uint8Array(encodedDataLength),
        data: instruction.data
      }, serializedInstructions, serializedLength);
    }
    return serializedInstructions.slice(0, serializedLength);
  }
  serializeAddressTableLookups() {
    let serializedLength = 0;
    const serializedAddressTableLookups = new Uint8Array(PACKET_DATA_SIZE);
    for (const lookup of this.addressTableLookups) {
      const encodedWritableIndexesLength = Array();
      encodeLength(encodedWritableIndexesLength, lookup.writableIndexes.length);
      const encodedReadonlyIndexesLength = Array();
      encodeLength(encodedReadonlyIndexesLength, lookup.readonlyIndexes.length);
      const addressTableLookupLayout = _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([publicKey('accountKey'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.blob(encodedWritableIndexesLength.length, 'encodedWritableIndexesLength'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.seq(_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8(), lookup.writableIndexes.length, 'writableIndexes'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.blob(encodedReadonlyIndexesLength.length, 'encodedReadonlyIndexesLength'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.seq(_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8(), lookup.readonlyIndexes.length, 'readonlyIndexes')]);
      serializedLength += addressTableLookupLayout.encode({
        accountKey: lookup.accountKey.toBytes(),
        encodedWritableIndexesLength: new Uint8Array(encodedWritableIndexesLength),
        writableIndexes: lookup.writableIndexes,
        encodedReadonlyIndexesLength: new Uint8Array(encodedReadonlyIndexesLength),
        readonlyIndexes: lookup.readonlyIndexes
      }, serializedAddressTableLookups, serializedLength);
    }
    return serializedAddressTableLookups.slice(0, serializedLength);
  }
  static deserialize(serializedMessage) {
    let byteArray = [...serializedMessage];
    const prefix = byteArray.shift();
    const maskedPrefix = prefix & VERSION_PREFIX_MASK;
    assert(prefix !== maskedPrefix, `Expected versioned message but received legacy message`);
    const version = maskedPrefix;
    assert(version === 0, `Expected versioned message with version 0 but found version ${version}`);
    const header = {
      numRequiredSignatures: byteArray.shift(),
      numReadonlySignedAccounts: byteArray.shift(),
      numReadonlyUnsignedAccounts: byteArray.shift()
    };
    const staticAccountKeys = [];
    const staticAccountKeysLength = decodeLength(byteArray);
    for (let i = 0; i < staticAccountKeysLength; i++) {
      staticAccountKeys.push(new PublicKey(byteArray.splice(0, PUBLIC_KEY_LENGTH)));
    }
    const recentBlockhash = bs58__WEBPACK_IMPORTED_MODULE_4___default().encode(byteArray.splice(0, PUBLIC_KEY_LENGTH));
    const instructionCount = decodeLength(byteArray);
    const compiledInstructions = [];
    for (let i = 0; i < instructionCount; i++) {
      const programIdIndex = byteArray.shift();
      const accountKeyIndexesLength = decodeLength(byteArray);
      const accountKeyIndexes = byteArray.splice(0, accountKeyIndexesLength);
      const dataLength = decodeLength(byteArray);
      const data = new Uint8Array(byteArray.splice(0, dataLength));
      compiledInstructions.push({
        programIdIndex,
        accountKeyIndexes,
        data
      });
    }
    const addressTableLookupsCount = decodeLength(byteArray);
    const addressTableLookups = [];
    for (let i = 0; i < addressTableLookupsCount; i++) {
      const accountKey = new PublicKey(byteArray.splice(0, PUBLIC_KEY_LENGTH));
      const writableIndexesLength = decodeLength(byteArray);
      const writableIndexes = byteArray.splice(0, writableIndexesLength);
      const readonlyIndexesLength = decodeLength(byteArray);
      const readonlyIndexes = byteArray.splice(0, readonlyIndexesLength);
      addressTableLookups.push({
        accountKey,
        writableIndexes,
        readonlyIndexes
      });
    }
    return new MessageV0({
      header,
      staticAccountKeys,
      recentBlockhash,
      compiledInstructions,
      addressTableLookups
    });
  }
}

// eslint-disable-next-line no-redeclare
const VersionedMessage = {
  deserializeMessageVersion(serializedMessage) {
    const prefix = serializedMessage[0];
    const maskedPrefix = prefix & VERSION_PREFIX_MASK;

    // if the highest bit of the prefix is not set, the message is not versioned
    if (maskedPrefix === prefix) {
      return 'legacy';
    }

    // the lower 7 bits of the prefix indicate the message version
    return maskedPrefix;
  },
  deserialize: serializedMessage => {
    const version = VersionedMessage.deserializeMessageVersion(serializedMessage);
    if (version === 'legacy') {
      return Message.from(serializedMessage);
    }
    if (version === 0) {
      return MessageV0.deserialize(serializedMessage);
    } else {
      throw new Error(`Transaction message version ${version} deserialization is not supported`);
    }
  }
};

/**
 * Transaction signature as base-58 encoded string
 */

let TransactionStatus;

/**
 * Default (empty) signature
 */
(function (TransactionStatus) {
  TransactionStatus[TransactionStatus["BLOCKHEIGHT_EXCEEDED"] = 0] = "BLOCKHEIGHT_EXCEEDED";
  TransactionStatus[TransactionStatus["PROCESSED"] = 1] = "PROCESSED";
  TransactionStatus[TransactionStatus["TIMED_OUT"] = 2] = "TIMED_OUT";
  TransactionStatus[TransactionStatus["NONCE_INVALID"] = 3] = "NONCE_INVALID";
})(TransactionStatus || (TransactionStatus = {}));
const DEFAULT_SIGNATURE = buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.alloc(SIGNATURE_LENGTH_IN_BYTES).fill(0);

/**
 * Account metadata used to define instructions
 */

/**
 * Transaction Instruction class
 */
class TransactionInstruction {
  /**
   * Public keys to include in this transaction
   * Boolean represents whether this pubkey needs to sign the transaction
   */

  /**
   * Program Id to execute
   */

  /**
   * Program input
   */

  constructor(opts) {
    this.keys = void 0;
    this.programId = void 0;
    this.data = buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.alloc(0);
    this.programId = opts.programId;
    this.keys = opts.keys;
    if (opts.data) {
      this.data = opts.data;
    }
  }

  /**
   * @internal
   */
  toJSON() {
    return {
      keys: this.keys.map(({
        pubkey,
        isSigner,
        isWritable
      }) => ({
        pubkey: pubkey.toJSON(),
        isSigner,
        isWritable
      })),
      programId: this.programId.toJSON(),
      data: [...this.data]
    };
  }
}

/**
 * Pair of signature and corresponding public key
 */

/**
 * Transaction class
 */
class Transaction {
  /**
   * Signatures for the transaction.  Typically created by invoking the
   * `sign()` method
   */

  /**
   * The first (payer) Transaction signature
   */
  get signature() {
    if (this.signatures.length > 0) {
      return this.signatures[0].signature;
    }
    return null;
  }

  /**
   * The transaction fee payer
   */

  /**
   * Construct an empty Transaction
   */
  constructor(opts) {
    this.signatures = [];
    this.feePayer = void 0;
    this.instructions = [];
    this.recentBlockhash = void 0;
    this.lastValidBlockHeight = void 0;
    this.nonceInfo = void 0;
    this.minNonceContextSlot = void 0;
    this._message = void 0;
    this._json = void 0;
    if (!opts) {
      return;
    }
    if (opts.feePayer) {
      this.feePayer = opts.feePayer;
    }
    if (opts.signatures) {
      this.signatures = opts.signatures;
    }
    if (Object.prototype.hasOwnProperty.call(opts, 'nonceInfo')) {
      const {
        minContextSlot,
        nonceInfo
      } = opts;
      this.minNonceContextSlot = minContextSlot;
      this.nonceInfo = nonceInfo;
    } else if (Object.prototype.hasOwnProperty.call(opts, 'lastValidBlockHeight')) {
      const {
        blockhash,
        lastValidBlockHeight
      } = opts;
      this.recentBlockhash = blockhash;
      this.lastValidBlockHeight = lastValidBlockHeight;
    } else {
      const {
        recentBlockhash,
        nonceInfo
      } = opts;
      if (nonceInfo) {
        this.nonceInfo = nonceInfo;
      }
      this.recentBlockhash = recentBlockhash;
    }
  }

  /**
   * @internal
   */
  toJSON() {
    return {
      recentBlockhash: this.recentBlockhash || null,
      feePayer: this.feePayer ? this.feePayer.toJSON() : null,
      nonceInfo: this.nonceInfo ? {
        nonce: this.nonceInfo.nonce,
        nonceInstruction: this.nonceInfo.nonceInstruction.toJSON()
      } : null,
      instructions: this.instructions.map(instruction => instruction.toJSON()),
      signers: this.signatures.map(({
        publicKey
      }) => {
        return publicKey.toJSON();
      })
    };
  }

  /**
   * Add one or more instructions to this Transaction
   */
  add(...items) {
    if (items.length === 0) {
      throw new Error('No instructions');
    }
    items.forEach(item => {
      if ('instructions' in item) {
        this.instructions = this.instructions.concat(item.instructions);
      } else if ('data' in item && 'programId' in item && 'keys' in item) {
        this.instructions.push(item);
      } else {
        this.instructions.push(new TransactionInstruction(item));
      }
    });
    return this;
  }

  /**
   * Compile transaction data
   */
  compileMessage() {
    if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json)) {
      return this._message;
    }
    let recentBlockhash;
    let instructions;
    if (this.nonceInfo) {
      recentBlockhash = this.nonceInfo.nonce;
      if (this.instructions[0] != this.nonceInfo.nonceInstruction) {
        instructions = [this.nonceInfo.nonceInstruction, ...this.instructions];
      } else {
        instructions = this.instructions;
      }
    } else {
      recentBlockhash = this.recentBlockhash;
      instructions = this.instructions;
    }
    if (!recentBlockhash) {
      throw new Error('Transaction recentBlockhash required');
    }
    if (instructions.length < 1) {
      console.warn('No instructions provided');
    }
    let feePayer;
    if (this.feePayer) {
      feePayer = this.feePayer;
    } else if (this.signatures.length > 0 && this.signatures[0].publicKey) {
      // Use implicit fee payer
      feePayer = this.signatures[0].publicKey;
    } else {
      throw new Error('Transaction fee payer required');
    }
    for (let i = 0; i < instructions.length; i++) {
      if (instructions[i].programId === undefined) {
        throw new Error(`Transaction instruction index ${i} has undefined program id`);
      }
    }
    const programIds = [];
    const accountMetas = [];
    instructions.forEach(instruction => {
      instruction.keys.forEach(accountMeta => {
        accountMetas.push({
          ...accountMeta
        });
      });
      const programId = instruction.programId.toString();
      if (!programIds.includes(programId)) {
        programIds.push(programId);
      }
    });

    // Append programID account metas
    programIds.forEach(programId => {
      accountMetas.push({
        pubkey: new PublicKey(programId),
        isSigner: false,
        isWritable: false
      });
    });

    // Cull duplicate account metas
    const uniqueMetas = [];
    accountMetas.forEach(accountMeta => {
      const pubkeyString = accountMeta.pubkey.toString();
      const uniqueIndex = uniqueMetas.findIndex(x => {
        return x.pubkey.toString() === pubkeyString;
      });
      if (uniqueIndex > -1) {
        uniqueMetas[uniqueIndex].isWritable = uniqueMetas[uniqueIndex].isWritable || accountMeta.isWritable;
        uniqueMetas[uniqueIndex].isSigner = uniqueMetas[uniqueIndex].isSigner || accountMeta.isSigner;
      } else {
        uniqueMetas.push(accountMeta);
      }
    });

    // Sort. Prioritizing first by signer, then by writable
    uniqueMetas.sort(function (x, y) {
      if (x.isSigner !== y.isSigner) {
        // Signers always come before non-signers
        return x.isSigner ? -1 : 1;
      }
      if (x.isWritable !== y.isWritable) {
        // Writable accounts always come before read-only accounts
        return x.isWritable ? -1 : 1;
      }
      // Otherwise, sort by pubkey, stringwise.
      return x.pubkey.toBase58().localeCompare(y.pubkey.toBase58());
    });

    // Move fee payer to the front
    const feePayerIndex = uniqueMetas.findIndex(x => {
      return x.pubkey.equals(feePayer);
    });
    if (feePayerIndex > -1) {
      const [payerMeta] = uniqueMetas.splice(feePayerIndex, 1);
      payerMeta.isSigner = true;
      payerMeta.isWritable = true;
      uniqueMetas.unshift(payerMeta);
    } else {
      uniqueMetas.unshift({
        pubkey: feePayer,
        isSigner: true,
        isWritable: true
      });
    }

    // Disallow unknown signers
    for (const signature of this.signatures) {
      const uniqueIndex = uniqueMetas.findIndex(x => {
        return x.pubkey.equals(signature.publicKey);
      });
      if (uniqueIndex > -1) {
        if (!uniqueMetas[uniqueIndex].isSigner) {
          uniqueMetas[uniqueIndex].isSigner = true;
          console.warn('Transaction references a signature that is unnecessary, ' + 'only the fee payer and instruction signer accounts should sign a transaction. ' + 'This behavior is deprecated and will throw an error in the next major version release.');
        }
      } else {
        throw new Error(`unknown signer: ${signature.publicKey.toString()}`);
      }
    }
    let numRequiredSignatures = 0;
    let numReadonlySignedAccounts = 0;
    let numReadonlyUnsignedAccounts = 0;

    // Split out signing from non-signing keys and count header values
    const signedKeys = [];
    const unsignedKeys = [];
    uniqueMetas.forEach(({
      pubkey,
      isSigner,
      isWritable
    }) => {
      if (isSigner) {
        signedKeys.push(pubkey.toString());
        numRequiredSignatures += 1;
        if (!isWritable) {
          numReadonlySignedAccounts += 1;
        }
      } else {
        unsignedKeys.push(pubkey.toString());
        if (!isWritable) {
          numReadonlyUnsignedAccounts += 1;
        }
      }
    });
    const accountKeys = signedKeys.concat(unsignedKeys);
    const compiledInstructions = instructions.map(instruction => {
      const {
        data,
        programId
      } = instruction;
      return {
        programIdIndex: accountKeys.indexOf(programId.toString()),
        accounts: instruction.keys.map(meta => accountKeys.indexOf(meta.pubkey.toString())),
        data: bs58__WEBPACK_IMPORTED_MODULE_4___default().encode(data)
      };
    });
    compiledInstructions.forEach(instruction => {
      assert(instruction.programIdIndex >= 0);
      instruction.accounts.forEach(keyIndex => assert(keyIndex >= 0));
    });
    return new Message({
      header: {
        numRequiredSignatures,
        numReadonlySignedAccounts,
        numReadonlyUnsignedAccounts
      },
      accountKeys,
      recentBlockhash,
      instructions: compiledInstructions
    });
  }

  /**
   * @internal
   */
  _compile() {
    const message = this.compileMessage();
    const signedKeys = message.accountKeys.slice(0, message.header.numRequiredSignatures);
    if (this.signatures.length === signedKeys.length) {
      const valid = this.signatures.every((pair, index) => {
        return signedKeys[index].equals(pair.publicKey);
      });
      if (valid) return message;
    }
    this.signatures = signedKeys.map(publicKey => ({
      signature: null,
      publicKey
    }));
    return message;
  }

  /**
   * Get a buffer of the Transaction data that need to be covered by signatures
   */
  serializeMessage() {
    return this._compile().serialize();
  }

  /**
   * Get the estimated fee associated with a transaction
   */
  async getEstimatedFee(connection) {
    return (await connection.getFeeForMessage(this.compileMessage())).value;
  }

  /**
   * Specify the public keys which will be used to sign the Transaction.
   * The first signer will be used as the transaction fee payer account.
   *
   * Signatures can be added with either `partialSign` or `addSignature`
   *
   * @deprecated Deprecated since v0.84.0. Only the fee payer needs to be
   * specified and it can be set in the Transaction constructor or with the
   * `feePayer` property.
   */
  setSigners(...signers) {
    if (signers.length === 0) {
      throw new Error('No signers');
    }
    const seen = new Set();
    this.signatures = signers.filter(publicKey => {
      const key = publicKey.toString();
      if (seen.has(key)) {
        return false;
      } else {
        seen.add(key);
        return true;
      }
    }).map(publicKey => ({
      signature: null,
      publicKey
    }));
  }

  /**
   * Sign the Transaction with the specified signers. Multiple signatures may
   * be applied to a Transaction. The first signature is considered "primary"
   * and is used identify and confirm transactions.
   *
   * If the Transaction `feePayer` is not set, the first signer will be used
   * as the transaction fee payer account.
   *
   * Transaction fields should not be modified after the first call to `sign`,
   * as doing so may invalidate the signature and cause the Transaction to be
   * rejected.
   *
   * The Transaction must be assigned a valid `recentBlockhash` before invoking this method
   */
  sign(...signers) {
    if (signers.length === 0) {
      throw new Error('No signers');
    }

    // Dedupe signers
    const seen = new Set();
    const uniqueSigners = [];
    for (const signer of signers) {
      const key = signer.publicKey.toString();
      if (seen.has(key)) {
        continue;
      } else {
        seen.add(key);
        uniqueSigners.push(signer);
      }
    }
    this.signatures = uniqueSigners.map(signer => ({
      signature: null,
      publicKey: signer.publicKey
    }));
    const message = this._compile();
    this._partialSign(message, ...uniqueSigners);
  }

  /**
   * Partially sign a transaction with the specified accounts. All accounts must
   * correspond to either the fee payer or a signer account in the transaction
   * instructions.
   *
   * All the caveats from the `sign` method apply to `partialSign`
   */
  partialSign(...signers) {
    if (signers.length === 0) {
      throw new Error('No signers');
    }

    // Dedupe signers
    const seen = new Set();
    const uniqueSigners = [];
    for (const signer of signers) {
      const key = signer.publicKey.toString();
      if (seen.has(key)) {
        continue;
      } else {
        seen.add(key);
        uniqueSigners.push(signer);
      }
    }
    const message = this._compile();
    this._partialSign(message, ...uniqueSigners);
  }

  /**
   * @internal
   */
  _partialSign(message, ...signers) {
    const signData = message.serialize();
    signers.forEach(signer => {
      const signature = sign(signData, signer.secretKey);
      this._addSignature(signer.publicKey, toBuffer(signature));
    });
  }

  /**
   * Add an externally created signature to a transaction. The public key
   * must correspond to either the fee payer or a signer account in the transaction
   * instructions.
   */
  addSignature(pubkey, signature) {
    this._compile(); // Ensure signatures array is populated
    this._addSignature(pubkey, signature);
  }

  /**
   * @internal
   */
  _addSignature(pubkey, signature) {
    assert(signature.length === 64);
    const index = this.signatures.findIndex(sigpair => pubkey.equals(sigpair.publicKey));
    if (index < 0) {
      throw new Error(`unknown signer: ${pubkey.toString()}`);
    }
    this.signatures[index].signature = buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from(signature);
  }

  /**
   * Verify signatures of a Transaction
   * Optional parameter specifies if we're expecting a fully signed Transaction or a partially signed one.
   * If no boolean is provided, we expect a fully signed Transaction by default.
   */
  verifySignatures(requireAllSignatures) {
    return this._verifySignatures(this.serializeMessage(), requireAllSignatures === undefined ? true : requireAllSignatures);
  }

  /**
   * @internal
   */
  _verifySignatures(signData, requireAllSignatures) {
    for (const {
      signature,
      publicKey
    } of this.signatures) {
      if (signature === null) {
        if (requireAllSignatures) {
          return false;
        }
      } else {
        if (!verify(signature, signData, publicKey.toBytes())) {
          return false;
        }
      }
    }
    return true;
  }

  /**
   * Serialize the Transaction in the wire format.
   */
  serialize(config) {
    const {
      requireAllSignatures,
      verifySignatures
    } = Object.assign({
      requireAllSignatures: true,
      verifySignatures: true
    }, config);
    const signData = this.serializeMessage();
    if (verifySignatures && !this._verifySignatures(signData, requireAllSignatures)) {
      throw new Error('Signature verification failed');
    }
    return this._serialize(signData);
  }

  /**
   * @internal
   */
  _serialize(signData) {
    const {
      signatures
    } = this;
    const signatureCount = [];
    encodeLength(signatureCount, signatures.length);
    const transactionLength = signatureCount.length + signatures.length * 64 + signData.length;
    const wireTransaction = buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.alloc(transactionLength);
    assert(signatures.length < 256);
    buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from(signatureCount).copy(wireTransaction, 0);
    signatures.forEach(({
      signature
    }, index) => {
      if (signature !== null) {
        assert(signature.length === 64, `signature has invalid length`);
        buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from(signature).copy(wireTransaction, signatureCount.length + index * 64);
      }
    });
    signData.copy(wireTransaction, signatureCount.length + signatures.length * 64);
    assert(wireTransaction.length <= PACKET_DATA_SIZE, `Transaction too large: ${wireTransaction.length} > ${PACKET_DATA_SIZE}`);
    return wireTransaction;
  }

  /**
   * Deprecated method
   * @internal
   */
  get keys() {
    assert(this.instructions.length === 1);
    return this.instructions[0].keys.map(keyObj => keyObj.pubkey);
  }

  /**
   * Deprecated method
   * @internal
   */
  get programId() {
    assert(this.instructions.length === 1);
    return this.instructions[0].programId;
  }

  /**
   * Deprecated method
   * @internal
   */
  get data() {
    assert(this.instructions.length === 1);
    return this.instructions[0].data;
  }

  /**
   * Parse a wire transaction into a Transaction object.
   */
  static from(buffer) {
    // Slice up wire data
    let byteArray = [...buffer];
    const signatureCount = decodeLength(byteArray);
    let signatures = [];
    for (let i = 0; i < signatureCount; i++) {
      const signature = byteArray.slice(0, SIGNATURE_LENGTH_IN_BYTES);
      byteArray = byteArray.slice(SIGNATURE_LENGTH_IN_BYTES);
      signatures.push(bs58__WEBPACK_IMPORTED_MODULE_4___default().encode(buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from(signature)));
    }
    return Transaction.populate(Message.from(byteArray), signatures);
  }

  /**
   * Populate Transaction object from message and signatures
   */
  static populate(message, signatures = []) {
    const transaction = new Transaction();
    transaction.recentBlockhash = message.recentBlockhash;
    if (message.header.numRequiredSignatures > 0) {
      transaction.feePayer = message.accountKeys[0];
    }
    signatures.forEach((signature, index) => {
      const sigPubkeyPair = {
        signature: signature == bs58__WEBPACK_IMPORTED_MODULE_4___default().encode(DEFAULT_SIGNATURE) ? null : bs58__WEBPACK_IMPORTED_MODULE_4___default().decode(signature),
        publicKey: message.accountKeys[index]
      };
      transaction.signatures.push(sigPubkeyPair);
    });
    message.instructions.forEach(instruction => {
      const keys = instruction.accounts.map(account => {
        const pubkey = message.accountKeys[account];
        return {
          pubkey,
          isSigner: transaction.signatures.some(keyObj => keyObj.publicKey.toString() === pubkey.toString()) || message.isAccountSigner(account),
          isWritable: message.isAccountWritable(account)
        };
      });
      transaction.instructions.push(new TransactionInstruction({
        keys,
        programId: message.accountKeys[instruction.programIdIndex],
        data: bs58__WEBPACK_IMPORTED_MODULE_4___default().decode(instruction.data)
      }));
    });
    transaction._message = message;
    transaction._json = transaction.toJSON();
    return transaction;
  }
}

class TransactionMessage {
  constructor(args) {
    this.payerKey = void 0;
    this.instructions = void 0;
    this.recentBlockhash = void 0;
    this.payerKey = args.payerKey;
    this.instructions = args.instructions;
    this.recentBlockhash = args.recentBlockhash;
  }
  static decompile(message, args) {
    const {
      header,
      compiledInstructions,
      recentBlockhash
    } = message;
    const {
      numRequiredSignatures,
      numReadonlySignedAccounts,
      numReadonlyUnsignedAccounts
    } = header;
    const numWritableSignedAccounts = numRequiredSignatures - numReadonlySignedAccounts;
    assert(numWritableSignedAccounts > 0, 'Message header is invalid');
    const numWritableUnsignedAccounts = message.staticAccountKeys.length - numRequiredSignatures - numReadonlyUnsignedAccounts;
    assert(numWritableUnsignedAccounts >= 0, 'Message header is invalid');
    const accountKeys = message.getAccountKeys(args);
    const payerKey = accountKeys.get(0);
    if (payerKey === undefined) {
      throw new Error('Failed to decompile message because no account keys were found');
    }
    const instructions = [];
    for (const compiledIx of compiledInstructions) {
      const keys = [];
      for (const keyIndex of compiledIx.accountKeyIndexes) {
        const pubkey = accountKeys.get(keyIndex);
        if (pubkey === undefined) {
          throw new Error(`Failed to find key for account key index ${keyIndex}`);
        }
        const isSigner = keyIndex < numRequiredSignatures;
        let isWritable;
        if (isSigner) {
          isWritable = keyIndex < numWritableSignedAccounts;
        } else if (keyIndex < accountKeys.staticAccountKeys.length) {
          isWritable = keyIndex - numRequiredSignatures < numWritableUnsignedAccounts;
        } else {
          isWritable = keyIndex - accountKeys.staticAccountKeys.length <
          // accountKeysFromLookups cannot be undefined because we already found a pubkey for this index above
          accountKeys.accountKeysFromLookups.writable.length;
        }
        keys.push({
          pubkey,
          isSigner: keyIndex < header.numRequiredSignatures,
          isWritable
        });
      }
      const programId = accountKeys.get(compiledIx.programIdIndex);
      if (programId === undefined) {
        throw new Error(`Failed to find program id for program id index ${compiledIx.programIdIndex}`);
      }
      instructions.push(new TransactionInstruction({
        programId,
        data: toBuffer(compiledIx.data),
        keys
      }));
    }
    return new TransactionMessage({
      payerKey,
      instructions,
      recentBlockhash
    });
  }
  compileToLegacyMessage() {
    return Message.compile({
      payerKey: this.payerKey,
      recentBlockhash: this.recentBlockhash,
      instructions: this.instructions
    });
  }
  compileToV0Message(addressLookupTableAccounts) {
    return MessageV0.compile({
      payerKey: this.payerKey,
      recentBlockhash: this.recentBlockhash,
      instructions: this.instructions,
      addressLookupTableAccounts
    });
  }
}

/**
 * Versioned transaction class
 */
class VersionedTransaction {
  get version() {
    return this.message.version;
  }
  constructor(message, signatures) {
    this.signatures = void 0;
    this.message = void 0;
    if (signatures !== undefined) {
      assert(signatures.length === message.header.numRequiredSignatures, 'Expected signatures length to be equal to the number of required signatures');
      this.signatures = signatures;
    } else {
      const defaultSignatures = [];
      for (let i = 0; i < message.header.numRequiredSignatures; i++) {
        defaultSignatures.push(new Uint8Array(SIGNATURE_LENGTH_IN_BYTES));
      }
      this.signatures = defaultSignatures;
    }
    this.message = message;
  }
  serialize() {
    const serializedMessage = this.message.serialize();
    const encodedSignaturesLength = Array();
    encodeLength(encodedSignaturesLength, this.signatures.length);
    const transactionLayout = _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.blob(encodedSignaturesLength.length, 'encodedSignaturesLength'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.seq(signature(), this.signatures.length, 'signatures'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.blob(serializedMessage.length, 'serializedMessage')]);
    const serializedTransaction = new Uint8Array(2048);
    const serializedTransactionLength = transactionLayout.encode({
      encodedSignaturesLength: new Uint8Array(encodedSignaturesLength),
      signatures: this.signatures,
      serializedMessage
    }, serializedTransaction);
    return serializedTransaction.slice(0, serializedTransactionLength);
  }
  static deserialize(serializedTransaction) {
    let byteArray = [...serializedTransaction];
    const signatures = [];
    const signaturesLength = decodeLength(byteArray);
    for (let i = 0; i < signaturesLength; i++) {
      signatures.push(new Uint8Array(byteArray.splice(0, SIGNATURE_LENGTH_IN_BYTES)));
    }
    const message = VersionedMessage.deserialize(new Uint8Array(byteArray));
    return new VersionedTransaction(message, signatures);
  }
  sign(signers) {
    const messageData = this.message.serialize();
    const signerPubkeys = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures);
    for (const signer of signers) {
      const signerIndex = signerPubkeys.findIndex(pubkey => pubkey.equals(signer.publicKey));
      assert(signerIndex >= 0, `Cannot sign with non signer key ${signer.publicKey.toBase58()}`);
      this.signatures[signerIndex] = sign(messageData, signer.secretKey);
    }
  }
  addSignature(publicKey, signature) {
    assert(signature.byteLength === 64, 'Signature must be 64 bytes long');
    const signerPubkeys = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures);
    const signerIndex = signerPubkeys.findIndex(pubkey => pubkey.equals(publicKey));
    assert(signerIndex >= 0, `Can not add signature; \`${publicKey.toBase58()}\` is not required to sign this transaction`);
    this.signatures[signerIndex] = signature;
  }
}

const SYSVAR_CLOCK_PUBKEY = new PublicKey('SysvarC1ock11111111111111111111111111111111');
const SYSVAR_EPOCH_SCHEDULE_PUBKEY = new PublicKey('SysvarEpochSchedu1e111111111111111111111111');
const SYSVAR_INSTRUCTIONS_PUBKEY = new PublicKey('Sysvar1nstructions1111111111111111111111111');
const SYSVAR_RECENT_BLOCKHASHES_PUBKEY = new PublicKey('SysvarRecentB1ockHashes11111111111111111111');
const SYSVAR_RENT_PUBKEY = new PublicKey('SysvarRent111111111111111111111111111111111');
const SYSVAR_REWARDS_PUBKEY = new PublicKey('SysvarRewards111111111111111111111111111111');
const SYSVAR_SLOT_HASHES_PUBKEY = new PublicKey('SysvarS1otHashes111111111111111111111111111');
const SYSVAR_SLOT_HISTORY_PUBKEY = new PublicKey('SysvarS1otHistory11111111111111111111111111');
const SYSVAR_STAKE_HISTORY_PUBKEY = new PublicKey('SysvarStakeHistory1111111111111111111111111');

/**
 * Sign, send and confirm a transaction.
 *
 * If `commitment` option is not specified, defaults to 'max' commitment.
 *
 * @param {Connection} connection
 * @param {Transaction} transaction
 * @param {Array<Signer>} signers
 * @param {ConfirmOptions} [options]
 * @returns {Promise<TransactionSignature>}
 */
async function sendAndConfirmTransaction(connection, transaction, signers, options) {
  const sendOptions = options && {
    skipPreflight: options.skipPreflight,
    preflightCommitment: options.preflightCommitment || options.commitment,
    maxRetries: options.maxRetries,
    minContextSlot: options.minContextSlot
  };
  const signature = await connection.sendTransaction(transaction, signers, sendOptions);
  let status;
  if (transaction.recentBlockhash != null && transaction.lastValidBlockHeight != null) {
    status = (await connection.confirmTransaction({
      abortSignal: options?.abortSignal,
      signature: signature,
      blockhash: transaction.recentBlockhash,
      lastValidBlockHeight: transaction.lastValidBlockHeight
    }, options && options.commitment)).value;
  } else if (transaction.minNonceContextSlot != null && transaction.nonceInfo != null) {
    const {
      nonceInstruction
    } = transaction.nonceInfo;
    const nonceAccountPubkey = nonceInstruction.keys[0].pubkey;
    status = (await connection.confirmTransaction({
      abortSignal: options?.abortSignal,
      minContextSlot: transaction.minNonceContextSlot,
      nonceAccountPubkey,
      nonceValue: transaction.nonceInfo.nonce,
      signature
    }, options && options.commitment)).value;
  } else {
    if (options?.abortSignal != null) {
      console.warn('sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was ' + 'supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` ' + 'or a combination of `nonceInfo` and `minNonceContextSlot` are abortable.');
    }
    status = (await connection.confirmTransaction(signature, options && options.commitment)).value;
  }
  if (status.err) {
    throw new Error(`Transaction ${signature} failed (${JSON.stringify(status)})`);
  }
  return signature;
}

// zzz
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Populate a buffer of instruction data using an InstructionType
 * @internal
 */
function encodeData(type, fields) {
  const allocLength = type.layout.span >= 0 ? type.layout.span : getAlloc(type, fields);
  const data = buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.alloc(allocLength);
  const layoutFields = Object.assign({
    instruction: type.index
  }, fields);
  type.layout.encode(layoutFields, data);
  return data;
}

/**
 * Decode instruction data buffer using an InstructionType
 * @internal
 */
function decodeData$1(type, buffer) {
  let data;
  try {
    data = type.layout.decode(buffer);
  } catch (err) {
    throw new Error('invalid instruction; ' + err);
  }
  if (data.instruction !== type.index) {
    throw new Error(`invalid instruction; instruction index mismatch ${data.instruction} != ${type.index}`);
  }
  return data;
}

/**
 * https://github.com/solana-labs/solana/blob/90bedd7e067b5b8f3ddbb45da00a4e9cabb22c62/sdk/src/fee_calculator.rs#L7-L11
 *
 * @internal
 */
const FeeCalculatorLayout = _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.nu64('lamportsPerSignature');

/**
 * Calculator for transaction fees.
 *
 * @deprecated Deprecated since Solana v1.8.0.
 */

/**
 * See https://github.com/solana-labs/solana/blob/0ea2843ec9cdc517572b8e62c959f41b55cf4453/sdk/src/nonce_state.rs#L29-L32
 *
 * @internal
 */
const NonceAccountLayout = _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('version'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('state'), publicKey('authorizedPubkey'), publicKey('nonce'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([FeeCalculatorLayout], 'feeCalculator')]);
const NONCE_ACCOUNT_LENGTH = NonceAccountLayout.span;

/**
 * A durable nonce is a 32 byte value encoded as a base58 string.
 */

/**
 * NonceAccount class
 */
class NonceAccount {
  /**
   * @internal
   */
  constructor(args) {
    this.authorizedPubkey = void 0;
    this.nonce = void 0;
    this.feeCalculator = void 0;
    this.authorizedPubkey = args.authorizedPubkey;
    this.nonce = args.nonce;
    this.feeCalculator = args.feeCalculator;
  }

  /**
   * Deserialize NonceAccount from the account data.
   *
   * @param buffer account data
   * @return NonceAccount
   */
  static fromAccountData(buffer) {
    const nonceAccount = NonceAccountLayout.decode(toBuffer(buffer), 0);
    return new NonceAccount({
      authorizedPubkey: new PublicKey(nonceAccount.authorizedPubkey),
      nonce: new PublicKey(nonceAccount.nonce).toString(),
      feeCalculator: nonceAccount.feeCalculator
    });
  }
}

const encodeDecode = layout => {
  const decode = layout.decode.bind(layout);
  const encode = layout.encode.bind(layout);
  return {
    decode,
    encode
  };
};
const bigInt = length => property => {
  const layout = (0,_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.blob)(length, property);
  const {
    encode,
    decode
  } = encodeDecode(layout);
  const bigIntLayout = layout;
  bigIntLayout.decode = (buffer, offset) => {
    const src = decode(buffer, offset);
    return (0,bigint_buffer__WEBPACK_IMPORTED_MODULE_8__.toBigIntLE)(buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from(src));
  };
  bigIntLayout.encode = (bigInt, buffer, offset) => {
    const src = (0,bigint_buffer__WEBPACK_IMPORTED_MODULE_8__.toBufferLE)(bigInt, length);
    return encode(src, buffer, offset);
  };
  return bigIntLayout;
};
const u64 = bigInt(8);

/**
 * Create account system transaction params
 */

/**
 * System Instruction class
 */
class SystemInstruction {
  /**
   * @internal
   */
  constructor() {}

  /**
   * Decode a system instruction and retrieve the instruction type.
   */
  static decodeInstructionType(instruction) {
    this.checkProgramId(instruction.programId);
    const instructionTypeLayout = _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction');
    const typeIndex = instructionTypeLayout.decode(instruction.data);
    let type;
    for (const [ixType, layout] of Object.entries(SYSTEM_INSTRUCTION_LAYOUTS)) {
      if (layout.index == typeIndex) {
        type = ixType;
        break;
      }
    }
    if (!type) {
      throw new Error('Instruction type incorrect; not a SystemInstruction');
    }
    return type;
  }

  /**
   * Decode a create account system instruction and retrieve the instruction params.
   */
  static decodeCreateAccount(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 2);
    const {
      lamports,
      space,
      programId
    } = decodeData$1(SYSTEM_INSTRUCTION_LAYOUTS.Create, instruction.data);
    return {
      fromPubkey: instruction.keys[0].pubkey,
      newAccountPubkey: instruction.keys[1].pubkey,
      lamports,
      space,
      programId: new PublicKey(programId)
    };
  }

  /**
   * Decode a transfer system instruction and retrieve the instruction params.
   */
  static decodeTransfer(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 2);
    const {
      lamports
    } = decodeData$1(SYSTEM_INSTRUCTION_LAYOUTS.Transfer, instruction.data);
    return {
      fromPubkey: instruction.keys[0].pubkey,
      toPubkey: instruction.keys[1].pubkey,
      lamports
    };
  }

  /**
   * Decode a transfer with seed system instruction and retrieve the instruction params.
   */
  static decodeTransferWithSeed(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 3);
    const {
      lamports,
      seed,
      programId
    } = decodeData$1(SYSTEM_INSTRUCTION_LAYOUTS.TransferWithSeed, instruction.data);
    return {
      fromPubkey: instruction.keys[0].pubkey,
      basePubkey: instruction.keys[1].pubkey,
      toPubkey: instruction.keys[2].pubkey,
      lamports,
      seed,
      programId: new PublicKey(programId)
    };
  }

  /**
   * Decode an allocate system instruction and retrieve the instruction params.
   */
  static decodeAllocate(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 1);
    const {
      space
    } = decodeData$1(SYSTEM_INSTRUCTION_LAYOUTS.Allocate, instruction.data);
    return {
      accountPubkey: instruction.keys[0].pubkey,
      space
    };
  }

  /**
   * Decode an allocate with seed system instruction and retrieve the instruction params.
   */
  static decodeAllocateWithSeed(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 1);
    const {
      base,
      seed,
      space,
      programId
    } = decodeData$1(SYSTEM_INSTRUCTION_LAYOUTS.AllocateWithSeed, instruction.data);
    return {
      accountPubkey: instruction.keys[0].pubkey,
      basePubkey: new PublicKey(base),
      seed,
      space,
      programId: new PublicKey(programId)
    };
  }

  /**
   * Decode an assign system instruction and retrieve the instruction params.
   */
  static decodeAssign(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 1);
    const {
      programId
    } = decodeData$1(SYSTEM_INSTRUCTION_LAYOUTS.Assign, instruction.data);
    return {
      accountPubkey: instruction.keys[0].pubkey,
      programId: new PublicKey(programId)
    };
  }

  /**
   * Decode an assign with seed system instruction and retrieve the instruction params.
   */
  static decodeAssignWithSeed(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 1);
    const {
      base,
      seed,
      programId
    } = decodeData$1(SYSTEM_INSTRUCTION_LAYOUTS.AssignWithSeed, instruction.data);
    return {
      accountPubkey: instruction.keys[0].pubkey,
      basePubkey: new PublicKey(base),
      seed,
      programId: new PublicKey(programId)
    };
  }

  /**
   * Decode a create account with seed system instruction and retrieve the instruction params.
   */
  static decodeCreateWithSeed(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 2);
    const {
      base,
      seed,
      lamports,
      space,
      programId
    } = decodeData$1(SYSTEM_INSTRUCTION_LAYOUTS.CreateWithSeed, instruction.data);
    return {
      fromPubkey: instruction.keys[0].pubkey,
      newAccountPubkey: instruction.keys[1].pubkey,
      basePubkey: new PublicKey(base),
      seed,
      lamports,
      space,
      programId: new PublicKey(programId)
    };
  }

  /**
   * Decode a nonce initialize system instruction and retrieve the instruction params.
   */
  static decodeNonceInitialize(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 3);
    const {
      authorized
    } = decodeData$1(SYSTEM_INSTRUCTION_LAYOUTS.InitializeNonceAccount, instruction.data);
    return {
      noncePubkey: instruction.keys[0].pubkey,
      authorizedPubkey: new PublicKey(authorized)
    };
  }

  /**
   * Decode a nonce advance system instruction and retrieve the instruction params.
   */
  static decodeNonceAdvance(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 3);
    decodeData$1(SYSTEM_INSTRUCTION_LAYOUTS.AdvanceNonceAccount, instruction.data);
    return {
      noncePubkey: instruction.keys[0].pubkey,
      authorizedPubkey: instruction.keys[2].pubkey
    };
  }

  /**
   * Decode a nonce withdraw system instruction and retrieve the instruction params.
   */
  static decodeNonceWithdraw(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 5);
    const {
      lamports
    } = decodeData$1(SYSTEM_INSTRUCTION_LAYOUTS.WithdrawNonceAccount, instruction.data);
    return {
      noncePubkey: instruction.keys[0].pubkey,
      toPubkey: instruction.keys[1].pubkey,
      authorizedPubkey: instruction.keys[4].pubkey,
      lamports
    };
  }

  /**
   * Decode a nonce authorize system instruction and retrieve the instruction params.
   */
  static decodeNonceAuthorize(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 2);
    const {
      authorized
    } = decodeData$1(SYSTEM_INSTRUCTION_LAYOUTS.AuthorizeNonceAccount, instruction.data);
    return {
      noncePubkey: instruction.keys[0].pubkey,
      authorizedPubkey: instruction.keys[1].pubkey,
      newAuthorizedPubkey: new PublicKey(authorized)
    };
  }

  /**
   * @internal
   */
  static checkProgramId(programId) {
    if (!programId.equals(SystemProgram.programId)) {
      throw new Error('invalid instruction; programId is not SystemProgram');
    }
  }

  /**
   * @internal
   */
  static checkKeyLength(keys, expectedLength) {
    if (keys.length < expectedLength) {
      throw new Error(`invalid instruction; found ${keys.length} keys, expected at least ${expectedLength}`);
    }
  }
}

/**
 * An enumeration of valid SystemInstructionType's
 */

/**
 * An enumeration of valid system InstructionType's
 * @internal
 */
const SYSTEM_INSTRUCTION_LAYOUTS = Object.freeze({
  Create: {
    index: 0,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.ns64('lamports'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.ns64('space'), publicKey('programId')])
  },
  Assign: {
    index: 1,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction'), publicKey('programId')])
  },
  Transfer: {
    index: 2,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction'), u64('lamports')])
  },
  CreateWithSeed: {
    index: 3,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction'), publicKey('base'), rustString('seed'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.ns64('lamports'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.ns64('space'), publicKey('programId')])
  },
  AdvanceNonceAccount: {
    index: 4,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction')])
  },
  WithdrawNonceAccount: {
    index: 5,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.ns64('lamports')])
  },
  InitializeNonceAccount: {
    index: 6,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction'), publicKey('authorized')])
  },
  AuthorizeNonceAccount: {
    index: 7,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction'), publicKey('authorized')])
  },
  Allocate: {
    index: 8,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.ns64('space')])
  },
  AllocateWithSeed: {
    index: 9,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction'), publicKey('base'), rustString('seed'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.ns64('space'), publicKey('programId')])
  },
  AssignWithSeed: {
    index: 10,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction'), publicKey('base'), rustString('seed'), publicKey('programId')])
  },
  TransferWithSeed: {
    index: 11,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction'), u64('lamports'), rustString('seed'), publicKey('programId')])
  },
  UpgradeNonceAccount: {
    index: 12,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction')])
  }
});

/**
 * Factory class for transactions to interact with the System program
 */
class SystemProgram {
  /**
   * @internal
   */
  constructor() {}

  /**
   * Public key that identifies the System program
   */

  /**
   * Generate a transaction instruction that creates a new account
   */
  static createAccount(params) {
    const type = SYSTEM_INSTRUCTION_LAYOUTS.Create;
    const data = encodeData(type, {
      lamports: params.lamports,
      space: params.space,
      programId: toBuffer(params.programId.toBuffer())
    });
    return new TransactionInstruction({
      keys: [{
        pubkey: params.fromPubkey,
        isSigner: true,
        isWritable: true
      }, {
        pubkey: params.newAccountPubkey,
        isSigner: true,
        isWritable: true
      }],
      programId: this.programId,
      data
    });
  }

  /**
   * Generate a transaction instruction that transfers lamports from one account to another
   */
  static transfer(params) {
    let data;
    let keys;
    if ('basePubkey' in params) {
      const type = SYSTEM_INSTRUCTION_LAYOUTS.TransferWithSeed;
      data = encodeData(type, {
        lamports: BigInt(params.lamports),
        seed: params.seed,
        programId: toBuffer(params.programId.toBuffer())
      });
      keys = [{
        pubkey: params.fromPubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: params.basePubkey,
        isSigner: true,
        isWritable: false
      }, {
        pubkey: params.toPubkey,
        isSigner: false,
        isWritable: true
      }];
    } else {
      const type = SYSTEM_INSTRUCTION_LAYOUTS.Transfer;
      data = encodeData(type, {
        lamports: BigInt(params.lamports)
      });
      keys = [{
        pubkey: params.fromPubkey,
        isSigner: true,
        isWritable: true
      }, {
        pubkey: params.toPubkey,
        isSigner: false,
        isWritable: true
      }];
    }
    return new TransactionInstruction({
      keys,
      programId: this.programId,
      data
    });
  }

  /**
   * Generate a transaction instruction that assigns an account to a program
   */
  static assign(params) {
    let data;
    let keys;
    if ('basePubkey' in params) {
      const type = SYSTEM_INSTRUCTION_LAYOUTS.AssignWithSeed;
      data = encodeData(type, {
        base: toBuffer(params.basePubkey.toBuffer()),
        seed: params.seed,
        programId: toBuffer(params.programId.toBuffer())
      });
      keys = [{
        pubkey: params.accountPubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: params.basePubkey,
        isSigner: true,
        isWritable: false
      }];
    } else {
      const type = SYSTEM_INSTRUCTION_LAYOUTS.Assign;
      data = encodeData(type, {
        programId: toBuffer(params.programId.toBuffer())
      });
      keys = [{
        pubkey: params.accountPubkey,
        isSigner: true,
        isWritable: true
      }];
    }
    return new TransactionInstruction({
      keys,
      programId: this.programId,
      data
    });
  }

  /**
   * Generate a transaction instruction that creates a new account at
   *   an address generated with `from`, a seed, and programId
   */
  static createAccountWithSeed(params) {
    const type = SYSTEM_INSTRUCTION_LAYOUTS.CreateWithSeed;
    const data = encodeData(type, {
      base: toBuffer(params.basePubkey.toBuffer()),
      seed: params.seed,
      lamports: params.lamports,
      space: params.space,
      programId: toBuffer(params.programId.toBuffer())
    });
    let keys = [{
      pubkey: params.fromPubkey,
      isSigner: true,
      isWritable: true
    }, {
      pubkey: params.newAccountPubkey,
      isSigner: false,
      isWritable: true
    }];
    if (params.basePubkey != params.fromPubkey) {
      keys.push({
        pubkey: params.basePubkey,
        isSigner: true,
        isWritable: false
      });
    }
    return new TransactionInstruction({
      keys,
      programId: this.programId,
      data
    });
  }

  /**
   * Generate a transaction that creates a new Nonce account
   */
  static createNonceAccount(params) {
    const transaction = new Transaction();
    if ('basePubkey' in params && 'seed' in params) {
      transaction.add(SystemProgram.createAccountWithSeed({
        fromPubkey: params.fromPubkey,
        newAccountPubkey: params.noncePubkey,
        basePubkey: params.basePubkey,
        seed: params.seed,
        lamports: params.lamports,
        space: NONCE_ACCOUNT_LENGTH,
        programId: this.programId
      }));
    } else {
      transaction.add(SystemProgram.createAccount({
        fromPubkey: params.fromPubkey,
        newAccountPubkey: params.noncePubkey,
        lamports: params.lamports,
        space: NONCE_ACCOUNT_LENGTH,
        programId: this.programId
      }));
    }
    const initParams = {
      noncePubkey: params.noncePubkey,
      authorizedPubkey: params.authorizedPubkey
    };
    transaction.add(this.nonceInitialize(initParams));
    return transaction;
  }

  /**
   * Generate an instruction to initialize a Nonce account
   */
  static nonceInitialize(params) {
    const type = SYSTEM_INSTRUCTION_LAYOUTS.InitializeNonceAccount;
    const data = encodeData(type, {
      authorized: toBuffer(params.authorizedPubkey.toBuffer())
    });
    const instructionData = {
      keys: [{
        pubkey: params.noncePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: SYSVAR_RENT_PUBKEY,
        isSigner: false,
        isWritable: false
      }],
      programId: this.programId,
      data
    };
    return new TransactionInstruction(instructionData);
  }

  /**
   * Generate an instruction to advance the nonce in a Nonce account
   */
  static nonceAdvance(params) {
    const type = SYSTEM_INSTRUCTION_LAYOUTS.AdvanceNonceAccount;
    const data = encodeData(type);
    const instructionData = {
      keys: [{
        pubkey: params.noncePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: params.authorizedPubkey,
        isSigner: true,
        isWritable: false
      }],
      programId: this.programId,
      data
    };
    return new TransactionInstruction(instructionData);
  }

  /**
   * Generate a transaction instruction that withdraws lamports from a Nonce account
   */
  static nonceWithdraw(params) {
    const type = SYSTEM_INSTRUCTION_LAYOUTS.WithdrawNonceAccount;
    const data = encodeData(type, {
      lamports: params.lamports
    });
    return new TransactionInstruction({
      keys: [{
        pubkey: params.noncePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: params.toPubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: SYSVAR_RENT_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: params.authorizedPubkey,
        isSigner: true,
        isWritable: false
      }],
      programId: this.programId,
      data
    });
  }

  /**
   * Generate a transaction instruction that authorizes a new PublicKey as the authority
   * on a Nonce account.
   */
  static nonceAuthorize(params) {
    const type = SYSTEM_INSTRUCTION_LAYOUTS.AuthorizeNonceAccount;
    const data = encodeData(type, {
      authorized: toBuffer(params.newAuthorizedPubkey.toBuffer())
    });
    return new TransactionInstruction({
      keys: [{
        pubkey: params.noncePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: params.authorizedPubkey,
        isSigner: true,
        isWritable: false
      }],
      programId: this.programId,
      data
    });
  }

  /**
   * Generate a transaction instruction that allocates space in an account without funding
   */
  static allocate(params) {
    let data;
    let keys;
    if ('basePubkey' in params) {
      const type = SYSTEM_INSTRUCTION_LAYOUTS.AllocateWithSeed;
      data = encodeData(type, {
        base: toBuffer(params.basePubkey.toBuffer()),
        seed: params.seed,
        space: params.space,
        programId: toBuffer(params.programId.toBuffer())
      });
      keys = [{
        pubkey: params.accountPubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: params.basePubkey,
        isSigner: true,
        isWritable: false
      }];
    } else {
      const type = SYSTEM_INSTRUCTION_LAYOUTS.Allocate;
      data = encodeData(type, {
        space: params.space
      });
      keys = [{
        pubkey: params.accountPubkey,
        isSigner: true,
        isWritable: true
      }];
    }
    return new TransactionInstruction({
      keys,
      programId: this.programId,
      data
    });
  }
}
SystemProgram.programId = new PublicKey('11111111111111111111111111111111');

// Keep program chunks under PACKET_DATA_SIZE, leaving enough room for the
// rest of the Transaction fields
//
// TODO: replace 300 with a proper constant for the size of the other
// Transaction fields
const CHUNK_SIZE = PACKET_DATA_SIZE - 300;

/**
 * Program loader interface
 */
class Loader {
  /**
   * @internal
   */
  constructor() {}

  /**
   * Amount of program data placed in each load Transaction
   */

  /**
   * Minimum number of signatures required to load a program not including
   * retries
   *
   * Can be used to calculate transaction fees
   */
  static getMinNumSignatures(dataLength) {
    return 2 * (
    // Every transaction requires two signatures (payer + program)
    Math.ceil(dataLength / Loader.chunkSize) + 1 +
    // Add one for Create transaction
    1) // Add one for Finalize transaction
    ;
  }

  /**
   * Loads a generic program
   *
   * @param connection The connection to use
   * @param payer System account that pays to load the program
   * @param program Account to load the program into
   * @param programId Public key that identifies the loader
   * @param data Program octets
   * @return true if program was loaded successfully, false if program was already loaded
   */
  static async load(connection, payer, program, programId, data) {
    {
      const balanceNeeded = await connection.getMinimumBalanceForRentExemption(data.length);

      // Fetch program account info to check if it has already been created
      const programInfo = await connection.getAccountInfo(program.publicKey, 'confirmed');
      let transaction = null;
      if (programInfo !== null) {
        if (programInfo.executable) {
          console.error('Program load failed, account is already executable');
          return false;
        }
        if (programInfo.data.length !== data.length) {
          transaction = transaction || new Transaction();
          transaction.add(SystemProgram.allocate({
            accountPubkey: program.publicKey,
            space: data.length
          }));
        }
        if (!programInfo.owner.equals(programId)) {
          transaction = transaction || new Transaction();
          transaction.add(SystemProgram.assign({
            accountPubkey: program.publicKey,
            programId
          }));
        }
        if (programInfo.lamports < balanceNeeded) {
          transaction = transaction || new Transaction();
          transaction.add(SystemProgram.transfer({
            fromPubkey: payer.publicKey,
            toPubkey: program.publicKey,
            lamports: balanceNeeded - programInfo.lamports
          }));
        }
      } else {
        transaction = new Transaction().add(SystemProgram.createAccount({
          fromPubkey: payer.publicKey,
          newAccountPubkey: program.publicKey,
          lamports: balanceNeeded > 0 ? balanceNeeded : 1,
          space: data.length,
          programId
        }));
      }

      // If the account is already created correctly, skip this step
      // and proceed directly to loading instructions
      if (transaction !== null) {
        await sendAndConfirmTransaction(connection, transaction, [payer, program], {
          commitment: 'confirmed'
        });
      }
    }
    const dataLayout = _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('offset'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('bytesLength'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('bytesLengthPadding'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.seq(_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8('byte'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.offset(_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32(), -8), 'bytes')]);
    const chunkSize = Loader.chunkSize;
    let offset = 0;
    let array = data;
    let transactions = [];
    while (array.length > 0) {
      const bytes = array.slice(0, chunkSize);
      const data = buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.alloc(chunkSize + 16);
      dataLayout.encode({
        instruction: 0,
        // Load instruction
        offset,
        bytes: bytes,
        bytesLength: 0,
        bytesLengthPadding: 0
      }, data);
      const transaction = new Transaction().add({
        keys: [{
          pubkey: program.publicKey,
          isSigner: true,
          isWritable: true
        }],
        programId,
        data
      });
      transactions.push(sendAndConfirmTransaction(connection, transaction, [payer, program], {
        commitment: 'confirmed'
      }));

      // Delay between sends in an attempt to reduce rate limit errors
      if (connection._rpcEndpoint.includes('solana.com')) {
        const REQUESTS_PER_SECOND = 4;
        await sleep(1000 / REQUESTS_PER_SECOND);
      }
      offset += chunkSize;
      array = array.slice(chunkSize);
    }
    await Promise.all(transactions);

    // Finalize the account loaded with program data for execution
    {
      const dataLayout = _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction')]);
      const data = buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.alloc(dataLayout.span);
      dataLayout.encode({
        instruction: 1 // Finalize instruction
      }, data);
      const transaction = new Transaction().add({
        keys: [{
          pubkey: program.publicKey,
          isSigner: true,
          isWritable: true
        }, {
          pubkey: SYSVAR_RENT_PUBKEY,
          isSigner: false,
          isWritable: false
        }],
        programId,
        data
      });
      await sendAndConfirmTransaction(connection, transaction, [payer, program], {
        commitment: 'confirmed'
      });
    }

    // success
    return true;
  }
}
Loader.chunkSize = CHUNK_SIZE;

const BPF_LOADER_PROGRAM_ID = new PublicKey('BPFLoader2111111111111111111111111111111111');

/**
 * Factory class for transactions to interact with a program loader
 */
class BpfLoader {
  /**
   * Minimum number of signatures required to load a program not including
   * retries
   *
   * Can be used to calculate transaction fees
   */
  static getMinNumSignatures(dataLength) {
    return Loader.getMinNumSignatures(dataLength);
  }

  /**
   * Load a SBF program
   *
   * @param connection The connection to use
   * @param payer Account that will pay program loading fees
   * @param program Account to load the program into
   * @param elf The entire ELF containing the SBF program
   * @param loaderProgramId The program id of the BPF loader to use
   * @return true if program was loaded successfully, false if program was already loaded
   */
  static load(connection, payer, program, elf, loaderProgramId) {
    return Loader.load(connection, payer, program, loaderProgramId, elf);
  }
}

var objToString = Object.prototype.toString;
var objKeys = Object.keys || function(obj) {
		var keys = [];
		for (var name in obj) {
			keys.push(name);
		}
		return keys;
	};

function stringify(val, isArrayProp) {
	var i, max, str, keys, key, propVal, toStr;
	if (val === true) {
		return "true";
	}
	if (val === false) {
		return "false";
	}
	switch (typeof val) {
		case "object":
			if (val === null) {
				return null;
			} else if (val.toJSON && typeof val.toJSON === "function") {
				return stringify(val.toJSON(), isArrayProp);
			} else {
				toStr = objToString.call(val);
				if (toStr === "[object Array]") {
					str = '[';
					max = val.length - 1;
					for(i = 0; i < max; i++) {
						str += stringify(val[i], true) + ',';
					}
					if (max > -1) {
						str += stringify(val[i], true);
					}
					return str + ']';
				} else if (toStr === "[object Object]") {
					// only object is left
					keys = objKeys(val).sort();
					max = keys.length;
					str = "";
					i = 0;
					while (i < max) {
						key = keys[i];
						propVal = stringify(val[key], false);
						if (propVal !== undefined) {
							if (str) {
								str += ',';
							}
							str += JSON.stringify(key) + ':' + propVal;
						}
						i++;
					}
					return '{' + str + '}';
				} else {
					return JSON.stringify(val);
				}
			}
		case "function":
		case "undefined":
			return isArrayProp ? null : undefined;
		case "string":
			return JSON.stringify(val);
		default:
			return isFinite(val) ? val : null;
	}
}

var fastStableStringify = function(val) {
	var returnVal = stringify(val, false);
	if (returnVal !== undefined) {
		return ''+ returnVal;
	}
};

var fastStableStringify$1 = fastStableStringify;

const MINIMUM_SLOT_PER_EPOCH = 32;

// Returns the number of trailing zeros in the binary representation of self.
function trailingZeros(n) {
  let trailingZeros = 0;
  while (n > 1) {
    n /= 2;
    trailingZeros++;
  }
  return trailingZeros;
}

// Returns the smallest power of two greater than or equal to n
function nextPowerOfTwo(n) {
  if (n === 0) return 1;
  n--;
  n |= n >> 1;
  n |= n >> 2;
  n |= n >> 4;
  n |= n >> 8;
  n |= n >> 16;
  n |= n >> 32;
  return n + 1;
}

/**
 * Epoch schedule
 * (see https://docs.solana.com/terminology#epoch)
 * Can be retrieved with the {@link Connection.getEpochSchedule} method
 */
class EpochSchedule {
  /** The maximum number of slots in each epoch */

  /** The number of slots before beginning of an epoch to calculate a leader schedule for that epoch */

  /** Indicates whether epochs start short and grow */

  /** The first epoch with `slotsPerEpoch` slots */

  /** The first slot of `firstNormalEpoch` */

  constructor(slotsPerEpoch, leaderScheduleSlotOffset, warmup, firstNormalEpoch, firstNormalSlot) {
    this.slotsPerEpoch = void 0;
    this.leaderScheduleSlotOffset = void 0;
    this.warmup = void 0;
    this.firstNormalEpoch = void 0;
    this.firstNormalSlot = void 0;
    this.slotsPerEpoch = slotsPerEpoch;
    this.leaderScheduleSlotOffset = leaderScheduleSlotOffset;
    this.warmup = warmup;
    this.firstNormalEpoch = firstNormalEpoch;
    this.firstNormalSlot = firstNormalSlot;
  }
  getEpoch(slot) {
    return this.getEpochAndSlotIndex(slot)[0];
  }
  getEpochAndSlotIndex(slot) {
    if (slot < this.firstNormalSlot) {
      const epoch = trailingZeros(nextPowerOfTwo(slot + MINIMUM_SLOT_PER_EPOCH + 1)) - trailingZeros(MINIMUM_SLOT_PER_EPOCH) - 1;
      const epochLen = this.getSlotsInEpoch(epoch);
      const slotIndex = slot - (epochLen - MINIMUM_SLOT_PER_EPOCH);
      return [epoch, slotIndex];
    } else {
      const normalSlotIndex = slot - this.firstNormalSlot;
      const normalEpochIndex = Math.floor(normalSlotIndex / this.slotsPerEpoch);
      const epoch = this.firstNormalEpoch + normalEpochIndex;
      const slotIndex = normalSlotIndex % this.slotsPerEpoch;
      return [epoch, slotIndex];
    }
  }
  getFirstSlotInEpoch(epoch) {
    if (epoch <= this.firstNormalEpoch) {
      return (Math.pow(2, epoch) - 1) * MINIMUM_SLOT_PER_EPOCH;
    } else {
      return (epoch - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot;
    }
  }
  getLastSlotInEpoch(epoch) {
    return this.getFirstSlotInEpoch(epoch) + this.getSlotsInEpoch(epoch) - 1;
  }
  getSlotsInEpoch(epoch) {
    if (epoch < this.firstNormalEpoch) {
      return Math.pow(2, epoch + trailingZeros(MINIMUM_SLOT_PER_EPOCH));
    } else {
      return this.slotsPerEpoch;
    }
  }
}

class SendTransactionError extends Error {
  constructor(message, logs) {
    super(message);
    this.logs = void 0;
    this.logs = logs;
  }
}

// Keep in sync with client/src/rpc_custom_errors.rs
// Typescript `enums` thwart tree-shaking. See https://bargsten.org/jsts/enums/
const SolanaJSONRPCErrorCode = {
  JSON_RPC_SERVER_ERROR_BLOCK_CLEANED_UP: -32001,
  JSON_RPC_SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE: -32002,
  JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE: -32003,
  JSON_RPC_SERVER_ERROR_BLOCK_NOT_AVAILABLE: -32004,
  JSON_RPC_SERVER_ERROR_NODE_UNHEALTHY: -32005,
  JSON_RPC_SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE: -32006,
  JSON_RPC_SERVER_ERROR_SLOT_SKIPPED: -32007,
  JSON_RPC_SERVER_ERROR_NO_SNAPSHOT: -32008,
  JSON_RPC_SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED: -32009,
  JSON_RPC_SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX: -32010,
  JSON_RPC_SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE: -32011,
  JSON_RPC_SCAN_ERROR: -32012,
  JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH: -32013,
  JSON_RPC_SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET: -32014,
  JSON_RPC_SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION: -32015,
  JSON_RPC_SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED: -32016
};
class SolanaJSONRPCError extends Error {
  constructor({
    code,
    message,
    data
  }, customMessage) {
    super(customMessage != null ? `${customMessage}: ${message}` : message);
    this.code = void 0;
    this.data = void 0;
    this.code = code;
    this.data = data;
    this.name = 'SolanaJSONRPCError';
  }
}

var fetchImpl = globalThis.fetch;

class RpcWebSocketClient extends rpc_websockets_dist_lib_client__WEBPACK_IMPORTED_MODULE_10__["default"] {
  constructor(address, options, generate_request_id) {
    const webSocketFactory = url => {
      const rpc = (0,rpc_websockets_dist_lib_client_websocket_browser__WEBPACK_IMPORTED_MODULE_11__["default"])(url, {
        autoconnect: true,
        max_reconnects: 5,
        reconnect: true,
        reconnect_interval: 1000,
        ...options
      });
      if ('socket' in rpc) {
        this.underlyingSocket = rpc.socket;
      } else {
        this.underlyingSocket = rpc;
      }
      return rpc;
    };
    super(webSocketFactory, address, options, generate_request_id);
    this.underlyingSocket = void 0;
  }
  call(...args) {
    const readyState = this.underlyingSocket?.readyState;
    if (readyState === 1 /* WebSocket.OPEN */) {
      return super.call(...args);
    }
    return Promise.reject(new Error('Tried to call a JSON-RPC method `' + args[0] + '` but the socket was not `CONNECTING` or `OPEN` (`readyState` was ' + readyState + ')'));
  }
  notify(...args) {
    const readyState = this.underlyingSocket?.readyState;
    if (readyState === 1 /* WebSocket.OPEN */) {
      return super.notify(...args);
    }
    return Promise.reject(new Error('Tried to send a JSON-RPC notification `' + args[0] + '` but the socket was not `CONNECTING` or `OPEN` (`readyState` was ' + readyState + ')'));
  }
}

// TODO: These constants should be removed in favor of reading them out of a
// Syscall account

/**
 * @internal
 */
const NUM_TICKS_PER_SECOND = 160;

/**
 * @internal
 */
const DEFAULT_TICKS_PER_SLOT = 64;

/**
 * @internal
 */
const NUM_SLOTS_PER_SECOND = NUM_TICKS_PER_SECOND / DEFAULT_TICKS_PER_SLOT;

/**
 * @internal
 */
const MS_PER_SLOT = 1000 / NUM_SLOTS_PER_SECOND;

/**
 * @internal
 */

/**
 * Decode account data buffer using an AccountType
 * @internal
 */
function decodeData(type, data) {
  let decoded;
  try {
    decoded = type.layout.decode(data);
  } catch (err) {
    throw new Error('invalid instruction; ' + err);
  }
  if (decoded.typeIndex !== type.index) {
    throw new Error(`invalid account data; account type mismatch ${decoded.typeIndex} != ${type.index}`);
  }
  return decoded;
}

/// The serialized size of lookup table metadata
const LOOKUP_TABLE_META_SIZE = 56;
class AddressLookupTableAccount {
  constructor(args) {
    this.key = void 0;
    this.state = void 0;
    this.key = args.key;
    this.state = args.state;
  }
  isActive() {
    const U64_MAX = BigInt('0xffffffffffffffff');
    return this.state.deactivationSlot === U64_MAX;
  }
  static deserialize(accountData) {
    const meta = decodeData(LookupTableMetaLayout, accountData);
    const serializedAddressesLen = accountData.length - LOOKUP_TABLE_META_SIZE;
    assert(serializedAddressesLen >= 0, 'lookup table is invalid');
    assert(serializedAddressesLen % 32 === 0, 'lookup table is invalid');
    const numSerializedAddresses = serializedAddressesLen / 32;
    const {
      addresses
    } = _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.seq(publicKey(), numSerializedAddresses, 'addresses')]).decode(accountData.slice(LOOKUP_TABLE_META_SIZE));
    return {
      deactivationSlot: meta.deactivationSlot,
      lastExtendedSlot: meta.lastExtendedSlot,
      lastExtendedSlotStartIndex: meta.lastExtendedStartIndex,
      authority: meta.authority.length !== 0 ? new PublicKey(meta.authority[0]) : undefined,
      addresses: addresses.map(address => new PublicKey(address))
    };
  }
}
const LookupTableMetaLayout = {
  index: 1,
  layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('typeIndex'), u64('deactivationSlot'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.nu64('lastExtendedSlot'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8('lastExtendedStartIndex'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8(),
  // option
  _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.seq(publicKey(), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.offset(_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8(), -1), 'authority')])
};

const URL_RE = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;
function makeWebsocketUrl(endpoint) {
  const matches = endpoint.match(URL_RE);
  if (matches == null) {
    throw TypeError(`Failed to validate endpoint URL \`${endpoint}\``);
  }
  const [_,
  // eslint-disable-line @typescript-eslint/no-unused-vars
  hostish, portWithColon, rest] = matches;
  const protocol = endpoint.startsWith('https:') ? 'wss:' : 'ws:';
  const startPort = portWithColon == null ? null : parseInt(portWithColon.slice(1), 10);
  const websocketPort =
  // Only shift the port by +1 as a convention for ws(s) only if given endpoint
  // is explictly specifying the endpoint port (HTTP-based RPC), assuming
  // we're directly trying to connect to solana-validator's ws listening port.
  // When the endpoint omits the port, we're connecting to the protocol
  // default ports: http(80) or https(443) and it's assumed we're behind a reverse
  // proxy which manages WebSocket upgrade and backend port redirection.
  startPort == null ? '' : `:${startPort + 1}`;
  return `${protocol}//${hostish}${websocketPort}${rest}`;
}

const PublicKeyFromString = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.coerce)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.instance)(PublicKey), (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(), value => new PublicKey(value));
const RawAccountDataResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.tuple)([(0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(), (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.literal)('base64')]);
const BufferFromRawAccountData = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.coerce)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.instance)(buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer), RawAccountDataResult, value => buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from(value[0], 'base64'));

/**
 * Attempt to use a recent blockhash for up to 30 seconds
 * @internal
 */
const BLOCKHASH_CACHE_TIMEOUT_MS = 30 * 1000;

/**
 * HACK.
 * Copied from rpc-websockets/dist/lib/client.
 * Otherwise, `yarn build` fails with:
 * https://gist.github.com/steveluscher/c057eca81d479ef705cdb53162f9971d
 */

/* @internal */
function assertEndpointUrl(putativeUrl) {
  if (/^https?:/.test(putativeUrl) === false) {
    throw new TypeError('Endpoint URL must start with `http:` or `https:`.');
  }
  return putativeUrl;
}

/** @internal */
function extractCommitmentFromConfig(commitmentOrConfig) {
  let commitment;
  let config;
  if (typeof commitmentOrConfig === 'string') {
    commitment = commitmentOrConfig;
  } else if (commitmentOrConfig) {
    const {
      commitment: specifiedCommitment,
      ...specifiedConfig
    } = commitmentOrConfig;
    commitment = specifiedCommitment;
    config = specifiedConfig;
  }
  return {
    commitment,
    config
  };
}

/**
 * @internal
 */
function createRpcResult(result) {
  return (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.union)([(0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
    jsonrpc: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.literal)('2.0'),
    id: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
    result
  }), (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
    jsonrpc: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.literal)('2.0'),
    id: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
    error: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
      code: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.unknown)(),
      message: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
      data: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.any)())
    })
  })]);
}
const UnknownRpcResult = createRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.unknown)());

/**
 * @internal
 */
function jsonRpcResult(schema) {
  return (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.coerce)(createRpcResult(schema), UnknownRpcResult, value => {
    if ('error' in value) {
      return value;
    } else {
      return {
        ...value,
        result: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(value.result, schema)
      };
    }
  });
}

/**
 * @internal
 */
function jsonRpcResultAndContext(value) {
  return jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
    context: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
      slot: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()
    }),
    value
  }));
}

/**
 * @internal
 */
function notificationResultAndContext(value) {
  return (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
    context: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
      slot: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()
    }),
    value
  });
}

/**
 * @internal
 */
function versionedMessageFromResponse(version, response) {
  if (version === 0) {
    return new MessageV0({
      header: response.header,
      staticAccountKeys: response.accountKeys.map(accountKey => new PublicKey(accountKey)),
      recentBlockhash: response.recentBlockhash,
      compiledInstructions: response.instructions.map(ix => ({
        programIdIndex: ix.programIdIndex,
        accountKeyIndexes: ix.accounts,
        data: bs58__WEBPACK_IMPORTED_MODULE_4___default().decode(ix.data)
      })),
      addressTableLookups: response.addressTableLookups
    });
  } else {
    return new Message(response);
  }
}

/**
 * The level of commitment desired when querying state
 * <pre>
 *   'processed': Query the most recent block which has reached 1 confirmation by the connected node
 *   'confirmed': Query the most recent block which has reached 1 confirmation by the cluster
 *   'finalized': Query the most recent block which has been finalized by the cluster
 * </pre>
 */

const GetInflationGovernorResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  foundation: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  foundationTerm: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  initial: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  taper: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  terminal: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()
});

/**
 * The inflation reward for an epoch
 */

/**
 * Expected JSON RPC response for the "getInflationReward" message
 */
const GetInflationRewardResult = jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  epoch: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  effectiveSlot: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  amount: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  postBalance: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  commission: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()))
}))));
/**
 * Expected JSON RPC response for the "getRecentPrioritizationFees" message
 */
const GetRecentPrioritizationFeesResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  slot: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  prioritizationFee: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()
}));
/**
 * Expected JSON RPC response for the "getInflationRate" message
 */
const GetInflationRateResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  total: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  validator: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  foundation: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  epoch: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()
});

/**
 * Information about the current epoch
 */

const GetEpochInfoResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  epoch: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  slotIndex: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  slotsInEpoch: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  absoluteSlot: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  blockHeight: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()),
  transactionCount: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)())
});
const GetEpochScheduleResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  slotsPerEpoch: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  leaderScheduleSlotOffset: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  warmup: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.boolean)(),
  firstNormalEpoch: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  firstNormalSlot: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()
});

/**
 * Leader schedule
 * (see https://docs.solana.com/terminology#leader-schedule)
 */

const GetLeaderScheduleResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.record)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(), (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()));

/**
 * Transaction error or null
 */
const TransactionErrorResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.union)([(0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({}), (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)()]));

/**
 * Signature status for a transaction
 */
const SignatureStatusResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  err: TransactionErrorResult
});

/**
 * Transaction signature received notification
 */
const SignatureReceivedResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.literal)('receivedSignature');

/**
 * Version info for a node
 */

const VersionResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  'solana-core': (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  'feature-set': (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)())
});
const SimulatedTransactionResponseStruct = jsonRpcResultAndContext((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  err: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.union)([(0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({}), (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)()])),
  logs: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)())),
  accounts: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
    executable: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.boolean)(),
    owner: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
    lamports: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
    data: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)()),
    rentEpoch: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)())
  }))))),
  unitsConsumed: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()),
  returnData: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
    programId: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
    data: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.tuple)([(0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(), (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.literal)('base64')])
  })))
}));
/**
 * Expected JSON RPC response for the "getBlockProduction" message
 */
const BlockProductionResponseStruct = jsonRpcResultAndContext((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  byIdentity: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.record)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(), (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)())),
  range: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
    firstSlot: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
    lastSlot: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()
  })
}));

/**
 * A performance sample
 */

function createRpcClient(url, httpHeaders, customFetch, fetchMiddleware, disableRetryOnRateLimit, httpAgent) {
  const fetch = customFetch ? customFetch : fetchImpl;
  let agent;
  {
    if (httpAgent != null) {
      console.warn('You have supplied an `httpAgent` when creating a `Connection` in a browser environment.' + 'It has been ignored; `httpAgent` is only used in Node environments.');
    }
  }
  let fetchWithMiddleware;
  if (fetchMiddleware) {
    fetchWithMiddleware = async (info, init) => {
      const modifiedFetchArgs = await new Promise((resolve, reject) => {
        try {
          fetchMiddleware(info, init, (modifiedInfo, modifiedInit) => resolve([modifiedInfo, modifiedInit]));
        } catch (error) {
          reject(error);
        }
      });
      return await fetch(...modifiedFetchArgs);
    };
  }
  const clientBrowser = new (jayson_lib_client_browser__WEBPACK_IMPORTED_MODULE_9___default())(async (request, callback) => {
    const options = {
      method: 'POST',
      body: request,
      agent,
      headers: Object.assign({
        'Content-Type': 'application/json'
      }, httpHeaders || {}, COMMON_HTTP_HEADERS)
    };
    try {
      let too_many_requests_retries = 5;
      let res;
      let waitTime = 500;
      for (;;) {
        if (fetchWithMiddleware) {
          res = await fetchWithMiddleware(url, options);
        } else {
          res = await fetch(url, options);
        }
        if (res.status !== 429 /* Too many requests */) {
          break;
        }
        if (disableRetryOnRateLimit === true) {
          break;
        }
        too_many_requests_retries -= 1;
        if (too_many_requests_retries === 0) {
          break;
        }
        console.log(`Server responded with ${res.status} ${res.statusText}.  Retrying after ${waitTime}ms delay...`);
        await sleep(waitTime);
        waitTime *= 2;
      }
      const text = await res.text();
      if (res.ok) {
        callback(null, text);
      } else {
        callback(new Error(`${res.status} ${res.statusText}: ${text}`));
      }
    } catch (err) {
      if (err instanceof Error) callback(err);
    }
  }, {});
  return clientBrowser;
}
function createRpcRequest(client) {
  return (method, args) => {
    return new Promise((resolve, reject) => {
      client.request(method, args, (err, response) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(response);
      });
    });
  };
}
function createRpcBatchRequest(client) {
  return requests => {
    return new Promise((resolve, reject) => {
      // Do nothing if requests is empty
      if (requests.length === 0) resolve([]);
      const batch = requests.map(params => {
        return client.request(params.methodName, params.args);
      });
      client.request(batch, (err, response) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(response);
      });
    });
  };
}

/**
 * Expected JSON RPC response for the "getInflationGovernor" message
 */
const GetInflationGovernorRpcResult = jsonRpcResult(GetInflationGovernorResult);

/**
 * Expected JSON RPC response for the "getInflationRate" message
 */
const GetInflationRateRpcResult = jsonRpcResult(GetInflationRateResult);

/**
 * Expected JSON RPC response for the "getRecentPrioritizationFees" message
 */
const GetRecentPrioritizationFeesRpcResult = jsonRpcResult(GetRecentPrioritizationFeesResult);

/**
 * Expected JSON RPC response for the "getEpochInfo" message
 */
const GetEpochInfoRpcResult = jsonRpcResult(GetEpochInfoResult);

/**
 * Expected JSON RPC response for the "getEpochSchedule" message
 */
const GetEpochScheduleRpcResult = jsonRpcResult(GetEpochScheduleResult);

/**
 * Expected JSON RPC response for the "getLeaderSchedule" message
 */
const GetLeaderScheduleRpcResult = jsonRpcResult(GetLeaderScheduleResult);

/**
 * Expected JSON RPC response for the "minimumLedgerSlot" and "getFirstAvailableBlock" messages
 */
const SlotRpcResult = jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)());

/**
 * Supply
 */

/**
 * Expected JSON RPC response for the "getSupply" message
 */
const GetSupplyRpcResult = jsonRpcResultAndContext((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  total: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  circulating: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  nonCirculating: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  nonCirculatingAccounts: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)(PublicKeyFromString)
}));

/**
 * Token amount object which returns a token amount in different formats
 * for various client use cases.
 */

/**
 * Expected JSON RPC structure for token amounts
 */
const TokenAmountResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  amount: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  uiAmount: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()),
  decimals: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  uiAmountString: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)())
});

/**
 * Token address and balance.
 */

/**
 * Expected JSON RPC response for the "getTokenLargestAccounts" message
 */
const GetTokenLargestAccountsResult = jsonRpcResultAndContext((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  address: PublicKeyFromString,
  amount: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  uiAmount: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()),
  decimals: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  uiAmountString: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)())
})));

/**
 * Expected JSON RPC response for the "getTokenAccountsByOwner" message
 */
const GetTokenAccountsByOwner = jsonRpcResultAndContext((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  pubkey: PublicKeyFromString,
  account: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
    executable: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.boolean)(),
    owner: PublicKeyFromString,
    lamports: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
    data: BufferFromRawAccountData,
    rentEpoch: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()
  })
})));
const ParsedAccountDataResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  program: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  parsed: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.unknown)(),
  space: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()
});

/**
 * Expected JSON RPC response for the "getTokenAccountsByOwner" message with parsed data
 */
const GetParsedTokenAccountsByOwner = jsonRpcResultAndContext((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  pubkey: PublicKeyFromString,
  account: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
    executable: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.boolean)(),
    owner: PublicKeyFromString,
    lamports: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
    data: ParsedAccountDataResult,
    rentEpoch: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()
  })
})));

/**
 * Pair of an account address and its balance
 */

/**
 * Expected JSON RPC response for the "getLargestAccounts" message
 */
const GetLargestAccountsRpcResult = jsonRpcResultAndContext((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  lamports: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  address: PublicKeyFromString
})));

/**
 * @internal
 */
const AccountInfoResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  executable: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.boolean)(),
  owner: PublicKeyFromString,
  lamports: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  data: BufferFromRawAccountData,
  rentEpoch: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()
});

/**
 * @internal
 */
const KeyedAccountInfoResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  pubkey: PublicKeyFromString,
  account: AccountInfoResult
});
const ParsedOrRawAccountData = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.coerce)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.union)([(0,superstruct__WEBPACK_IMPORTED_MODULE_15__.instance)(buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer), ParsedAccountDataResult]), (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.union)([RawAccountDataResult, ParsedAccountDataResult]), value => {
  if (Array.isArray(value)) {
    return (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(value, BufferFromRawAccountData);
  } else {
    return value;
  }
});

/**
 * @internal
 */
const ParsedAccountInfoResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  executable: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.boolean)(),
  owner: PublicKeyFromString,
  lamports: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  data: ParsedOrRawAccountData,
  rentEpoch: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()
});
const KeyedParsedAccountInfoResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  pubkey: PublicKeyFromString,
  account: ParsedAccountInfoResult
});

/**
 * @internal
 */
const StakeActivationResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  state: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.union)([(0,superstruct__WEBPACK_IMPORTED_MODULE_15__.literal)('active'), (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.literal)('inactive'), (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.literal)('activating'), (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.literal)('deactivating')]),
  active: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  inactive: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()
});

/**
 * Expected JSON RPC response for the "getConfirmedSignaturesForAddress2" message
 */

const GetConfirmedSignaturesForAddress2RpcResult = jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  signature: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  slot: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  err: TransactionErrorResult,
  memo: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)()),
  blockTime: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()))
})));

/**
 * Expected JSON RPC response for the "getSignaturesForAddress" message
 */
const GetSignaturesForAddressRpcResult = jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  signature: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  slot: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  err: TransactionErrorResult,
  memo: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)()),
  blockTime: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()))
})));

/***
 * Expected JSON RPC response for the "accountNotification" message
 */
const AccountNotificationResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  subscription: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  result: notificationResultAndContext(AccountInfoResult)
});

/**
 * @internal
 */
const ProgramAccountInfoResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  pubkey: PublicKeyFromString,
  account: AccountInfoResult
});

/***
 * Expected JSON RPC response for the "programNotification" message
 */
const ProgramAccountNotificationResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  subscription: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  result: notificationResultAndContext(ProgramAccountInfoResult)
});

/**
 * @internal
 */
const SlotInfoResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  parent: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  slot: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  root: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()
});

/**
 * Expected JSON RPC response for the "slotNotification" message
 */
const SlotNotificationResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  subscription: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  result: SlotInfoResult
});

/**
 * Slot updates which can be used for tracking the live progress of a cluster.
 * - `"firstShredReceived"`: connected node received the first shred of a block.
 * Indicates that a new block that is being produced.
 * - `"completed"`: connected node has received all shreds of a block. Indicates
 * a block was recently produced.
 * - `"optimisticConfirmation"`: block was optimistically confirmed by the
 * cluster. It is not guaranteed that an optimistic confirmation notification
 * will be sent for every finalized blocks.
 * - `"root"`: the connected node rooted this block.
 * - `"createdBank"`: the connected node has started validating this block.
 * - `"frozen"`: the connected node has validated this block.
 * - `"dead"`: the connected node failed to validate this block.
 */

/**
 * @internal
 */
const SlotUpdateResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.union)([(0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  type: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.union)([(0,superstruct__WEBPACK_IMPORTED_MODULE_15__.literal)('firstShredReceived'), (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.literal)('completed'), (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.literal)('optimisticConfirmation'), (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.literal)('root')]),
  slot: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  timestamp: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()
}), (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  type: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.literal)('createdBank'),
  parent: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  slot: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  timestamp: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()
}), (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  type: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.literal)('frozen'),
  slot: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  timestamp: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  stats: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
    numTransactionEntries: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
    numSuccessfulTransactions: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
    numFailedTransactions: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
    maxTransactionsPerEntry: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()
  })
}), (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  type: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.literal)('dead'),
  slot: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  timestamp: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  err: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)()
})]);

/**
 * Expected JSON RPC response for the "slotsUpdatesNotification" message
 */
const SlotUpdateNotificationResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  subscription: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  result: SlotUpdateResult
});

/**
 * Expected JSON RPC response for the "signatureNotification" message
 */
const SignatureNotificationResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  subscription: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  result: notificationResultAndContext((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.union)([SignatureStatusResult, SignatureReceivedResult]))
});

/**
 * Expected JSON RPC response for the "rootNotification" message
 */
const RootNotificationResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  subscription: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  result: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()
});
const ContactInfoResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  pubkey: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  gossip: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)()),
  tpu: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)()),
  rpc: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)()),
  version: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)())
});
const VoteAccountInfoResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  votePubkey: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  nodePubkey: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  activatedStake: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  epochVoteAccount: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.boolean)(),
  epochCredits: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.tuple)([(0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(), (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(), (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()])),
  commission: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  lastVote: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  rootSlot: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)())
});

/**
 * Expected JSON RPC response for the "getVoteAccounts" message
 */
const GetVoteAccounts = jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  current: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)(VoteAccountInfoResult),
  delinquent: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)(VoteAccountInfoResult)
}));
const ConfirmationStatus = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.union)([(0,superstruct__WEBPACK_IMPORTED_MODULE_15__.literal)('processed'), (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.literal)('confirmed'), (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.literal)('finalized')]);
const SignatureStatusResponse = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  slot: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  confirmations: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()),
  err: TransactionErrorResult,
  confirmationStatus: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)(ConfirmationStatus)
});

/**
 * Expected JSON RPC response for the "getSignatureStatuses" message
 */
const GetSignatureStatusesRpcResult = jsonRpcResultAndContext((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)(SignatureStatusResponse)));

/**
 * Expected JSON RPC response for the "getMinimumBalanceForRentExemption" message
 */
const GetMinimumBalanceForRentExemptionRpcResult = jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)());
const AddressTableLookupStruct = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  accountKey: PublicKeyFromString,
  writableIndexes: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()),
  readonlyIndexes: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)())
});
const ConfirmedTransactionResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  signatures: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)()),
  message: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
    accountKeys: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)()),
    header: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
      numRequiredSignatures: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
      numReadonlySignedAccounts: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
      numReadonlyUnsignedAccounts: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()
    }),
    instructions: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
      accounts: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()),
      data: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
      programIdIndex: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()
    })),
    recentBlockhash: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
    addressTableLookups: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)(AddressTableLookupStruct))
  })
});
const AnnotatedAccountKey = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  pubkey: PublicKeyFromString,
  signer: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.boolean)(),
  writable: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.boolean)(),
  source: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.union)([(0,superstruct__WEBPACK_IMPORTED_MODULE_15__.literal)('transaction'), (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.literal)('lookupTable')]))
});
const ConfirmedTransactionAccountsModeResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  accountKeys: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)(AnnotatedAccountKey),
  signatures: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)())
});
const ParsedInstructionResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  parsed: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.unknown)(),
  program: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  programId: PublicKeyFromString
});
const RawInstructionResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  accounts: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)(PublicKeyFromString),
  data: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  programId: PublicKeyFromString
});
const InstructionResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.union)([RawInstructionResult, ParsedInstructionResult]);
const UnknownInstructionResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.union)([(0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  parsed: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.unknown)(),
  program: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  programId: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)()
}), (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  accounts: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)()),
  data: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  programId: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)()
})]);
const ParsedOrRawInstruction = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.coerce)(InstructionResult, UnknownInstructionResult, value => {
  if ('accounts' in value) {
    return (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(value, RawInstructionResult);
  } else {
    return (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(value, ParsedInstructionResult);
  }
});

/**
 * @internal
 */
const ParsedConfirmedTransactionResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  signatures: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)()),
  message: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
    accountKeys: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)(AnnotatedAccountKey),
    instructions: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)(ParsedOrRawInstruction),
    recentBlockhash: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
    addressTableLookups: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)(AddressTableLookupStruct)))
  })
});
const TokenBalanceResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  accountIndex: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  mint: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  owner: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)()),
  uiTokenAmount: TokenAmountResult
});
const LoadedAddressesResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  writable: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)(PublicKeyFromString),
  readonly: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)(PublicKeyFromString)
});

/**
 * @internal
 */
const ConfirmedTransactionMetaResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  err: TransactionErrorResult,
  fee: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  innerInstructions: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
    index: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
    instructions: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
      accounts: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()),
      data: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
      programIdIndex: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()
    }))
  })))),
  preBalances: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()),
  postBalances: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()),
  logMessages: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)()))),
  preTokenBalances: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)(TokenBalanceResult))),
  postTokenBalances: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)(TokenBalanceResult))),
  loadedAddresses: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)(LoadedAddressesResult),
  computeUnitsConsumed: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)())
});

/**
 * @internal
 */
const ParsedConfirmedTransactionMetaResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  err: TransactionErrorResult,
  fee: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  innerInstructions: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
    index: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
    instructions: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)(ParsedOrRawInstruction)
  })))),
  preBalances: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()),
  postBalances: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()),
  logMessages: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)()))),
  preTokenBalances: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)(TokenBalanceResult))),
  postTokenBalances: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)(TokenBalanceResult))),
  loadedAddresses: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)(LoadedAddressesResult),
  computeUnitsConsumed: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)())
});
const TransactionVersionStruct = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.union)([(0,superstruct__WEBPACK_IMPORTED_MODULE_15__.literal)(0), (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.literal)('legacy')]);

/** @internal */
const RewardsResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  pubkey: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  lamports: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  postBalance: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()),
  rewardType: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)()),
  commission: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()))
});

/**
 * Expected JSON RPC response for the "getBlock" message
 */
const GetBlockRpcResult = jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  blockhash: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  previousBlockhash: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  parentSlot: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  transactions: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
    transaction: ConfirmedTransactionResult,
    meta: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)(ConfirmedTransactionMetaResult),
    version: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)(TransactionVersionStruct)
  })),
  rewards: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)(RewardsResult)),
  blockTime: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()),
  blockHeight: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)())
})));

/**
 * Expected JSON RPC response for the "getBlock" message when `transactionDetails` is `none`
 */
const GetNoneModeBlockRpcResult = jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  blockhash: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  previousBlockhash: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  parentSlot: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  rewards: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)(RewardsResult)),
  blockTime: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()),
  blockHeight: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)())
})));

/**
 * Expected JSON RPC response for the "getBlock" message when `transactionDetails` is `accounts`
 */
const GetAccountsModeBlockRpcResult = jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  blockhash: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  previousBlockhash: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  parentSlot: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  transactions: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
    transaction: ConfirmedTransactionAccountsModeResult,
    meta: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)(ConfirmedTransactionMetaResult),
    version: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)(TransactionVersionStruct)
  })),
  rewards: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)(RewardsResult)),
  blockTime: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()),
  blockHeight: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)())
})));

/**
 * Expected parsed JSON RPC response for the "getBlock" message
 */
const GetParsedBlockRpcResult = jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  blockhash: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  previousBlockhash: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  parentSlot: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  transactions: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
    transaction: ParsedConfirmedTransactionResult,
    meta: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)(ParsedConfirmedTransactionMetaResult),
    version: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)(TransactionVersionStruct)
  })),
  rewards: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)(RewardsResult)),
  blockTime: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()),
  blockHeight: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)())
})));

/**
 * Expected parsed JSON RPC response for the "getBlock" message  when `transactionDetails` is `accounts`
 */
const GetParsedAccountsModeBlockRpcResult = jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  blockhash: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  previousBlockhash: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  parentSlot: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  transactions: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
    transaction: ConfirmedTransactionAccountsModeResult,
    meta: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)(ParsedConfirmedTransactionMetaResult),
    version: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)(TransactionVersionStruct)
  })),
  rewards: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)(RewardsResult)),
  blockTime: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()),
  blockHeight: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)())
})));

/**
 * Expected parsed JSON RPC response for the "getBlock" message  when `transactionDetails` is `none`
 */
const GetParsedNoneModeBlockRpcResult = jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  blockhash: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  previousBlockhash: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  parentSlot: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  rewards: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)(RewardsResult)),
  blockTime: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()),
  blockHeight: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)())
})));

/**
 * Expected JSON RPC response for the "getConfirmedBlock" message
 *
 * @deprecated Deprecated since Solana v1.8.0. Please use {@link GetBlockRpcResult} instead.
 */
const GetConfirmedBlockRpcResult = jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  blockhash: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  previousBlockhash: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  parentSlot: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  transactions: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
    transaction: ConfirmedTransactionResult,
    meta: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)(ConfirmedTransactionMetaResult)
  })),
  rewards: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)(RewardsResult)),
  blockTime: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)())
})));

/**
 * Expected JSON RPC response for the "getBlock" message
 */
const GetBlockSignaturesRpcResult = jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  blockhash: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  previousBlockhash: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  parentSlot: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  signatures: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)()),
  blockTime: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)())
})));

/**
 * Expected JSON RPC response for the "getTransaction" message
 */
const GetTransactionRpcResult = jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  slot: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  meta: ConfirmedTransactionMetaResult,
  blockTime: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)())),
  transaction: ConfirmedTransactionResult,
  version: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)(TransactionVersionStruct)
})));

/**
 * Expected parsed JSON RPC response for the "getTransaction" message
 */
const GetParsedTransactionRpcResult = jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  slot: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  transaction: ParsedConfirmedTransactionResult,
  meta: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)(ParsedConfirmedTransactionMetaResult),
  blockTime: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)())),
  version: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)(TransactionVersionStruct)
})));

/**
 * Expected JSON RPC response for the "getRecentBlockhash" message
 *
 * @deprecated Deprecated since Solana v1.8.0. Please use {@link GetLatestBlockhashRpcResult} instead.
 */
const GetRecentBlockhashAndContextRpcResult = jsonRpcResultAndContext((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  blockhash: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  feeCalculator: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
    lamportsPerSignature: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()
  })
}));

/**
 * Expected JSON RPC response for the "getLatestBlockhash" message
 */
const GetLatestBlockhashRpcResult = jsonRpcResultAndContext((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  blockhash: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  lastValidBlockHeight: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()
}));
const PerfSampleResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  slot: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  numTransactions: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  numSlots: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)(),
  samplePeriodSecs: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()
});

/*
 * Expected JSON RPC response for "getRecentPerformanceSamples" message
 */
const GetRecentPerformanceSamplesRpcResult = jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)(PerfSampleResult));

/**
 * Expected JSON RPC response for the "getFeeCalculatorForBlockhash" message
 */
const GetFeeCalculatorRpcResult = jsonRpcResultAndContext((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  feeCalculator: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
    lamportsPerSignature: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()
  })
})));

/**
 * Expected JSON RPC response for the "requestAirdrop" message
 */
const RequestAirdropRpcResult = jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)());

/**
 * Expected JSON RPC response for the "sendTransaction" message
 */
const SendTransactionRpcResult = jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)());

/**
 * Information about the latest slot being processed by a node
 */

/**
 * @internal
 */
const LogsResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  err: TransactionErrorResult,
  logs: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)()),
  signature: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)()
});

/**
 * Logs result.
 */

/**
 * Expected JSON RPC response for the "logsNotification" message.
 */
const LogsNotificationResult = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  result: notificationResultAndContext(LogsResult),
  subscription: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()
});

/**
 * Filter for log subscriptions.
 */

/** @internal */
const COMMON_HTTP_HEADERS = {
  'solana-client': `js/${"0.0.0-development" }`
};

/**
 * A connection to a fullnode JSON RPC endpoint
 */
class Connection {
  /** @internal */
  /** @internal */
  /** @internal */
  /** @internal */
  /** @internal */
  /** @internal */
  /** @internal */
  /** @internal */
  /** @internal */
  /** @internal */

  /** @internal */

  /** @internal
   * A number that we increment every time an active connection closes.
   * Used to determine whether the same socket connection that was open
   * when an async operation started is the same one that's active when
   * its continuation fires.
   *
   */

  /** @internal */
  /** @internal */
  /** @internal */

  /** @internal */
  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /**
   * Special case.
   * After a signature is processed, RPCs automatically dispose of the
   * subscription on the server side. We need to track which of these
   * subscriptions have been disposed in such a way, so that we know
   * whether the client is dealing with a not-yet-processed signature
   * (in which case we must tear down the server subscription) or an
   * already-processed signature (in which case the client can simply
   * clear out the subscription locally without telling the server).
   *
   * NOTE: There is a proposal to eliminate this special case, here:
   * https://github.com/solana-labs/solana/issues/18892
   */
  /** @internal */

  /**
   * Establish a JSON RPC connection
   *
   * @param endpoint URL to the fullnode JSON RPC endpoint
   * @param commitmentOrConfig optional default commitment level or optional ConnectionConfig configuration object
   */
  constructor(endpoint, _commitmentOrConfig) {
    this._commitment = void 0;
    this._confirmTransactionInitialTimeout = void 0;
    this._rpcEndpoint = void 0;
    this._rpcWsEndpoint = void 0;
    this._rpcClient = void 0;
    this._rpcRequest = void 0;
    this._rpcBatchRequest = void 0;
    this._rpcWebSocket = void 0;
    this._rpcWebSocketConnected = false;
    this._rpcWebSocketHeartbeat = null;
    this._rpcWebSocketIdleTimeout = null;
    this._rpcWebSocketGeneration = 0;
    this._disableBlockhashCaching = false;
    this._pollingBlockhash = false;
    this._blockhashInfo = {
      latestBlockhash: null,
      lastFetch: 0,
      transactionSignatures: [],
      simulatedSignatures: []
    };
    this._nextClientSubscriptionId = 0;
    this._subscriptionDisposeFunctionsByClientSubscriptionId = {};
    this._subscriptionHashByClientSubscriptionId = {};
    this._subscriptionStateChangeCallbacksByHash = {};
    this._subscriptionCallbacksByServerSubscriptionId = {};
    this._subscriptionsByHash = {};
    this._subscriptionsAutoDisposedByRpc = new Set();
    this.getBlockHeight = (() => {
      const requestPromises = {};
      return async commitmentOrConfig => {
        const {
          commitment,
          config
        } = extractCommitmentFromConfig(commitmentOrConfig);
        const args = this._buildArgs([], commitment, undefined /* encoding */, config);
        const requestHash = fastStableStringify$1(args);
        requestPromises[requestHash] = requestPromises[requestHash] ?? (async () => {
          try {
            const unsafeRes = await this._rpcRequest('getBlockHeight', args);
            const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()));
            if ('error' in res) {
              throw new SolanaJSONRPCError(res.error, 'failed to get block height information');
            }
            return res.result;
          } finally {
            delete requestPromises[requestHash];
          }
        })();
        return await requestPromises[requestHash];
      };
    })();
    let wsEndpoint;
    let httpHeaders;
    let fetch;
    let fetchMiddleware;
    let disableRetryOnRateLimit;
    let httpAgent;
    if (_commitmentOrConfig && typeof _commitmentOrConfig === 'string') {
      this._commitment = _commitmentOrConfig;
    } else if (_commitmentOrConfig) {
      this._commitment = _commitmentOrConfig.commitment;
      this._confirmTransactionInitialTimeout = _commitmentOrConfig.confirmTransactionInitialTimeout;
      wsEndpoint = _commitmentOrConfig.wsEndpoint;
      httpHeaders = _commitmentOrConfig.httpHeaders;
      fetch = _commitmentOrConfig.fetch;
      fetchMiddleware = _commitmentOrConfig.fetchMiddleware;
      disableRetryOnRateLimit = _commitmentOrConfig.disableRetryOnRateLimit;
      httpAgent = _commitmentOrConfig.httpAgent;
    }
    this._rpcEndpoint = assertEndpointUrl(endpoint);
    this._rpcWsEndpoint = wsEndpoint || makeWebsocketUrl(endpoint);
    this._rpcClient = createRpcClient(endpoint, httpHeaders, fetch, fetchMiddleware, disableRetryOnRateLimit, httpAgent);
    this._rpcRequest = createRpcRequest(this._rpcClient);
    this._rpcBatchRequest = createRpcBatchRequest(this._rpcClient);
    this._rpcWebSocket = new RpcWebSocketClient(this._rpcWsEndpoint, {
      autoconnect: false,
      max_reconnects: Infinity
    });
    this._rpcWebSocket.on('open', this._wsOnOpen.bind(this));
    this._rpcWebSocket.on('error', this._wsOnError.bind(this));
    this._rpcWebSocket.on('close', this._wsOnClose.bind(this));
    this._rpcWebSocket.on('accountNotification', this._wsOnAccountNotification.bind(this));
    this._rpcWebSocket.on('programNotification', this._wsOnProgramAccountNotification.bind(this));
    this._rpcWebSocket.on('slotNotification', this._wsOnSlotNotification.bind(this));
    this._rpcWebSocket.on('slotsUpdatesNotification', this._wsOnSlotUpdatesNotification.bind(this));
    this._rpcWebSocket.on('signatureNotification', this._wsOnSignatureNotification.bind(this));
    this._rpcWebSocket.on('rootNotification', this._wsOnRootNotification.bind(this));
    this._rpcWebSocket.on('logsNotification', this._wsOnLogsNotification.bind(this));
  }

  /**
   * The default commitment used for requests
   */
  get commitment() {
    return this._commitment;
  }

  /**
   * The RPC endpoint
   */
  get rpcEndpoint() {
    return this._rpcEndpoint;
  }

  /**
   * Fetch the balance for the specified public key, return with context
   */
  async getBalanceAndContext(publicKey, commitmentOrConfig) {
    /** @internal */
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const args = this._buildArgs([publicKey.toBase58()], commitment, undefined /* encoding */, config);
    const unsafeRes = await this._rpcRequest('getBalance', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, jsonRpcResultAndContext((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()));
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get balance for ${publicKey.toBase58()}`);
    }
    return res.result;
  }

  /**
   * Fetch the balance for the specified public key
   */
  async getBalance(publicKey, commitmentOrConfig) {
    return await this.getBalanceAndContext(publicKey, commitmentOrConfig).then(x => x.value).catch(e => {
      throw new Error('failed to get balance of account ' + publicKey.toBase58() + ': ' + e);
    });
  }

  /**
   * Fetch the estimated production time of a block
   */
  async getBlockTime(slot) {
    const unsafeRes = await this._rpcRequest('getBlockTime', [slot]);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)())));
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get block time for slot ${slot}`);
    }
    return res.result;
  }

  /**
   * Fetch the lowest slot that the node has information about in its ledger.
   * This value may increase over time if the node is configured to purge older ledger data
   */
  async getMinimumLedgerSlot() {
    const unsafeRes = await this._rpcRequest('minimumLedgerSlot', []);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()));
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get minimum ledger slot');
    }
    return res.result;
  }

  /**
   * Fetch the slot of the lowest confirmed block that has not been purged from the ledger
   */
  async getFirstAvailableBlock() {
    const unsafeRes = await this._rpcRequest('getFirstAvailableBlock', []);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, SlotRpcResult);
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get first available block');
    }
    return res.result;
  }

  /**
   * Fetch information about the current supply
   */
  async getSupply(config) {
    let configArg = {};
    if (typeof config === 'string') {
      configArg = {
        commitment: config
      };
    } else if (config) {
      configArg = {
        ...config,
        commitment: config && config.commitment || this.commitment
      };
    } else {
      configArg = {
        commitment: this.commitment
      };
    }
    const unsafeRes = await this._rpcRequest('getSupply', [configArg]);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetSupplyRpcResult);
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get supply');
    }
    return res.result;
  }

  /**
   * Fetch the current supply of a token mint
   */
  async getTokenSupply(tokenMintAddress, commitment) {
    const args = this._buildArgs([tokenMintAddress.toBase58()], commitment);
    const unsafeRes = await this._rpcRequest('getTokenSupply', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, jsonRpcResultAndContext(TokenAmountResult));
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get token supply');
    }
    return res.result;
  }

  /**
   * Fetch the current balance of a token account
   */
  async getTokenAccountBalance(tokenAddress, commitment) {
    const args = this._buildArgs([tokenAddress.toBase58()], commitment);
    const unsafeRes = await this._rpcRequest('getTokenAccountBalance', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, jsonRpcResultAndContext(TokenAmountResult));
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get token account balance');
    }
    return res.result;
  }

  /**
   * Fetch all the token accounts owned by the specified account
   *
   * @return {Promise<RpcResponseAndContext<Array<{pubkey: PublicKey, account: AccountInfo<Buffer>}>>>}
   */
  async getTokenAccountsByOwner(ownerAddress, filter, commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    let _args = [ownerAddress.toBase58()];
    if ('mint' in filter) {
      _args.push({
        mint: filter.mint.toBase58()
      });
    } else {
      _args.push({
        programId: filter.programId.toBase58()
      });
    }
    const args = this._buildArgs(_args, commitment, 'base64', config);
    const unsafeRes = await this._rpcRequest('getTokenAccountsByOwner', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetTokenAccountsByOwner);
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get token accounts owned by account ${ownerAddress.toBase58()}`);
    }
    return res.result;
  }

  /**
   * Fetch parsed token accounts owned by the specified account
   *
   * @return {Promise<RpcResponseAndContext<Array<{pubkey: PublicKey, account: AccountInfo<ParsedAccountData>}>>>}
   */
  async getParsedTokenAccountsByOwner(ownerAddress, filter, commitment) {
    let _args = [ownerAddress.toBase58()];
    if ('mint' in filter) {
      _args.push({
        mint: filter.mint.toBase58()
      });
    } else {
      _args.push({
        programId: filter.programId.toBase58()
      });
    }
    const args = this._buildArgs(_args, commitment, 'jsonParsed');
    const unsafeRes = await this._rpcRequest('getTokenAccountsByOwner', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetParsedTokenAccountsByOwner);
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get token accounts owned by account ${ownerAddress.toBase58()}`);
    }
    return res.result;
  }

  /**
   * Fetch the 20 largest accounts with their current balances
   */
  async getLargestAccounts(config) {
    const arg = {
      ...config,
      commitment: config && config.commitment || this.commitment
    };
    const args = arg.filter || arg.commitment ? [arg] : [];
    const unsafeRes = await this._rpcRequest('getLargestAccounts', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetLargestAccountsRpcResult);
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get largest accounts');
    }
    return res.result;
  }

  /**
   * Fetch the 20 largest token accounts with their current balances
   * for a given mint.
   */
  async getTokenLargestAccounts(mintAddress, commitment) {
    const args = this._buildArgs([mintAddress.toBase58()], commitment);
    const unsafeRes = await this._rpcRequest('getTokenLargestAccounts', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetTokenLargestAccountsResult);
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get token largest accounts');
    }
    return res.result;
  }

  /**
   * Fetch all the account info for the specified public key, return with context
   */
  async getAccountInfoAndContext(publicKey, commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const args = this._buildArgs([publicKey.toBase58()], commitment, 'base64', config);
    const unsafeRes = await this._rpcRequest('getAccountInfo', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, jsonRpcResultAndContext((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)(AccountInfoResult)));
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get info about account ${publicKey.toBase58()}`);
    }
    return res.result;
  }

  /**
   * Fetch parsed account info for the specified public key
   */
  async getParsedAccountInfo(publicKey, commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const args = this._buildArgs([publicKey.toBase58()], commitment, 'jsonParsed', config);
    const unsafeRes = await this._rpcRequest('getAccountInfo', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, jsonRpcResultAndContext((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)(ParsedAccountInfoResult)));
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get info about account ${publicKey.toBase58()}`);
    }
    return res.result;
  }

  /**
   * Fetch all the account info for the specified public key
   */
  async getAccountInfo(publicKey, commitmentOrConfig) {
    try {
      const res = await this.getAccountInfoAndContext(publicKey, commitmentOrConfig);
      return res.value;
    } catch (e) {
      throw new Error('failed to get info about account ' + publicKey.toBase58() + ': ' + e);
    }
  }

  /**
   * Fetch all the account info for multiple accounts specified by an array of public keys, return with context
   */
  async getMultipleParsedAccounts(publicKeys, rawConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(rawConfig);
    const keys = publicKeys.map(key => key.toBase58());
    const args = this._buildArgs([keys], commitment, 'jsonParsed', config);
    const unsafeRes = await this._rpcRequest('getMultipleAccounts', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, jsonRpcResultAndContext((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)(ParsedAccountInfoResult))));
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get info for accounts ${keys}`);
    }
    return res.result;
  }

  /**
   * Fetch all the account info for multiple accounts specified by an array of public keys, return with context
   */
  async getMultipleAccountsInfoAndContext(publicKeys, commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const keys = publicKeys.map(key => key.toBase58());
    const args = this._buildArgs([keys], commitment, 'base64', config);
    const unsafeRes = await this._rpcRequest('getMultipleAccounts', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, jsonRpcResultAndContext((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)(AccountInfoResult))));
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get info for accounts ${keys}`);
    }
    return res.result;
  }

  /**
   * Fetch all the account info for multiple accounts specified by an array of public keys
   */
  async getMultipleAccountsInfo(publicKeys, commitmentOrConfig) {
    const res = await this.getMultipleAccountsInfoAndContext(publicKeys, commitmentOrConfig);
    return res.value;
  }

  /**
   * Returns epoch activation information for a stake account that has been delegated
   */
  async getStakeActivation(publicKey, commitmentOrConfig, epoch) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const args = this._buildArgs([publicKey.toBase58()], commitment, undefined /* encoding */, {
      ...config,
      epoch: epoch != null ? epoch : config?.epoch
    });
    const unsafeRes = await this._rpcRequest('getStakeActivation', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, jsonRpcResult(StakeActivationResult));
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get Stake Activation ${publicKey.toBase58()}`);
    }
    return res.result;
  }

  /**
   * Fetch all the accounts owned by the specified program id
   *
   * @return {Promise<Array<{pubkey: PublicKey, account: AccountInfo<Buffer>}>>}
   */
  async getProgramAccounts(programId, configOrCommitment) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(configOrCommitment);
    const {
      encoding,
      ...configWithoutEncoding
    } = config || {};
    const args = this._buildArgs([programId.toBase58()], commitment, encoding || 'base64', configWithoutEncoding);
    const unsafeRes = await this._rpcRequest('getProgramAccounts', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)(KeyedAccountInfoResult)));
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get accounts owned by program ${programId.toBase58()}`);
    }
    return res.result;
  }

  /**
   * Fetch and parse all the accounts owned by the specified program id
   *
   * @return {Promise<Array<{pubkey: PublicKey, account: AccountInfo<Buffer | ParsedAccountData>}>>}
   */
  async getParsedProgramAccounts(programId, configOrCommitment) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(configOrCommitment);
    const args = this._buildArgs([programId.toBase58()], commitment, 'jsonParsed', config);
    const unsafeRes = await this._rpcRequest('getProgramAccounts', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)(KeyedParsedAccountInfoResult)));
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get accounts owned by program ${programId.toBase58()}`);
    }
    return res.result;
  }
  // eslint-disable-next-line no-dupe-class-members
  async confirmTransaction(strategy, commitment) {
    let rawSignature;
    if (typeof strategy == 'string') {
      rawSignature = strategy;
    } else {
      const config = strategy;
      if (config.abortSignal?.aborted) {
        return Promise.reject(config.abortSignal.reason);
      }
      rawSignature = config.signature;
    }
    let decodedSignature;
    try {
      decodedSignature = bs58__WEBPACK_IMPORTED_MODULE_4___default().decode(rawSignature);
    } catch (err) {
      throw new Error('signature must be base58 encoded: ' + rawSignature);
    }
    assert(decodedSignature.length === 64, 'signature has invalid length');
    if (typeof strategy === 'string') {
      return await this.confirmTransactionUsingLegacyTimeoutStrategy({
        commitment: commitment || this.commitment,
        signature: rawSignature
      });
    } else if ('lastValidBlockHeight' in strategy) {
      return await this.confirmTransactionUsingBlockHeightExceedanceStrategy({
        commitment: commitment || this.commitment,
        strategy
      });
    } else {
      return await this.confirmTransactionUsingDurableNonceStrategy({
        commitment: commitment || this.commitment,
        strategy
      });
    }
  }
  getCancellationPromise(signal) {
    return new Promise((_, reject) => {
      if (signal == null) {
        return;
      }
      if (signal.aborted) {
        reject(signal.reason);
      } else {
        signal.addEventListener('abort', () => {
          reject(signal.reason);
        });
      }
    });
  }
  getTransactionConfirmationPromise({
    commitment,
    signature
  }) {
    let signatureSubscriptionId;
    let disposeSignatureSubscriptionStateChangeObserver;
    let done = false;
    const confirmationPromise = new Promise((resolve, reject) => {
      try {
        signatureSubscriptionId = this.onSignature(signature, (result, context) => {
          signatureSubscriptionId = undefined;
          const response = {
            context,
            value: result
          };
          resolve({
            __type: TransactionStatus.PROCESSED,
            response
          });
        }, commitment);
        const subscriptionSetupPromise = new Promise(resolveSubscriptionSetup => {
          if (signatureSubscriptionId == null) {
            resolveSubscriptionSetup();
          } else {
            disposeSignatureSubscriptionStateChangeObserver = this._onSubscriptionStateChange(signatureSubscriptionId, nextState => {
              if (nextState === 'subscribed') {
                resolveSubscriptionSetup();
              }
            });
          }
        });
        (async () => {
          await subscriptionSetupPromise;
          if (done) return;
          const response = await this.getSignatureStatus(signature);
          if (done) return;
          if (response == null) {
            return;
          }
          const {
            context,
            value
          } = response;
          if (value == null) {
            return;
          }
          if (value?.err) {
            reject(value.err);
          } else {
            switch (commitment) {
              case 'confirmed':
              case 'single':
              case 'singleGossip':
                {
                  if (value.confirmationStatus === 'processed') {
                    return;
                  }
                  break;
                }
              case 'finalized':
              case 'max':
              case 'root':
                {
                  if (value.confirmationStatus === 'processed' || value.confirmationStatus === 'confirmed') {
                    return;
                  }
                  break;
                }
              // exhaust enums to ensure full coverage
              case 'processed':
              case 'recent':
            }
            done = true;
            resolve({
              __type: TransactionStatus.PROCESSED,
              response: {
                context,
                value
              }
            });
          }
        })();
      } catch (err) {
        reject(err);
      }
    });
    const abortConfirmation = () => {
      if (disposeSignatureSubscriptionStateChangeObserver) {
        disposeSignatureSubscriptionStateChangeObserver();
        disposeSignatureSubscriptionStateChangeObserver = undefined;
      }
      if (signatureSubscriptionId != null) {
        this.removeSignatureListener(signatureSubscriptionId);
        signatureSubscriptionId = undefined;
      }
    };
    return {
      abortConfirmation,
      confirmationPromise
    };
  }
  async confirmTransactionUsingBlockHeightExceedanceStrategy({
    commitment,
    strategy: {
      abortSignal,
      lastValidBlockHeight,
      signature
    }
  }) {
    let done = false;
    const expiryPromise = new Promise(resolve => {
      const checkBlockHeight = async () => {
        try {
          const blockHeight = await this.getBlockHeight(commitment);
          return blockHeight;
        } catch (_e) {
          return -1;
        }
      };
      (async () => {
        let currentBlockHeight = await checkBlockHeight();
        if (done) return;
        while (currentBlockHeight <= lastValidBlockHeight) {
          await sleep(1000);
          if (done) return;
          currentBlockHeight = await checkBlockHeight();
          if (done) return;
        }
        resolve({
          __type: TransactionStatus.BLOCKHEIGHT_EXCEEDED
        });
      })();
    });
    const {
      abortConfirmation,
      confirmationPromise
    } = this.getTransactionConfirmationPromise({
      commitment,
      signature
    });
    const cancellationPromise = this.getCancellationPromise(abortSignal);
    let result;
    try {
      const outcome = await Promise.race([cancellationPromise, confirmationPromise, expiryPromise]);
      if (outcome.__type === TransactionStatus.PROCESSED) {
        result = outcome.response;
      } else {
        throw new TransactionExpiredBlockheightExceededError(signature);
      }
    } finally {
      done = true;
      abortConfirmation();
    }
    return result;
  }
  async confirmTransactionUsingDurableNonceStrategy({
    commitment,
    strategy: {
      abortSignal,
      minContextSlot,
      nonceAccountPubkey,
      nonceValue,
      signature
    }
  }) {
    let done = false;
    const expiryPromise = new Promise(resolve => {
      let currentNonceValue = nonceValue;
      let lastCheckedSlot = null;
      const getCurrentNonceValue = async () => {
        try {
          const {
            context,
            value: nonceAccount
          } = await this.getNonceAndContext(nonceAccountPubkey, {
            commitment,
            minContextSlot
          });
          lastCheckedSlot = context.slot;
          return nonceAccount?.nonce;
        } catch (e) {
          // If for whatever reason we can't reach/read the nonce
          // account, just keep using the last-known value.
          return currentNonceValue;
        }
      };
      (async () => {
        currentNonceValue = await getCurrentNonceValue();
        if (done) return;
        while (true // eslint-disable-line no-constant-condition
        ) {
          if (nonceValue !== currentNonceValue) {
            resolve({
              __type: TransactionStatus.NONCE_INVALID,
              slotInWhichNonceDidAdvance: lastCheckedSlot
            });
            return;
          }
          await sleep(2000);
          if (done) return;
          currentNonceValue = await getCurrentNonceValue();
          if (done) return;
        }
      })();
    });
    const {
      abortConfirmation,
      confirmationPromise
    } = this.getTransactionConfirmationPromise({
      commitment,
      signature
    });
    const cancellationPromise = this.getCancellationPromise(abortSignal);
    let result;
    try {
      const outcome = await Promise.race([cancellationPromise, confirmationPromise, expiryPromise]);
      if (outcome.__type === TransactionStatus.PROCESSED) {
        result = outcome.response;
      } else {
        // Double check that the transaction is indeed unconfirmed.
        let signatureStatus;
        while (true // eslint-disable-line no-constant-condition
        ) {
          const status = await this.getSignatureStatus(signature);
          if (status == null) {
            break;
          }
          if (status.context.slot < (outcome.slotInWhichNonceDidAdvance ?? minContextSlot)) {
            await sleep(400);
            continue;
          }
          signatureStatus = status;
          break;
        }
        if (signatureStatus?.value) {
          const commitmentForStatus = commitment || 'finalized';
          const {
            confirmationStatus
          } = signatureStatus.value;
          switch (commitmentForStatus) {
            case 'processed':
            case 'recent':
              if (confirmationStatus !== 'processed' && confirmationStatus !== 'confirmed' && confirmationStatus !== 'finalized') {
                throw new TransactionExpiredNonceInvalidError(signature);
              }
              break;
            case 'confirmed':
            case 'single':
            case 'singleGossip':
              if (confirmationStatus !== 'confirmed' && confirmationStatus !== 'finalized') {
                throw new TransactionExpiredNonceInvalidError(signature);
              }
              break;
            case 'finalized':
            case 'max':
            case 'root':
              if (confirmationStatus !== 'finalized') {
                throw new TransactionExpiredNonceInvalidError(signature);
              }
              break;
            default:
              // Exhaustive switch.
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              (_ => {})(commitmentForStatus);
          }
          result = {
            context: signatureStatus.context,
            value: {
              err: signatureStatus.value.err
            }
          };
        } else {
          throw new TransactionExpiredNonceInvalidError(signature);
        }
      }
    } finally {
      done = true;
      abortConfirmation();
    }
    return result;
  }
  async confirmTransactionUsingLegacyTimeoutStrategy({
    commitment,
    signature
  }) {
    let timeoutId;
    const expiryPromise = new Promise(resolve => {
      let timeoutMs = this._confirmTransactionInitialTimeout || 60 * 1000;
      switch (commitment) {
        case 'processed':
        case 'recent':
        case 'single':
        case 'confirmed':
        case 'singleGossip':
          {
            timeoutMs = this._confirmTransactionInitialTimeout || 30 * 1000;
            break;
          }
      }
      timeoutId = setTimeout(() => resolve({
        __type: TransactionStatus.TIMED_OUT,
        timeoutMs
      }), timeoutMs);
    });
    const {
      abortConfirmation,
      confirmationPromise
    } = this.getTransactionConfirmationPromise({
      commitment,
      signature
    });
    let result;
    try {
      const outcome = await Promise.race([confirmationPromise, expiryPromise]);
      if (outcome.__type === TransactionStatus.PROCESSED) {
        result = outcome.response;
      } else {
        throw new TransactionExpiredTimeoutError(signature, outcome.timeoutMs / 1000);
      }
    } finally {
      clearTimeout(timeoutId);
      abortConfirmation();
    }
    return result;
  }

  /**
   * Return the list of nodes that are currently participating in the cluster
   */
  async getClusterNodes() {
    const unsafeRes = await this._rpcRequest('getClusterNodes', []);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)(ContactInfoResult)));
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get cluster nodes');
    }
    return res.result;
  }

  /**
   * Return the list of nodes that are currently participating in the cluster
   */
  async getVoteAccounts(commitment) {
    const args = this._buildArgs([], commitment);
    const unsafeRes = await this._rpcRequest('getVoteAccounts', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetVoteAccounts);
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get vote accounts');
    }
    return res.result;
  }

  /**
   * Fetch the current slot that the node is processing
   */
  async getSlot(commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const args = this._buildArgs([], commitment, undefined /* encoding */, config);
    const unsafeRes = await this._rpcRequest('getSlot', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()));
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get slot');
    }
    return res.result;
  }

  /**
   * Fetch the current slot leader of the cluster
   */
  async getSlotLeader(commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const args = this._buildArgs([], commitment, undefined /* encoding */, config);
    const unsafeRes = await this._rpcRequest('getSlotLeader', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)()));
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get slot leader');
    }
    return res.result;
  }

  /**
   * Fetch `limit` number of slot leaders starting from `startSlot`
   *
   * @param startSlot fetch slot leaders starting from this slot
   * @param limit number of slot leaders to return
   */
  async getSlotLeaders(startSlot, limit) {
    const args = [startSlot, limit];
    const unsafeRes = await this._rpcRequest('getSlotLeaders', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)(PublicKeyFromString)));
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get slot leaders');
    }
    return res.result;
  }

  /**
   * Fetch the current status of a signature
   */
  async getSignatureStatus(signature, config) {
    const {
      context,
      value: values
    } = await this.getSignatureStatuses([signature], config);
    assert(values.length === 1);
    const value = values[0];
    return {
      context,
      value
    };
  }

  /**
   * Fetch the current statuses of a batch of signatures
   */
  async getSignatureStatuses(signatures, config) {
    const params = [signatures];
    if (config) {
      params.push(config);
    }
    const unsafeRes = await this._rpcRequest('getSignatureStatuses', params);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetSignatureStatusesRpcResult);
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get signature status');
    }
    return res.result;
  }

  /**
   * Fetch the current transaction count of the cluster
   */
  async getTransactionCount(commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const args = this._buildArgs([], commitment, undefined /* encoding */, config);
    const unsafeRes = await this._rpcRequest('getTransactionCount', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()));
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get transaction count');
    }
    return res.result;
  }

  /**
   * Fetch the current total currency supply of the cluster in lamports
   *
   * @deprecated Deprecated since v1.2.8. Please use {@link getSupply} instead.
   */
  async getTotalSupply(commitment) {
    const result = await this.getSupply({
      commitment,
      excludeNonCirculatingAccountsList: true
    });
    return result.value.total;
  }

  /**
   * Fetch the cluster InflationGovernor parameters
   */
  async getInflationGovernor(commitment) {
    const args = this._buildArgs([], commitment);
    const unsafeRes = await this._rpcRequest('getInflationGovernor', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetInflationGovernorRpcResult);
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get inflation');
    }
    return res.result;
  }

  /**
   * Fetch the inflation reward for a list of addresses for an epoch
   */
  async getInflationReward(addresses, epoch, commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const args = this._buildArgs([addresses.map(pubkey => pubkey.toBase58())], commitment, undefined /* encoding */, {
      ...config,
      epoch: epoch != null ? epoch : config?.epoch
    });
    const unsafeRes = await this._rpcRequest('getInflationReward', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetInflationRewardResult);
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get inflation reward');
    }
    return res.result;
  }

  /**
   * Fetch the specific inflation values for the current epoch
   */
  async getInflationRate() {
    const unsafeRes = await this._rpcRequest('getInflationRate', []);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetInflationRateRpcResult);
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get inflation rate');
    }
    return res.result;
  }

  /**
   * Fetch the Epoch Info parameters
   */
  async getEpochInfo(commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const args = this._buildArgs([], commitment, undefined /* encoding */, config);
    const unsafeRes = await this._rpcRequest('getEpochInfo', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetEpochInfoRpcResult);
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get epoch info');
    }
    return res.result;
  }

  /**
   * Fetch the Epoch Schedule parameters
   */
  async getEpochSchedule() {
    const unsafeRes = await this._rpcRequest('getEpochSchedule', []);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetEpochScheduleRpcResult);
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get epoch schedule');
    }
    const epochSchedule = res.result;
    return new EpochSchedule(epochSchedule.slotsPerEpoch, epochSchedule.leaderScheduleSlotOffset, epochSchedule.warmup, epochSchedule.firstNormalEpoch, epochSchedule.firstNormalSlot);
  }

  /**
   * Fetch the leader schedule for the current epoch
   * @return {Promise<RpcResponseAndContext<LeaderSchedule>>}
   */
  async getLeaderSchedule() {
    const unsafeRes = await this._rpcRequest('getLeaderSchedule', []);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetLeaderScheduleRpcResult);
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get leader schedule');
    }
    return res.result;
  }

  /**
   * Fetch the minimum balance needed to exempt an account of `dataLength`
   * size from rent
   */
  async getMinimumBalanceForRentExemption(dataLength, commitment) {
    const args = this._buildArgs([dataLength], commitment);
    const unsafeRes = await this._rpcRequest('getMinimumBalanceForRentExemption', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetMinimumBalanceForRentExemptionRpcResult);
    if ('error' in res) {
      console.warn('Unable to fetch minimum balance for rent exemption');
      return 0;
    }
    return res.result;
  }

  /**
   * Fetch a recent blockhash from the cluster, return with context
   * @return {Promise<RpcResponseAndContext<{blockhash: Blockhash, feeCalculator: FeeCalculator}>>}
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getLatestBlockhash} instead.
   */
  async getRecentBlockhashAndContext(commitment) {
    const args = this._buildArgs([], commitment);
    const unsafeRes = await this._rpcRequest('getRecentBlockhash', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetRecentBlockhashAndContextRpcResult);
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get recent blockhash');
    }
    return res.result;
  }

  /**
   * Fetch recent performance samples
   * @return {Promise<Array<PerfSample>>}
   */
  async getRecentPerformanceSamples(limit) {
    const unsafeRes = await this._rpcRequest('getRecentPerformanceSamples', limit ? [limit] : []);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetRecentPerformanceSamplesRpcResult);
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get recent performance samples');
    }
    return res.result;
  }

  /**
   * Fetch the fee calculator for a recent blockhash from the cluster, return with context
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getFeeForMessage} instead.
   */
  async getFeeCalculatorForBlockhash(blockhash, commitment) {
    const args = this._buildArgs([blockhash], commitment);
    const unsafeRes = await this._rpcRequest('getFeeCalculatorForBlockhash', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetFeeCalculatorRpcResult);
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get fee calculator');
    }
    const {
      context,
      value
    } = res.result;
    return {
      context,
      value: value !== null ? value.feeCalculator : null
    };
  }

  /**
   * Fetch the fee for a message from the cluster, return with context
   */
  async getFeeForMessage(message, commitment) {
    const wireMessage = toBuffer(message.serialize()).toString('base64');
    const args = this._buildArgs([wireMessage], commitment);
    const unsafeRes = await this._rpcRequest('getFeeForMessage', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, jsonRpcResultAndContext((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.nullable)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)())));
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get fee for message');
    }
    if (res.result === null) {
      throw new Error('invalid blockhash');
    }
    return res.result;
  }

  /**
   * Fetch a list of prioritization fees from recent blocks.
   */
  async getRecentPrioritizationFees(config) {
    const accounts = config?.lockedWritableAccounts?.map(key => key.toBase58());
    const args = this._buildArgs(accounts?.length ? [accounts] : []);
    const unsafeRes = await this._rpcRequest('getRecentPrioritizationFees', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetRecentPrioritizationFeesRpcResult);
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get recent prioritization fees');
    }
    return res.result;
  }
  /**
   * Fetch a recent blockhash from the cluster
   * @return {Promise<{blockhash: Blockhash, feeCalculator: FeeCalculator}>}
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getLatestBlockhash} instead.
   */
  async getRecentBlockhash(commitment) {
    try {
      const res = await this.getRecentBlockhashAndContext(commitment);
      return res.value;
    } catch (e) {
      throw new Error('failed to get recent blockhash: ' + e);
    }
  }

  /**
   * Fetch the latest blockhash from the cluster
   * @return {Promise<BlockhashWithExpiryBlockHeight>}
   */
  async getLatestBlockhash(commitmentOrConfig) {
    try {
      const res = await this.getLatestBlockhashAndContext(commitmentOrConfig);
      return res.value;
    } catch (e) {
      throw new Error('failed to get recent blockhash: ' + e);
    }
  }

  /**
   * Fetch the latest blockhash from the cluster
   * @return {Promise<BlockhashWithExpiryBlockHeight>}
   */
  async getLatestBlockhashAndContext(commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const args = this._buildArgs([], commitment, undefined /* encoding */, config);
    const unsafeRes = await this._rpcRequest('getLatestBlockhash', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetLatestBlockhashRpcResult);
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get latest blockhash');
    }
    return res.result;
  }

  /**
   * Fetch the node version
   */
  async getVersion() {
    const unsafeRes = await this._rpcRequest('getVersion', []);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, jsonRpcResult(VersionResult));
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get version');
    }
    return res.result;
  }

  /**
   * Fetch the genesis hash
   */
  async getGenesisHash() {
    const unsafeRes = await this._rpcRequest('getGenesisHash', []);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)()));
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get genesis hash');
    }
    return res.result;
  }

  /**
   * Fetch a processed block from the cluster.
   *
   * @deprecated Instead, call `getBlock` using a `GetVersionedBlockConfig` by
   * setting the `maxSupportedTransactionVersion` property.
   */

  /**
   * Fetch a processed block from the cluster.
   */
  // eslint-disable-next-line no-dupe-class-members
  async getBlock(slot, rawConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(rawConfig);
    const args = this._buildArgsAtLeastConfirmed([slot], commitment, undefined /* encoding */, config);
    const unsafeRes = await this._rpcRequest('getBlock', args);
    try {
      switch (config?.transactionDetails) {
        case 'accounts':
          {
            const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetAccountsModeBlockRpcResult);
            if ('error' in res) {
              throw res.error;
            }
            return res.result;
          }
        case 'none':
          {
            const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetNoneModeBlockRpcResult);
            if ('error' in res) {
              throw res.error;
            }
            return res.result;
          }
        default:
          {
            const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetBlockRpcResult);
            if ('error' in res) {
              throw res.error;
            }
            const {
              result
            } = res;
            return result ? {
              ...result,
              transactions: result.transactions.map(({
                transaction,
                meta,
                version
              }) => ({
                meta,
                transaction: {
                  ...transaction,
                  message: versionedMessageFromResponse(version, transaction.message)
                },
                version
              }))
            } : null;
          }
      }
    } catch (e) {
      throw new SolanaJSONRPCError(e, 'failed to get confirmed block');
    }
  }

  /**
   * Fetch parsed transaction details for a confirmed or finalized block
   */

  // eslint-disable-next-line no-dupe-class-members
  async getParsedBlock(slot, rawConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(rawConfig);
    const args = this._buildArgsAtLeastConfirmed([slot], commitment, 'jsonParsed', config);
    const unsafeRes = await this._rpcRequest('getBlock', args);
    try {
      switch (config?.transactionDetails) {
        case 'accounts':
          {
            const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetParsedAccountsModeBlockRpcResult);
            if ('error' in res) {
              throw res.error;
            }
            return res.result;
          }
        case 'none':
          {
            const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetParsedNoneModeBlockRpcResult);
            if ('error' in res) {
              throw res.error;
            }
            return res.result;
          }
        default:
          {
            const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetParsedBlockRpcResult);
            if ('error' in res) {
              throw res.error;
            }
            return res.result;
          }
      }
    } catch (e) {
      throw new SolanaJSONRPCError(e, 'failed to get block');
    }
  }

  /*
   * Returns the current block height of the node
   */

  /*
   * Returns recent block production information from the current or previous epoch
   */
  async getBlockProduction(configOrCommitment) {
    let extra;
    let commitment;
    if (typeof configOrCommitment === 'string') {
      commitment = configOrCommitment;
    } else if (configOrCommitment) {
      const {
        commitment: c,
        ...rest
      } = configOrCommitment;
      commitment = c;
      extra = rest;
    }
    const args = this._buildArgs([], commitment, 'base64', extra);
    const unsafeRes = await this._rpcRequest('getBlockProduction', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, BlockProductionResponseStruct);
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get block production information');
    }
    return res.result;
  }

  /**
   * Fetch a confirmed or finalized transaction from the cluster.
   *
   * @deprecated Instead, call `getTransaction` using a
   * `GetVersionedTransactionConfig` by setting the
   * `maxSupportedTransactionVersion` property.
   */

  /**
   * Fetch a confirmed or finalized transaction from the cluster.
   */
  // eslint-disable-next-line no-dupe-class-members
  async getTransaction(signature, rawConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(rawConfig);
    const args = this._buildArgsAtLeastConfirmed([signature], commitment, undefined /* encoding */, config);
    const unsafeRes = await this._rpcRequest('getTransaction', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetTransactionRpcResult);
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get transaction');
    }
    const result = res.result;
    if (!result) return result;
    return {
      ...result,
      transaction: {
        ...result.transaction,
        message: versionedMessageFromResponse(result.version, result.transaction.message)
      }
    };
  }

  /**
   * Fetch parsed transaction details for a confirmed or finalized transaction
   */
  async getParsedTransaction(signature, commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const args = this._buildArgsAtLeastConfirmed([signature], commitment, 'jsonParsed', config);
    const unsafeRes = await this._rpcRequest('getTransaction', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetParsedTransactionRpcResult);
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get transaction');
    }
    return res.result;
  }

  /**
   * Fetch parsed transaction details for a batch of confirmed transactions
   */
  async getParsedTransactions(signatures, commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const batch = signatures.map(signature => {
      const args = this._buildArgsAtLeastConfirmed([signature], commitment, 'jsonParsed', config);
      return {
        methodName: 'getTransaction',
        args
      };
    });
    const unsafeRes = await this._rpcBatchRequest(batch);
    const res = unsafeRes.map(unsafeRes => {
      const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetParsedTransactionRpcResult);
      if ('error' in res) {
        throw new SolanaJSONRPCError(res.error, 'failed to get transactions');
      }
      return res.result;
    });
    return res;
  }

  /**
   * Fetch transaction details for a batch of confirmed transactions.
   * Similar to {@link getParsedTransactions} but returns a {@link TransactionResponse}.
   *
   * @deprecated Instead, call `getTransactions` using a
   * `GetVersionedTransactionConfig` by setting the
   * `maxSupportedTransactionVersion` property.
   */

  /**
   * Fetch transaction details for a batch of confirmed transactions.
   * Similar to {@link getParsedTransactions} but returns a {@link
   * VersionedTransactionResponse}.
   */
  // eslint-disable-next-line no-dupe-class-members
  async getTransactions(signatures, commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const batch = signatures.map(signature => {
      const args = this._buildArgsAtLeastConfirmed([signature], commitment, undefined /* encoding */, config);
      return {
        methodName: 'getTransaction',
        args
      };
    });
    const unsafeRes = await this._rpcBatchRequest(batch);
    const res = unsafeRes.map(unsafeRes => {
      const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetTransactionRpcResult);
      if ('error' in res) {
        throw new SolanaJSONRPCError(res.error, 'failed to get transactions');
      }
      const result = res.result;
      if (!result) return result;
      return {
        ...result,
        transaction: {
          ...result.transaction,
          message: versionedMessageFromResponse(result.version, result.transaction.message)
        }
      };
    });
    return res;
  }

  /**
   * Fetch a list of Transactions and transaction statuses from the cluster
   * for a confirmed block.
   *
   * @deprecated Deprecated since v1.13.0. Please use {@link getBlock} instead.
   */
  async getConfirmedBlock(slot, commitment) {
    const args = this._buildArgsAtLeastConfirmed([slot], commitment);
    const unsafeRes = await this._rpcRequest('getConfirmedBlock', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetConfirmedBlockRpcResult);
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get confirmed block');
    }
    const result = res.result;
    if (!result) {
      throw new Error('Confirmed block ' + slot + ' not found');
    }
    const block = {
      ...result,
      transactions: result.transactions.map(({
        transaction,
        meta
      }) => {
        const message = new Message(transaction.message);
        return {
          meta,
          transaction: {
            ...transaction,
            message
          }
        };
      })
    };
    return {
      ...block,
      transactions: block.transactions.map(({
        transaction,
        meta
      }) => {
        return {
          meta,
          transaction: Transaction.populate(transaction.message, transaction.signatures)
        };
      })
    };
  }

  /**
   * Fetch confirmed blocks between two slots
   */
  async getBlocks(startSlot, endSlot, commitment) {
    const args = this._buildArgsAtLeastConfirmed(endSlot !== undefined ? [startSlot, endSlot] : [startSlot], commitment);
    const unsafeRes = await this._rpcRequest('getBlocks', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, jsonRpcResult((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.array)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)())));
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get blocks');
    }
    return res.result;
  }

  /**
   * Fetch a list of Signatures from the cluster for a block, excluding rewards
   */
  async getBlockSignatures(slot, commitment) {
    const args = this._buildArgsAtLeastConfirmed([slot], commitment, undefined, {
      transactionDetails: 'signatures',
      rewards: false
    });
    const unsafeRes = await this._rpcRequest('getBlock', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetBlockSignaturesRpcResult);
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get block');
    }
    const result = res.result;
    if (!result) {
      throw new Error('Block ' + slot + ' not found');
    }
    return result;
  }

  /**
   * Fetch a list of Signatures from the cluster for a confirmed block, excluding rewards
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getBlockSignatures} instead.
   */
  async getConfirmedBlockSignatures(slot, commitment) {
    const args = this._buildArgsAtLeastConfirmed([slot], commitment, undefined, {
      transactionDetails: 'signatures',
      rewards: false
    });
    const unsafeRes = await this._rpcRequest('getConfirmedBlock', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetBlockSignaturesRpcResult);
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get confirmed block');
    }
    const result = res.result;
    if (!result) {
      throw new Error('Confirmed block ' + slot + ' not found');
    }
    return result;
  }

  /**
   * Fetch a transaction details for a confirmed transaction
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getTransaction} instead.
   */
  async getConfirmedTransaction(signature, commitment) {
    const args = this._buildArgsAtLeastConfirmed([signature], commitment);
    const unsafeRes = await this._rpcRequest('getConfirmedTransaction', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetTransactionRpcResult);
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get transaction');
    }
    const result = res.result;
    if (!result) return result;
    const message = new Message(result.transaction.message);
    const signatures = result.transaction.signatures;
    return {
      ...result,
      transaction: Transaction.populate(message, signatures)
    };
  }

  /**
   * Fetch parsed transaction details for a confirmed transaction
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getParsedTransaction} instead.
   */
  async getParsedConfirmedTransaction(signature, commitment) {
    const args = this._buildArgsAtLeastConfirmed([signature], commitment, 'jsonParsed');
    const unsafeRes = await this._rpcRequest('getConfirmedTransaction', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetParsedTransactionRpcResult);
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get confirmed transaction');
    }
    return res.result;
  }

  /**
   * Fetch parsed transaction details for a batch of confirmed transactions
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getParsedTransactions} instead.
   */
  async getParsedConfirmedTransactions(signatures, commitment) {
    const batch = signatures.map(signature => {
      const args = this._buildArgsAtLeastConfirmed([signature], commitment, 'jsonParsed');
      return {
        methodName: 'getConfirmedTransaction',
        args
      };
    });
    const unsafeRes = await this._rpcBatchRequest(batch);
    const res = unsafeRes.map(unsafeRes => {
      const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetParsedTransactionRpcResult);
      if ('error' in res) {
        throw new SolanaJSONRPCError(res.error, 'failed to get confirmed transactions');
      }
      return res.result;
    });
    return res;
  }

  /**
   * Fetch a list of all the confirmed signatures for transactions involving an address
   * within a specified slot range. Max range allowed is 10,000 slots.
   *
   * @deprecated Deprecated since v1.3. Please use {@link getConfirmedSignaturesForAddress2} instead.
   *
   * @param address queried address
   * @param startSlot start slot, inclusive
   * @param endSlot end slot, inclusive
   */
  async getConfirmedSignaturesForAddress(address, startSlot, endSlot) {
    let options = {};
    let firstAvailableBlock = await this.getFirstAvailableBlock();
    while (!('until' in options)) {
      startSlot--;
      if (startSlot <= 0 || startSlot < firstAvailableBlock) {
        break;
      }
      try {
        const block = await this.getConfirmedBlockSignatures(startSlot, 'finalized');
        if (block.signatures.length > 0) {
          options.until = block.signatures[block.signatures.length - 1].toString();
        }
      } catch (err) {
        if (err instanceof Error && err.message.includes('skipped')) {
          continue;
        } else {
          throw err;
        }
      }
    }
    let highestConfirmedRoot = await this.getSlot('finalized');
    while (!('before' in options)) {
      endSlot++;
      if (endSlot > highestConfirmedRoot) {
        break;
      }
      try {
        const block = await this.getConfirmedBlockSignatures(endSlot);
        if (block.signatures.length > 0) {
          options.before = block.signatures[block.signatures.length - 1].toString();
        }
      } catch (err) {
        if (err instanceof Error && err.message.includes('skipped')) {
          continue;
        } else {
          throw err;
        }
      }
    }
    const confirmedSignatureInfo = await this.getConfirmedSignaturesForAddress2(address, options);
    return confirmedSignatureInfo.map(info => info.signature);
  }

  /**
   * Returns confirmed signatures for transactions involving an
   * address backwards in time from the provided signature or most recent confirmed block
   *
   *
   * @param address queried address
   * @param options
   */
  async getConfirmedSignaturesForAddress2(address, options, commitment) {
    const args = this._buildArgsAtLeastConfirmed([address.toBase58()], commitment, undefined, options);
    const unsafeRes = await this._rpcRequest('getConfirmedSignaturesForAddress2', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetConfirmedSignaturesForAddress2RpcResult);
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get confirmed signatures for address');
    }
    return res.result;
  }

  /**
   * Returns confirmed signatures for transactions involving an
   * address backwards in time from the provided signature or most recent confirmed block
   *
   *
   * @param address queried address
   * @param options
   */
  async getSignaturesForAddress(address, options, commitment) {
    const args = this._buildArgsAtLeastConfirmed([address.toBase58()], commitment, undefined, options);
    const unsafeRes = await this._rpcRequest('getSignaturesForAddress', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, GetSignaturesForAddressRpcResult);
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get signatures for address');
    }
    return res.result;
  }
  async getAddressLookupTable(accountKey, config) {
    const {
      context,
      value: accountInfo
    } = await this.getAccountInfoAndContext(accountKey, config);
    let value = null;
    if (accountInfo !== null) {
      value = new AddressLookupTableAccount({
        key: accountKey,
        state: AddressLookupTableAccount.deserialize(accountInfo.data)
      });
    }
    return {
      context,
      value
    };
  }

  /**
   * Fetch the contents of a Nonce account from the cluster, return with context
   */
  async getNonceAndContext(nonceAccount, commitmentOrConfig) {
    const {
      context,
      value: accountInfo
    } = await this.getAccountInfoAndContext(nonceAccount, commitmentOrConfig);
    let value = null;
    if (accountInfo !== null) {
      value = NonceAccount.fromAccountData(accountInfo.data);
    }
    return {
      context,
      value
    };
  }

  /**
   * Fetch the contents of a Nonce account from the cluster
   */
  async getNonce(nonceAccount, commitmentOrConfig) {
    return await this.getNonceAndContext(nonceAccount, commitmentOrConfig).then(x => x.value).catch(e => {
      throw new Error('failed to get nonce for account ' + nonceAccount.toBase58() + ': ' + e);
    });
  }

  /**
   * Request an allocation of lamports to the specified address
   *
   * ```typescript
   * import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
   *
   * (async () => {
   *   const connection = new Connection("https://api.testnet.solana.com", "confirmed");
   *   const myAddress = new PublicKey("2nr1bHFT86W9tGnyvmYW4vcHKsQB3sVQfnddasz4kExM");
   *   const signature = await connection.requestAirdrop(myAddress, LAMPORTS_PER_SOL);
   *   await connection.confirmTransaction(signature);
   * })();
   * ```
   */
  async requestAirdrop(to, lamports) {
    const unsafeRes = await this._rpcRequest('requestAirdrop', [to.toBase58(), lamports]);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, RequestAirdropRpcResult);
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, `airdrop to ${to.toBase58()} failed`);
    }
    return res.result;
  }

  /**
   * @internal
   */
  async _blockhashWithExpiryBlockHeight(disableCache) {
    if (!disableCache) {
      // Wait for polling to finish
      while (this._pollingBlockhash) {
        await sleep(100);
      }
      const timeSinceFetch = Date.now() - this._blockhashInfo.lastFetch;
      const expired = timeSinceFetch >= BLOCKHASH_CACHE_TIMEOUT_MS;
      if (this._blockhashInfo.latestBlockhash !== null && !expired) {
        return this._blockhashInfo.latestBlockhash;
      }
    }
    return await this._pollNewBlockhash();
  }

  /**
   * @internal
   */
  async _pollNewBlockhash() {
    this._pollingBlockhash = true;
    try {
      const startTime = Date.now();
      const cachedLatestBlockhash = this._blockhashInfo.latestBlockhash;
      const cachedBlockhash = cachedLatestBlockhash ? cachedLatestBlockhash.blockhash : null;
      for (let i = 0; i < 50; i++) {
        const latestBlockhash = await this.getLatestBlockhash('finalized');
        if (cachedBlockhash !== latestBlockhash.blockhash) {
          this._blockhashInfo = {
            latestBlockhash,
            lastFetch: Date.now(),
            transactionSignatures: [],
            simulatedSignatures: []
          };
          return latestBlockhash;
        }

        // Sleep for approximately half a slot
        await sleep(MS_PER_SLOT / 2);
      }
      throw new Error(`Unable to obtain a new blockhash after ${Date.now() - startTime}ms`);
    } finally {
      this._pollingBlockhash = false;
    }
  }

  /**
   * get the stake minimum delegation
   */
  async getStakeMinimumDelegation(config) {
    const {
      commitment,
      config: configArg
    } = extractCommitmentFromConfig(config);
    const args = this._buildArgs([], commitment, 'base64', configArg);
    const unsafeRes = await this._rpcRequest('getStakeMinimumDelegation', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, jsonRpcResultAndContext((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.number)()));
    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get stake minimum delegation`);
    }
    return res.result;
  }

  /**
   * Simulate a transaction
   *
   * @deprecated Instead, call {@link simulateTransaction} with {@link
   * VersionedTransaction} and {@link SimulateTransactionConfig} parameters
   */

  /**
   * Simulate a transaction
   */
  // eslint-disable-next-line no-dupe-class-members
  async simulateTransaction(transactionOrMessage, configOrSigners, includeAccounts) {
    if ('message' in transactionOrMessage) {
      const versionedTx = transactionOrMessage;
      const wireTransaction = versionedTx.serialize();
      const encodedTransaction = buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from(wireTransaction).toString('base64');
      if (Array.isArray(configOrSigners) || includeAccounts !== undefined) {
        throw new Error('Invalid arguments');
      }
      const config = configOrSigners || {};
      config.encoding = 'base64';
      if (!('commitment' in config)) {
        config.commitment = this.commitment;
      }
      const args = [encodedTransaction, config];
      const unsafeRes = await this._rpcRequest('simulateTransaction', args);
      const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, SimulatedTransactionResponseStruct);
      if ('error' in res) {
        throw new Error('failed to simulate transaction: ' + res.error.message);
      }
      return res.result;
    }
    let transaction;
    if (transactionOrMessage instanceof Transaction) {
      let originalTx = transactionOrMessage;
      transaction = new Transaction();
      transaction.feePayer = originalTx.feePayer;
      transaction.instructions = transactionOrMessage.instructions;
      transaction.nonceInfo = originalTx.nonceInfo;
      transaction.signatures = originalTx.signatures;
    } else {
      transaction = Transaction.populate(transactionOrMessage);
      // HACK: this function relies on mutating the populated transaction
      transaction._message = transaction._json = undefined;
    }
    if (configOrSigners !== undefined && !Array.isArray(configOrSigners)) {
      throw new Error('Invalid arguments');
    }
    const signers = configOrSigners;
    if (transaction.nonceInfo && signers) {
      transaction.sign(...signers);
    } else {
      let disableCache = this._disableBlockhashCaching;
      for (;;) {
        const latestBlockhash = await this._blockhashWithExpiryBlockHeight(disableCache);
        transaction.lastValidBlockHeight = latestBlockhash.lastValidBlockHeight;
        transaction.recentBlockhash = latestBlockhash.blockhash;
        if (!signers) break;
        transaction.sign(...signers);
        if (!transaction.signature) {
          throw new Error('!signature'); // should never happen
        }

        const signature = transaction.signature.toString('base64');
        if (!this._blockhashInfo.simulatedSignatures.includes(signature) && !this._blockhashInfo.transactionSignatures.includes(signature)) {
          // The signature of this transaction has not been seen before with the
          // current recentBlockhash, all done. Let's break
          this._blockhashInfo.simulatedSignatures.push(signature);
          break;
        } else {
          // This transaction would be treated as duplicate (its derived signature
          // matched to one of already recorded signatures).
          // So, we must fetch a new blockhash for a different signature by disabling
          // our cache not to wait for the cache expiration (BLOCKHASH_CACHE_TIMEOUT_MS).
          disableCache = true;
        }
      }
    }
    const message = transaction._compile();
    const signData = message.serialize();
    const wireTransaction = transaction._serialize(signData);
    const encodedTransaction = wireTransaction.toString('base64');
    const config = {
      encoding: 'base64',
      commitment: this.commitment
    };
    if (includeAccounts) {
      const addresses = (Array.isArray(includeAccounts) ? includeAccounts : message.nonProgramIds()).map(key => key.toBase58());
      config['accounts'] = {
        encoding: 'base64',
        addresses
      };
    }
    if (signers) {
      config.sigVerify = true;
    }
    const args = [encodedTransaction, config];
    const unsafeRes = await this._rpcRequest('simulateTransaction', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, SimulatedTransactionResponseStruct);
    if ('error' in res) {
      let logs;
      if ('data' in res.error) {
        logs = res.error.data.logs;
        if (logs && Array.isArray(logs)) {
          const traceIndent = '\n    ';
          const logTrace = traceIndent + logs.join(traceIndent);
          console.error(res.error.message, logTrace);
        }
      }
      throw new SendTransactionError('failed to simulate transaction: ' + res.error.message, logs);
    }
    return res.result;
  }

  /**
   * Sign and send a transaction
   *
   * @deprecated Instead, call {@link sendTransaction} with a {@link
   * VersionedTransaction}
   */

  /**
   * Sign and send a transaction
   */
  // eslint-disable-next-line no-dupe-class-members
  async sendTransaction(transaction, signersOrOptions, options) {
    if ('version' in transaction) {
      if (signersOrOptions && Array.isArray(signersOrOptions)) {
        throw new Error('Invalid arguments');
      }
      const wireTransaction = transaction.serialize();
      return await this.sendRawTransaction(wireTransaction, signersOrOptions);
    }
    if (signersOrOptions === undefined || !Array.isArray(signersOrOptions)) {
      throw new Error('Invalid arguments');
    }
    const signers = signersOrOptions;
    if (transaction.nonceInfo) {
      transaction.sign(...signers);
    } else {
      let disableCache = this._disableBlockhashCaching;
      for (;;) {
        const latestBlockhash = await this._blockhashWithExpiryBlockHeight(disableCache);
        transaction.lastValidBlockHeight = latestBlockhash.lastValidBlockHeight;
        transaction.recentBlockhash = latestBlockhash.blockhash;
        transaction.sign(...signers);
        if (!transaction.signature) {
          throw new Error('!signature'); // should never happen
        }

        const signature = transaction.signature.toString('base64');
        if (!this._blockhashInfo.transactionSignatures.includes(signature)) {
          // The signature of this transaction has not been seen before with the
          // current recentBlockhash, all done. Let's break
          this._blockhashInfo.transactionSignatures.push(signature);
          break;
        } else {
          // This transaction would be treated as duplicate (its derived signature
          // matched to one of already recorded signatures).
          // So, we must fetch a new blockhash for a different signature by disabling
          // our cache not to wait for the cache expiration (BLOCKHASH_CACHE_TIMEOUT_MS).
          disableCache = true;
        }
      }
    }
    const wireTransaction = transaction.serialize();
    return await this.sendRawTransaction(wireTransaction, options);
  }

  /**
   * Send a transaction that has already been signed and serialized into the
   * wire format
   */
  async sendRawTransaction(rawTransaction, options) {
    const encodedTransaction = toBuffer(rawTransaction).toString('base64');
    const result = await this.sendEncodedTransaction(encodedTransaction, options);
    return result;
  }

  /**
   * Send a transaction that has already been signed, serialized into the
   * wire format, and encoded as a base64 string
   */
  async sendEncodedTransaction(encodedTransaction, options) {
    const config = {
      encoding: 'base64'
    };
    const skipPreflight = options && options.skipPreflight;
    const preflightCommitment = options && options.preflightCommitment || this.commitment;
    if (options && options.maxRetries != null) {
      config.maxRetries = options.maxRetries;
    }
    if (options && options.minContextSlot != null) {
      config.minContextSlot = options.minContextSlot;
    }
    if (skipPreflight) {
      config.skipPreflight = skipPreflight;
    }
    if (preflightCommitment) {
      config.preflightCommitment = preflightCommitment;
    }
    const args = [encodedTransaction, config];
    const unsafeRes = await this._rpcRequest('sendTransaction', args);
    const res = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(unsafeRes, SendTransactionRpcResult);
    if ('error' in res) {
      let logs;
      if ('data' in res.error) {
        logs = res.error.data.logs;
      }
      throw new SendTransactionError('failed to send transaction: ' + res.error.message, logs);
    }
    return res.result;
  }

  /**
   * @internal
   */
  _wsOnOpen() {
    this._rpcWebSocketConnected = true;
    this._rpcWebSocketHeartbeat = setInterval(() => {
      // Ping server every 5s to prevent idle timeouts
      (async () => {
        try {
          await this._rpcWebSocket.notify('ping');
          // eslint-disable-next-line no-empty
        } catch {}
      })();
    }, 5000);
    this._updateSubscriptions();
  }

  /**
   * @internal
   */
  _wsOnError(err) {
    this._rpcWebSocketConnected = false;
    console.error('ws error:', err.message);
  }

  /**
   * @internal
   */
  _wsOnClose(code) {
    this._rpcWebSocketConnected = false;
    this._rpcWebSocketGeneration = (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER;
    if (this._rpcWebSocketIdleTimeout) {
      clearTimeout(this._rpcWebSocketIdleTimeout);
      this._rpcWebSocketIdleTimeout = null;
    }
    if (this._rpcWebSocketHeartbeat) {
      clearInterval(this._rpcWebSocketHeartbeat);
      this._rpcWebSocketHeartbeat = null;
    }
    if (code === 1000) {
      // explicit close, check if any subscriptions have been made since close
      this._updateSubscriptions();
      return;
    }

    // implicit close, prepare subscriptions for auto-reconnect
    this._subscriptionCallbacksByServerSubscriptionId = {};
    Object.entries(this._subscriptionsByHash).forEach(([hash, subscription]) => {
      this._setSubscription(hash, {
        ...subscription,
        state: 'pending'
      });
    });
  }

  /**
   * @internal
   */
  _setSubscription(hash, nextSubscription) {
    const prevState = this._subscriptionsByHash[hash]?.state;
    this._subscriptionsByHash[hash] = nextSubscription;
    if (prevState !== nextSubscription.state) {
      const stateChangeCallbacks = this._subscriptionStateChangeCallbacksByHash[hash];
      if (stateChangeCallbacks) {
        stateChangeCallbacks.forEach(cb => {
          try {
            cb(nextSubscription.state);
            // eslint-disable-next-line no-empty
          } catch {}
        });
      }
    }
  }

  /**
   * @internal
   */
  _onSubscriptionStateChange(clientSubscriptionId, callback) {
    var _this$_subscriptionSt;
    const hash = this._subscriptionHashByClientSubscriptionId[clientSubscriptionId];
    if (hash == null) {
      return () => {};
    }
    const stateChangeCallbacks = (_this$_subscriptionSt = this._subscriptionStateChangeCallbacksByHash)[hash] || (_this$_subscriptionSt[hash] = new Set());
    stateChangeCallbacks.add(callback);
    return () => {
      stateChangeCallbacks.delete(callback);
      if (stateChangeCallbacks.size === 0) {
        delete this._subscriptionStateChangeCallbacksByHash[hash];
      }
    };
  }

  /**
   * @internal
   */
  async _updateSubscriptions() {
    if (Object.keys(this._subscriptionsByHash).length === 0) {
      if (this._rpcWebSocketConnected) {
        this._rpcWebSocketConnected = false;
        this._rpcWebSocketIdleTimeout = setTimeout(() => {
          this._rpcWebSocketIdleTimeout = null;
          try {
            this._rpcWebSocket.close();
          } catch (err) {
            // swallow error if socket has already been closed.
            if (err instanceof Error) {
              console.log(`Error when closing socket connection: ${err.message}`);
            }
          }
        }, 500);
      }
      return;
    }
    if (this._rpcWebSocketIdleTimeout !== null) {
      clearTimeout(this._rpcWebSocketIdleTimeout);
      this._rpcWebSocketIdleTimeout = null;
      this._rpcWebSocketConnected = true;
    }
    if (!this._rpcWebSocketConnected) {
      this._rpcWebSocket.connect();
      return;
    }
    const activeWebSocketGeneration = this._rpcWebSocketGeneration;
    const isCurrentConnectionStillActive = () => {
      return activeWebSocketGeneration === this._rpcWebSocketGeneration;
    };
    await Promise.all(
    // Don't be tempted to change this to `Object.entries`. We call
    // `_updateSubscriptions` recursively when processing the state,
    // so it's important that we look up the *current* version of
    // each subscription, every time we process a hash.
    Object.keys(this._subscriptionsByHash).map(async hash => {
      const subscription = this._subscriptionsByHash[hash];
      if (subscription === undefined) {
        // This entry has since been deleted. Skip.
        return;
      }
      switch (subscription.state) {
        case 'pending':
        case 'unsubscribed':
          if (subscription.callbacks.size === 0) {
            /**
             * You can end up here when:
             *
             * - a subscription has recently unsubscribed
             *   without having new callbacks added to it
             *   while the unsubscribe was in flight, or
             * - when a pending subscription has its
             *   listeners removed before a request was
             *   sent to the server.
             *
             * Being that nobody is interested in this
             * subscription any longer, delete it.
             */
            delete this._subscriptionsByHash[hash];
            if (subscription.state === 'unsubscribed') {
              delete this._subscriptionCallbacksByServerSubscriptionId[subscription.serverSubscriptionId];
            }
            await this._updateSubscriptions();
            return;
          }
          await (async () => {
            const {
              args,
              method
            } = subscription;
            try {
              this._setSubscription(hash, {
                ...subscription,
                state: 'subscribing'
              });
              const serverSubscriptionId = await this._rpcWebSocket.call(method, args);
              this._setSubscription(hash, {
                ...subscription,
                serverSubscriptionId,
                state: 'subscribed'
              });
              this._subscriptionCallbacksByServerSubscriptionId[serverSubscriptionId] = subscription.callbacks;
              await this._updateSubscriptions();
            } catch (e) {
              if (e instanceof Error) {
                console.error(`${method} error for argument`, args, e.message);
              }
              if (!isCurrentConnectionStillActive()) {
                return;
              }
              // TODO: Maybe add an 'errored' state or a retry limit?
              this._setSubscription(hash, {
                ...subscription,
                state: 'pending'
              });
              await this._updateSubscriptions();
            }
          })();
          break;
        case 'subscribed':
          if (subscription.callbacks.size === 0) {
            // By the time we successfully set up a subscription
            // with the server, the client stopped caring about it.
            // Tear it down now.
            await (async () => {
              const {
                serverSubscriptionId,
                unsubscribeMethod
              } = subscription;
              if (this._subscriptionsAutoDisposedByRpc.has(serverSubscriptionId)) {
                /**
                 * Special case.
                 * If we're dealing with a subscription that has been auto-
                 * disposed by the RPC, then we can skip the RPC call to
                 * tear down the subscription here.
                 *
                 * NOTE: There is a proposal to eliminate this special case, here:
                 * https://github.com/solana-labs/solana/issues/18892
                 */
                this._subscriptionsAutoDisposedByRpc.delete(serverSubscriptionId);
              } else {
                this._setSubscription(hash, {
                  ...subscription,
                  state: 'unsubscribing'
                });
                this._setSubscription(hash, {
                  ...subscription,
                  state: 'unsubscribing'
                });
                try {
                  await this._rpcWebSocket.call(unsubscribeMethod, [serverSubscriptionId]);
                } catch (e) {
                  if (e instanceof Error) {
                    console.error(`${unsubscribeMethod} error:`, e.message);
                  }
                  if (!isCurrentConnectionStillActive()) {
                    return;
                  }
                  // TODO: Maybe add an 'errored' state or a retry limit?
                  this._setSubscription(hash, {
                    ...subscription,
                    state: 'subscribed'
                  });
                  await this._updateSubscriptions();
                  return;
                }
              }
              this._setSubscription(hash, {
                ...subscription,
                state: 'unsubscribed'
              });
              await this._updateSubscriptions();
            })();
          }
          break;
      }
    }));
  }

  /**
   * @internal
   */
  _handleServerNotification(serverSubscriptionId, callbackArgs) {
    const callbacks = this._subscriptionCallbacksByServerSubscriptionId[serverSubscriptionId];
    if (callbacks === undefined) {
      return;
    }
    callbacks.forEach(cb => {
      try {
        cb(
        // I failed to find a way to convince TypeScript that `cb` is of type
        // `TCallback` which is certainly compatible with `Parameters<TCallback>`.
        // See https://github.com/microsoft/TypeScript/issues/47615
        // @ts-ignore
        ...callbackArgs);
      } catch (e) {
        console.error(e);
      }
    });
  }

  /**
   * @internal
   */
  _wsOnAccountNotification(notification) {
    const {
      result,
      subscription
    } = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(notification, AccountNotificationResult);
    this._handleServerNotification(subscription, [result.value, result.context]);
  }

  /**
   * @internal
   */
  _makeSubscription(subscriptionConfig,
  /**
   * When preparing `args` for a call to `_makeSubscription`, be sure
   * to carefully apply a default `commitment` property, if necessary.
   *
   * - If the user supplied a `commitment` use that.
   * - Otherwise, if the `Connection::commitment` is set, use that.
   * - Otherwise, set it to the RPC server default: `finalized`.
   *
   * This is extremely important to ensure that these two fundamentally
   * identical subscriptions produce the same identifying hash:
   *
   * - A subscription made without specifying a commitment.
   * - A subscription made where the commitment specified is the same
   *   as the default applied to the subscription above.
   *
   * Example; these two subscriptions must produce the same hash:
   *
   * - An `accountSubscribe` subscription for `'PUBKEY'`
   * - An `accountSubscribe` subscription for `'PUBKEY'` with commitment
   *   `'finalized'`.
   *
   * See the 'making a subscription with defaulted params omitted' test
   * in `connection-subscriptions.ts` for more.
   */
  args) {
    const clientSubscriptionId = this._nextClientSubscriptionId++;
    const hash = fastStableStringify$1([subscriptionConfig.method, args]);

    const existingSubscription = this._subscriptionsByHash[hash];
    if (existingSubscription === undefined) {
      this._subscriptionsByHash[hash] = {
        ...subscriptionConfig,
        args,
        callbacks: new Set([subscriptionConfig.callback]),
        state: 'pending'
      };
    } else {
      existingSubscription.callbacks.add(subscriptionConfig.callback);
    }
    this._subscriptionHashByClientSubscriptionId[clientSubscriptionId] = hash;
    this._subscriptionDisposeFunctionsByClientSubscriptionId[clientSubscriptionId] = async () => {
      delete this._subscriptionDisposeFunctionsByClientSubscriptionId[clientSubscriptionId];
      delete this._subscriptionHashByClientSubscriptionId[clientSubscriptionId];
      const subscription = this._subscriptionsByHash[hash];
      assert(subscription !== undefined, `Could not find a \`Subscription\` when tearing down client subscription #${clientSubscriptionId}`);
      subscription.callbacks.delete(subscriptionConfig.callback);
      await this._updateSubscriptions();
    };
    this._updateSubscriptions();
    return clientSubscriptionId;
  }

  /**
   * Register a callback to be invoked whenever the specified account changes
   *
   * @param publicKey Public key of the account to monitor
   * @param callback Function to invoke whenever the account is changed
   * @param commitment Specify the commitment level account changes must reach before notification
   * @return subscription id
   */
  onAccountChange(publicKey, callback, commitment) {
    const args = this._buildArgs([publicKey.toBase58()], commitment || this._commitment || 'finalized',
    // Apply connection/server default.
    'base64');
    return this._makeSubscription({
      callback,
      method: 'accountSubscribe',
      unsubscribeMethod: 'accountUnsubscribe'
    }, args);
  }

  /**
   * Deregister an account notification callback
   *
   * @param id client subscription id to deregister
   */
  async removeAccountChangeListener(clientSubscriptionId) {
    await this._unsubscribeClientSubscription(clientSubscriptionId, 'account change');
  }

  /**
   * @internal
   */
  _wsOnProgramAccountNotification(notification) {
    const {
      result,
      subscription
    } = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(notification, ProgramAccountNotificationResult);
    this._handleServerNotification(subscription, [{
      accountId: result.value.pubkey,
      accountInfo: result.value.account
    }, result.context]);
  }

  /**
   * Register a callback to be invoked whenever accounts owned by the
   * specified program change
   *
   * @param programId Public key of the program to monitor
   * @param callback Function to invoke whenever the account is changed
   * @param commitment Specify the commitment level account changes must reach before notification
   * @param filters The program account filters to pass into the RPC method
   * @return subscription id
   */
  onProgramAccountChange(programId, callback, commitment, filters) {
    const args = this._buildArgs([programId.toBase58()], commitment || this._commitment || 'finalized',
    // Apply connection/server default.
    'base64' /* encoding */, filters ? {
      filters: filters
    } : undefined /* extra */);

    return this._makeSubscription({
      callback,
      method: 'programSubscribe',
      unsubscribeMethod: 'programUnsubscribe'
    }, args);
  }

  /**
   * Deregister an account notification callback
   *
   * @param id client subscription id to deregister
   */
  async removeProgramAccountChangeListener(clientSubscriptionId) {
    await this._unsubscribeClientSubscription(clientSubscriptionId, 'program account change');
  }

  /**
   * Registers a callback to be invoked whenever logs are emitted.
   */
  onLogs(filter, callback, commitment) {
    const args = this._buildArgs([typeof filter === 'object' ? {
      mentions: [filter.toString()]
    } : filter], commitment || this._commitment || 'finalized' // Apply connection/server default.
    );

    return this._makeSubscription({
      callback,
      method: 'logsSubscribe',
      unsubscribeMethod: 'logsUnsubscribe'
    }, args);
  }

  /**
   * Deregister a logs callback.
   *
   * @param id client subscription id to deregister.
   */
  async removeOnLogsListener(clientSubscriptionId) {
    await this._unsubscribeClientSubscription(clientSubscriptionId, 'logs');
  }

  /**
   * @internal
   */
  _wsOnLogsNotification(notification) {
    const {
      result,
      subscription
    } = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(notification, LogsNotificationResult);
    this._handleServerNotification(subscription, [result.value, result.context]);
  }

  /**
   * @internal
   */
  _wsOnSlotNotification(notification) {
    const {
      result,
      subscription
    } = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(notification, SlotNotificationResult);
    this._handleServerNotification(subscription, [result]);
  }

  /**
   * Register a callback to be invoked upon slot changes
   *
   * @param callback Function to invoke whenever the slot changes
   * @return subscription id
   */
  onSlotChange(callback) {
    return this._makeSubscription({
      callback,
      method: 'slotSubscribe',
      unsubscribeMethod: 'slotUnsubscribe'
    }, [] /* args */);
  }

  /**
   * Deregister a slot notification callback
   *
   * @param id client subscription id to deregister
   */
  async removeSlotChangeListener(clientSubscriptionId) {
    await this._unsubscribeClientSubscription(clientSubscriptionId, 'slot change');
  }

  /**
   * @internal
   */
  _wsOnSlotUpdatesNotification(notification) {
    const {
      result,
      subscription
    } = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(notification, SlotUpdateNotificationResult);
    this._handleServerNotification(subscription, [result]);
  }

  /**
   * Register a callback to be invoked upon slot updates. {@link SlotUpdate}'s
   * may be useful to track live progress of a cluster.
   *
   * @param callback Function to invoke whenever the slot updates
   * @return subscription id
   */
  onSlotUpdate(callback) {
    return this._makeSubscription({
      callback,
      method: 'slotsUpdatesSubscribe',
      unsubscribeMethod: 'slotsUpdatesUnsubscribe'
    }, [] /* args */);
  }

  /**
   * Deregister a slot update notification callback
   *
   * @param id client subscription id to deregister
   */
  async removeSlotUpdateListener(clientSubscriptionId) {
    await this._unsubscribeClientSubscription(clientSubscriptionId, 'slot update');
  }

  /**
   * @internal
   */

  async _unsubscribeClientSubscription(clientSubscriptionId, subscriptionName) {
    const dispose = this._subscriptionDisposeFunctionsByClientSubscriptionId[clientSubscriptionId];
    if (dispose) {
      await dispose();
    } else {
      console.warn('Ignored unsubscribe request because an active subscription with id ' + `\`${clientSubscriptionId}\` for '${subscriptionName}' events ` + 'could not be found.');
    }
  }
  _buildArgs(args, override, encoding, extra) {
    const commitment = override || this._commitment;
    if (commitment || encoding || extra) {
      let options = {};
      if (encoding) {
        options.encoding = encoding;
      }
      if (commitment) {
        options.commitment = commitment;
      }
      if (extra) {
        options = Object.assign(options, extra);
      }
      args.push(options);
    }
    return args;
  }

  /**
   * @internal
   */
  _buildArgsAtLeastConfirmed(args, override, encoding, extra) {
    const commitment = override || this._commitment;
    if (commitment && !['confirmed', 'finalized'].includes(commitment)) {
      throw new Error('Using Connection with default commitment: `' + this._commitment + '`, but method requires at least `confirmed`');
    }
    return this._buildArgs(args, override, encoding, extra);
  }

  /**
   * @internal
   */
  _wsOnSignatureNotification(notification) {
    const {
      result,
      subscription
    } = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(notification, SignatureNotificationResult);
    if (result.value !== 'receivedSignature') {
      /**
       * Special case.
       * After a signature is processed, RPCs automatically dispose of the
       * subscription on the server side. We need to track which of these
       * subscriptions have been disposed in such a way, so that we know
       * whether the client is dealing with a not-yet-processed signature
       * (in which case we must tear down the server subscription) or an
       * already-processed signature (in which case the client can simply
       * clear out the subscription locally without telling the server).
       *
       * NOTE: There is a proposal to eliminate this special case, here:
       * https://github.com/solana-labs/solana/issues/18892
       */
      this._subscriptionsAutoDisposedByRpc.add(subscription);
    }
    this._handleServerNotification(subscription, result.value === 'receivedSignature' ? [{
      type: 'received'
    }, result.context] : [{
      type: 'status',
      result: result.value
    }, result.context]);
  }

  /**
   * Register a callback to be invoked upon signature updates
   *
   * @param signature Transaction signature string in base 58
   * @param callback Function to invoke on signature notifications
   * @param commitment Specify the commitment level signature must reach before notification
   * @return subscription id
   */
  onSignature(signature, callback, commitment) {
    const args = this._buildArgs([signature], commitment || this._commitment || 'finalized' // Apply connection/server default.
    );

    const clientSubscriptionId = this._makeSubscription({
      callback: (notification, context) => {
        if (notification.type === 'status') {
          callback(notification.result, context);
          // Signatures subscriptions are auto-removed by the RPC service
          // so no need to explicitly send an unsubscribe message.
          try {
            this.removeSignatureListener(clientSubscriptionId);
            // eslint-disable-next-line no-empty
          } catch (_err) {
            // Already removed.
          }
        }
      },
      method: 'signatureSubscribe',
      unsubscribeMethod: 'signatureUnsubscribe'
    }, args);
    return clientSubscriptionId;
  }

  /**
   * Register a callback to be invoked when a transaction is
   * received and/or processed.
   *
   * @param signature Transaction signature string in base 58
   * @param callback Function to invoke on signature notifications
   * @param options Enable received notifications and set the commitment
   *   level that signature must reach before notification
   * @return subscription id
   */
  onSignatureWithOptions(signature, callback, options) {
    const {
      commitment,
      ...extra
    } = {
      ...options,
      commitment: options && options.commitment || this._commitment || 'finalized' // Apply connection/server default.
    };

    const args = this._buildArgs([signature], commitment, undefined /* encoding */, extra);
    const clientSubscriptionId = this._makeSubscription({
      callback: (notification, context) => {
        callback(notification, context);
        // Signatures subscriptions are auto-removed by the RPC service
        // so no need to explicitly send an unsubscribe message.
        try {
          this.removeSignatureListener(clientSubscriptionId);
          // eslint-disable-next-line no-empty
        } catch (_err) {
          // Already removed.
        }
      },
      method: 'signatureSubscribe',
      unsubscribeMethod: 'signatureUnsubscribe'
    }, args);
    return clientSubscriptionId;
  }

  /**
   * Deregister a signature notification callback
   *
   * @param id client subscription id to deregister
   */
  async removeSignatureListener(clientSubscriptionId) {
    await this._unsubscribeClientSubscription(clientSubscriptionId, 'signature result');
  }

  /**
   * @internal
   */
  _wsOnRootNotification(notification) {
    const {
      result,
      subscription
    } = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.create)(notification, RootNotificationResult);
    this._handleServerNotification(subscription, [result]);
  }

  /**
   * Register a callback to be invoked upon root changes
   *
   * @param callback Function to invoke whenever the root changes
   * @return subscription id
   */
  onRootChange(callback) {
    return this._makeSubscription({
      callback,
      method: 'rootSubscribe',
      unsubscribeMethod: 'rootUnsubscribe'
    }, [] /* args */);
  }

  /**
   * Deregister a root notification callback
   *
   * @param id client subscription id to deregister
   */
  async removeRootChangeListener(clientSubscriptionId) {
    await this._unsubscribeClientSubscription(clientSubscriptionId, 'root change');
  }
}

/**
 * Keypair signer interface
 */

/**
 * An account keypair used for signing transactions.
 */
class Keypair {
  /**
   * Create a new keypair instance.
   * Generate random keypair if no {@link Ed25519Keypair} is provided.
   *
   * @param keypair ed25519 keypair
   */
  constructor(keypair) {
    this._keypair = void 0;
    this._keypair = keypair ?? generateKeypair();
  }

  /**
   * Generate a new random keypair
   */
  static generate() {
    return new Keypair(generateKeypair());
  }

  /**
   * Create a keypair from a raw secret key byte array.
   *
   * This method should only be used to recreate a keypair from a previously
   * generated secret key. Generating keypairs from a random seed should be done
   * with the {@link Keypair.fromSeed} method.
   *
   * @throws error if the provided secret key is invalid and validation is not skipped.
   *
   * @param secretKey secret key byte array
   * @param options: skip secret key validation
   */
  static fromSecretKey(secretKey, options) {
    if (secretKey.byteLength !== 64) {
      throw new Error('bad secret key size');
    }
    const publicKey = secretKey.slice(32, 64);
    if (!options || !options.skipValidation) {
      const privateScalar = secretKey.slice(0, 32);
      const computedPublicKey = getPublicKey(privateScalar);
      for (let ii = 0; ii < 32; ii++) {
        if (publicKey[ii] !== computedPublicKey[ii]) {
          throw new Error('provided secretKey is invalid');
        }
      }
    }
    return new Keypair({
      publicKey,
      secretKey
    });
  }

  /**
   * Generate a keypair from a 32 byte seed.
   *
   * @param seed seed byte array
   */
  static fromSeed(seed) {
    const publicKey = getPublicKey(seed);
    const secretKey = new Uint8Array(64);
    secretKey.set(seed);
    secretKey.set(publicKey, 32);
    return new Keypair({
      publicKey,
      secretKey
    });
  }

  /**
   * The public key for this keypair
   */
  get publicKey() {
    return new PublicKey(this._keypair.publicKey);
  }

  /**
   * The raw secret key for this keypair
   */
  get secretKey() {
    return new Uint8Array(this._keypair.secretKey);
  }
}

/**
 * An enumeration of valid address lookup table InstructionType's
 * @internal
 */
const LOOKUP_TABLE_INSTRUCTION_LAYOUTS = Object.freeze({
  CreateLookupTable: {
    index: 0,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction'), u64('recentSlot'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8('bumpSeed')])
  },
  FreezeLookupTable: {
    index: 1,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction')])
  },
  ExtendLookupTable: {
    index: 2,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction'), u64(), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.seq(publicKey(), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.offset(_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32(), -8), 'addresses')])
  },
  DeactivateLookupTable: {
    index: 3,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction')])
  },
  CloseLookupTable: {
    index: 4,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction')])
  }
});
class AddressLookupTableInstruction {
  /**
   * @internal
   */
  constructor() {}
  static decodeInstructionType(instruction) {
    this.checkProgramId(instruction.programId);
    const instructionTypeLayout = _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction');
    const index = instructionTypeLayout.decode(instruction.data);
    let type;
    for (const [layoutType, layout] of Object.entries(LOOKUP_TABLE_INSTRUCTION_LAYOUTS)) {
      if (layout.index == index) {
        type = layoutType;
        break;
      }
    }
    if (!type) {
      throw new Error('Invalid Instruction. Should be a LookupTable Instruction');
    }
    return type;
  }
  static decodeCreateLookupTable(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeysLength(instruction.keys, 4);
    const {
      recentSlot
    } = decodeData$1(LOOKUP_TABLE_INSTRUCTION_LAYOUTS.CreateLookupTable, instruction.data);
    return {
      authority: instruction.keys[1].pubkey,
      payer: instruction.keys[2].pubkey,
      recentSlot: Number(recentSlot)
    };
  }
  static decodeExtendLookupTable(instruction) {
    this.checkProgramId(instruction.programId);
    if (instruction.keys.length < 2) {
      throw new Error(`invalid instruction; found ${instruction.keys.length} keys, expected at least 2`);
    }
    const {
      addresses
    } = decodeData$1(LOOKUP_TABLE_INSTRUCTION_LAYOUTS.ExtendLookupTable, instruction.data);
    return {
      lookupTable: instruction.keys[0].pubkey,
      authority: instruction.keys[1].pubkey,
      payer: instruction.keys.length > 2 ? instruction.keys[2].pubkey : undefined,
      addresses: addresses.map(buffer => new PublicKey(buffer))
    };
  }
  static decodeCloseLookupTable(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeysLength(instruction.keys, 3);
    return {
      lookupTable: instruction.keys[0].pubkey,
      authority: instruction.keys[1].pubkey,
      recipient: instruction.keys[2].pubkey
    };
  }
  static decodeFreezeLookupTable(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeysLength(instruction.keys, 2);
    return {
      lookupTable: instruction.keys[0].pubkey,
      authority: instruction.keys[1].pubkey
    };
  }
  static decodeDeactivateLookupTable(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeysLength(instruction.keys, 2);
    return {
      lookupTable: instruction.keys[0].pubkey,
      authority: instruction.keys[1].pubkey
    };
  }

  /**
   * @internal
   */
  static checkProgramId(programId) {
    if (!programId.equals(AddressLookupTableProgram.programId)) {
      throw new Error('invalid instruction; programId is not AddressLookupTable Program');
    }
  }
  /**
   * @internal
   */
  static checkKeysLength(keys, expectedLength) {
    if (keys.length < expectedLength) {
      throw new Error(`invalid instruction; found ${keys.length} keys, expected at least ${expectedLength}`);
    }
  }
}
class AddressLookupTableProgram {
  /**
   * @internal
   */
  constructor() {}
  static createLookupTable(params) {
    const [lookupTableAddress, bumpSeed] = PublicKey.findProgramAddressSync([params.authority.toBuffer(), (0,bigint_buffer__WEBPACK_IMPORTED_MODULE_8__.toBufferLE)(BigInt(params.recentSlot), 8)], this.programId);
    const type = LOOKUP_TABLE_INSTRUCTION_LAYOUTS.CreateLookupTable;
    const data = encodeData(type, {
      recentSlot: BigInt(params.recentSlot),
      bumpSeed: bumpSeed
    });
    const keys = [{
      pubkey: lookupTableAddress,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: params.authority,
      isSigner: true,
      isWritable: false
    }, {
      pubkey: params.payer,
      isSigner: true,
      isWritable: true
    }, {
      pubkey: SystemProgram.programId,
      isSigner: false,
      isWritable: false
    }];
    return [new TransactionInstruction({
      programId: this.programId,
      keys: keys,
      data: data
    }), lookupTableAddress];
  }
  static freezeLookupTable(params) {
    const type = LOOKUP_TABLE_INSTRUCTION_LAYOUTS.FreezeLookupTable;
    const data = encodeData(type);
    const keys = [{
      pubkey: params.lookupTable,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: params.authority,
      isSigner: true,
      isWritable: false
    }];
    return new TransactionInstruction({
      programId: this.programId,
      keys: keys,
      data: data
    });
  }
  static extendLookupTable(params) {
    const type = LOOKUP_TABLE_INSTRUCTION_LAYOUTS.ExtendLookupTable;
    const data = encodeData(type, {
      addresses: params.addresses.map(addr => addr.toBytes())
    });
    const keys = [{
      pubkey: params.lookupTable,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: params.authority,
      isSigner: true,
      isWritable: false
    }];
    if (params.payer) {
      keys.push({
        pubkey: params.payer,
        isSigner: true,
        isWritable: true
      }, {
        pubkey: SystemProgram.programId,
        isSigner: false,
        isWritable: false
      });
    }
    return new TransactionInstruction({
      programId: this.programId,
      keys: keys,
      data: data
    });
  }
  static deactivateLookupTable(params) {
    const type = LOOKUP_TABLE_INSTRUCTION_LAYOUTS.DeactivateLookupTable;
    const data = encodeData(type);
    const keys = [{
      pubkey: params.lookupTable,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: params.authority,
      isSigner: true,
      isWritable: false
    }];
    return new TransactionInstruction({
      programId: this.programId,
      keys: keys,
      data: data
    });
  }
  static closeLookupTable(params) {
    const type = LOOKUP_TABLE_INSTRUCTION_LAYOUTS.CloseLookupTable;
    const data = encodeData(type);
    const keys = [{
      pubkey: params.lookupTable,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: params.authority,
      isSigner: true,
      isWritable: false
    }, {
      pubkey: params.recipient,
      isSigner: false,
      isWritable: true
    }];
    return new TransactionInstruction({
      programId: this.programId,
      keys: keys,
      data: data
    });
  }
}
AddressLookupTableProgram.programId = new PublicKey('AddressLookupTab1e1111111111111111111111111');

/**
 * Compute Budget Instruction class
 */
class ComputeBudgetInstruction {
  /**
   * @internal
   */
  constructor() {}

  /**
   * Decode a compute budget instruction and retrieve the instruction type.
   */
  static decodeInstructionType(instruction) {
    this.checkProgramId(instruction.programId);
    const instructionTypeLayout = _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8('instruction');
    const typeIndex = instructionTypeLayout.decode(instruction.data);
    let type;
    for (const [ixType, layout] of Object.entries(COMPUTE_BUDGET_INSTRUCTION_LAYOUTS)) {
      if (layout.index == typeIndex) {
        type = ixType;
        break;
      }
    }
    if (!type) {
      throw new Error('Instruction type incorrect; not a ComputeBudgetInstruction');
    }
    return type;
  }

  /**
   * Decode request units compute budget instruction and retrieve the instruction params.
   */
  static decodeRequestUnits(instruction) {
    this.checkProgramId(instruction.programId);
    const {
      units,
      additionalFee
    } = decodeData$1(COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.RequestUnits, instruction.data);
    return {
      units,
      additionalFee
    };
  }

  /**
   * Decode request heap frame compute budget instruction and retrieve the instruction params.
   */
  static decodeRequestHeapFrame(instruction) {
    this.checkProgramId(instruction.programId);
    const {
      bytes
    } = decodeData$1(COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.RequestHeapFrame, instruction.data);
    return {
      bytes
    };
  }

  /**
   * Decode set compute unit limit compute budget instruction and retrieve the instruction params.
   */
  static decodeSetComputeUnitLimit(instruction) {
    this.checkProgramId(instruction.programId);
    const {
      units
    } = decodeData$1(COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.SetComputeUnitLimit, instruction.data);
    return {
      units
    };
  }

  /**
   * Decode set compute unit price compute budget instruction and retrieve the instruction params.
   */
  static decodeSetComputeUnitPrice(instruction) {
    this.checkProgramId(instruction.programId);
    const {
      microLamports
    } = decodeData$1(COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.SetComputeUnitPrice, instruction.data);
    return {
      microLamports
    };
  }

  /**
   * @internal
   */
  static checkProgramId(programId) {
    if (!programId.equals(ComputeBudgetProgram.programId)) {
      throw new Error('invalid instruction; programId is not ComputeBudgetProgram');
    }
  }
}

/**
 * An enumeration of valid ComputeBudgetInstructionType's
 */

/**
 * An enumeration of valid ComputeBudget InstructionType's
 * @internal
 */
const COMPUTE_BUDGET_INSTRUCTION_LAYOUTS = Object.freeze({
  RequestUnits: {
    index: 0,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8('instruction'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('units'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('additionalFee')])
  },
  RequestHeapFrame: {
    index: 1,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8('instruction'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('bytes')])
  },
  SetComputeUnitLimit: {
    index: 2,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8('instruction'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('units')])
  },
  SetComputeUnitPrice: {
    index: 3,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8('instruction'), u64('microLamports')])
  }
});

/**
 * Factory class for transaction instructions to interact with the Compute Budget program
 */
class ComputeBudgetProgram {
  /**
   * @internal
   */
  constructor() {}

  /**
   * Public key that identifies the Compute Budget program
   */

  /**
   * @deprecated Instead, call {@link setComputeUnitLimit} and/or {@link setComputeUnitPrice}
   */
  static requestUnits(params) {
    const type = COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.RequestUnits;
    const data = encodeData(type, params);
    return new TransactionInstruction({
      keys: [],
      programId: this.programId,
      data
    });
  }
  static requestHeapFrame(params) {
    const type = COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.RequestHeapFrame;
    const data = encodeData(type, params);
    return new TransactionInstruction({
      keys: [],
      programId: this.programId,
      data
    });
  }
  static setComputeUnitLimit(params) {
    const type = COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.SetComputeUnitLimit;
    const data = encodeData(type, params);
    return new TransactionInstruction({
      keys: [],
      programId: this.programId,
      data
    });
  }
  static setComputeUnitPrice(params) {
    const type = COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.SetComputeUnitPrice;
    const data = encodeData(type, {
      microLamports: BigInt(params.microLamports)
    });
    return new TransactionInstruction({
      keys: [],
      programId: this.programId,
      data
    });
  }
}
ComputeBudgetProgram.programId = new PublicKey('ComputeBudget111111111111111111111111111111');

const PRIVATE_KEY_BYTES$1 = 64;
const PUBLIC_KEY_BYTES$1 = 32;
const SIGNATURE_BYTES = 64;

/**
 * Params for creating an ed25519 instruction using a public key
 */

const ED25519_INSTRUCTION_LAYOUT = _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8('numSignatures'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8('padding'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u16('signatureOffset'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u16('signatureInstructionIndex'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u16('publicKeyOffset'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u16('publicKeyInstructionIndex'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u16('messageDataOffset'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u16('messageDataSize'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u16('messageInstructionIndex')]);
class Ed25519Program {
  /**
   * @internal
   */
  constructor() {}

  /**
   * Public key that identifies the ed25519 program
   */

  /**
   * Create an ed25519 instruction with a public key and signature. The
   * public key must be a buffer that is 32 bytes long, and the signature
   * must be a buffer of 64 bytes.
   */
  static createInstructionWithPublicKey(params) {
    const {
      publicKey,
      message,
      signature,
      instructionIndex
    } = params;
    assert(publicKey.length === PUBLIC_KEY_BYTES$1, `Public Key must be ${PUBLIC_KEY_BYTES$1} bytes but received ${publicKey.length} bytes`);
    assert(signature.length === SIGNATURE_BYTES, `Signature must be ${SIGNATURE_BYTES} bytes but received ${signature.length} bytes`);
    const publicKeyOffset = ED25519_INSTRUCTION_LAYOUT.span;
    const signatureOffset = publicKeyOffset + publicKey.length;
    const messageDataOffset = signatureOffset + signature.length;
    const numSignatures = 1;
    const instructionData = buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.alloc(messageDataOffset + message.length);
    const index = instructionIndex == null ? 0xffff // An index of `u16::MAX` makes it default to the current instruction.
    : instructionIndex;
    ED25519_INSTRUCTION_LAYOUT.encode({
      numSignatures,
      padding: 0,
      signatureOffset,
      signatureInstructionIndex: index,
      publicKeyOffset,
      publicKeyInstructionIndex: index,
      messageDataOffset,
      messageDataSize: message.length,
      messageInstructionIndex: index
    }, instructionData);
    instructionData.fill(publicKey, publicKeyOffset);
    instructionData.fill(signature, signatureOffset);
    instructionData.fill(message, messageDataOffset);
    return new TransactionInstruction({
      keys: [],
      programId: Ed25519Program.programId,
      data: instructionData
    });
  }

  /**
   * Create an ed25519 instruction with a private key. The private key
   * must be a buffer that is 64 bytes long.
   */
  static createInstructionWithPrivateKey(params) {
    const {
      privateKey,
      message,
      instructionIndex
    } = params;
    assert(privateKey.length === PRIVATE_KEY_BYTES$1, `Private key must be ${PRIVATE_KEY_BYTES$1} bytes but received ${privateKey.length} bytes`);
    try {
      const keypair = Keypair.fromSecretKey(privateKey);
      const publicKey = keypair.publicKey.toBytes();
      const signature = sign(message, keypair.secretKey);
      return this.createInstructionWithPublicKey({
        publicKey,
        message,
        signature,
        instructionIndex
      });
    } catch (error) {
      throw new Error(`Error creating instruction; ${error}`);
    }
  }
}
Ed25519Program.programId = new PublicKey('Ed25519SigVerify111111111111111111111111111');

// Supply a synchronous hashing algorithm to make this
// library interoperable with the synchronous APIs in web3.js.
_noble_secp256k1__WEBPACK_IMPORTED_MODULE_14__.utils.hmacSha256Sync = (key, ...msgs) => {
  const h = _noble_hashes_hmac__WEBPACK_IMPORTED_MODULE_13__.hmac.create(_noble_hashes_sha256__WEBPACK_IMPORTED_MODULE_5__.sha256, key);
  msgs.forEach(msg => h.update(msg));
  return h.digest();
};
const ecdsaSign = (msgHash, privKey) => _noble_secp256k1__WEBPACK_IMPORTED_MODULE_14__.signSync(msgHash, privKey, {
  der: false,
  recovered: true
});
_noble_secp256k1__WEBPACK_IMPORTED_MODULE_14__.utils.isValidPrivateKey;
const publicKeyCreate = _noble_secp256k1__WEBPACK_IMPORTED_MODULE_14__.getPublicKey;

const PRIVATE_KEY_BYTES = 32;
const ETHEREUM_ADDRESS_BYTES = 20;
const PUBLIC_KEY_BYTES = 64;
const SIGNATURE_OFFSETS_SERIALIZED_SIZE = 11;

/**
 * Params for creating an secp256k1 instruction using a public key
 */

const SECP256K1_INSTRUCTION_LAYOUT = _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8('numSignatures'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u16('signatureOffset'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8('signatureInstructionIndex'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u16('ethAddressOffset'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8('ethAddressInstructionIndex'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u16('messageDataOffset'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u16('messageDataSize'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8('messageInstructionIndex'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.blob(20, 'ethAddress'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.blob(64, 'signature'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8('recoveryId')]);
class Secp256k1Program {
  /**
   * @internal
   */
  constructor() {}

  /**
   * Public key that identifies the secp256k1 program
   */

  /**
   * Construct an Ethereum address from a secp256k1 public key buffer.
   * @param {Buffer} publicKey a 64 byte secp256k1 public key buffer
   */
  static publicKeyToEthAddress(publicKey) {
    assert(publicKey.length === PUBLIC_KEY_BYTES, `Public key must be ${PUBLIC_KEY_BYTES} bytes but received ${publicKey.length} bytes`);
    try {
      return buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from((0,_noble_hashes_sha3__WEBPACK_IMPORTED_MODULE_12__.keccak_256)(toBuffer(publicKey))).slice(-ETHEREUM_ADDRESS_BYTES);
    } catch (error) {
      throw new Error(`Error constructing Ethereum address: ${error}`);
    }
  }

  /**
   * Create an secp256k1 instruction with a public key. The public key
   * must be a buffer that is 64 bytes long.
   */
  static createInstructionWithPublicKey(params) {
    const {
      publicKey,
      message,
      signature,
      recoveryId,
      instructionIndex
    } = params;
    return Secp256k1Program.createInstructionWithEthAddress({
      ethAddress: Secp256k1Program.publicKeyToEthAddress(publicKey),
      message,
      signature,
      recoveryId,
      instructionIndex
    });
  }

  /**
   * Create an secp256k1 instruction with an Ethereum address. The address
   * must be a hex string or a buffer that is 20 bytes long.
   */
  static createInstructionWithEthAddress(params) {
    const {
      ethAddress: rawAddress,
      message,
      signature,
      recoveryId,
      instructionIndex = 0
    } = params;
    let ethAddress;
    if (typeof rawAddress === 'string') {
      if (rawAddress.startsWith('0x')) {
        ethAddress = buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from(rawAddress.substr(2), 'hex');
      } else {
        ethAddress = buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from(rawAddress, 'hex');
      }
    } else {
      ethAddress = rawAddress;
    }
    assert(ethAddress.length === ETHEREUM_ADDRESS_BYTES, `Address must be ${ETHEREUM_ADDRESS_BYTES} bytes but received ${ethAddress.length} bytes`);
    const dataStart = 1 + SIGNATURE_OFFSETS_SERIALIZED_SIZE;
    const ethAddressOffset = dataStart;
    const signatureOffset = dataStart + ethAddress.length;
    const messageDataOffset = signatureOffset + signature.length + 1;
    const numSignatures = 1;
    const instructionData = buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.alloc(SECP256K1_INSTRUCTION_LAYOUT.span + message.length);
    SECP256K1_INSTRUCTION_LAYOUT.encode({
      numSignatures,
      signatureOffset,
      signatureInstructionIndex: instructionIndex,
      ethAddressOffset,
      ethAddressInstructionIndex: instructionIndex,
      messageDataOffset,
      messageDataSize: message.length,
      messageInstructionIndex: instructionIndex,
      signature: toBuffer(signature),
      ethAddress: toBuffer(ethAddress),
      recoveryId
    }, instructionData);
    instructionData.fill(toBuffer(message), SECP256K1_INSTRUCTION_LAYOUT.span);
    return new TransactionInstruction({
      keys: [],
      programId: Secp256k1Program.programId,
      data: instructionData
    });
  }

  /**
   * Create an secp256k1 instruction with a private key. The private key
   * must be a buffer that is 32 bytes long.
   */
  static createInstructionWithPrivateKey(params) {
    const {
      privateKey: pkey,
      message,
      instructionIndex
    } = params;
    assert(pkey.length === PRIVATE_KEY_BYTES, `Private key must be ${PRIVATE_KEY_BYTES} bytes but received ${pkey.length} bytes`);
    try {
      const privateKey = toBuffer(pkey);
      const publicKey = publicKeyCreate(privateKey, false /* isCompressed */).slice(1); // throw away leading byte
      const messageHash = buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from((0,_noble_hashes_sha3__WEBPACK_IMPORTED_MODULE_12__.keccak_256)(toBuffer(message)));
      const [signature, recoveryId] = ecdsaSign(messageHash, privateKey);
      return this.createInstructionWithPublicKey({
        publicKey,
        message,
        signature,
        recoveryId,
        instructionIndex
      });
    } catch (error) {
      throw new Error(`Error creating instruction; ${error}`);
    }
  }
}
Secp256k1Program.programId = new PublicKey('KeccakSecp256k11111111111111111111111111111');

/**
 * Address of the stake config account which configures the rate
 * of stake warmup and cooldown as well as the slashing penalty.
 */
const STAKE_CONFIG_ID = new PublicKey('StakeConfig11111111111111111111111111111111');

/**
 * Stake account authority info
 */
class Authorized {
  /** stake authority */

  /** withdraw authority */

  /**
   * Create a new Authorized object
   * @param staker the stake authority
   * @param withdrawer the withdraw authority
   */
  constructor(staker, withdrawer) {
    this.staker = void 0;
    this.withdrawer = void 0;
    this.staker = staker;
    this.withdrawer = withdrawer;
  }
}
/**
 * Stake account lockup info
 */
class Lockup {
  /** Unix timestamp of lockup expiration */

  /** Epoch of lockup expiration */

  /** Lockup custodian authority */

  /**
   * Create a new Lockup object
   */
  constructor(unixTimestamp, epoch, custodian) {
    this.unixTimestamp = void 0;
    this.epoch = void 0;
    this.custodian = void 0;
    this.unixTimestamp = unixTimestamp;
    this.epoch = epoch;
    this.custodian = custodian;
  }

  /**
   * Default, inactive Lockup value
   */
}
Lockup.default = new Lockup(0, 0, PublicKey.default);
/**
 * Stake Instruction class
 */
class StakeInstruction {
  /**
   * @internal
   */
  constructor() {}

  /**
   * Decode a stake instruction and retrieve the instruction type.
   */
  static decodeInstructionType(instruction) {
    this.checkProgramId(instruction.programId);
    const instructionTypeLayout = _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction');
    const typeIndex = instructionTypeLayout.decode(instruction.data);
    let type;
    for (const [ixType, layout] of Object.entries(STAKE_INSTRUCTION_LAYOUTS)) {
      if (layout.index == typeIndex) {
        type = ixType;
        break;
      }
    }
    if (!type) {
      throw new Error('Instruction type incorrect; not a StakeInstruction');
    }
    return type;
  }

  /**
   * Decode a initialize stake instruction and retrieve the instruction params.
   */
  static decodeInitialize(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 2);
    const {
      authorized,
      lockup
    } = decodeData$1(STAKE_INSTRUCTION_LAYOUTS.Initialize, instruction.data);
    return {
      stakePubkey: instruction.keys[0].pubkey,
      authorized: new Authorized(new PublicKey(authorized.staker), new PublicKey(authorized.withdrawer)),
      lockup: new Lockup(lockup.unixTimestamp, lockup.epoch, new PublicKey(lockup.custodian))
    };
  }

  /**
   * Decode a delegate stake instruction and retrieve the instruction params.
   */
  static decodeDelegate(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 6);
    decodeData$1(STAKE_INSTRUCTION_LAYOUTS.Delegate, instruction.data);
    return {
      stakePubkey: instruction.keys[0].pubkey,
      votePubkey: instruction.keys[1].pubkey,
      authorizedPubkey: instruction.keys[5].pubkey
    };
  }

  /**
   * Decode an authorize stake instruction and retrieve the instruction params.
   */
  static decodeAuthorize(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 3);
    const {
      newAuthorized,
      stakeAuthorizationType
    } = decodeData$1(STAKE_INSTRUCTION_LAYOUTS.Authorize, instruction.data);
    const o = {
      stakePubkey: instruction.keys[0].pubkey,
      authorizedPubkey: instruction.keys[2].pubkey,
      newAuthorizedPubkey: new PublicKey(newAuthorized),
      stakeAuthorizationType: {
        index: stakeAuthorizationType
      }
    };
    if (instruction.keys.length > 3) {
      o.custodianPubkey = instruction.keys[3].pubkey;
    }
    return o;
  }

  /**
   * Decode an authorize-with-seed stake instruction and retrieve the instruction params.
   */
  static decodeAuthorizeWithSeed(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 2);
    const {
      newAuthorized,
      stakeAuthorizationType,
      authoritySeed,
      authorityOwner
    } = decodeData$1(STAKE_INSTRUCTION_LAYOUTS.AuthorizeWithSeed, instruction.data);
    const o = {
      stakePubkey: instruction.keys[0].pubkey,
      authorityBase: instruction.keys[1].pubkey,
      authoritySeed: authoritySeed,
      authorityOwner: new PublicKey(authorityOwner),
      newAuthorizedPubkey: new PublicKey(newAuthorized),
      stakeAuthorizationType: {
        index: stakeAuthorizationType
      }
    };
    if (instruction.keys.length > 3) {
      o.custodianPubkey = instruction.keys[3].pubkey;
    }
    return o;
  }

  /**
   * Decode a split stake instruction and retrieve the instruction params.
   */
  static decodeSplit(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 3);
    const {
      lamports
    } = decodeData$1(STAKE_INSTRUCTION_LAYOUTS.Split, instruction.data);
    return {
      stakePubkey: instruction.keys[0].pubkey,
      splitStakePubkey: instruction.keys[1].pubkey,
      authorizedPubkey: instruction.keys[2].pubkey,
      lamports
    };
  }

  /**
   * Decode a merge stake instruction and retrieve the instruction params.
   */
  static decodeMerge(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 3);
    decodeData$1(STAKE_INSTRUCTION_LAYOUTS.Merge, instruction.data);
    return {
      stakePubkey: instruction.keys[0].pubkey,
      sourceStakePubKey: instruction.keys[1].pubkey,
      authorizedPubkey: instruction.keys[4].pubkey
    };
  }

  /**
   * Decode a withdraw stake instruction and retrieve the instruction params.
   */
  static decodeWithdraw(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 5);
    const {
      lamports
    } = decodeData$1(STAKE_INSTRUCTION_LAYOUTS.Withdraw, instruction.data);
    const o = {
      stakePubkey: instruction.keys[0].pubkey,
      toPubkey: instruction.keys[1].pubkey,
      authorizedPubkey: instruction.keys[4].pubkey,
      lamports
    };
    if (instruction.keys.length > 5) {
      o.custodianPubkey = instruction.keys[5].pubkey;
    }
    return o;
  }

  /**
   * Decode a deactivate stake instruction and retrieve the instruction params.
   */
  static decodeDeactivate(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 3);
    decodeData$1(STAKE_INSTRUCTION_LAYOUTS.Deactivate, instruction.data);
    return {
      stakePubkey: instruction.keys[0].pubkey,
      authorizedPubkey: instruction.keys[2].pubkey
    };
  }

  /**
   * @internal
   */
  static checkProgramId(programId) {
    if (!programId.equals(StakeProgram.programId)) {
      throw new Error('invalid instruction; programId is not StakeProgram');
    }
  }

  /**
   * @internal
   */
  static checkKeyLength(keys, expectedLength) {
    if (keys.length < expectedLength) {
      throw new Error(`invalid instruction; found ${keys.length} keys, expected at least ${expectedLength}`);
    }
  }
}

/**
 * An enumeration of valid StakeInstructionType's
 */

/**
 * An enumeration of valid stake InstructionType's
 * @internal
 */
const STAKE_INSTRUCTION_LAYOUTS = Object.freeze({
  Initialize: {
    index: 0,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction'), authorized(), lockup()])
  },
  Authorize: {
    index: 1,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction'), publicKey('newAuthorized'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('stakeAuthorizationType')])
  },
  Delegate: {
    index: 2,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction')])
  },
  Split: {
    index: 3,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.ns64('lamports')])
  },
  Withdraw: {
    index: 4,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.ns64('lamports')])
  },
  Deactivate: {
    index: 5,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction')])
  },
  Merge: {
    index: 7,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction')])
  },
  AuthorizeWithSeed: {
    index: 8,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction'), publicKey('newAuthorized'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('stakeAuthorizationType'), rustString('authoritySeed'), publicKey('authorityOwner')])
  }
});

/**
 * Stake authorization type
 */

/**
 * An enumeration of valid StakeAuthorizationLayout's
 */
const StakeAuthorizationLayout = Object.freeze({
  Staker: {
    index: 0
  },
  Withdrawer: {
    index: 1
  }
});

/**
 * Factory class for transactions to interact with the Stake program
 */
class StakeProgram {
  /**
   * @internal
   */
  constructor() {}

  /**
   * Public key that identifies the Stake program
   */

  /**
   * Generate an Initialize instruction to add to a Stake Create transaction
   */
  static initialize(params) {
    const {
      stakePubkey,
      authorized,
      lockup: maybeLockup
    } = params;
    const lockup = maybeLockup || Lockup.default;
    const type = STAKE_INSTRUCTION_LAYOUTS.Initialize;
    const data = encodeData(type, {
      authorized: {
        staker: toBuffer(authorized.staker.toBuffer()),
        withdrawer: toBuffer(authorized.withdrawer.toBuffer())
      },
      lockup: {
        unixTimestamp: lockup.unixTimestamp,
        epoch: lockup.epoch,
        custodian: toBuffer(lockup.custodian.toBuffer())
      }
    });
    const instructionData = {
      keys: [{
        pubkey: stakePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: SYSVAR_RENT_PUBKEY,
        isSigner: false,
        isWritable: false
      }],
      programId: this.programId,
      data
    };
    return new TransactionInstruction(instructionData);
  }

  /**
   * Generate a Transaction that creates a new Stake account at
   *   an address generated with `from`, a seed, and the Stake programId
   */
  static createAccountWithSeed(params) {
    const transaction = new Transaction();
    transaction.add(SystemProgram.createAccountWithSeed({
      fromPubkey: params.fromPubkey,
      newAccountPubkey: params.stakePubkey,
      basePubkey: params.basePubkey,
      seed: params.seed,
      lamports: params.lamports,
      space: this.space,
      programId: this.programId
    }));
    const {
      stakePubkey,
      authorized,
      lockup
    } = params;
    return transaction.add(this.initialize({
      stakePubkey,
      authorized,
      lockup
    }));
  }

  /**
   * Generate a Transaction that creates a new Stake account
   */
  static createAccount(params) {
    const transaction = new Transaction();
    transaction.add(SystemProgram.createAccount({
      fromPubkey: params.fromPubkey,
      newAccountPubkey: params.stakePubkey,
      lamports: params.lamports,
      space: this.space,
      programId: this.programId
    }));
    const {
      stakePubkey,
      authorized,
      lockup
    } = params;
    return transaction.add(this.initialize({
      stakePubkey,
      authorized,
      lockup
    }));
  }

  /**
   * Generate a Transaction that delegates Stake tokens to a validator
   * Vote PublicKey. This transaction can also be used to redelegate Stake
   * to a new validator Vote PublicKey.
   */
  static delegate(params) {
    const {
      stakePubkey,
      authorizedPubkey,
      votePubkey
    } = params;
    const type = STAKE_INSTRUCTION_LAYOUTS.Delegate;
    const data = encodeData(type);
    return new Transaction().add({
      keys: [{
        pubkey: stakePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: votePubkey,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: SYSVAR_CLOCK_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: SYSVAR_STAKE_HISTORY_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: STAKE_CONFIG_ID,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: authorizedPubkey,
        isSigner: true,
        isWritable: false
      }],
      programId: this.programId,
      data
    });
  }

  /**
   * Generate a Transaction that authorizes a new PublicKey as Staker
   * or Withdrawer on the Stake account.
   */
  static authorize(params) {
    const {
      stakePubkey,
      authorizedPubkey,
      newAuthorizedPubkey,
      stakeAuthorizationType,
      custodianPubkey
    } = params;
    const type = STAKE_INSTRUCTION_LAYOUTS.Authorize;
    const data = encodeData(type, {
      newAuthorized: toBuffer(newAuthorizedPubkey.toBuffer()),
      stakeAuthorizationType: stakeAuthorizationType.index
    });
    const keys = [{
      pubkey: stakePubkey,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: SYSVAR_CLOCK_PUBKEY,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: authorizedPubkey,
      isSigner: true,
      isWritable: false
    }];
    if (custodianPubkey) {
      keys.push({
        pubkey: custodianPubkey,
        isSigner: false,
        isWritable: false
      });
    }
    return new Transaction().add({
      keys,
      programId: this.programId,
      data
    });
  }

  /**
   * Generate a Transaction that authorizes a new PublicKey as Staker
   * or Withdrawer on the Stake account.
   */
  static authorizeWithSeed(params) {
    const {
      stakePubkey,
      authorityBase,
      authoritySeed,
      authorityOwner,
      newAuthorizedPubkey,
      stakeAuthorizationType,
      custodianPubkey
    } = params;
    const type = STAKE_INSTRUCTION_LAYOUTS.AuthorizeWithSeed;
    const data = encodeData(type, {
      newAuthorized: toBuffer(newAuthorizedPubkey.toBuffer()),
      stakeAuthorizationType: stakeAuthorizationType.index,
      authoritySeed: authoritySeed,
      authorityOwner: toBuffer(authorityOwner.toBuffer())
    });
    const keys = [{
      pubkey: stakePubkey,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: authorityBase,
      isSigner: true,
      isWritable: false
    }, {
      pubkey: SYSVAR_CLOCK_PUBKEY,
      isSigner: false,
      isWritable: false
    }];
    if (custodianPubkey) {
      keys.push({
        pubkey: custodianPubkey,
        isSigner: false,
        isWritable: false
      });
    }
    return new Transaction().add({
      keys,
      programId: this.programId,
      data
    });
  }

  /**
   * @internal
   */
  static splitInstruction(params) {
    const {
      stakePubkey,
      authorizedPubkey,
      splitStakePubkey,
      lamports
    } = params;
    const type = STAKE_INSTRUCTION_LAYOUTS.Split;
    const data = encodeData(type, {
      lamports
    });
    return new TransactionInstruction({
      keys: [{
        pubkey: stakePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: splitStakePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: authorizedPubkey,
        isSigner: true,
        isWritable: false
      }],
      programId: this.programId,
      data
    });
  }

  /**
   * Generate a Transaction that splits Stake tokens into another stake account
   */
  static split(params) {
    const transaction = new Transaction();
    transaction.add(SystemProgram.createAccount({
      fromPubkey: params.authorizedPubkey,
      newAccountPubkey: params.splitStakePubkey,
      lamports: 0,
      space: this.space,
      programId: this.programId
    }));
    return transaction.add(this.splitInstruction(params));
  }

  /**
   * Generate a Transaction that splits Stake tokens into another account
   * derived from a base public key and seed
   */
  static splitWithSeed(params) {
    const {
      stakePubkey,
      authorizedPubkey,
      splitStakePubkey,
      basePubkey,
      seed,
      lamports
    } = params;
    const transaction = new Transaction();
    transaction.add(SystemProgram.allocate({
      accountPubkey: splitStakePubkey,
      basePubkey,
      seed,
      space: this.space,
      programId: this.programId
    }));
    return transaction.add(this.splitInstruction({
      stakePubkey,
      authorizedPubkey,
      splitStakePubkey,
      lamports
    }));
  }

  /**
   * Generate a Transaction that merges Stake accounts.
   */
  static merge(params) {
    const {
      stakePubkey,
      sourceStakePubKey,
      authorizedPubkey
    } = params;
    const type = STAKE_INSTRUCTION_LAYOUTS.Merge;
    const data = encodeData(type);
    return new Transaction().add({
      keys: [{
        pubkey: stakePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: sourceStakePubKey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: SYSVAR_CLOCK_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: SYSVAR_STAKE_HISTORY_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: authorizedPubkey,
        isSigner: true,
        isWritable: false
      }],
      programId: this.programId,
      data
    });
  }

  /**
   * Generate a Transaction that withdraws deactivated Stake tokens.
   */
  static withdraw(params) {
    const {
      stakePubkey,
      authorizedPubkey,
      toPubkey,
      lamports,
      custodianPubkey
    } = params;
    const type = STAKE_INSTRUCTION_LAYOUTS.Withdraw;
    const data = encodeData(type, {
      lamports
    });
    const keys = [{
      pubkey: stakePubkey,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: toPubkey,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: SYSVAR_CLOCK_PUBKEY,
      isSigner: false,
      isWritable: false
    }, {
      pubkey: SYSVAR_STAKE_HISTORY_PUBKEY,
      isSigner: false,
      isWritable: false
    }, {
      pubkey: authorizedPubkey,
      isSigner: true,
      isWritable: false
    }];
    if (custodianPubkey) {
      keys.push({
        pubkey: custodianPubkey,
        isSigner: false,
        isWritable: false
      });
    }
    return new Transaction().add({
      keys,
      programId: this.programId,
      data
    });
  }

  /**
   * Generate a Transaction that deactivates Stake tokens.
   */
  static deactivate(params) {
    const {
      stakePubkey,
      authorizedPubkey
    } = params;
    const type = STAKE_INSTRUCTION_LAYOUTS.Deactivate;
    const data = encodeData(type);
    return new Transaction().add({
      keys: [{
        pubkey: stakePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: SYSVAR_CLOCK_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: authorizedPubkey,
        isSigner: true,
        isWritable: false
      }],
      programId: this.programId,
      data
    });
  }
}
StakeProgram.programId = new PublicKey('Stake11111111111111111111111111111111111111');
StakeProgram.space = 200;

/**
 * Vote account info
 */
class VoteInit {
  /** [0, 100] */

  constructor(nodePubkey, authorizedVoter, authorizedWithdrawer, commission) {
    this.nodePubkey = void 0;
    this.authorizedVoter = void 0;
    this.authorizedWithdrawer = void 0;
    this.commission = void 0;
    this.nodePubkey = nodePubkey;
    this.authorizedVoter = authorizedVoter;
    this.authorizedWithdrawer = authorizedWithdrawer;
    this.commission = commission;
  }
}

/**
 * Create vote account transaction params
 */

/**
 * Vote Instruction class
 */
class VoteInstruction {
  /**
   * @internal
   */
  constructor() {}

  /**
   * Decode a vote instruction and retrieve the instruction type.
   */
  static decodeInstructionType(instruction) {
    this.checkProgramId(instruction.programId);
    const instructionTypeLayout = _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction');
    const typeIndex = instructionTypeLayout.decode(instruction.data);
    let type;
    for (const [ixType, layout] of Object.entries(VOTE_INSTRUCTION_LAYOUTS)) {
      if (layout.index == typeIndex) {
        type = ixType;
        break;
      }
    }
    if (!type) {
      throw new Error('Instruction type incorrect; not a VoteInstruction');
    }
    return type;
  }

  /**
   * Decode an initialize vote instruction and retrieve the instruction params.
   */
  static decodeInitializeAccount(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 4);
    const {
      voteInit
    } = decodeData$1(VOTE_INSTRUCTION_LAYOUTS.InitializeAccount, instruction.data);
    return {
      votePubkey: instruction.keys[0].pubkey,
      nodePubkey: instruction.keys[3].pubkey,
      voteInit: new VoteInit(new PublicKey(voteInit.nodePubkey), new PublicKey(voteInit.authorizedVoter), new PublicKey(voteInit.authorizedWithdrawer), voteInit.commission)
    };
  }

  /**
   * Decode an authorize instruction and retrieve the instruction params.
   */
  static decodeAuthorize(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 3);
    const {
      newAuthorized,
      voteAuthorizationType
    } = decodeData$1(VOTE_INSTRUCTION_LAYOUTS.Authorize, instruction.data);
    return {
      votePubkey: instruction.keys[0].pubkey,
      authorizedPubkey: instruction.keys[2].pubkey,
      newAuthorizedPubkey: new PublicKey(newAuthorized),
      voteAuthorizationType: {
        index: voteAuthorizationType
      }
    };
  }

  /**
   * Decode an authorize instruction and retrieve the instruction params.
   */
  static decodeAuthorizeWithSeed(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 3);
    const {
      voteAuthorizeWithSeedArgs: {
        currentAuthorityDerivedKeyOwnerPubkey,
        currentAuthorityDerivedKeySeed,
        newAuthorized,
        voteAuthorizationType
      }
    } = decodeData$1(VOTE_INSTRUCTION_LAYOUTS.AuthorizeWithSeed, instruction.data);
    return {
      currentAuthorityDerivedKeyBasePubkey: instruction.keys[2].pubkey,
      currentAuthorityDerivedKeyOwnerPubkey: new PublicKey(currentAuthorityDerivedKeyOwnerPubkey),
      currentAuthorityDerivedKeySeed: currentAuthorityDerivedKeySeed,
      newAuthorizedPubkey: new PublicKey(newAuthorized),
      voteAuthorizationType: {
        index: voteAuthorizationType
      },
      votePubkey: instruction.keys[0].pubkey
    };
  }

  /**
   * Decode a withdraw instruction and retrieve the instruction params.
   */
  static decodeWithdraw(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 3);
    const {
      lamports
    } = decodeData$1(VOTE_INSTRUCTION_LAYOUTS.Withdraw, instruction.data);
    return {
      votePubkey: instruction.keys[0].pubkey,
      authorizedWithdrawerPubkey: instruction.keys[2].pubkey,
      lamports,
      toPubkey: instruction.keys[1].pubkey
    };
  }

  /**
   * @internal
   */
  static checkProgramId(programId) {
    if (!programId.equals(VoteProgram.programId)) {
      throw new Error('invalid instruction; programId is not VoteProgram');
    }
  }

  /**
   * @internal
   */
  static checkKeyLength(keys, expectedLength) {
    if (keys.length < expectedLength) {
      throw new Error(`invalid instruction; found ${keys.length} keys, expected at least ${expectedLength}`);
    }
  }
}

/**
 * An enumeration of valid VoteInstructionType's
 */

const VOTE_INSTRUCTION_LAYOUTS = Object.freeze({
  InitializeAccount: {
    index: 0,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction'), voteInit()])
  },
  Authorize: {
    index: 1,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction'), publicKey('newAuthorized'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('voteAuthorizationType')])
  },
  Withdraw: {
    index: 3,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.ns64('lamports')])
  },
  AuthorizeWithSeed: {
    index: 10,
    layout: _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('instruction'), voteAuthorizeWithSeedArgs()])
  }
});

/**
 * VoteAuthorize type
 */

/**
 * An enumeration of valid VoteAuthorization layouts.
 */
const VoteAuthorizationLayout = Object.freeze({
  Voter: {
    index: 0
  },
  Withdrawer: {
    index: 1
  }
});

/**
 * Factory class for transactions to interact with the Vote program
 */
class VoteProgram {
  /**
   * @internal
   */
  constructor() {}

  /**
   * Public key that identifies the Vote program
   */

  /**
   * Generate an Initialize instruction.
   */
  static initializeAccount(params) {
    const {
      votePubkey,
      nodePubkey,
      voteInit
    } = params;
    const type = VOTE_INSTRUCTION_LAYOUTS.InitializeAccount;
    const data = encodeData(type, {
      voteInit: {
        nodePubkey: toBuffer(voteInit.nodePubkey.toBuffer()),
        authorizedVoter: toBuffer(voteInit.authorizedVoter.toBuffer()),
        authorizedWithdrawer: toBuffer(voteInit.authorizedWithdrawer.toBuffer()),
        commission: voteInit.commission
      }
    });
    const instructionData = {
      keys: [{
        pubkey: votePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: SYSVAR_RENT_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: SYSVAR_CLOCK_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: nodePubkey,
        isSigner: true,
        isWritable: false
      }],
      programId: this.programId,
      data
    };
    return new TransactionInstruction(instructionData);
  }

  /**
   * Generate a transaction that creates a new Vote account.
   */
  static createAccount(params) {
    const transaction = new Transaction();
    transaction.add(SystemProgram.createAccount({
      fromPubkey: params.fromPubkey,
      newAccountPubkey: params.votePubkey,
      lamports: params.lamports,
      space: this.space,
      programId: this.programId
    }));
    return transaction.add(this.initializeAccount({
      votePubkey: params.votePubkey,
      nodePubkey: params.voteInit.nodePubkey,
      voteInit: params.voteInit
    }));
  }

  /**
   * Generate a transaction that authorizes a new Voter or Withdrawer on the Vote account.
   */
  static authorize(params) {
    const {
      votePubkey,
      authorizedPubkey,
      newAuthorizedPubkey,
      voteAuthorizationType
    } = params;
    const type = VOTE_INSTRUCTION_LAYOUTS.Authorize;
    const data = encodeData(type, {
      newAuthorized: toBuffer(newAuthorizedPubkey.toBuffer()),
      voteAuthorizationType: voteAuthorizationType.index
    });
    const keys = [{
      pubkey: votePubkey,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: SYSVAR_CLOCK_PUBKEY,
      isSigner: false,
      isWritable: false
    }, {
      pubkey: authorizedPubkey,
      isSigner: true,
      isWritable: false
    }];
    return new Transaction().add({
      keys,
      programId: this.programId,
      data
    });
  }

  /**
   * Generate a transaction that authorizes a new Voter or Withdrawer on the Vote account
   * where the current Voter or Withdrawer authority is a derived key.
   */
  static authorizeWithSeed(params) {
    const {
      currentAuthorityDerivedKeyBasePubkey,
      currentAuthorityDerivedKeyOwnerPubkey,
      currentAuthorityDerivedKeySeed,
      newAuthorizedPubkey,
      voteAuthorizationType,
      votePubkey
    } = params;
    const type = VOTE_INSTRUCTION_LAYOUTS.AuthorizeWithSeed;
    const data = encodeData(type, {
      voteAuthorizeWithSeedArgs: {
        currentAuthorityDerivedKeyOwnerPubkey: toBuffer(currentAuthorityDerivedKeyOwnerPubkey.toBuffer()),
        currentAuthorityDerivedKeySeed: currentAuthorityDerivedKeySeed,
        newAuthorized: toBuffer(newAuthorizedPubkey.toBuffer()),
        voteAuthorizationType: voteAuthorizationType.index
      }
    });
    const keys = [{
      pubkey: votePubkey,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: SYSVAR_CLOCK_PUBKEY,
      isSigner: false,
      isWritable: false
    }, {
      pubkey: currentAuthorityDerivedKeyBasePubkey,
      isSigner: true,
      isWritable: false
    }];
    return new Transaction().add({
      keys,
      programId: this.programId,
      data
    });
  }

  /**
   * Generate a transaction to withdraw from a Vote account.
   */
  static withdraw(params) {
    const {
      votePubkey,
      authorizedWithdrawerPubkey,
      lamports,
      toPubkey
    } = params;
    const type = VOTE_INSTRUCTION_LAYOUTS.Withdraw;
    const data = encodeData(type, {
      lamports
    });
    const keys = [{
      pubkey: votePubkey,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: toPubkey,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: authorizedWithdrawerPubkey,
      isSigner: true,
      isWritable: false
    }];
    return new Transaction().add({
      keys,
      programId: this.programId,
      data
    });
  }

  /**
   * Generate a transaction to withdraw safely from a Vote account.
   *
   * This function was created as a safeguard for vote accounts running validators, `safeWithdraw`
   * checks that the withdraw amount will not exceed the specified balance while leaving enough left
   * to cover rent. If you wish to close the vote account by withdrawing the full amount, call the
   * `withdraw` method directly.
   */
  static safeWithdraw(params, currentVoteAccountBalance, rentExemptMinimum) {
    if (params.lamports > currentVoteAccountBalance - rentExemptMinimum) {
      throw new Error('Withdraw will leave vote account with insuffcient funds.');
    }
    return VoteProgram.withdraw(params);
  }
}
VoteProgram.programId = new PublicKey('Vote111111111111111111111111111111111111111');
VoteProgram.space = 3731;

const VALIDATOR_INFO_KEY = new PublicKey('Va1idator1nfo111111111111111111111111111111');

/**
 * @internal
 */

const InfoString = (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.type)({
  name: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)(),
  website: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)()),
  details: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)()),
  keybaseUsername: (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.optional)((0,superstruct__WEBPACK_IMPORTED_MODULE_15__.string)())
});

/**
 * ValidatorInfo class
 */
class ValidatorInfo {
  /**
   * validator public key
   */

  /**
   * validator information
   */

  /**
   * Construct a valid ValidatorInfo
   *
   * @param key validator public key
   * @param info validator information
   */
  constructor(key, info) {
    this.key = void 0;
    this.info = void 0;
    this.key = key;
    this.info = info;
  }

  /**
   * Deserialize ValidatorInfo from the config account data. Exactly two config
   * keys are required in the data.
   *
   * @param buffer config account data
   * @return null if info was not found
   */
  static fromConfigData(buffer) {
    let byteArray = [...buffer];
    const configKeyCount = decodeLength(byteArray);
    if (configKeyCount !== 2) return null;
    const configKeys = [];
    for (let i = 0; i < 2; i++) {
      const publicKey = new PublicKey(byteArray.slice(0, PUBLIC_KEY_LENGTH));
      byteArray = byteArray.slice(PUBLIC_KEY_LENGTH);
      const isSigner = byteArray.slice(0, 1)[0] === 1;
      byteArray = byteArray.slice(1);
      configKeys.push({
        publicKey,
        isSigner
      });
    }
    if (configKeys[0].publicKey.equals(VALIDATOR_INFO_KEY)) {
      if (configKeys[1].isSigner) {
        const rawInfo = rustString().decode(buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from(byteArray));
        const info = JSON.parse(rawInfo);
        (0,superstruct__WEBPACK_IMPORTED_MODULE_15__.assert)(info, InfoString);
        return new ValidatorInfo(configKeys[1].publicKey, info);
      }
    }
    return null;
  }
}

const VOTE_PROGRAM_ID = new PublicKey('Vote111111111111111111111111111111111111111');
/**
 * See https://github.com/solana-labs/solana/blob/8a12ed029cfa38d4a45400916c2463fb82bbec8c/programs/vote_api/src/vote_state.rs#L68-L88
 *
 * @internal
 */
const VoteAccountLayout = _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([publicKey('nodePubkey'), publicKey('authorizedWithdrawer'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8('commission'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.nu64(),
// votes.length
_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.seq(_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.nu64('slot'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32('confirmationCount')]), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.offset(_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32(), -8), 'votes'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8('rootSlotValid'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.nu64('rootSlot'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.nu64(),
// authorizedVoters.length
_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.seq(_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.nu64('epoch'), publicKey('authorizedVoter')]), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.offset(_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32(), -8), 'authorizedVoters'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.seq(_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([publicKey('authorizedPubkey'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.nu64('epochOfLastAuthorizedSwitch'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.nu64('targetEpoch')]), 32, 'buf'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.nu64('idx'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u8('isEmpty')], 'priorVoters'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.nu64(),
// epochCredits.length
_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.seq(_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.nu64('epoch'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.nu64('credits'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.nu64('prevCredits')]), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.offset(_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.u32(), -8), 'epochCredits'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.struct([_solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.nu64('slot'), _solana_buffer_layout__WEBPACK_IMPORTED_MODULE_7__.nu64('timestamp')], 'lastTimestamp')]);
/**
 * VoteAccount class
 */
class VoteAccount {
  /**
   * @internal
   */
  constructor(args) {
    this.nodePubkey = void 0;
    this.authorizedWithdrawer = void 0;
    this.commission = void 0;
    this.rootSlot = void 0;
    this.votes = void 0;
    this.authorizedVoters = void 0;
    this.priorVoters = void 0;
    this.epochCredits = void 0;
    this.lastTimestamp = void 0;
    this.nodePubkey = args.nodePubkey;
    this.authorizedWithdrawer = args.authorizedWithdrawer;
    this.commission = args.commission;
    this.rootSlot = args.rootSlot;
    this.votes = args.votes;
    this.authorizedVoters = args.authorizedVoters;
    this.priorVoters = args.priorVoters;
    this.epochCredits = args.epochCredits;
    this.lastTimestamp = args.lastTimestamp;
  }

  /**
   * Deserialize VoteAccount from the account data.
   *
   * @param buffer account data
   * @return VoteAccount
   */
  static fromAccountData(buffer) {
    const versionOffset = 4;
    const va = VoteAccountLayout.decode(toBuffer(buffer), versionOffset);
    let rootSlot = va.rootSlot;
    if (!va.rootSlotValid) {
      rootSlot = null;
    }
    return new VoteAccount({
      nodePubkey: new PublicKey(va.nodePubkey),
      authorizedWithdrawer: new PublicKey(va.authorizedWithdrawer),
      commission: va.commission,
      votes: va.votes,
      rootSlot,
      authorizedVoters: va.authorizedVoters.map(parseAuthorizedVoter),
      priorVoters: getPriorVoters(va.priorVoters),
      epochCredits: va.epochCredits,
      lastTimestamp: va.lastTimestamp
    });
  }
}
function parseAuthorizedVoter({
  authorizedVoter,
  epoch
}) {
  return {
    epoch,
    authorizedVoter: new PublicKey(authorizedVoter)
  };
}
function parsePriorVoters({
  authorizedPubkey,
  epochOfLastAuthorizedSwitch,
  targetEpoch
}) {
  return {
    authorizedPubkey: new PublicKey(authorizedPubkey),
    epochOfLastAuthorizedSwitch,
    targetEpoch
  };
}
function getPriorVoters({
  buf,
  idx,
  isEmpty
}) {
  if (isEmpty) {
    return [];
  }
  return [...buf.slice(idx + 1).map(parsePriorVoters), ...buf.slice(0, idx).map(parsePriorVoters)];
}

const endpoint = {
  http: {
    devnet: 'http://api.devnet.solana.com',
    testnet: 'http://api.testnet.solana.com',
    'mainnet-beta': 'http://api.mainnet-beta.solana.com/'
  },
  https: {
    devnet: 'https://api.devnet.solana.com',
    testnet: 'https://api.testnet.solana.com',
    'mainnet-beta': 'https://api.mainnet-beta.solana.com/'
  }
};
/**
 * Retrieves the RPC API URL for the specified cluster
 */
function clusterApiUrl(cluster, tls) {
  const key = tls === false ? 'http' : 'https';
  if (!cluster) {
    return endpoint[key]['devnet'];
  }
  const url = endpoint[key][cluster];
  if (!url) {
    throw new Error(`Unknown ${key} cluster: ${cluster}`);
  }
  return url;
}

/**
 * Send and confirm a raw transaction
 *
 * If `commitment` option is not specified, defaults to 'max' commitment.
 *
 * @param {Connection} connection
 * @param {Buffer} rawTransaction
 * @param {TransactionConfirmationStrategy} confirmationStrategy
 * @param {ConfirmOptions} [options]
 * @returns {Promise<TransactionSignature>}
 */

/**
 * @deprecated Calling `sendAndConfirmRawTransaction()` without a `confirmationStrategy`
 * is no longer supported and will be removed in a future version.
 */
// eslint-disable-next-line no-redeclare

// eslint-disable-next-line no-redeclare
async function sendAndConfirmRawTransaction(connection, rawTransaction, confirmationStrategyOrConfirmOptions, maybeConfirmOptions) {
  let confirmationStrategy;
  let options;
  if (confirmationStrategyOrConfirmOptions && Object.prototype.hasOwnProperty.call(confirmationStrategyOrConfirmOptions, 'lastValidBlockHeight')) {
    confirmationStrategy = confirmationStrategyOrConfirmOptions;
    options = maybeConfirmOptions;
  } else if (confirmationStrategyOrConfirmOptions && Object.prototype.hasOwnProperty.call(confirmationStrategyOrConfirmOptions, 'nonceValue')) {
    confirmationStrategy = confirmationStrategyOrConfirmOptions;
    options = maybeConfirmOptions;
  } else {
    options = confirmationStrategyOrConfirmOptions;
  }
  const sendOptions = options && {
    skipPreflight: options.skipPreflight,
    preflightCommitment: options.preflightCommitment || options.commitment,
    minContextSlot: options.minContextSlot
  };
  const signature = await connection.sendRawTransaction(rawTransaction, sendOptions);
  const commitment = options && options.commitment;
  const confirmationPromise = confirmationStrategy ? connection.confirmTransaction(confirmationStrategy, commitment) : connection.confirmTransaction(signature, commitment);
  const status = (await confirmationPromise).value;
  if (status.err) {
    throw new Error(`Raw transaction ${signature} failed (${JSON.stringify(status)})`);
  }
  return signature;
}

/**
 * There are 1-billion lamports in one SOL
 */
const LAMPORTS_PER_SOL = 1000000000;


//# sourceMappingURL=index.browser.esm.js.map


/***/ }),

/***/ "./node_modules/@solana/web3.js/node_modules/base-x/src/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@solana/web3.js/node_modules/base-x/src/index.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
// @ts-ignore
var _Buffer = (__webpack_require__(/*! safe-buffer */ "./node_modules/safe-buffer/index.js").Buffer)
function base (ALPHABET) {
  if (ALPHABET.length >= 255) { throw new TypeError('Alphabet too long') }
  var BASE_MAP = new Uint8Array(256)
  for (var j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255
  }
  for (var i = 0; i < ALPHABET.length; i++) {
    var x = ALPHABET.charAt(i)
    var xc = x.charCodeAt(0)
    if (BASE_MAP[xc] !== 255) { throw new TypeError(x + ' is ambiguous') }
    BASE_MAP[xc] = i
  }
  var BASE = ALPHABET.length
  var LEADER = ALPHABET.charAt(0)
  var FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up
  var iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up
  function encode (source) {
    if (Array.isArray(source) || source instanceof Uint8Array) { source = _Buffer.from(source) }
    if (!_Buffer.isBuffer(source)) { throw new TypeError('Expected Buffer') }
    if (source.length === 0) { return '' }
        // Skip & count leading zeroes.
    var zeroes = 0
    var length = 0
    var pbegin = 0
    var pend = source.length
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++
      zeroes++
    }
        // Allocate enough space in big-endian base58 representation.
    var size = ((pend - pbegin) * iFACTOR + 1) >>> 0
    var b58 = new Uint8Array(size)
        // Process the bytes.
    while (pbegin !== pend) {
      var carry = source[pbegin]
            // Apply "b58 = b58 * 256 + ch".
      var i = 0
      for (var it1 = size - 1; (carry !== 0 || i < length) && (it1 !== -1); it1--, i++) {
        carry += (256 * b58[it1]) >>> 0
        b58[it1] = (carry % BASE) >>> 0
        carry = (carry / BASE) >>> 0
      }
      if (carry !== 0) { throw new Error('Non-zero carry') }
      length = i
      pbegin++
    }
        // Skip leading zeroes in base58 result.
    var it2 = size - length
    while (it2 !== size && b58[it2] === 0) {
      it2++
    }
        // Translate the result into a string.
    var str = LEADER.repeat(zeroes)
    for (; it2 < size; ++it2) { str += ALPHABET.charAt(b58[it2]) }
    return str
  }
  function decodeUnsafe (source) {
    if (typeof source !== 'string') { throw new TypeError('Expected String') }
    if (source.length === 0) { return _Buffer.alloc(0) }
    var psz = 0
        // Skip and count leading '1's.
    var zeroes = 0
    var length = 0
    while (source[psz] === LEADER) {
      zeroes++
      psz++
    }
        // Allocate enough space in big-endian base256 representation.
    var size = (((source.length - psz) * FACTOR) + 1) >>> 0 // log(58) / log(256), rounded up.
    var b256 = new Uint8Array(size)
        // Process the characters.
    while (source[psz]) {
            // Decode character
      var carry = BASE_MAP[source.charCodeAt(psz)]
            // Invalid character
      if (carry === 255) { return }
      var i = 0
      for (var it3 = size - 1; (carry !== 0 || i < length) && (it3 !== -1); it3--, i++) {
        carry += (BASE * b256[it3]) >>> 0
        b256[it3] = (carry % 256) >>> 0
        carry = (carry / 256) >>> 0
      }
      if (carry !== 0) { throw new Error('Non-zero carry') }
      length = i
      psz++
    }
        // Skip leading zeroes in b256.
    var it4 = size - length
    while (it4 !== size && b256[it4] === 0) {
      it4++
    }
    var vch = _Buffer.allocUnsafe(zeroes + (size - it4))
    vch.fill(0x00, 0, zeroes)
    var j = zeroes
    while (it4 !== size) {
      vch[j++] = b256[it4++]
    }
    return vch
  }
  function decode (string) {
    var buffer = decodeUnsafe(string)
    if (buffer) { return buffer }
    throw new Error('Non-base' + BASE + ' character')
  }
  return {
    encode: encode,
    decodeUnsafe: decodeUnsafe,
    decode: decode
  }
}
module.exports = base


/***/ }),

/***/ "./node_modules/@solana/web3.js/node_modules/bs58/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@solana/web3.js/node_modules/bs58/index.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var basex = __webpack_require__(/*! base-x */ "./node_modules/@solana/web3.js/node_modules/base-x/src/index.js")
var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'

module.exports = basex(ALPHABET)


/***/ })

}]);