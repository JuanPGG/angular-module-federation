import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./ui/pages/pages.routes").then(m => m.routes)
  }
];
