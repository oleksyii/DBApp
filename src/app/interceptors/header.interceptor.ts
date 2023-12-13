import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('interceptor awakening');
  const newReq = req.clone({
    headers: req.headers.set('Authorization', 'Bearer token_for_authorization'),
  });
  return next(newReq);
};
