import React from "react";
import HomePage from "./pages/HomePage/homePage";

import { createWeb3Modal } from "@web3modal/wagmi/react";

import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { bsc } from "viem/chains";
import { walletConnectProvider, EIP6963Connector } from "@web3modal/wagmi";
import { publicProvider } from "wagmi/providers/public";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/Landing/LandingPage";
import FooterNew from "./components/Footer/FooterNew";
import { MenuaBarToggleProvider } from "./context/MenuBarContext";
import AboutusPage from "./pages/About/AboutusPage";
import OurTeam from "./pages/Our Team/OurTeam";
import PantherNews from "./pages/News/PantherNews";
// 1. Get projectId
const projectId = "45ff7348e614a721653a8d6d577b43da";

// 2. Create wagmiConfig
const metadata = {
  name: "Black Panther Token",
  description: "This is black panther token v2.",
};

const usedChains = [bsc];

const { chains, publicClient } = configureChains(usedChains, [
  walletConnectProvider({ projectId }),
  publicProvider(),
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new WalletConnectConnector({
      chains,
      options: { projectId, showQrModal: true, metadata },
    }),
    new EIP6963Connector({ chains }),
    new InjectedConnector({ chains, options: { shimDisconnect: true } }),
    new CoinbaseWalletConnector({
      chains,
      options: { appName: metadata.name },
    }),
  ],
  publicClient,
});

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

function App() {
  return (
    <MenuaBarToggleProvider>
    <WagmiConfig config={wagmiConfig}>
      <div className="h-full">
        
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/about-us" element={<AboutusPage />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/news" element={<PantherNews />} />
          </Routes> 
        </BrowserRouter>
        <FooterNew />
      </div>
    </WagmiConfig>
    </MenuaBarToggleProvider>
  );
}

export default App;
