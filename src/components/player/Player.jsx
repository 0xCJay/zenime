import { useEffect, useState } from "react";

export default function Player({ episodeId, servertype }) {
  const [iframeSrc, setIframeSrc] = useState("");
  useEffect(() => {
    setIframeSrc(`https://megaplay.buzz/stream/s-2/${episodeId}/${servertype}`);
  }, [episodeId, servertype]);
  return (
    <div className="w-full h-full">
     <iframe
  src={iframeSrc}
  allowFullScreen
  className="w-full h-full"
  title="Player"></iframe>
    </div>
  );
}
