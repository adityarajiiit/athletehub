import coach from "@/assets/coach.png";
export default function Messageslides(props) {
  return (
    <div
      className="w-full min-h-[3.4rem] bg-black/30 shadow-md shadow-sky-400/10 flex flex-row gap-4 items-center p-3 hover:bg-black/20 duration-300 border-b border-muted/40"
      onClick={props.function}
    >
      <img src={coach} alt="" className="h-10 w-10 " />
      <div className="flex flex-col">
        <p className="font-base text-lg text-secondary">{props.username}</p>
        <p className="text-sm text-destructive font-extralight">
          {props.category}
        </p>
      </div>
    </div>
  );
}
