import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<QueryClientProvider client={queryClient}>
		<App />
	</QueryClientProvider>
);

serviceWorkerRegistration.register();
reportWebVitals();

serviceWorkerRegistration.register({
	onUpdate: () => {
		console.log("onUpdate");
	},
	onSuccess: () => {
		console.log("onSuccess");
	}
});