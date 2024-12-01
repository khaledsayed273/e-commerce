"use client";
import { memo, useEffect } from "react";

function ClientSideCode({visitorId}) {
    useEffect(() => {
        const interval = setTimeout( async() => {
            if (typeof window !== "undefined" && window.umami) {
                if (visitorId) {
                    clearTimeout(interval);
                    return; 
                }
                const userAgent = navigator.userAgent;
                const os = (() => {
                    if (userAgent.indexOf("Win") !== -1) return "Windows";
                    if (userAgent.indexOf("Mac") !== -1) return "MacOS";
                    if (userAgent.indexOf("X11") !== -1) return "UNIX";
                    if (userAgent.indexOf("Linux") !== -1) return "Linux";
                    return "Unknown OS";
                })();

                const browser = (() => {
                    if (userAgent.indexOf("Chrome") !== -1) return "Chrome";
                    if (userAgent.indexOf("Safari") !== -1) return "Safari";
                    if (userAgent.indexOf("Firefox") !== -1) return "Firefox";
                    if (userAgent.indexOf("Edge") !== -1) return "Edge";
                    if (userAgent.indexOf("Opera") !== -1 || userAgent.indexOf("OPR") !== -1) return "Opera";
                    return "Unknown Browser";
                })();
                umami.track(`Browser`, { browser });
                umami.track(`OS`, { os });
                clearTimeout(interval);
            }
        }, 100);
    }, []);

    return null;
}

export default memo(ClientSideCode);
