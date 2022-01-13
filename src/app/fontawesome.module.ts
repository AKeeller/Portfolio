import { NgModule } from '@angular/core';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faStadia } from './fontawesome/custom-icons/icons';

@NgModule({})

export class FontAwesomeCustomIconsModule { }

library.add(faStadia);
dom.watch();