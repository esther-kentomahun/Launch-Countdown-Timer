function CountdownCard({ value, label }) {
    return (
        <div className="flex w-16 flex-col items-center gap-3 sm:gap-4 md:w-36">
            <div className=" relative flex h-16 w-16 rounded-lg bg-[#343650] shadow-[0_12px_0_0_#191a24] sm:w-20 md:h-36 md:w-36">
                {/*Top half of the card*/}
                <div className="absolute inset-x-0 top-0 h-1/2 rounded-t-lg bg-[#2c2c44]"></div>
                {/*Card bottom*/}
                <div className="absolute inset-x-0 bottom-0 h-1/2 rounded-b-lg bg-[343650]"></div>
                {/*Left cut-out*/}
                <div className="absolute -left-1.5 top-1/2 z-10 h-3 w-3 -translate-y-1/2 rounded-full bg-[#191a24]"></div>
                {/*right cut-out*/}
                <div className="absolute -right-1.5 top-1/2 z-10 h-3 w-3 -translate-y-1/2 rounded-full bg-[#191a24]"></div>
                {/*Card nmbers*/}
                <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-[#fb6087] sm:text-3xl md:text-6xl">
                    {value}
                </span>
            </div>
            <p className="whitespace-nowrap text-[9px] font-bold tracking-[0.2em] text-[#8486a9] uppercase sm:text-xs sm:tracking-[0.3em]">{label}</p>
        </div>
    );
}
export default CountdownCard;