import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import store from '../store';
import '../public/globals.css'
import ErrorBoundary from '../components/ErrorBoundary';
import { useEffect } from 'react';
import { getLocalStorage } from '../utils/local-storage/local-storage';
import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const Fallback = () => <div>Something went wrong.</div>

  useEffect(() => {
    if (router.pathname === '/login' || router.pathname === '/signup') return;
    const token = getLocalStorage('token');
    if (!token) {
      router.push('/login')
    }
  }, [])

  return <Provider store={store} >
    <ErrorBoundary fallback={<Fallback />}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
  </Provider>
}