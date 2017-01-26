import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App';
import ToDoList from './containers/ToDoList.js'
import NewToDo from './containers/NewToDo.js'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={ToDoList} />
        <Route path="/newToDo" component={NewToDo} />
      </Route>
    </Router>
  </Provider>, document.getElementById('container')
);
