export default function Card({
 cardFront,
 isFlipped,
 isMatched,
 onClick,
}: {
 cardFront: string
 isFlipped: boolean
 isMatched: boolean
 onClick: () => void
}) {
 return (
  <div
   onClick={onClick}
   className="w-[80px] h-[110px] sm:w-[150px] sm:h-[200px] cursor-pointer"
   style={{ perspective: "1000px" }}
  >
   <div
    style={{
     transition: "transform 0.5s",
     transformStyle: "preserve-3d",
     transform: isFlipped || isMatched ? "rotateY(180deg)" : "rotateY(0deg)",
     position: "relative",
     width: "100%",
     height: "100%",
    }}
   >
    <div
     className="absolute inset-0 bg-[#1E3A5F] border-2 border-[#2D5A8E] rounded-2xl flex items-center justify-center text-2xl sm:text-5xl text-white"
     style={{ backfaceVisibility: "hidden" }}
    >
     ?
    </div>
    <div
     className={`absolute inset-0 rounded-2xl flex items-center justify-center text-2xl sm:text-5xl border-2 ${isMatched ? "bg-[#14532D] border-green-500" : "bg-[#1E40AF] border-blue-400"}`}
     style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
    >
     {cardFront}
    </div>
   </div>
  </div>
 )
}
