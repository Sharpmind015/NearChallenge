import '../styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from "react-query"

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  )
}

export default MyApp
