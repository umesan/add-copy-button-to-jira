import React, { FC } from "react";
import { createRoot } from "react-dom/client";
import { AppContainer } from "./components/AppContainer";
import { CopyFormat } from "./components/CopyFormat";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Heading } from "./components/Heading";
import { SettingShowButton } from "./components/SettingShowButton";
import { Summary } from "./components/Summary";
import "./styles/reset.scss";

type AppProps = {};
const App: FC<AppProps> = () => {
  const manifestData = chrome.runtime.getManifest();
  document.title = manifestData.name;

  return (
    <React.StrictMode>
      <Header />
      <AppContainer>
        <Heading />
        <Summary />
        <CopyFormat />
        <SettingShowButton />
      </AppContainer>
      <Footer />
    </React.StrictMode>
  );
};

const root = document.getElementById("app");
if (root) {
  createRoot(root).render(<App />);
}
