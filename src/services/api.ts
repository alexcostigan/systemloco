import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export interface Device {
  id: string;
  name: string | null;
  model: {
    name: string;
    family: string;
    product: string;
  };
  lastReportTime: string;
  nextReportTime: string;
}

export const getDevices = async (): Promise<Device[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/listDevices`);
    console.log('Device:', response.data);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching device list:', error);
    throw error;
  }
};

export const getDeviceById = async (deviceId: string): Promise<Device> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/device/${deviceId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for device ${deviceId}:`, error);
    throw error;
  }
};
