import { Route, Routes } from "react-router-dom";
import SubmitLayout from "./layout/submitLayout";
import Home from "./pages/home";
import SubmissionPage from "./pages/submission";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/submission" element={<SubmitLayout />}>
        <Route index element={<SubmissionPage />} />
      </Route>
    </Routes>
  );
}

export default App;
