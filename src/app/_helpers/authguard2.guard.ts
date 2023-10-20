import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


export const Authguard2Guard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const service = inject(AuthService);
  const token = service.getAccessToken();

  if (token) {
    router.navigateByUrl('eleve/accueil')
    return false;

  } else {
    return true;
  }

};
