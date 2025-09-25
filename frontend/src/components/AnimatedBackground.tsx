export default function AnimatedBackground() {
  return (
  <div className="absolute inset-0 -z-10 w-full h-screen bg-gradient-to-l from-sky-300 to-sky-500">
      <ul className="relative w-full h-full overflow-hidden">
        {/* Circles */}
        <li className="absolute w-20 h-20 left-1/4 bottom-[-150px] bg-white/20 rounded-full animate-floatUp" />
        <li className="absolute w-5 h-5 left-[10%] bottom-[-150px] bg-white/20 rounded-full animate-floatUp [animation-delay:2s] [animation-duration:12s]" />
        <li className="absolute w-5 h-5 left-[70%] bottom-[-150px] bg-white/20 rounded-full animate-floatUp [animation-delay:4s]" />
        <li className="absolute w-16 h-16 left-[40%] bottom-[-150px] bg-white/20 rounded-full animate-floatUp [animation-duration:18s]" />
        <li className="absolute w-5 h-5 left-[65%] bottom-[-150px] bg-white/20 rounded-full animate-floatUp" />
        <li className="absolute w-[110px] h-[110px] left-[75%] bottom-[-150px] bg-white/20 rounded-full animate-floatUp [animation-delay:3s]" />
        <li className="absolute w-[150px] h-[150px] left-[35%] bottom-[-150px] bg-white/20 rounded-full animate-floatUp [animation-delay:7s]" />
        <li className="absolute w-6 h-6 left-1/2 bottom-[-150px] bg-white/20 rounded-full animate-floatUp [animation-delay:15s] [animation-duration:45s]" />
        <li className="absolute w-4 h-4 left-[20%] bottom-[-150px] bg-white/20 rounded-full animate-floatUp [animation-delay:2s] [animation-duration:35s]" />
        <li className="absolute w-[150px] h-[150px] left-[85%] bottom-[-150px] bg-white/20 rounded-full animate-floatUp [animation-duration:11s]" />
      </ul>
    </div>
  );
}