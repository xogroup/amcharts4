/**
 * Zoom control module
 */
/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */
import { Container, IContainerProperties, IContainerAdapters, IContainerEvents } from "../../core/Container";
import { Sprite, ISpriteEvents, AMEvent } from "../../core/Sprite";
import { Button } from "../../core/elements/Button";
import { MapChart } from "../types/MapChart";
import { RoundedRectangle } from "../../core/elements/RoundedRectangle";
import { MutableValueDisposer } from "../../core/utils/Disposer";
/**
 * ============================================================================
 * REQUISITES
 * ============================================================================
 * @hidden
 */
/**
 * Defines properties for [[ZoomControl]].
 */
export interface IZoomControlProperties extends IContainerProperties {
}
/**
 * Defines events for [[ZoomControl]].
 */
export interface IZoomControlEvents extends IContainerEvents {
}
/**
 * Defines adapters for [[ZoomControl]].
 *
 * @see {@link Adapter}
 */
export interface IZoomControlAdapters extends IContainerAdapters, IZoomControlProperties {
}
/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * Creates a control for zooming the map.
 *
 * @see {@link IZoomControlEvents} for a list of available events
 * @see {@link IZoomControlAdapters} for a list of available Adapters
 * @important
 */
export declare class ZoomControl extends Container {
    /**
     * Defines available properties.
     *
     * @type {IZoomControlProperties}
     */
    _properties: IZoomControlProperties;
    /**
     * Defines available adapters.
     *
     * @type {IZoomControlAdapters}
     */
    _adapter: IZoomControlAdapters;
    /**
     * Defines available events.
     *
     * @type {IZoomControlEvents}
     */
    _events: IZoomControlEvents;
    /**
     * Zoom in button element.
     *
     * @type {Button}
     */
    plusButton: Button;
    /**
     * Zoom out button element.
     *
     * @type {Button}
     */
    minusButton: Button;
    /**
     * A zoom slider background element.
     *
     * @type {Container}
     */
    slider: Container;
    /**
     * A zoom slider thumb element.
     * @type {Button}
     */
    thumb: Button;
    /**
     * A target map.
     *
     * @type {MutableValueDisposer<MapChart>}
     */
    protected _chart: MutableValueDisposer<MapChart>;
    /**
     * A type to use for the background element for zoom control.
     *
     * @type {RoundedRectangle}
     */
    _background: RoundedRectangle;
    /**
     * Constructor
     */
    constructor();
    protected fixLayout(): void;
    /**
     * Handles zoom operation after clicking on the slider background.
     *
     * @ignore Exclude from docs
     * @param {AMEvent<Sprite, ISpriteEvents>["hit"]}  event  Event
     */
    handleBackgroundClick(event: AMEvent<Sprite, ISpriteEvents>["hit"]): void;
    /**
     * @return {MapChart} Map/chart
     */
    /**
     * A main chart/map that this zoom control is for.
     *
     * @param {MapChart}  chart  Map/chart
     */
    chart: MapChart;
    /**
     * Updates the slider's thumb size based on the available zoom space.
     *
     * @ignore Exclude from docs
     */
    updateThumbSize(): void;
    /**
     * Updates thumb according to current zoom position from map.
     *
     * @ignore Exclude from docs
     */
    updateThumb(): void;
    /**
     * Zooms the actual map when slider position changes.
     *
     * @ignore Exclude from docs
     */
    handleThumbDrag(): void;
    /**
     * Returns the step countfor the slider grid according to map's min and max
     * zoom level settings.
     *
     * @ignore Exclude from docs
     * @return {number} Step count
     */
    readonly stepCount: number;
    /**
     * Creates a background element for slider control.
     *
     * @ignore Exclude from docs
     * @return {this} Background
     */
    createBackground(): this["_background"];
}
