import { useState, useEffect, useRef } from 'react'

export const useWebRTC = (roomId) => {
  const [localStream, setLocalStream] = useState(null)
  const [remoteStreams, setRemoteStreams] = useState([])
  const [isMuted, setIsMuted] = useState(false)
  const peerConnection = useRef(null)

  useEffect(() => {
    initializeWebRTC()
    return () => {
      if (localStream) {
        localStream.getTracks().forEach(track => track.stop())
      }
    }
  }, [roomId])

  const initializeWebRTC = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false
      })
      setLocalStream(stream)
    } catch (error) {
      console.error('Error accessing microphone:', error)
    }
  }

  const toggleMute = () => {
    if (localStream) {
      localStream.getAudioTracks().forEach(track => {
        track.enabled = !track.enabled
      })
      setIsMuted(!isMuted)
    }
  }

  return {
    localStream,
    remoteStreams,
    isMuted,
    toggleMute,
  }
}