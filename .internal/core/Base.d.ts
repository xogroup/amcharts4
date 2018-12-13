/**
 * Base functionality
 */
/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */
import { IClone } from "./utils/Clone";
import { List } from "./utils/List";
import { Dictionary, DictionaryTemplate } from "./utils/Dictionary";
import { IDisposer } from "./utils/Disposer";
import { EventDispatcher, AMEvent } from "./utils/EventDispatcher";
import { Adapter } from "./utils/Adapter";
import { ITheme } from "../themes/ITheme";
import { Ordering } from "./utils/Order";
import * as $type from "./utils/Type";
/**
 * Provides base functionality for all derivative objects, like generating ids,
 * handling cache, etc.
 */
export declare class BaseObject implements IClone<BaseObject>, IDisposer {
    /**
     * A unique ID for this object.
     *
     * Generated on first access by `uid()` getter.
     *
     * @type {Optional<string>}
     * @ignore Exclude from docs
     */
    protected _uid: $type.Optional<string>;
    /**
     * Indicates if this object has already been deleted. Any
     * destruction/disposal code should take this into account when deciding
     * wheter to run potentially costly disposal operations if they already have
     * been run.
     *
     * @type {boolean}
     * @ignore Exclude from docs
     */
    protected _disposed: boolean;
    /**
     * List of IDisposer which will be disposed when the BaseObject is disposed.
     *
     * @ignore Exclude from docs
     */
    protected _disposers: Array<IDisposer>;
    /**
     * User-defined id of the object.
     *
     * @type {Optional<string>}
     * @ignore Exclude from docs
     */
    protected _id: $type.Optional<string>;
    /**
     * Holds a universal mapping collection, so that elements and their children
     * can create and look up all kinds of relations between id and object.
     *
     * @type {Optional<Dictionary<string, any>>}
     * @ignore Exclude from docs
     */
    protected _map: $type.Optional<Dictionary<string, any>>;
    /**
     * The theme used by this object.
     *
     * @type {Optional<ITheme[]>}
     * @ignore Exclude from docs
     */
    protected _themes: $type.Optional<ITheme[]>;
    /**
     * A list of objects that are clones of this object. An object needs to
     * maintain a list of its clones so that properties can be re-applied to
     * clones whenever property on the object they were cloned from changes.
     *
     * @type {Optional<Dictionary<string, this>>}
     */
    protected _clones: $type.Optional<List<this>>;
    /**
     * Reference to the original object this object was cloned from. We need to
     * keep this so we can disassociate it from source object when this object
     * is disposed.
     *
     * @type {Optional<this>}
     */
    clonedFrom: $type.Optional<this>;
    /**
     * A class name for the object.
     *
     * This property is used by deriving classes to identify which class it is.
     * We could derive the class name from the object itself, however method of
     * doing so is too costly, so we are relying on this property to quickly
     * access type of class.
     *
     * @type {Optional<string>}
     * @ignore Exclude from docs
     */
    protected _className: $type.Optional<string>;
    /**
     * [cloneId description]
     *
     * @type {Optional<string>}
     * @todo Needs description
     * @ignore Exclude from docs
     */
    cloneId: $type.Optional<string>;
    /**
     * Constructor
     * * Sets class name
     */
    constructor();
    protected debug(): void;
    /**
     * Returns object's internal unique ID.
     *
     * @return {string} Unique ID
     */
    readonly uid: string;
    /**
     * @return {Optional<string>} Id
     */
    /**
     * Sets the user-defined id of the element.
     *
     * @param {Optional<string>} value Id
     */
    id: $type.Optional<string>;
    /**
     * Returns a universal collection for mapping ids with objects.
     *
     * @ignore Exclude from docs
     * @return {Dictionary<string, any>} Map collection
     */
    readonly map: Dictionary<string, any>;
    /**
     * Applies properties from all assigned themes.
     *
     * @ignore Exclude from docs
     */
    applyTheme(): void;
    /**
     * @ignore Exclude from docs
     * @return {Optional<ITheme[]>} An array of themes
     */
    /**
     * A list of themes to be used for this element.
     *
     * @ignore Exclude from docs
     * @param {Optional<ITheme[]>} value An array of themes
     */
    themes: $type.Optional<ITheme[]>;
    /**
     * Returns a list of themes that should be applied to this element. It could
     * either be a list of themes set explicitly on this element, or system-wide.
     *
     * @return {ITheme[]} List of themes
     */
    getCurrentThemes(): ITheme[];
    /**
     * Returns if this object has been already been disposed.
     *
     * @return {boolean} Is disposed?
     */
    isDisposed(): boolean;
    /**
     * Destroys this object and all related data.
     */
    dispose(): void;
    /**
     * Adds an IDisposer, which will be disposed when this object is disposed.
     *
     * @param {IDisposer} target Object to dispose
     * @ignore Exclude from docs
     */
    addDisposer(target: IDisposer): void;
    /**
     * Disposes disposable object and removes it from `_disposers`.
     *
     * @param {IDisposer} target Object to dispose
     * @ignore Exclude from docs
     */
    removeDispose(target: IDisposer): void;
    /**
     * Makes a copy of this object and returns the clone. Try to avoid cloning complex objects like chart, create new instances if you need them.
     *
     * @param   {string}  cloneId  An id to use for clone (if not set a unique id will be generated)
     * @returns {Object}           Clone
     */
    clone<A extends this>(cloneId?: string): this;
    /**
     * Returns a collection of object's clones.
     *
     * @ignore Exclude from docs
     * @return {Dictionary<string, this>} Clones
     */
    readonly clones: List<this>;
    /**
     * Copies all properties and related data from different element.
     *
     * @param {this} object Source element
     */
    copyFrom(object: this): void;
    /**
     * @ignore Exclude from docs
     * @return {string} Class name
     */
    /**
     * Element's class name. (a class that was used to instantiate the element)
     *
     * @ignore Exclude from docs
     * @param {string}  value  Class name
     */
    className: $type.Optional<string>;
    /**
     * Caches value in object's cache.
     *
     * @ignore Exclude from docs
     * @param {string}  key    Key
     * @param {any}     value  Value
     * @param {number}  ttl    TTL in seconds
     */
    setCache(key: string, value: any, ttl?: number): void;
    /**
     * Retrieves cached value.
     *
     * If optional second padarameter is specified, it will return that value
     * if cache is not available or is expired.
     *
     * @ignore Exclude from docs
     * @param  {string}  key    Key
     * @param  {any}     value  Value to return if cache is not available
     * @return {any}            Value
     */
    getCache(key: string, value?: any): any;
    /**
     * Clears object's local cache.
     *
     * @ignore Exclude from docs
     */
    clearCache(): void;
    /**
     * Creates [[Disposer]] for `setTimeout` function call. This ensures that all
     * timeouts created by the object will be cleared when object itself is
     * disposed.
     *
     * @ignore Exclude from docs
     * @param  {() => void}  fn     Callback function
     * @param  {number}      delay  Timeout (ms)
     * @return {IDisposer}          Disposer for timeout
     */
    setTimeout(fn: () => void, delay: number): IDisposer;
    /**
     * Creates [[Disposer]] for `setInterval` function call. This ensures that all
     * timeouts created by the object will be cleared when object itself is
     * disposed.
     *
     * @ignore Exclude from docs
     * @param  {() => void}  fn     Callback function
     * @param  {number}      delay  Timeout (ms)
     * @return {IDisposer}          Disposer for timeout
     */
    setInterval(fn: () => void, delay: number): IDisposer;
    /**
     * ==========================================================================
     * JSON-BASED CONFIG PROCESSING
     * ==========================================================================
     * @hidden
     */
    /**
     * Use this property to set JSON-based config. When set, triggers processing
     * routine, which will go through all properties, and try to apply values,
     * create instances, etc.
     *
     * Use this with caution, as it is a time-consuming process. It's used for
     * initialchart setup only, not routine operations.
     *
     * @param {object} json JSON config
     */
    config: object;
    /**
     * Processes the JSON config.
     *
     * @param {object}  json  JSON config
     * @ignore Exclude from docs
     */
    protected processConfig(config?: object): void;
    /**
     * Tries to detect if value is color or percent and converts to proper object
     * if necessary.
     *
     * Returns the same source value if no color/percent detected
     *
     * @param  {any}  value  Source value
     * @return {any}         Converted value
     */
    protected maybeColorOrPercent(value: any): any;
    protected processAdapters(item: Adapter<any, any>, config: any): void;
    protected processEvents(item: EventDispatcher<any>, config: any): void;
    /**
     * Processes JSON config for a [[DictionaryTemplate]] item.
     *
     * @todo Description
     * @param {DictionaryTemplate<any, any>}  item    Item
     * @param {any}                           config  Config
     */
    protected processDictionaryTemplate(item: DictionaryTemplate<any, any>, config: any): void;
    /**
     * Processes JSON config for a [[Dictionary]] item.
     *
     * @todo Description
     * @param {Dictionary<any, any>}  item    Item
     * @param {any}                   config  Config
     */
    protected processDictionary(item: Dictionary<any, any>, config: any): void;
    /**
     * Processes [[List]].
     *
     * @param {any}        configValue  Config value
     * @param {List<any>}  item         Item
     */
    protected processList(configValue: any, item: List<any>): void;
    /**
     * This function is used to sort element's JSON config properties, so that
     * some properties that absolutely need to be processed last, can be put at
     * the end.
     *
     * @ignore Exclude from docs
     * @param  {string}  a  Element 1
     * @param  {string}  b  Element 2
     * @return {Ordering}   Sorting number
     */
    protected configOrder(a: string, b: string): Ordering;
    /**
     * Checks if field should be just assigned as is, without any checking when
     * processing JSON config.
     *
     * Extending functions can override this function to do their own checks.
     *
     * @param  {string}   field  Field name
     * @return {boolean}         Assign as is?
     */
    protected asIs(field: string): boolean;
    /**
     * Creates a relevant class instance if such class definition exists.
     *
     * @ignore Exclude from docs
     * @param  {string}  className  Class name
     * @return {Object}             Instance
     */
    protected createClassInstance(className: string): Object;
    /**
     * Creates a class instance for a config entry using it's type. (as set in
     * `type` property)
     *
     * @ignore Exclude from docs
     * @param  {any}  config  Config part
     * @return {any}          Instance
     */
    protected createEntryInstance(config: any): any;
    /**
     * Determines config object type.
     *
     * @ignore Exclude from docs
     * @param  {any}  config  Config part
     * @return {any}          Type
     */
    protected getConfigEntryType(config: any): any;
    /**
     * Checks if this element has a property.
     *
     * @ignore Exclude from docs
     * @param  {string}   prop  Property name
     * @return {boolean}        Has property?
     */
    protected hasProperty(prop: string): boolean;
}
/**
 * Defines events for [[BaseObjectEvents]].
 */
