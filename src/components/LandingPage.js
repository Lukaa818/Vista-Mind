import Link from "next/link";

export default function LandingPage() {
    return (
        <>
            <div
                className="relative w-full h-screen bg-cover bg-center flex items-center justify-center px-10"
                style={{ backgroundImage: "url('/img/2.png')" }}
            >
                <h1 className="absolute left-16 text-white text-8xl md:text-[20rem] font-bold leading-none tracking-tight text-white/60 font-sedgwick">
                    Vista <br /> Mind
                </h1>

                <Link href={"/about"}>
                    <button className="absolute top-8 right-8 bg-white/30 text-gray-900 px-6 py-3 rounded-full text-lg font-medium flex items-center gap-2 backdrop-blur-md transition hover:bg-white/40 font-poppins">
                        READ MORE
                        <span className="text-2xl">→</span>
                    </button>
                </Link>
            </div>
            <div 
                className="w-full h-screen flex items-center justify-center" 
                style={{ 
                    backgroundImage: "url('/img/3.png')", 
                    backgroundSize: "cover", 
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }} 
            >
                <Link href={"/form"}>
                    <button className="bg-white/50 text-gray-900 px-10 py-6 rounded-full text-2xl font-medium flex items-center gap-2 backdrop-blur-md transition hover:bg-white/40 font-poppins">
                        SHAPE YOUR SPACE NOW
                    </button>
                </Link>
            </div>
        </>
    );
}
