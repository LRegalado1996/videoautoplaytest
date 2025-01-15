export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col h-screen flex-wrap gap-5 py-5">
      <h1 className="text-2xl">Funcionara el autoplay</h1>
      <video
        controls
        autoPlay
        preload="lazy"
        loop
        playsInline
        x5-playsinline
        webkit-playsinline
        src="https://s3-sa-east-1.amazonaws.com/imagenes-loiuruguay/_videos/18762630-sd_426_240_30fps.mp4"
        className="flex-1 object-cover"
      />
    </div>
  );
}