export interface IBaseObjectEvents {
}
/**
 * A version of [[BaseObject]] with events properties and methods.
 * Classes that use [[EventDispatcher]] should extend this instead of
 * [[BaseObject]] directly.
 */
export declare class BaseObjectEvents extends BaseObject {
    /**
     * Constructor
     */
    constructor();
    _events: IBaseObjectEvents;
    /**
     * An [[EventDispatcher]] instance
     */
    events: EventDispatcher<AMEvent<this, this["_events"]>>;
    /**
     * Dispatches an event using own event dispatcher. Will automatically
     * populate event data object with event type and target (this element).
     * It also checks if there are any handlers registered for this sepecific
     * event.
     *
     * @param {Key} eventType Event type (name)
     * @param {any}    data      Data to pass into event handler(s)
     */
    dispatch<Key extends keyof this["_events"]>(eventType: Key, data?: any): void;
    /**
     * Works like `dispatch`, except event is triggered immediately, without
     * waiting for the next frame cycle.
     *
     * @param {Key} eventType Event type (name)
     * @param {any}    data      Data to pass into event handler(s)
     */
    dispatchImmediately<Key extends keyof this["_events"]>(eventType: Key, data?: any): void;
    /**
     * Copies all parameters from another [[Sprite]].
     *
     * @param {BaseObjectEvents} source Source object
     */
    copyFrom(source: this): void;
}
