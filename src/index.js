import "@babel/polyfill";
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
// https://react-ssr-api.herokuapp.com/

const app = express();

// For letting the browser access our public directory 
// Telling express to open the public directory for the outside world
app.use(express.static('public'));

app.get('*', (req, res) => { 
    const store = createStore();

    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    });

    Promise.all(promises).then(() => {
        res.send(renderer(req, store))
    });

});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});