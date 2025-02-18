import dynamic from 'next/dynamic';

const MapWrapper = dynamic(
  () => import('./IndiaMap'),
  { 
    ssr: false,
    loading: () => <div className="h-[80vh] w-full bg-gray-100 animate-pulse rounded-xl" />
  }
);

export default MapWrapper;