import Image from "next/image";

export default function Result({ disorder, colors }) {
    let imgPath = "";
    // let imgPath = "/img/rooms/beige.png";

    // console.log(colors);

    const anxietyRooms = ["/img/rooms/anxiety1-creamywhite-taupe-sage green.png", "/img/rooms/anxiety2-creamywhite-taupe-sagegreen.png"];
    const ocdRooms = ["/img/rooms/beige.png", "/img/rooms/depression1-warmbeige-softpeach-mutedyellow.png"];
    const depressionRooms = ["/img/rooms/depression1-warmbeige-softpeach-mutedyellow.png", "/img/rooms/depression2-cheerfulcoral-mustardyellow-sky-blue.png", "/img/rooms/depression3-warmbeige-softpeach-mutedyellow.png"];
    const adhdRooms = ["/img/rooms/depression2-cheerfulcoral-mustardyellow-sky-blue.png"];

    const disorderRooms = {
        anxiety: anxietyRooms,
        ocd: ocdRooms,
        depression: depressionRooms,
        adhd: adhdRooms
    };

    const rooms = disorderRooms[disorder.toLowerCase()] || [];

    if (rooms.length > 0) {
        const filteredImages = rooms.filter(path =>
            colors.some(color => path.toLowerCase().includes(color.toLowerCase()))
        );

        imgPath = filteredImages.length > 0
            ? filteredImages[Math.floor(Math.random() * filteredImages.length)]
            : rooms[Math.floor(Math.random() * rooms.length)];
    }
    console.log(imgPath);

    return (
        <div className="bg-[#c8a27c] p-5 text-center h-screen flex flex-col justify-center items-center">
            <h1 className="text-white font-sedgwick text-8xl md:text-[12rem] self-start ml-10">{ disorder }</h1>
            <Image src={imgPath} alt="Result" width={700} height={700} className="rounded-md shadow-md self-end mr-10" />
        </div>
    );
};