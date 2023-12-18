import SettingsPage from '../pages/settings.vue';
import NotFoundPage from '../pages/404.vue';

var routes = [
  {
    path: '/',
    component: SettingsPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
