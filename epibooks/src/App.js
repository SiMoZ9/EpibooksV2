import MainLayout from "./layouts/MainLayout";
import Welcome from "./compontens/welcome/Welcome";
import LatestRelease from "./compontens/lastestRelease/LatestRelease";

function App() {
  return (
      <MainLayout>
        <Welcome/>
           <LatestRelease/>
      </MainLayout>
  );
}

export default App;
