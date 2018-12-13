/**
 * Slice module.
 */
/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */
import { Container, IContainerProperties, IContainerAdapters, IContainerEvents } from "../Container";
import { Sprite } from "../Sprite";
import { Percent } from "../utils/Percent";
import { IRectangle } from "../defs/IRectangle";
import { RadialGradient } from "../rendering/fills/RadialGradient";
/**
 * ============================================================================
 * REQUISITES
 * ============================================================================
 * @hidden
 */
/**
 * Defines properties for [[Slice]].
 */
export interface ISliceProperties extends IContainerProperties {
    /**
     * Radius of the slice in pixels.
     *
     * @type {number}
     */
    radius?: number;
    /**
     * Vertical radius for creating skewed slices.
     *
     * This is relevant to `radius`, e.g. 0.5 will set vertical radius to half
     * the `radius`.
     *
     * @type {number}
     */
    radiusY?: number;
    /**
     * Inner radius of the slice for creating cut out (donut) slices, in px or %
     *
     * @type {number}
     */
    innerRadius?: number | Percent;
    /**
     * The angle at which left edge of the slice is drawn. (0-360)
     *
     * 0 is to the right of the center.
     *
     * @type {number}
     */
    startAngle?: number;
    /**
     * [arc description]
     *
     * @todo Description
     * @type {number}
     */
    arc?: number;
    /**
     * [shiftRadius description]
     *
     * @todo Description
     * @type {number}
     */
    shiftRadius?: number;
    /**
     * Radius of slice's outer corners in pixels.
     *
     * @default 0
     * @type {number}
     */
    cornerRadius?: number;
    /**
     * Radius of slice's inner corners in pixels.
     *
     * @default 0
     * @type {number}
     */
    innerCornerRadius?: number;
}
/**
 * Defines events for [[Slice]].
 */
export interface ISliceEvents extends IContainerEvents {
}
/**
 * Defines adapters for [[Slice]].
 *
 * @see {@link Adapter}
 */
export interface ISliceAdapters extends IContainerAdapters, ISliceProperties {
}
/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * Draws a wedged semi-circle - slice. Usually used for Pie/Donut charts.
 *
 * @see {@link ISliceEvents} for a list of available events
 * @see {@link ISliceAdapters} for a list of available Adapters
 */
export declare class Slice extends Container {
    /**
     * Defines available properties.
     *
     * @type {ISliceProperties}
     */
    _properties: ISliceProperties;
    /**
     * Defines available adapters.
     *
     * @type {ISliceAdapters}
     */
    _adapter: ISliceAdapters;
    /**
     * Defines available events.
     *
     * @type {ISliceEvents}
     */
    _events: ISliceEvents;
    /**
     * Main slice element.
     *
     * Slice itself is a [[Container]] so that [[Slice3D]] could extend it and
     * add 3D elements to it.
     *
     * @type {Sprite}
     */
    slice: Sprite;
    /**
     * Constructor
     */
    constructor();
    /**
     * Draws the element.
     *
     * @ignore Exclude from docs
     */
    draw(): void;
    protected updateGradient(gradient: RadialGradient): void;
    /**
     * Returns bounding box (square) for this element.
     *
     * @ignore Exclude from docs
     * @type {IRectangle}
     */
    readonly bbox: IRectangle;
    /**
     * @return {number} Angle (0-360)
     */
    /**
     * The angle at which left edge of the slice is drawn. (0-360)
     *
     * 0 is to the right of the center.
     *
     * @param {number}  value  Angle (0-360)
     */
    startAngle: number;
    /**
     * @return {number} [description]
     */
    /**
     * [arc description]
     *
     * @todo Description
     * @param {number} value [description]
     */
    arc: number;
    /**
     * @return {number} Radius (px)
     */
    /**
     * Radius of the slice in pixels.
     *
     * @param {number}  value  Radius (px)
     */
    radius: number;
    /**
     * @return {number} Vertical radius (0-1)
     */
    /**
     * Vertical radius for creating skewed slices.
     *
     * This is relevant to `radius`, e.g. 0.5 will set vertical radius to half
     * the `radius`.
     *
     * @param {number} value Vertical radius (0-1)
     */
    radiusY: number;
    /**
     * @return {number | Percent} Radius (px or %)
     */
    /**
     * Inner radius of the slice for creating cut out (donut) slices.
     *
     * @default 0
     * @param {number | Percent}  value  Radius (px or %)
     */
    innerRadius: number | Percent;
    /**
     * @return {number} Radius px
     */
    readonly pixelInnerRadius: number;
    /**
     * @return {number} Radius (px)
     */
    /**
     * Radius of slice's outer corners in pixels.
     *
     * @default 0
     * @param {number}  value  Radius (px)
     */
    cornerRadius: number;
    /**
     * @return {number} Radius (px)
     */
    /**
     * Radius of slice's inner corners in pixels.
     *
     * @default 0
     * @param {number}  value  Radius (px)
     */
    innerCornerRadius: number;
    /**
     * @return {number} [description]
     */
    /**
     * [shiftRadius description]
     *
     * 0-1
     *
     * @todo Description
     * @param {number} value [description]
     */
    shiftRadius: number;
    /**
     * [ix description]
     *
     * @ignore Exclude from docs
     * @todo Description
     * @return {number} [description]
     */
    readonly ix: number;
    /**
     * [iy description]
     *
     * @ignore Exclude from docs
     * @todo Description
     * @return {number} [description]
     */
    readonly iy: number;
    /**
     * An angle of the slice's middle.
     *
     * @ignore Exclude from docs
     * @return {number} Angle
     */
    readonly middleAngle: number;
    /**
     * X coordinate for the slice tooltip.
     *
     * @return {number} X
     */
    protected getTooltipX(): number;
    /**
     * Y coordinate for the slice tooltip.
     *
     * @return {number} Y
     */
    protected getTooltipY(): number;
}
