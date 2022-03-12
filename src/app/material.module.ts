import { NgModule } from "@angular/core";

import {MatButtonModule} from '@angular/material/button';

//import {MatNativeDateModule,MatSnackBarModule,MatIconModule,MatDialogModule, MatButtonModule, MatTableModule, MatPaginatorModule , MatSortModule,MatTabsModule, MatCheckboxModule, MatToolbarModule, MatCard, MatCardModule, MatFormField, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule } from  '@angular/material';

@NgModule({
    imports: [MatButtonModule],
    exports: [MatButtonModule]
})

export class MaterialModule {}