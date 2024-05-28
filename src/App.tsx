import React from "react";
import { Routes, Route } from "react-router-dom";
import DeviceList from "./components/DeviceList";
import DeviceDetail from "./components/DeviceDetail";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<DeviceList />} />
          <Route path="/device/:deviceId" element={<DeviceDetail />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
