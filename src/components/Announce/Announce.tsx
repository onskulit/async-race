import React from 'react';

interface AnnounceProps {
  children: React.ReactNode;
}

function Announce({ children }: AnnounceProps) {
  return (
    <div className="flex justify-center mt-2">
      {children}
    </div>
  );
}

export default Announce;
