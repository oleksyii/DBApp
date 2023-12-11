import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('interceptor awakening');
  const newReq = req.clone({
    headers: req.headers.set('Authorization', 'Bearer your_access_token'),
  });
  return next(newReq);
};
