import MainLayout from '@layouts/MainLayout';
import CreatePost from '@pages/CreatePost';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';

const routes = [
  {
    path: '/',
    name: 'Home',
    protected: false,
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/create-post',
    name: 'Create Post',
    protected: false,
    component: CreatePost,
    layout: MainLayout,
  },
  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;
