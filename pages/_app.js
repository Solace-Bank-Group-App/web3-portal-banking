import { ThirdwebProvider } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      authConfig={{
        domain: "example.org",
        authUrl: "/api/auth",
        loginRedirect: "/",
      }}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
