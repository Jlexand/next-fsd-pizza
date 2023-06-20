import 'app/styles/app.scss'
import type { AppProps } from 'next/app'
import MainLayout from "../widgets/Layouts/MainLayout";
import {Provider} from "react-redux";
import {store} from "../app/store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
          <MainLayout>
              <Component {...pageProps} />
          </MainLayout>
      </Provider>
  )
}

export default MyApp
