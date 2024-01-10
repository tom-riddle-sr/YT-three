import { useCallback, useEffect, useState } from "react"

function actionByKey(key) {
  const keyActionMap = {
    KeyW: 'moveForward',
    KeyS: 'moveBackward',
    KeyA: 'moveLeft',
    KeyD: 'moveRight',
    Space: "jump",
    Digit1: "dirt",
    Digit2: "grass",
    Digit3: "glass",
    Digit4: "wood",
    Digit5: "log",
  }
  return keyActionMap[key]
}

export const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    texture1: false,
    texture2: false,
    texture3: false,
    texture4: false,
    texture5: false,
  })

  const handleKeydown = useCallback((e) => {
    const action = actionByKey(e.code)
    //set useState的方式 先展開過去的prev
    // a:true 新增一個屬性,如果是已經存在的就是更新
    // [a]:true 透過參數,動態新增一個屬性
    if (action) {
      setActions((prev) => {
        return ({
          ...prev,
          [action]: true
        })
      })
    }
  }, [])

  const handleKeyup = useCallback((e) => {
    const action = actionByKey(e.code)
    if (action) {
      setActions((prev) => {
        return ({
          ...prev,
          [action]: false
        })
      })
    }

  }, [])
  useEffect(() => {
    document.addEventListener("keydown", handleKeydown)
    document.addEventListener("keyup", handleKeyup)
    return () => {
      document.removeEventListener('keydown', handleKeydown)
      document.removeEventListener('keyup', handleKeyup)
    }
  }, [handleKeydown, handleKeyup])

  return actions

}