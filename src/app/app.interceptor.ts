import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../environments/environment.prod';

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  const urlPrefix = environment.apiUrl;
  return next(req.clone({
    url: `${urlPrefix}${req.url}`
  }));
};
