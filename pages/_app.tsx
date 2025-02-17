// pages/_app.tsx
import './globals.css'; // Import your global CSS here
import { AppProps } from 'next/app';
import NavBar from '../components/navbar';


function App({ Component, pageProps }: AppProps) {
  return (
    <div>
        <NavBar/>
        <Component {...pageProps}></Component>
    </div>);
}

export default App;