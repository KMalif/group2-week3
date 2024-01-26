import MainLayout from '@layouts/MainLayout';
import CreatePost from '@pages/CreatePost';
import Home from '@pages/Home';
import Login from '@pages/Login';
import NotFound from '@pages/NotFound';
import SignUp from '@pages/SignUp';

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
  },

  {
    path: '/login',
    name: 'Login',
    protected: false,
    component: Login,
    layout: MainLayout,
  },


  {
    path: '/signup',
    name: 'Signup',
    protected: false,
    component: SignUp,
    layout: MainLayout,
  },
  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;
