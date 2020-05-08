import { Component } from '@angular/core';
import { NgFileDragDropConfig } from 'projects/ng-file-drag-drop/src/lib/ng-file-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'file-drag-and-drop';

  dragDropConfig = new NgFileDragDropConfig({loadMultiple: false});

  getUploadedFiles(files) {
    console.log('My uploaded files', files);
  }
}
