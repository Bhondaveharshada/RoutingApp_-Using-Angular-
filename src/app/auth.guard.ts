import { inject } from '@angular/core';
import { CanActivateFn , Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  let isLoggedin = typeof window !== 'undefined' ? sessionStorage.getItem('isLogin') : null;
  if(isLoggedin==null){
    alert('please login first')
    router.navigate(['login'])
    return false
  }
  return true;
};
