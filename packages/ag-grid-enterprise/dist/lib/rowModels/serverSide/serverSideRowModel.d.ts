// ag-grid-enterprise v18.1.1
import { BeanStub, IServerSideDatasource, IServerSideRowModel, RowNode, RowBounds } from "ag-grid";
export declare class ServerSideRowModel extends BeanStub implements IServerSideRowModel {
    private gridOptionsWrapper;
    private eventService;
    private context;
    private columnController;
    private filterManager;
    private sortController;
    private gridApi;
    private columnApi;
    private rootNode;
    private datasource;
    private rowHeight;
    private cacheParams;
    private logger;
    private rowNodeBlockLoader;
    private postConstruct();
    destroy(): void;
    private destroyDatasource();
    private setBeans(loggerFactory);
    private addEventListeners();
    setDatasource(datasource: IServerSideDatasource): void;
    isLastRowFound(): boolean;
    private onColumnEverything();
    private onFilterChanged();
    private findChangedColumnsInSort(newSortModel, oldSortModel);
    private onSortChanged();
    private onValueChanged();
    private onColumnRowGroupChanged();
    private onColumnPivotChanged();
    private onPivotModeChanged();
    private onRowGroupOpened(event);
    private reset();
    private createNewRowNodeBlockLoader();
    private destroyRowNodeBlockLoader();
    private toValueObjects(columns);
    private createCacheParams();
    private createNodeCache(rowNode);
    private onCacheUpdated();
    updateRowIndexesAndBounds(): void;
    private setDisplayIndexes(cache);
    private resetRowTops(cache);
    getRow(index: number): RowNode;
    getPageFirstRow(): number;
    getPageLastRow(): number;
    getRowCount(): number;
    getRowBounds(index: number): RowBounds;
    getRowIndexAtPixel(pixel: number): number;
    getCurrentPageHeight(): number;
    isEmpty(): boolean;
    isRowsToRender(): boolean;
    getType(): string;
    forEachNode(callback: (rowNode: RowNode) => void): void;
    private executeOnCache(route, callback);
    purgeCache(route?: string[]): void;
    removeFromCache(route: string[], items: any[]): void;
    addToCache(route: string[], items: any[], index: number): void;
    getNodesInRangeForSelection(firstInRange: RowNode, lastInRange: RowNode): RowNode[];
    getRowNode(id: string): RowNode;
    getBlockState(): any;
    isRowPresent(rowNode: RowNode): boolean;
    private extractSortModel();
    private isSortingWithValueColumn(changedColumnsInSort);
    private cacheExists();
}
