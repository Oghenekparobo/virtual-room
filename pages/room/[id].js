import Script from "next/script";
import { useRouter } from "next/router";

export default function Room() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
       <Script
        src='https://unpkg.com/peerjs@1.4.5/dist/peerjs.min.js'
        onLoad={async () => {
          const peer = new Peer(`room-${id}-first`)

          const localStream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
          })

          document.querySelector('video#local').srcObject = localStream

          peer.on('call', (call) => {
            call.answer(localStream)

            call.on('stream', (remoteStream) => {
              document.querySelector('video#remote').srcObject = remoteStream
            })
          })
        }}
      />

      <div className="text-center p-8 text-xl opacity-25 text-blue-500">
        <h1>Hook up room </h1>
        <br />
        <span>share this link to add your plus one: {" "}</span>
        <a href={`/room/{id}/join`} className='hover:underline hover:text-green-500 transition-all'>
        https://0c4c-102-89-41-149.eu.ngrok.io/room/{id}
          </a>
      </div>
      <div className="flex mx-auto p-6">
        <video id="local" autoPlay playsInline muted></video>
        <video id="remote" autoPlay playsInline></video>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
