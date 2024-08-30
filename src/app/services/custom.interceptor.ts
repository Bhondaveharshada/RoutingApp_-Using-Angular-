import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  const myToken = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  if (myToken) {
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${myToken}`
      }
    });
    return next(clonedReq);
  }

  return next(req);
};
