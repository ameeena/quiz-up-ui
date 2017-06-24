import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { SharedModule } from "../shared/shared.module";
import { AddTestComponent } from "./addTests/addTest.component";
import { TestsListComponent } from "./testsList/testsList.component";
import { UploadReadingMaterialComponent } from "./uploadReadingMaterialLinks/uploadReadingMaterialLinks.component";
import { UsersListComponent } from "./usersList/usersList.component";

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [
    AddTestComponent,
    TestsListComponent,
    UploadReadingMaterialComponent,
    UsersListComponent
  ],
  exports: [
    AddTestComponent,
    TestsListComponent,
    UploadReadingMaterialComponent,
    UsersListComponent
  ]
})
export class AdminModule { }
