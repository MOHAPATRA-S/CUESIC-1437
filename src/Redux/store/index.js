import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../saga';
import rootReducer from '../Reducer/index';
// import AsyncStorage from "@react-native-community/async-storage"
import { persistStore, persistReducer } from 'redux-persist';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(rootSaga)

export default store;