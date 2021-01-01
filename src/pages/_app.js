import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/tailwind.css'


// create a QueryClient

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    // Provide the client to your App 
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )

}

export default MyApp
