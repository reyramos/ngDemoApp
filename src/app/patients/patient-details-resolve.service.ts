import {Injectable}             from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {PatientService} from "./patients.service";


@Injectable()
export class PatientDetailsResolve implements Resolve<any> {

    constructor(private patientService: PatientService) {
    }

    resolve(route: ActivatedRouteSnapshot): Promise<any> | any {
        return this.patientService.getDetails();
    }

}
