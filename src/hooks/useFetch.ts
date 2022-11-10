import { useEffect, useState } from 'react';
import { axiosInstance } from 'utils/helpers';

interface IfecthData {
  url: string;
  method: string;
  payload?: any;
  pause?: boolean;
}

export const useFetch = (
  fetchData: IfecthData,
  dependencies: any[] = [],
  retry: boolean = false
) => {
  const { method = 'get', url, payload, pause } = fetchData;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<any>();

  const fecthData = async () => {
    if (pause) return;
    setLoading(true);
    try {
      // @ts-ignore
      const response = await axiosInstance[method || 'get'](url, payload);
      setData(response.data?.data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fecthData();
  }, dependencies);

  return [loading, data, error];
};
