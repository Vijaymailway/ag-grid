// Type definitions for ag-grid v12.0.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
import { CellComp } from "./cellComp";
import { RowNode } from "../entities/rowNode";
import { RowRenderer } from "./rowRenderer";
import { Column } from "../entities/column";
import { BeanStub } from "../context/beanStub";
import { RowContainerComponent } from "./rowContainerComponent";
export interface LastPlacedElements {
    eLeft: HTMLElement;
    eRight: HTMLElement;
    eBody: HTMLElement;
    eFullWidth: HTMLElement;
}
export declare class RowComp extends BeanStub {
    static EVENT_ROW_REMOVED: string;
    static DOM_DATA_KEY_RENDERED_ROW: string;
    private gridOptionsWrapper;
    private columnController;
    private columnAnimationService;
    private $compile;
    private mainEventService;
    private context;
    private focusedCellController;
    private cellRendererService;
    private gridPanel;
    private paginationProxy;
    private ePinnedLeftRow;
    private ePinnedRightRow;
    private eBodyRow;
    private eFullWidthRow;
    private eFullWidthRowBody;
    private eFullWidthRowLeft;
    private eFullWidthRowRight;
    private eAllRowContainers;
    private fullWidthRowComponent;
    private fullWidthRowComponentBody;
    private fullWidthRowComponentLeft;
    private fullWidthRowComponentRight;
    private renderedCells;
    private scope;
    private rowNode;
    private fullWidthRow;
    private fullWidthCellRenderer;
    private fullWidthCellRendererParams;
    private parentScope;
    private rowRenderer;
    private bodyContainerComp;
    private fullWidthContainerComp;
    private pinnedLeftContainerComp;
    private pinnedRightContainerComp;
    private fullWidthPinnedLeftLastTime;
    private fullWidthPinnedRightLastTime;
    private nextVmTurnFunctions;
    private delayedDestroyFunctions;
    private startRemoveAnimationFunctions;
    private renderedRowEventService;
    private editingRow;
    private initialised;
    private animateIn;
    private rowFocusedLastTime;
    private lastPlacedElements;
    private forPrint;
    constructor(parentScope: any, rowRenderer: RowRenderer, bodyContainerComp: RowContainerComponent, fullWidthContainerComp: RowContainerComponent, pinnedLeftContainerComp: RowContainerComponent, pinnedRightContainerComp: RowContainerComponent, node: RowNode, animateIn: boolean, lastPlacedElements: LastPlacedElements);
    private setupRowStub(animateInRowTop);
    private setupRowContainers(animateInRowTop);
    getAndClearDelayedDestroyFunctions(): Function[];
    getAndClearNextVMTurnFunctions(): Function[];
    private addDomData(eRowContainer);
    ensureInDomAfter(previousElement: LastPlacedElements): void;
    private setupFullWidthContainers(animateInRowTop);
    private addMouseWheelListenerToFullWidthRow();
    private setupFullWidthGroupContainers(animateInRowTop);
    private createFullWidthRow(animateInRowTop);
    private setupNormalContainers(animateInRowTop);
    init(): void;
    stopRowEditing(cancel: boolean): void;
    isEditing(): boolean;
    stopEditing(cancel?: boolean): void;
    startRowEditing(keyPress?: number, charPress?: string, sourceRenderedCell?: CellComp): void;
    private setEditingRow(value);
    private angular1Compile(element);
    private addColumnListener();
    private onDisplayedColumnsChanged();
    private onVirtualColumnsChanged(event);
    private onGridColumnsChanged();
    private isCellInWrongRow(renderedCell);
    private refreshCellsIntoRow();
    private isCellEligibleToBeRemoved(indexStr);
    private removeRenderedCells(colIds);
    private getContainerForCell(pinnedType);
    private ensureCellInCorrectContainer(cellComp, lastPlacedCells);
    private getLastPlacedCell(lastPlacedCells, pinned);
    private addToLastPlacedCells(eCell, lastPlacedCells, pinned);
    private getOrCreateCell(column);
    private onRowSelected();
    private addRowSelectedListener();
    onMouseEvent(eventName: string, mouseEvent: MouseEvent): void;
    private addHoverFunctionality();
    private addHoverClass(hover);
    private setRowFocusClasses();
    private addCellFocusedListener();
    private onPaginationChanged();
    forEachCellComp(callback: (renderedCell: CellComp) => void): void;
    private onNodeDataChanged(event);
    private addNodeDataChangedListener();
    private onTopChanged();
    private setRowTop(pixels);
    private setupTop(animateInRowTop);
    private setHeight();
    private addRowIndexes();
    private addRowIds();
    addEventListener(eventType: string, listener: Function): void;
    removeEventListener(eventType: string, listener: Function): void;
    getRenderedCellForColumn(column: Column): CellComp;
    getCellForCol(column: Column): HTMLElement;
    destroy(animate?: boolean): void;
    private destroyScope();
    isGroup(): boolean;
    private refreshFullWidthComponent();
    private createFullWidthComponent();
    private destroyFullWidthComponent();
    private createFullWidthParams(eRow, pinned);
    private createChildScopeOrNull(data);
    private addStyleFromRowStyle();
    private addStyleFromRowStyleFunc();
    private createParams();
    private createEvent(event, eventSource);
    private createRowContainer(rowContainerComp, slideRowIn, eElementBefore, ensureDomOrder);
    private animateRowIn(eRow, slideRowIn);
    private roundRowTopToBounds(rowTop);
    private onRowDblClick(event);
    onRowClick(event: MouseEvent): void;
    getRowNode(): RowNode;
    private addClassesFromRowClassFunc();
    private addGridClasses();
    private addExpandedAndContractedClasses();
    private addClassesFromRowClass();
    getPinnedLeftRowElement(): HTMLElement;
    getPinnedRightRowElement(): HTMLElement;
    getBodyRowElement(): HTMLElement;
    getFullWidthRowElement(): HTMLElement;
}