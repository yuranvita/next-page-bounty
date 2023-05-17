import React, { useState, useEffect, useCallback } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, useMap, Popup } from 'react-leaflet';
import { type } from 'os';
import { Anybody } from 'next/font/google';
import { data } from 'autoprefixer';



type Burned = {
    bioma: string;
    createdAt: string;
    diassemchuva: number
    estado: string;
    frp: number;
    id: number;
    latitude: string;
    longitude: string;
    municipio: string;
    pais: string;
    precipitacao: number;
    riscofogo: number;
    satelite: string;
}


type MemoMarker = {
    position: [number, number];
    data: Burned;
}






export default function Map() {

    const [dataBurned, setDataBurned] = useState<Burned[]>([])
    const [geoData, setGeoData] = useState({ lat: 2.81879, lng: -60.67703 });
    const center = [geoData.lat, geoData.lng];


    useEffect(() => {
        async function fetchData() {
            const [data] = await Promise.all([
                await fetch("/api/burned").then(res => res.json()).catch(res => res)
            ])
            setDataBurned(data.data)

        }
        fetchData()
    }, [])






    const MemoizedMarker = React.memo(({ position, data }: MemoMarker) => (

        <Marker
            position={position}
            icon={L.icon({
                iconUrl: '/assets/flame1.png',
                iconRetinaUrl: '/assets/flame1.png',
                iconSize: [20, 20],
            })}
        >
            <Popup>
                <p>Data: {new Date(data.createdAt).toLocaleDateString('pt-BR')}</p>
                <p>Bioma: {data.bioma}</p>
                <p>Municipio: {data.municipio}</p>
                <p>Precipitação: {data.precipitacao}</p>
                <p>Risco de Fogo: {data.riscofogo}</p>
            </Popup>
        </Marker>
    ));


    const createMarkers = useCallback(() => {
        if (typeof dataBurned != typeof []) {
            console.log(dataBurned)
            return
        }
        return dataBurned.map((data) => (
            <MemoizedMarker

                key={data.id}
                data={data}
                position={[parseFloat(data.latitude), parseFloat(data.longitude)]}
            />
        ));
    }, [dataBurned]);

    function ChangeView({ coords }: any) {
        const map = useMap();
        map.setView(coords, 7)
        return null;
    }


    return (
        <div>
            <MapContainer style={{ height: '100vh' }}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                />
                {
                    createMarkers()
                }


                <ChangeView coords={center} />
            </MapContainer>
        </div>

    );
}



