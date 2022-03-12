import { NgModule } from "@angular/core";

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatCheckboxModule } from "@angular/material/checkbox";


//import {MatNativeDateModule,MatSnackBarModule,MatIconModule,MatDialogModule, MatTableModule, MatPaginatorModule , MatSortModule,MatTabsModule, MatCheckboxModule, MatToolbarModule, MatCard, MatCardModule, MatFormField, MatProgressSpinnerModule,} from  '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatCheckboxModule],
    exports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatCheckboxModule]
})

export class MaterialModule {}