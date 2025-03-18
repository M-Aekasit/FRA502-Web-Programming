import {
  Environment,
  OrbitControls,
  PresentationControls,
  Text,
  useGLTF, Html
} from "@react-three/drei";

export default function Experience() {
  const farm = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-farm/model.gltf"
  );

  const lampPost = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/lamp-post/model.gltf"
  );

  const tree = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-tree/model.gltf"
  );

  const horse = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-horse/model.gltf"
  );

  const tractor = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tractor/model.gltf"
  );

  const zombieCar = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/zombie-car/model.gltf"
  );

  const Board = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/plate-rectangle/model.gltf"
  );

  return (
    <>
      <OrbitControls minDistance={110} maxDistance={100} />

      <Environment preset="city" />
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <primitive
          object={farm.scene}
          position-y={-1.2}
          rotation-x={0}
          scale={10.0}
        ></primitive>
        <primitive
          object={lampPost.scene}
          position={[5.0, -1.2, -1.4]}
          rotation-x={0}
          scale={5.0}
        ></primitive>
        <primitive
          object={tree.scene}
          position={[30.0, 1.2, -1.4]}
          rotation-x={0}
          scale={6.0}
        ></primitive>
        <primitive
          object={horse.scene}
          position={[23.0, -1.2, -12.4]}
          rotation={[0, 1.0, 0]}
          scale={3.0}
        ></primitive>

        <primitive
          object={tractor.scene}
          position={[23.0, -0.2, 12.4]}
          rotation={[0, -1.0, 0]}
          scale={3.0}
        ></primitive>

        <primitive
          object={zombieCar.scene}
          position={[7.0, 0.2, 12.4]}
          rotation={[0, -6.0, 0]}
          scale={5.0}
        ></primitive>


        <Html
          position={[-15.0, 0.0, -5.0]}
          rotation={[0.0, 0.5, 0.0]}
          transform
          style={{ width: "1200px", height: "1600px" }}
        >
          <iframe 
          src="https://www.saladfactorythailand.com/" 
          width="800" height="800" />
        </Html>

        <Text
          font="./PollerOne-Regular.woff"
          fontSize={8}
          color="rgb(68, 64, 64)"
          position={[0, 28.0, 0]}
          rotation-y={0.0}
          maxWidth={1000}
          textAlign="center"
        >
          FARM HUK
        </Text>
      </PresentationControls>
    </>
  );
}
