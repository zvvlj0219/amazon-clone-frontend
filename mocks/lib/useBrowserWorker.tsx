import { SetupWorker } from 'msw/browser';
import { useEffect, useState } from 'react';

export default function useBrowserWorker() {
  const [mockWorker, setMockWorker] = useState<SetupWorker | null>(null);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development' || typeof window === 'undefined') {
      return
    }

    const start = async () => {
      const { worker } = await import('@/mocks/browser');
      
      worker.start();
      console.log('【 Mock Service Worker 】: Enabled');

      setMockWorker(worker);
    }

    start();

    return () => {
      mockWorker?.stop();
      console.log('【 Mock Service Worker 】: Disabled');
    }
  },[mockWorker]);
}