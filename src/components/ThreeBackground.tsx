import { useEffect, useRef } from "react";

const ThreeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const loadThree = async () => {
      const THREE = await import("three");
      const canvas = canvasRef.current;
      if (!canvas) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      camera.position.z = 5;

      const green = new THREE.Color(0x6fb535);
      const greenDark = new THREE.Color(0x3d6020);

      // Torus knot
      const tkGeo = new THREE.TorusKnotGeometry(2.2, 0.55, 120, 18);
      const tkMat = new THREE.MeshBasicMaterial({ color: green, wireframe: true, transparent: true, opacity: 0.08 });
      const tk = new THREE.Mesh(tkGeo, tkMat);
      scene.add(tk);

      // Icosahedron
      const iGeo = new THREE.IcosahedronGeometry(1.6, 1);
      const iMat = new THREE.MeshBasicMaterial({ color: greenDark, wireframe: true, transparent: true, opacity: 0.06 });
      const ico = new THREE.Mesh(iGeo, iMat);
      scene.add(ico);

      // Particles
      const pGeo = new THREE.BufferGeometry();
      const pCount = 600;
      const pPos = new Float32Array(pCount * 3);
      for (let i = 0; i < pCount * 3; i++) pPos[i] = (Math.random() - 0.5) * 18;
      pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
      const pMat = new THREE.PointsMaterial({ color: green, size: 0.018, transparent: true, opacity: 0.5 });
      scene.add(new THREE.Points(pGeo, pMat));

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", handleResize);

      let t = 0;
      let animId: number;
      const animate = () => {
        t += 0.004;
        tk.rotation.x = t * 0.4;
        tk.rotation.y = t * 0.25;
        ico.rotation.x = -t * 0.3;
        ico.rotation.y = t * 0.5;
        renderer.render(scene, camera);
        animId = requestAnimationFrame(animate);
      };
      animate();

      return () => {
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animId);
        renderer.dispose();
      };
    };

    loadThree();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-45"
    />
  );
};

export default ThreeBackground;
