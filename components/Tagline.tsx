import Link from "next/link";

export default function Tagline() {
  return (
    <div className="text-center sm:text-left">
      <p>
        hi this is <span className="font-bold">aniket</span>!{" "}
        <span className="hidden custom:inline">
          your average cs grad dabbling with tech.
        </span>
      </p>
      <p className="mt-2">
        connect with me on 👇
      </p>
    </div>
  );
}
