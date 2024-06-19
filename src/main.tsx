import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.scss"
import { TonConnectUIProvider } from "@tonconnect/ui-react"
import { EnergyProvider } from "./context/EnergyContext"

const manifestUrl =
  "https://igor-senichev.github.io/Demo_Web3_front_end/tonconnect-manifest.json"

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <QueryClientProvider client={queryClient}>
      <EnergyProvider>
        <App />
      </EnergyProvider>
    </QueryClientProvider>
  </TonConnectUIProvider>
)
