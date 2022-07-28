import Script from "next/script";
import { useRouter } from "next/router";

export default function Join() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
     <Script
        src='https://unpkg.com/peerjs@1.4.5/dist/peerjs.min.js'
        onLoad={async () => {
          const peer = new Peer(`room-${id}-second`)

          const localStream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
          })

          const call = peer.call(`room-${id}-first`, localStream)
          document.querySelector('video#local').srcObject = localStream

          call.on('stream', (remoteStream) => {
            document.querySelector('video#remote').srcObject = remoteStream
          })
        }}
      />


      <div className="flex">
        <video id="local" autoPlay playsInline muted></video>
        <video id="remote" autoPlay playsInline></video>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
