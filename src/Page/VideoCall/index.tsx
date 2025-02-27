import React, { useEffect, useRef, useState, ReactNode } from 'react';
import { io, Socket } from 'socket.io-client';
import Peer from 'peerjs';
import Avatar from '../../Common/Avatar';
import { FaMicrophoneSlash } from 'react-icons/fa';
import { IoIosMic } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import CallVideoContext, {
  CallVideoContextAPI,
} from '../../Context/CallVideoContext';
import './index.css';
import useSocket from '../../Hook/useSocket';
import { useSelector } from 'react-redux';
import { getRoomSelect } from '../../Store/Room/room.store.selector';

const VideoCall: React.FC = () => {
  const [peerScreen, setPeerScreen] = useState<Peer | null>(null);
  const [toggleMic, setToggleMic] = useState<boolean>(false);
  const [toggleCamera, setToggleCamera] = useState<boolean>(false);
  const VideoRef = useRef<Record<string, MediaStream>>({});
  const [shareScreenTrack, setShareScreenTrack] = useState<MediaStream | null>(
    null
  );
  const roomId: number = useSelector(getRoomSelect);
  const [fullScreen, setFullScreen] = useState<number>(1);
  const { hanldeToggleCamera, hanldetoggleMic, hanldeShareScreen } =
    React.useContext(CallVideoContextAPI)!;
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (socket) {
  //     socket.on('createRoomResponse', (idRoom: number) => {
  //       setRoomId(idRoom);
  //       console.log(idRoom);
  //     });
  //   }
  // }, [socket]);

  // useEffect(() => {
  //   if (socket && myStream) {
  //     socket.on('toggleMicInRoom', (idUser: string, isActiveMic: boolean) => {
  //       console.log(`User ${idUser} toggled mic: ${isActiveMic}`);
  //       const audioTrack = VideoRef.current[idUser]?.getAudioTracks()[0];
  //       if (audioTrack) {
  //         audioTrack.enabled = isActiveMic;
  //       } else {
  //         console.error(`Audio track for user ${idUser} not found.`);
  //       }
  //     });
  //   }
  // }, [socket, myStream]);

  const addVideoStream = (
    video: HTMLVideoElement,
    stream: MediaStream,
    userId: string
  ) => {
    video.srcObject = stream;
    video.setAttribute('data-userid', userId);
    video.addEventListener('loadedmetadata', () => video.play());
    const gridVideo = document.getElementById('gridVideo');
    gridVideo?.append(video);
  };

  console.log('video call');
  return (
    <div>
      <div className="function">
        <button onClick={() => hanldeShareScreen()}>Share Screen</button>
        <button onClick={() => hanldetoggleMic(setToggleMic, toggleMic)}>
          {toggleMic ? <FaMicrophoneSlash /> : <IoIosMic />}
        </button>
        <button onClick={() => hanldeToggleCamera(roomId)}>
          Toggle Camera
        </button>
      </div>
      <div id="gridVideo"></div>
    </div>
  );
};

export default React.memo(VideoCall);
