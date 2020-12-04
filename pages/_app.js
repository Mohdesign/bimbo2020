import { FormspreeProvider } from '@formspree/react';
function App({ Component, pageProps }) {
  return (
  	<FormspreeProvider project="1560855655034649831">
      <Component {...pageProps} />
    </FormspreeProvider>
  );
}
export default App;