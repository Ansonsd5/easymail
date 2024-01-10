
import LandingPage from '../container/LandingPage';
import TemplateViewPage from '../container/TemplateViewPage';
import NotFoundPage from '../container/NotFoundPage';

const routes = [
  { path: '/', component: LandingPage, exact: true },
  { path: '/template', component: TemplateViewPage, exact: true },
 
  { component: NotFoundPage }, 
];

export default routes;
