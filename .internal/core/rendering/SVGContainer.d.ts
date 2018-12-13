/**
 * This functionality is related to the HTML wrapper that houses `<svg>` tag.
 */
/**
 * ============================================================================
 * IMPORTS
 * ============================================================================
 * @hidden
 */
import { Container } from "../Container";
import { Sprite } from "../Sprite";
import { IDisposer } from "../utils/Disposer";
import { Popup } from "../elements/Popup";
import { Modal } from "../elements/Modal";
import { ListTemplate } from "../utils/List";
import * as $type from "../utils/Type";
import ResizeSensor from "css-element-queries/src/ResizeSensor";
/**
 * ============================================================================
 * MAIN CLASS
 * ============================================================================
 * @hidden
 */
/**
 * A array of all SVG Containers (one SVG container per chart instance).
 *
 * @ignore Exclude from docs
 * @type {Array<SVGContainer>}
 */
export declare const svgContainers: Array<SVGContainer>;
/**
 * A class used to create an HTML wrapper for the SVG contents.
 */
export declare class SVGContainer implements IDisposer {
    /**
     * Indicates if this object has already been deleted. Any
     * destruction/disposal code should take this into account when deciding
     * wheter to run potentially costly disposal operations if they already have
     * been run.
     *
     * @type {boolean}
     */
    protected _disposed: boolean;
    /**
     * Width of HTML element.
     *
     * @type {Optional<number>}
     */
    width: $type.Optional<number>;
    /**
     * Height of HTML element.
     *
     * @type {Optional<number>}
     */
    height: $type.Optional<number>;
    /**
     * A [[Container]] element which is placed into container.
     *
     * @type {Optional<Container>}
     */
    protected _container: $type.Optional<Container>;
    /**
     * A parent HTML container that SVG wrapper element is placed in.
     *
     * @type {HTMLElement}
     */
    htmlElement: HTMLElement;
    /**
     * If this component is in a separate HTML container, `autoResize` means the
     * module will constantly measure container's size and adopt contents to it.
     *
     * @type {Boolean}
     */
    autoResize: Boolean;
    /**
     * A `<div>` element which acts as a wrapper/holder for the SVG element.
     *
     * @type {HTMLDivElement}
     */
    SVGContainer: HTMLDivElement;
    /**
     * A reference to ResizeSensor object which monitors changes of div size.
     *
     * @ignore
     * @type {ResizeSensor}
     */
    resizeSensor: ResizeSensor;
    /**
     * Holds list of references to [[Sprite]] objects that should not be exported
     * when exporting chart to an image.
     *
     * @ignore
     * @type {Sprite[]}
     */
    nonExportableSprites: Sprite[];
    /**
     * Holds [[Modal]] object.
     *
     * @ignore Exclude from docs
     * @type {Optional<Modal>}
     */
    protected _modal: $type.Optional<Modal>;
    /**
     * Holds [[Popup]] objects.
     *
     * @ignore Exclude from docs
     * @type {Optional<ListTemplate<Popup>>}
     */
    protected _popups: $type.Optional<ListTemplate<Popup>>;
    /**
     * List of objects that need to be disposed when this one is disposed.
     *
     * @type {Disposer[]}
     */
    protected _disposers: Array<IDisposer>;
    /**
     * Constructor
     *
     * * Creates an HTML wrapper for SVG
     */
    constructor(htmlElement: HTMLElement);
    /**
     * Measures size of parent HTML element.
     *
     * @ignore Exclude from docs
     */
    measure(): void;
    /**
     * @return {Optional<Container>} Container
     */
    /**
     * A [[Container]] element which is placed into container.
     *
     * @param {Optional<Container>}  container  Container
     */
    container: $type.Optional<Container>;
    /**
     * Returns if this object has been already been disposed.
     *
     * @return {boolean} Is disposed?
     */
    isDisposed(): boolean;
    /**
     * Removes this container from SVG container list in system, which
     * effectively disables size change monitoring for it.
     */
    dispose(): void;
    /**
     * Indicates if chart container should have its style set
     * to `overflow: hidden`.
     *
     * Normally, we don't want that, so that certain elements, such as tooltips,
     * would be able to go outside chart area.
     *
     * There is one issue though. Some browsers ignore SVG masks and would
     * display scrollbars if chart elements, that go outside chart area extend
     * outside window.
     *
     * This is especially true for [[MapChart]], which can have its elements
     * extend very widely when zoomed in. Even if those parts are not visible
     * because of SVG masks, some browsers might still display window scrollbars.
     *
     * This is why we set this setting to `true` in [[MapChart]].
     *
     * Other charts use default of `false`.
     */
    hideOverflow: boolean;
    /**
     * ==========================================================================
     * MODAL/POPUP RELATED STUFF
     * ==========================================================================
     * @hidden
     */
    /**
     * Returns a [[Modal]] instance, associated with this chart.
     * (elements top parent)
     *
     * Accessing modal does not make it appear. To make a modal appear, use
     * `showModal()` method.
     *
     * @see {@link Modal} for more information about using Modal windows
     * @return {Modal} Modal instance
     */
    readonly modal: Modal;
    /**
     * Opens a modal window with specific content (`text` parameter) and,
     * optionally, `title`.
     *
     * The `text` parameter can contain HTML content.
     *
     * @see {@link Modal} for more information about using Modal windows
     * @param {string}  text   Modal contents
     * @param {string}  title  Title for the modal window
     */
    openModal(text: string, title?: string): Modal;
    /**
     * Hides modal window if there is one currently open.
     */
    closeModal(): void;
    /**
     * A list of popups for this chart.
     *
     * @return {ListTemplate<Popup>} Popups
     */
    readonly popups: ListTemplate<Popup>;
    /**
     * Creates, opens, and returns a new [[Popup]] window.
     *
     * `text` can be any valid HTML.
     *
     * `title` is currently not supported.
     *
     * @param  {string}  text   Popup contents
     * @param  {string}  title  Popup title
     * @return {Popup}          Popup instance
     */
    openPopup(text: string, title?: string): Popup;
    /**
     * Closes all currently open popup windows
     */
    closeAllPopups(): void;
}