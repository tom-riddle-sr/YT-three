import create from "zustand"
import { nanoid } from "nanoid"

export const useStore = create((set) => {

  return {
    texture: 'dirt',
    cubes: [
      {
        key: nanoid(),
        pos: [1, 1, 1],
        texture: "dirt"
      },
      {
        key: nanoid(),
        pos: [2, 1, 1],
        texture: "wood"
      },
      {
        key: nanoid(),
        pos: [3, 1, 1],
        texture: "log"
      },
      {
        key: nanoid(),
        pos: [4, 1, 1],
        texture: "grass"
      },
      {
        key: nanoid(),
        pos: [5, 1, 1],
        texture: "glass"
      },
    ],
    addCube: (x, y, z) => {
      set((prev) => ({
        cubes: [
          ...prev.cubes,
          {
            key: nanoid(),
            pos: [x, y, z],
            texture: prev.texture
          }
        ]
      }))
    },
    removeCube: (x, y, z) => {
      set((prev) => ({
        cubes: [
          ...prev.cubes,
          {
            key: nanoid(),
            pos: [x, y, z],
            texture: prev.texture
          }
        ]
      }))
    },

  }
})