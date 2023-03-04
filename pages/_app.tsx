import { Provider } from "react-redux";
import { store } from "@/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { saveState } from "@/local-storage";

store.subscribe(() => {
  console.log(store.getState());
  saveState(store.getState());
});

let persistor = persistStore(store);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>LOADING...</div>} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
