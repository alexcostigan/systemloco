import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDevices, Device } from "../services/api";

const DeviceList: React.FC = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getDevices()
      .then((devices) => {
        setDevices(devices);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to load devices");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen">{error}</div>;

  return (
    <div className="flex justify-center items-center h-screen">
      <ul className="menu bg-menu-bg w-2/3 rounded-box">
        <li className="menu-title text-font-colour"><span>Device Name/ID</span></li>
        {devices.map((device) => (
          <li key={device.id} className="mb-2">
            <Link
              to={`/device/${device.id}`}
              className="text-font-colour hover:underline"
            >
              {device.name || device.id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeviceList;
