"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// Small local GLTF type to avoid missing types from three/examples
type GLTF = { scene: THREE.Object3D };

const IndustryRobot = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<THREE.Group | null>(null);
  const headRef = useRef<THREE.Object3D | null>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    // copy ref to local variable to avoid stale-ref issues in cleanup
    const currentMount = mountRef.current;

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 200, 50, Math.PI / 4, 1, 2);
    spotLight.position.set(5, 10, 15);
    scene.add(spotLight);

    // Load Model
    const loader = new GLTFLoader();
    loader.load(
      '/assets/robot/gsbg2.glb',
      (gltf: GLTF) => {
        console.log(gltf);
        const model = gltf.scene;
        model.rotation.set(0, -Math.PI / 2, 0);

        model.traverse((child: THREE.Object3D) => {
          console.log(child.name);
          if (child.name.toLowerCase().includes('head') || child.name.toLowerCase().includes('neck')) {
            headRef.current = child;
          }
        });

        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        model.position.sub(center);

        const fov = camera.fov * (Math.PI / 180);
        const maxDim = Math.max(size.x, size.y, size.z);
        let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
        cameraZ *= 1.2;

        camera.position.z = cameraZ;

  robotRef.current = model as THREE.Group;
        scene.add(model);
        spotLight.target = model;
      },
      undefined,
      (error: unknown) => {
        console.error(error);
      }
    );

    const handleMouseMove = (event: MouseEvent) => {
      if (currentMount) {
        const rect = currentMount.getBoundingClientRect();
        mouse.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    let rafId = 0;
    let running = true;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      if (!running) return;

      if (headRef.current) {
        headRef.current.rotation.y = mouse.current.x * 0.5;
        headRef.current.rotation.x = -mouse.current.y * 0.2;
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (currentMount) {
        const width = currentMount.clientWidth;
        const height = currentMount.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      // stop loops and listeners
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);

      try {
        // dispose renderer resources
        renderer.dispose();
      } catch (e) {
        // ignore
      }

      // only remove the DOM element if it is still attached to a parent
      const el = renderer.domElement;
      if (el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default IndustryRobot;