import Script from "next/script";
import { useRouter } from "next/router";

export default function Room() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Script
        src="https://unpkg.com/peerjs@1.4.5/dist/peerjs.min.js"
        onLoad={async () => {
          const peer = new Peer(`room-${id}-first`)
          const localStream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
          })
          document.querySelector('video#local').srcObject = localStream
        }}

        
      />
      <h1>room</h1>
      <div className="flex">
          <video id="local" playsInline muted></video>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
