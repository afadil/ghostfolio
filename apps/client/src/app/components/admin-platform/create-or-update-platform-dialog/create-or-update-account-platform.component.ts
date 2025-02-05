import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';

import { CreateOrUpdatePlatformDialogParams } from './interfaces/interfaces';

@Component({
  host: { class: 'h-100' },
  selector: 'gf-create-or-update-platform-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./create-or-update-platform-dialog.scss'],
  templateUrl: 'create-or-update-platform-dialog.html'
})
export class CreateOrUpdatePlatformDialog {
  private unsubscribeSubject = new Subject<void>();

  public constructor(
    public dialogRef: MatDialogRef<CreateOrUpdatePlatformDialog>,
    @Inject(MAT_DIALOG_DATA) public data: CreateOrUpdatePlatformDialogParams
  ) {}

  public onCancel() {
    this.dialogRef.close();
  }

  public ngOnDestroy() {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }
}
