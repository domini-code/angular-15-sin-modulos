import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {

  const clonedRequest = req.clone({
    setHeaders: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${environment.apiKey}`,
    },
  });

  return next(clonedRequest);
};
