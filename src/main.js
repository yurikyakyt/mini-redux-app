import { HomePage } from './pages/home-page';
import { Router } from './router/router';
import { store } from './store';

const app = document.createElement('div');
app.id = 'app';
app.style.padding = '20px';
app.style.maxWidth = '400px';
app.style.margin = '0 auto';
document.body.appendChild(app);

// Подписка на изменения хранилища
store.subscribe(() => {
    console.log('State changed:', store.getState());
});

const routes = {
    '/': new HomePage(),
};

new Router(routes);