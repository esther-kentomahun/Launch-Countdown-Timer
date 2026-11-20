import { useState, useEffect } from "react";
import CountdownCard from "./CountdownCard";

function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const launchDate = new Date("2026-12-31T00:00:00").getTime();
    useEffect(() => {
        let timer;
        const updateCountdown = () => {
            const now = Date.now();
            const difference = launchDate - now;
            if (difference <= 0) {
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
                clearInterval(timer);
                return;
            }
            const days = Math.floor(difference / (1000 * 60 * 60* 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / (1000 * 60)) % 60);
            const seconds = Math.floor((difference / 1000) % 60);
            setTimeLeft({
                days,
                hours,
                minutes,
                seconds,
            });
        };
        updateCountdown();
        timer = setInterval(updateCountdown, 1000);
        return () => {
            clearInterval(timer);
        };
    },[]);
    return (
        <div className="relative z-10 mt-16 flex justify-center gap-2 px-3 sm:gap-4 md:gap-10 lg:gap-12">
            <CountdownCard value={String(timeLeft.days).padStart(2, "0")} label="DAYS"/>
            <CountdownCard value={String(timeLeft.hours).padStart(2, "0")} label="HOURS"/>
            <CountdownCard value={String(timeLeft.minutes).padStart(2, "0")} label="MINUTES"/>
            <CountdownCard value={String(timeLeft.seconds).padStart(2, "0")} label="SECONDS"/>
        </div>
    );
}
export default CountdownTimer;