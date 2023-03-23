import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './views/header/header.component';
import { BannerComponent } from './views/banner/banner.component';
import { FooterComponent } from './views/footer/footer.component';

const routes: Routes = [
  {path:"header", component: HeaderComponent},
  {path:"banner", component: BannerComponent},
  {path:"footer", component: FooterComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
