/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';

@Component({//decorador denro de una clase es basicamente una funcionalidad que se le aplica a una clase y modifica el comportamiento final
  //caracteristicas y propiedades del componente
  selector: 'ngx-app',///Etiqueta a usar dentro de angular(Nombre en "Index.html")
  template: '<router-outlet></router-outlet>',//
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService, private seoService: SeoService) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }
}
