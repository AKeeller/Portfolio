import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faStadia } from './fontawesome/custom-icons/icons';

@NgModule({
	imports: [FontAwesomeModule],
})

export class FontAwesomeCustomIconsModule { }

library.add(faStadia);
dom.watch();