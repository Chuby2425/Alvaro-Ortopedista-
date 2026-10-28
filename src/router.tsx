import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import AppLayout from "./layout/AppLayout";

export default function Router() {
  return (
    <BrowserRouter>
        <Routes >
          <Route element={<AppLayout/>}>
            <Route path="/" element={<HomeView/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}
