// src/store/store.ts
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import rootReducer from "../reducers"; // Import your rootReducer

// Configure persistReducer
const persistConfig = {
  key: "root", // Key for the persist storage
  storage, // Storage method (localStorage in this case)
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
const store = createStore(persistedReducer);

// Create persistor
const persistor = persistStore(store);

export { store, persistor };
