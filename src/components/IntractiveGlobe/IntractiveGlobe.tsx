"use client";

import { useState, useEffect, useRef } from "react";
import Globe from "react-globe.gl";

type GeoJsonFeature = {
    type: string;
    properties: {
        name: string;
        info: string;
    };
    geometry: {
        type: string;
        coordinates: [number, number];
    };
};

type GeoJson = {
    type: string;
    features: GeoJsonFeature[];
};

export default function InteractiveGlobe() {

    const [countries, setCountries] = useState<GeoJsonFeature[]>([]);
    const globeContainerRef = useRef<any>(null);
    const globeEl = useRef<any>(null);

    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (globeContainerRef.current) {
            const { offsetWidth } = globeContainerRef.current;
            setWidth(offsetWidth);
        }
    }, []);

    useEffect(() => {
        // Fetch GeoJSON data
        fetch("/data/highlighted-countries.json")
            .then((res) => res.json())
            .then((data: GeoJson) => setCountries(data.features))
            .catch((err) => console.error("Error loading GeoJSON data", err));
    }, []);

    useEffect(() => {
        let to:any;
        (function check() {
            if (globeEl.current) {
                // globeEl.current.controls().autoRotate = true;
                // globeEl.current.controls().autoRotateSpeed = 0.7;
                globeEl.current.pointOfView({ lat: 54.5260, lng: 15.2551, altitude: 0.9 });
            } else {
                to = setTimeout(check, 1000);
            }
        })();
        return () => {
            if (to) {
                clearTimeout(to);
            }
        };
    }, []);

    return (
        <div className="relative" ref={globeContainerRef}>
            <Globe
                ref={globeEl}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                labelsData={countries}
                labelLat={(d: any) => d.geometry.coordinates[1]}
                labelLng={(d: any) => d.geometry.coordinates[0]}
                labelText={(d: any) => d.properties.name}
                labelLabel={(d: any) => {
                    return `
<div
    style={{
        position: 'relative',
        display: 'inline-block'
    }}
>
    <div
        style={{
            backgroundColor: 'white',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            width: '18rem',
            border: '1px solid #e5e7eb',
            textAlign: 'left'
        }}
    >
        <h3
            style={{
                fontSize: '1.125rem',
                fontWeight: 'bold',
                color: '#0f75bc'
            }}
        >
            ${d.properties.name}
        </h3>
        <p
            style={{
                color: '#0f75bc',
                marginTop: '0.5rem'
            }}
        >
            ${d.properties.info}
        </p>
    </div>
</div>

                   `
                }}
                labelSize={1}
                labelDotRadius={0.5}
                labelColor={() => "#0f75bc"}
                labelAltitude={0}
                width={width}
                height={600}

            // onLabelClick={(d: any) => alert(`${d.properties.name}: ${d.properties.info}`)}
            />
        </div>

    );
}
