import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Inicio',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  /* {
    title: 'Inicio',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  } */
  {
    title: 'Registro',
    group: true,
  },

  {
    title: 'Mantenimiento',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Registro de Usuarios',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Registro de Sede',
        link: '/pages/forms/layouts',
      },
    ],
  },
  {
    title: 'Registro',
    icon: 'book-outline',
    children: [
      {
        title: 'Registro de Software',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Registro de Hardware',
        link: '/pages/forms/layouts',
      },
    ],
  },
  {
    title: 'Reportes',
    icon: 'file-text-outline',
    children: [
      {
        title: 'Registro de Software',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Registro de Hardware',
        link: '/pages/forms/layouts',
      },
    ],
  },
  {
    title: 'Transferencias',
    icon: 'repeat-outline',
    children: [
      {
        title: 'Registro de Software',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Registro de Hardware',
        link: '/pages/forms/layouts',
      },
    ],
  }, 
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
