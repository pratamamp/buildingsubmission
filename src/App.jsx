import { Route, Routes } from "react-router-dom";
import SubmitLayout from "./layout/submitLayout";
import CheckingGPA from "./pages/checking";
import Home from "./pages/home";
import SearchPersil from "./pages/searchpersil";
import SubmissionPage from "./pages/submission";
import UploadFiles from "./pages/upload";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/submission" element={<SubmitLayout />}>
        {/* <Route index element={<SubmissionPage />} /> */}
        <Route index element={<SearchPersil />} />
        <Route path="/submission/2" element={<UploadFiles />} />
        <Route path="/submission/3" element={<CheckingGPA />} />
      </Route>
    </Routes>
  );
}

export default App;
