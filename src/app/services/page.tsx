'use client'
import dynamic from "next/dynamic";
const InteractiveGlobe = dynamic(() => import('@/components/IntractiveGlobe/IntractiveGlobe'), {
    ssr: false,
});

export default function Page() {

  return (
      <div>
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
              Study Abroad Services
          </h1>
            <InteractiveGlobe />
      </div>
  )
}
