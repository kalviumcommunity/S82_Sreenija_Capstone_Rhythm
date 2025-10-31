export const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

export const calculateAccuracy = (original, user) => {
  if (!original || !user) return 0
  
  const originalWords = original.toLowerCase().split(' ')
  const userWords = user.toLowerCase().split(' ')
  
  let correctWords = 0
  userWords.forEach((word, index) => {
    if (originalWords[index] === word) {
      correctWords++
    }
  })
  
  return Math.round((correctWords / originalWords.length) * 100)
}

export const analyzePitch = (frequency, targetFrequency) => {
  if (!frequency || !targetFrequency) return { isCorrect: false, difference: 0 }
  
  const difference = Math.abs(frequency - targetFrequency)
  const isCorrect = difference <= 2 // 2Hz tolerance
  
  return { isCorrect, difference }
}