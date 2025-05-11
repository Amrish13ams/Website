"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function ThreeDAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    // Create a group to hold our objects
    const group = new THREE.Group()
    scene.add(group)

    // Create multiple cubes with different colors
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
    const cubeMaterials = [
      new THREE.MeshBasicMaterial({ color: 0x8844ff }), // Purple
      new THREE.MeshBasicMaterial({ color: 0x44ccff }), // Cyan
      new THREE.MeshBasicMaterial({ color: 0xff44aa }), // Pink
      new THREE.MeshBasicMaterial({ color: 0x44ffaa }), // Mint
    ]

    // Create and position cubes
    const cubes: THREE.Mesh[] = []

    for (let i = 0; i < 4; i++) {
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterials[i])
      cube.position.x = (Math.random() - 0.5) * 4
      cube.position.y = (Math.random() - 0.5) * 4
      cube.position.z = (Math.random() - 0.5) * 4
      cube.rotation.x = Math.random() * Math.PI
      cube.rotation.y = Math.random() * Math.PI
      group.add(cube)
      cubes.push(cube)
    }

    // Position camera
    camera.position.z = 5

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate the group
      group.rotation.y += 0.005
      group.rotation.x += 0.002

      // Rotate individual cubes
      cubes.forEach((cube, i) => {
        cube.rotation.x += 0.01 * (i + 1) * 0.2
        cube.rotation.y += 0.01 * (i + 1) * 0.3
      })

      renderer.render(scene, camera)
    }

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return

      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }

    window.addEventListener("resize", handleResize)

    // Start animation
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[300px]"
      style={{
        background: "transparent",
      }}
    />
  )
}
