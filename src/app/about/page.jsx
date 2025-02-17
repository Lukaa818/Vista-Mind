import Link from "next/link";

export default function About() {
    return (
        <div className="bg-[#5A2E17] text-[#F5E3C3] p-8 md:p-12 h-screen w-full">
            <h1 className="font-sedgwick text-8xl md:text-[8rem] text-center">About us</h1>

            <p className="font-poppins text-2xl md:text-[2rem] mt-6">
                At Vista Mind, we design spaces that enhance mental well-being through color psychology, strategic lighting, and thoughtful layouts. Our personalized environments help ease symptoms of anxiety, depression, and OCD by promoting relaxation, organization, and comfort.
            </p>

            <p className="font-poppins text-2xl md:text-[2rem] font-bold underline mt-6">
                How Our Designs Support Mental Wellness
            </p>

            <ul className="font-poppins text-2xl md:text-[2rem] list-disc list-inside space-y-2 mt-2">
                <li><strong>Calming Colors:</strong> Blues and greens promote relaxation, warm neutrals provide stability, and structured color schemes help with OCD.</li>
                <li><strong>Intentional Lighting:</strong> Soft lighting encourages relaxation, while bright, even lighting enhances focus and reduces stress.</li>
                <li><strong>Clutter-Free, Organized Spaces:</strong> Smart layouts and storage solutions create a peaceful, stress-free environment.</li>
                <li><strong>Sensory-Friendly Elements:</strong> Soft textures, weighted blankets, and noise reduction add comfort and security.</li>
            </ul>

            <p className="font-poppins text-2xl md:text-[2rem] font-bold underline mt-6">
                Find Your Perfect Space with Our Quiz
            </p>
            <p className="font-poppins text-2xl mt-2">
                {/* D4C1A9, BCA189 */}
                Take our <Link href={"/form"} className="underline hover:text-[#BCA189]">customized room-matching quiz</Link> to get a design tailored to your needs. Whether you need a cozy retreat for depression, an organized space for OCD, or a calming environment for anxiety, we’ll help you create the perfect setup.
            </p>

            <p className="font-poppins text-2xl md:text-[2rem] font-bold underline mt-6">
                Transform Your Space, Transform Your Mind
            </p>
            <p className="font-poppins text-2xl md:text-[2rem] mt-2">
                At Vista Mind, we blend science and design to create spaces that support your mental wellness. Take the quiz now and start your journey to a more uplifting environment!
            </p>
        </div>
    );
};