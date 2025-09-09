/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";
import { useEffect } from "react";

// Static imports from the `three` package to avoid runtime CDN resolution issues.
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
// Note: this file intentionally avoids strict TS types for Three.js example code.

export default function ThreeScenes() {
  useEffect(() => {
    let mounted = true;

  async function init() {
      function lerpColor(c1: unknown, c2: unknown, t: number) {
        // allow a narrow use of `any` here because these objects come from Three.js runtime
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const a: any = c1;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const b: any = c2;
        return a.clone().lerp(b, t);
      }

      function makeRenderer(container: HTMLElement, opts: { autoRotate?: boolean; autoRotateSpeed?: number } = {}) {
        if (!container) return null;
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
        // cap pixel ratio for better performance on mobile/high-dpi
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.innerHTML = '';
        container.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
        camera.position.set(0, 1.1, 6.2);

        const light = new THREE.DirectionalLight(0xffffff, 0.8);
        light.position.set(3, 4, 5);
        scene.add(light);
        scene.add(new THREE.AmbientLight(0xffffff, 0.45));

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.enablePan = false;
        controls.minDistance = 3.5;
        controls.maxDistance = 10;
        controls.autoRotate = !!opts.autoRotate;
        controls.autoRotateSpeed = opts.autoRotateSpeed ?? 0.6;
        controls.target.set(0, 0.2, 0);
        controls.update();

        function onResize() {
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          renderer.setSize(container.clientWidth, container.clientHeight, false);
          camera.aspect = container.clientWidth / container.clientHeight;
          camera.updateProjectionMatrix();
        }
        const ro = new ResizeObserver(onResize);
        ro.observe(container);

        return { renderer, scene, camera, controls, dispose: () => { ro.disconnect(); renderer.dispose(); } };
      }

  function addOrbit(scene, radius = 2.2, count = 40, tilt = 0.5, colorAhex = '#ff9f3f', colorBhex = '#ff7a1a', thickness = 0.02) {
        const colorA = new THREE.Color(colorAhex);
        const colorB = new THREE.Color(colorBhex);
        const group = new THREE.Group();
        group.rotation.x = tilt;
        scene.add(group);

  const segs = 200;
  const points = [];
        for (let i = 0; i <= segs; i++) {
          const a = (i / segs) * Math.PI * 2;
          points.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
        }
        const geo = new THREE.BufferGeometry().setFromPoints(points);
        const mat = new THREE.LineBasicMaterial({ color: lerpColor(colorA, colorB, 0.3), transparent: true, opacity: 0.35 });
        const line = new THREE.LineLoop(geo, mat);
        group.add(line);

        const sphereGeo = new THREE.SphereGeometry(thickness, 16, 16);
        const instMat = new THREE.MeshStandardMaterial({ color: colorA, emissive: colorB, emissiveIntensity: 0.35, roughness: 0.3, metalness: 0.2 });
  const inst = new THREE.InstancedMesh(sphereGeo, instMat, count);
  const dummy = new THREE.Object3D();
        for (let i = 0; i < count; i++) {
          const t = i / count;
          const a = t * Math.PI * 2 + Math.random() * 0.05;
          dummy.position.set(Math.cos(a) * radius, 0, Math.sin(a) * radius);
          dummy.scale.setScalar(1 + Math.sin(i * 1.7) * 0.15);
          dummy.rotation.y = a;
          dummy.updateMatrix();
          inst.setMatrixAt(i, dummy.matrix);
      const c = lerpColor(colorA, colorB, t);
      const instWithColor = inst as unknown as { setColorAt?: (index: number, color: unknown) => void };
      instWithColor.setColorAt?.(i, c);
        }
        group.add(inst);
        return group;
      }

    async function addLogoText(scene) {
        const loader = new FontLoader();
        // load font from unpkg at runtime
        const font = await loader.loadAsync('https://unpkg.com/three@0.160.0/examples/fonts/helvetiker_bold.typeface.json');
        const g1 = new TextGeometry('GSBG', {
          // font typing from loader is minimal; values are passed through
      font, size: 0.9, height: 0.22, curveSegments: 8, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.02, bevelSegments: 2,
        });
        g1.center();
        const m1 = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.15, roughness: 0.35, emissive: 0x111111, emissiveIntensity: 0.15 });
        const mesh1 = new THREE.Mesh(g1, m1);
        mesh1.position.y = 0.25;
        scene.add(mesh1);

        const g2 = new TextGeometry('TECHNOLOGIES', {
          font, size: 0.18, height: 0.04, curveSegments: 6, bevelEnabled: false,
        });
        g2.center();
        const m2 = new THREE.MeshStandardMaterial({ color: 0xfff2e6, roughness: 0.6, metalness: 0.05, emissive: new THREE.Color('#ff7a1a'), emissiveIntensity: 0.08 });
        const mesh2 = new THREE.Mesh(g2, m2);
        mesh2.position.y = -0.7;
        scene.add(mesh2);

        const glowGeo = new THREE.TorusGeometry(1.8, 0.005, 16, 200);
        const glowMat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#ff9f3f'), transparent: true, opacity: 0.35 });
        const glow = new THREE.Mesh(glowGeo, glowMat);
        glow.rotation.x = 0.5;
        glow.position.y = -0.15;
        scene.add(glow);

        return { mesh1, mesh2 };
      }

      // Re-add logo showcase for Sales Presentation demo (mount to #logoCanvasHost)
      // This only mounts to the element with id `logoCanvasHost` so the hero video remains unobstructed.
      const logoHost = document.getElementById('logoCanvasHost') as HTMLElement | null;
      if (logoHost && mounted) {
        const res = makeRenderer(logoHost, { autoRotate: true });
        if (res) {
          const { renderer, scene, camera, controls } = res;
          const gA = addOrbit(scene, 2.1, 30, 0.55);
          const gB = addOrbit(scene, 2.8, 42, 0.8);
          const gC = addOrbit(scene, 3.45, 62, 1.05);
          const gD = addOrbit(scene, 1.5, 18, 0.3);
          const center = new THREE.Group();
          scene.add(center);
          addLogoText(center);
          const pGeo = new THREE.BufferGeometry();
          const pCount = 300;
          const positions = new Float32Array(pCount * 3);
          for (let i = 0; i < pCount; i++) {
            const r = 4.2 + Math.random() * 3.2;
            const a = Math.random() * Math.PI * 2;
            const y = (Math.random() - 0.5) * 1.6;
            positions.set([Math.cos(a) * r, y, Math.sin(a) * r], i * 3);
          }
          pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
          const pMat = new THREE.PointsMaterial({ size: 0.02, color: 0xffffff, transparent: true, opacity: 0.6 });
          const points = new THREE.Points(pGeo, pMat);
          scene.add(points);
          const clock = new THREE.Clock();
          (function animate() {
            const t = clock.getElapsedTime();
            gA.rotation.y = t * 0.22;
            gB.rotation.y = -t * 0.16;
            gC.rotation.y = t * 0.12;
            gD.rotation.y = -t * 0.3;
            points.rotation.y = t * 0.045;
            controls.update();
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
          })();
        }
      }

  
    }

    init().catch((e) => console.error('ThreeScenes init error', e));

    return () => { mounted = false; };
  }, []);

  return null;
}