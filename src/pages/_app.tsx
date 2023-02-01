import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import "tailwind.css"

import { store } from "src/redux/store"
import { Layout, Footer, Navbar } from "src/components"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Navbar />
        <main className="p-4 overflow-auto mx-auto max-w-screen-lg w-full">
          <Component {...pageProps} />
        </main>
        <Footer />
      </Layout>
    </Provider>
  )
}
