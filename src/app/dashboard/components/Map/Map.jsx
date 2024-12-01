"use client"
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import React, { useEffect, useState } from 'react'
import { ISO_COUNTRIES, MAP_FILE } from '../../../lib/mapData';
import { colord } from 'colord';
import useThemeHook from '../../Hooks/useThemeHook';
import useCountryNames from '../../Hooks/useCountryNames';
import { formatLongNumber } from '../../../lib/format';
import HoverTooltip from './components/HoverTooltip';


function Map({ firstDayTimestamp }) {
    const { countryNames } = useCountryNames("en-US");
    const [analyticsData, setAnalyticsData] = useState(null);
    const [tooltip, setTooltipPopup] = useState();
    const { theme, colors } = useThemeHook();

    const getFillColor = (code) => {
        if (code === 'AQ') return;
        const country = analyticsData?.find(({ x }) => x === code);

        if (!country) {
            return colors.map.fillColor;
        }
        return colord(colors.map.baseColor)
        [theme === 'light' ? 'lighten' : 'darken'](0.1 * (1.0 - country?.y / 100))
            .toHex();
    };

    const getOpacity = (code) => {
        return code === 'AQ' ? 0 : 1;
    };

    const handleHover = (code) => {
        if (code === 'AQ') return;
        const country = analyticsData?.find(({ x }) => x === code);
        setTooltipPopup(
            `${countryNames[code] || unknownLabel}: ${formatLongNumber(
                country?.y || 0,
            )}`,
        );
    };

    useEffect(() => {
        async function fetchData() {
            const timestamp = Date.now();
            try {
                const response = await fetch(`/api/getMatrics?endAt=${timestamp}&startAt=${firstDayTimestamp}&type=country`);
                if (!response.ok) {
                    throw new Error("Failed to fetch Umami stats");
                }

                const data = await response.json();
                setAnalyticsData(data);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className='col-span-8'>

            <ComposableMap className="bg-black/95" projection="geoMercator">
                <ZoomableGroup zoom={0.8} minZoom={0.7} center={[0, 40]}>
                    <Geographies geography={MAP_FILE?.features}>
                        {({ geographies }) => {
                            return geographies.map(geo => {
                                const code = ISO_COUNTRIES[geo.id];
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={getFillColor(code)}
                                        stroke={colors.map.strokeColor}
                                        opacity={getOpacity(code)}
                                        style={{
                                            default: { outline: 'none' },
                                            hover: { outline: 'none', fill: colors.map.hoverColor },
                                            pressed: { outline: 'none' },
                                        }}
                                        onMouseOver={() => handleHover(code)}
                                        onMouseOut={() => setTooltipPopup(null)}
                                    />
                                );
                            });
                        }}
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>

            {tooltip && <HoverTooltip>{tooltip}</HoverTooltip>}
        </div>
    )
}

export default Map