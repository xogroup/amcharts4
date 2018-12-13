/**
 * A module defining functionality for axis grid elements.
 */
/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */
import { Sprite, ISpriteProperties, ISpriteEvents, ISpriteAdapters } from "../../core/Sprite";
import { AxisItemLocation, AxisDataItem, Axis } from "./Axis";
/**
 * ============================================================================
 * REQUISITES
 * ============================================================================
 * @hidden
 */
/**
 * Defines properties for [[Grid]].
 */
export interface IGridProperties extends ISpriteProperties {
    /**
     * Location of the grid item within cell. (0-1)
     *
     * @type {AxisItemLocation}
     */
    location?: AxisItemLocation;
}
/**
 * Defines events for [[Grid]].
 */
export interface IGridEvents extends ISpriteEvents {
}
/**
 * Defines adapters  for [[Grid]].
 *
 * @see {@link Adapter}
 */
export interface IGridAdapters extends ISpriteAdapters, IGridProperties {
}
/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * Displays an axis grid line.
 *
 * @see {@link IGridEvents} for a list of available events
 * @see {@link IGridAdapters} for a list of available Adapters
 * @todo Review: container is better, as we'll be able to attach something to the grid, also with 3d charts we might need some additional elements
 * @important
 */
export declare class Grid extends Sprite {
    /**
     * Defines available properties.
     *
     * @type {IGridProperties}
     */
    _properties: IGridProperties;
    /**
     * Defines available adapters.
     *
     * @type {IGridAdapters}
     */
    _adapter: IGridAdapters;
    /**
     * Defines available events.
     *
     * @type {IGridEvents}
     */
    _events: IGridEvents;
    /**
     * An axis data item that corresponds to the this grid element.
     *
     * @type {AxisDataItem}
     */
    _dataItem: AxisDataItem;
    /**
     * A referecent to Axis element this fill is applied to.
     *
     * @type {Axis}
     */
    axis: Axis;
    /**
     * Constructor
     */
    constructor();
    /**
     * @return {AxisItemLocation} Location (0-1)
     */
    /**
     * Location within axis cell to place grid line on.
     *
     * * 0 - start
     * * 0.5 - middle
     * * 1 - end
     *
     * @param {AxisItemLocation}  value  Location (0-1)
     */
    location: AxisItemLocation;
    /**
     * @ignore
     */
    protected setDisabled(value: boolean): boolean;
}
