import { Route, Routes } from "react-router-dom";
import SubmitLayout from "./layout/submitLayout";
import Home from "./pages/home";
import SearchPersil from "./pages/searchpersil";
import SubmissionPage from "./pages/submission";
import UploadFiles from "./pages/upload";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/submission" element={<SubmitLayout />}>
        <Route index element={<SubmissionPage />} />
        <Route path="/submission/2" element={<SearchPersil />} />
        <Route path="/submission/3" element={<UploadFiles />} />
      </Route>
    </Routes>
  );
}

export default App;
