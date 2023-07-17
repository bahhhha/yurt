import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Callback = () => {
  const router = useRouter();

  useEffect(() => {
    const initialize = async () => {
      const fiefClient = new window.fief.Fief({
        baseURL: 'https://yurt-ai.fief.dev',
        clientId: 'nkBx5IWyzE1C8fwNB7q2ssIN5X4GKQ4bDtDqptO3OYE',
      });
      const fiefAuth = new window.fief.browser.FiefAuth(fiefClient);

      fiefAuth.authCallback('http://localhost:3000/callback').then(
        () => {
          router.push({
            pathname: '/',  // this should be the path to your starting page
            query: { message: 'Successful registration' },
          });
        }
      );
    };

    if (window.fief) {
      initialize();
    } else {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/@fief/fief/build/index.umd.js";
      script.addEventListener("load", initialize);
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>
      Callback page
    </div>
  )
};

export default Callback;
