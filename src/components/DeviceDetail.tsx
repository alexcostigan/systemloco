import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDeviceById, Device } from "../services/api";

const DeviceDetail: React.FC = () => {
  const { deviceId } = useParams<{ deviceId: string }>();
  const navigate = useNavigate();
  const [device, setDevice] = useState<Device | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!deviceId) {
      setError("Invalid device ID");
      setLoading(false);
      return;
    }

    getDeviceById(deviceId)
      .then((device) => {
        console.log("Device:", device);
        setDevice(device);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to load device details");
        setLoading(false);
      });
  }, [deviceId]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen">{error}</div>
    );
  if (!device)
    return (
      <div className="flex justify-center items-center h-screen">
        Device not found
      </div>
    );

  const modelName = device.model?.name || "Unknown Model";
  const modelFamily = device.model?.family || "Unknown Family";
  const modelProduct = device.model?.product || "Unknown Product";

  return (
    <div className="flex justify-start items-center h-screen">
      <div className="card w-2/3 bg-menu-bg shadow-xl m-4">
        <div className="card-body text-font-colour">
        <button
            className="btn bg-button-primary mt-4 w-12"
            onClick={() => navigate("/")}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
                fill="#191C1D"
              />
            </svg>
          </button>
          <h2 className="card-title">
            <strong>ID:</strong> {device.id}
          </h2>
          <p className="mb-2">
            <strong>Model:</strong> {modelName}
          </p>
          <p className="mb-2">
            <strong>Family:</strong> {modelFamily}
          </p>
          <p className="mb-2">
            <strong>Product:</strong> {modelProduct}
          </p>
          <div className="card-actions justify-end">
            <p className="mb-2">
              <strong>Last Report Time:</strong> {device.lastReportTime}
            </p>
            <p className="mb-2">
              <strong>Next Report Time:</strong> {device.nextReportTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceDetail;
