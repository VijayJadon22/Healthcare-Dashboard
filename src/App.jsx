import DashboardMainContent from "./components/DashboardMainContent";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <div className="flex w-full min-h-screen">
        <Sidebar />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;
