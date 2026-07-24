'use client';

import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowUpRight01Icon, Location05Icon } from '@hugeicons/core-free-icons';
import { meghalayaMapVenues, type VenueFeature } from '@/data/meghalayaMapVenues';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

const DEFAULT_CENTER: [number, number] = [91.4, 25.74];
const DEFAULT_ZOOM = 8;
const MAX_VISIBLE_TAGS = 4;

const MeghalayaMap = () => {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainer = useRef<HTMLDivElement>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const [selected, setSelected] = useState<VenueFeature | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(DEFAULT_ZOOM);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapRef.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: DEFAULT_CENTER,
      zoom: DEFAULT_ZOOM,
      minZoom: DEFAULT_ZOOM,
      maxZoom: 18,
      scrollZoom: false,
      doubleClickZoom: false,
      touchZoomRotate: false,
      boxZoom: false,
      keyboard: false,
    });

    const map = mapRef.current;
    const syncZoom = () => setZoomLevel(map.getZoom());

    map.on('load', () => {
      setMapReady(true);
      syncZoom();
    });
    map.on('zoom', syncZoom);
    map.on('zoomend', syncZoom);

    // Click on map background dismisses popup
    map.on('click', () => {
      setSelected(null);
    });

    meghalayaMapVenues.features.forEach((feature) => {
      const el = document.createElement('div');
      el.className = 'venue-marker-pin';
      el.style.cssText =
        'width:32px;height:42px;background:var(--color-purple);border:2px solid var(--color-white);border-radius:160px;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 8px rgba(16,24,40,0.12);pointer-events:auto;';
      el.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-white)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>`;
      el.onmouseenter = () => { el.style.boxShadow = '0 6px 14px rgba(72,135,233,0.4)'; };
      el.onmouseleave = () => { el.style.boxShadow = '0 4px 8px rgba(16,24,40,0.12)'; };

      el.addEventListener('click', (e) => {
        e.stopPropagation();
        setSelected(feature);
        map.flyTo({
          center: feature.geometry.coordinates,
          zoom: 10,
          speed: 1.2,
        });
      });

      const marker = new mapboxgl.Marker({ element: el })
        .setLngLat(feature.geometry.coordinates)
        .addTo(map);

      markersRef.current.push(marker);
    });

    return () => {
      map.off('zoom', syncZoom);
      map.off('zoomend', syncZoom);
      map.remove();
    };
  }, []);

  const handleZoomIn = () => {
    mapRef.current?.zoomIn({ duration: 200 });
  };

  const handleZoomOut = () => {
    const map = mapRef.current;
    if (!map || map.getZoom() <= DEFAULT_ZOOM + 1e-6) return;
    map.zoomOut({ duration: 200 });
  };

  const handleResetView = () => {
    const map = mapRef.current;
    if (!map) return;
    setSelected(null);
    map.flyTo({
      center: DEFAULT_CENTER,
      zoom: DEFAULT_ZOOM,
      bearing: 0,
      pitch: 0,
      duration: 800,
    });
  };

  const atMinZoom = zoomLevel <= DEFAULT_ZOOM + 0.01;

  const sportsList = selected?.properties?.sportsList || [];
  const visibleTags = sportsList.slice(0, MAX_VISIBLE_TAGS);
  const extraCount = sportsList.length - MAX_VISIBLE_TAGS;

  return (
    <div className="relative w-full rounded-2xl overflow-hidden">
      {/* Map container */}
      <div ref={mapContainer} className="w-full h-[350px] sm:h-[400px] lg:h-[550px] rounded-2xl" />

      {/* Zoom controls — left */}
      {mapReady && (
        <>
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-[5]">
            <button
              type="button"
              onClick={handleZoomIn}
              aria-label="Zoom in"
              className="w-10 h-10 p-0 text-[22px] font-bold leading-none text-purple bg-white border border-gray-200 rounded-lg cursor-pointer shadow-md flex items-center justify-center transition-colors hover:bg-gray-100 hover:border-gray-300"
            >
              +
            </button>
            <button
              type="button"
              onClick={handleZoomOut}
              disabled={atMinZoom}
              aria-label="Zoom out"
              className="w-10 h-10 p-0 text-[22px] font-bold leading-none text-purple bg-white border border-gray-200 rounded-lg cursor-pointer shadow-md flex items-center justify-center transition-colors hover:bg-gray-100 hover:border-gray-300 disabled:opacity-45 disabled:cursor-not-allowed"
            >
              −
            </button>
          </div>

          {/* Reset — right */}
          <div className="absolute top-3 right-3 z-[5]">
            <button
              type="button"
              onClick={handleResetView}
              aria-label="Reset map to default view"
              className="px-2.5 py-2 text-[16px] font-normal tracking-wide capitalize text-purple bg-white border border-map-border rounded-lg cursor-pointer shadow-md transition-colors hover:bg-map-hover-bg hover:text-map-hover-text"
            >
              Reset
            </button>
          </div>
        </>
      )}

      {/* Venue popup card */}
      {selected && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] max-sm:w-[calc(100%-32px)] bg-white rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.18)] z-10 animate-[fadeInUp_0.25s_ease-out]">
          {/* Image */}
          <div
            className="w-full h-[180px] max-sm:h-[140px] bg-cover bg-center bg-gray-200"
            style={{ backgroundImage: `url(${selected.properties.image})` }}
          />

          {/* Content */}
          <div className="px-5 pt-4 pb-5">
            <h3 className="m-0 mb-2 text-[18px] font-[550] text-map-text leading-tight font-dm-sans">
              {selected.properties.title}
            </h3>

            <div className="flex items-start gap-1.5 mb-3.5 text-[13px] text-gray-500 leading-relaxed">
              <HugeiconsIcon icon={Location05Icon} size={16} className="shrink-0 mt-0.5" />
              <span className="line-clamp-2">{selected.properties.address}</span>
            </div>

            {/* Sport tags */}
            <div className="flex flex-wrap items-center gap-1.5 mb-4">
              {visibleTags.map((sport, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-gray-100 rounded-lg text-[12px] text-gray-500 whitespace-nowrap leading-normal"
                >
                  {sport}
                </span>
              ))}
              {extraCount > 0 && (
                <span className="px-2 py-1 bg-purple text-white rounded-lg text-[12px] font-semibold flex items-center justify-center">
                  +{extraCount}
                </span>
              )}
            </div>

            {/* View details link */}
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-[18px] font-[550] text-map-link leading-tight no-underline transition-colors hover:text-map-link-hover"
            >
              View Details
              <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} />
            </a>
          </div>

          {/* Close button */}
          <button
            className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 border-none text-[18px] leading-none text-gray-700 flex items-center justify-center cursor-pointer shadow-md hover:bg-white"
            onClick={() => setSelected(null)}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default MeghalayaMap;