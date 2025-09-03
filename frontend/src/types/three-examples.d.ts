declare module 'three/examples/jsm/controls/OrbitControls' {
  import { Camera } from 'three';
  // Minimal typing surface for OrbitControls used in this project
  export class OrbitControls {
    constructor(object: Camera, domElement?: HTMLElement);
    enabled: boolean;
    enableDamping: boolean;
    enablePan: boolean;
    minDistance: number;
    maxDistance: number;
    autoRotate: boolean;
    autoRotateSpeed: number;
    target: import('three').Vector3;
    update(): void;
  }
}

declare module 'three/examples/jsm/loaders/FontLoader' {
  export class FontLoader {
    load(url: string, onLoad?: (font: unknown) => void): void;
    loadAsync(url: string): Promise<unknown>;
  }
}

declare module 'three/examples/jsm/geometries/TextGeometry' {
  import { BufferGeometry } from 'three';
  export class TextGeometry extends BufferGeometry {
    constructor(text: string, parameters?: unknown);
  }
}
