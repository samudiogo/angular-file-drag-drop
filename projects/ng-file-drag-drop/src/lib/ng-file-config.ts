export interface INgFileDragDropConfig {

    showProgress?: boolean;
    showList?: boolean;
    loadMultiple?: boolean;

}

export class NgFileDragDropConfig implements INgFileDragDropConfig {

    showProgress?: boolean;
    showList?: boolean;
    loadMultiple?: boolean;

    constructor(
        options: INgFileDragDropConfig,
    ) {
        this.showProgress = typeof options.showProgress !== 'undefined' ? options.showProgress : true;
        this.showList = typeof options.showList !== 'undefined' ? options.showList : true;
        this.loadMultiple = typeof options.loadMultiple !== 'undefined' ? options.loadMultiple : true;
    }
}
