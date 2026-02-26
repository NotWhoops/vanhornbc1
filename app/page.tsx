import Image from "next/image";
import { Button } from "flowbite-react";

export default function Home() {
  return (
    <div className="dark:bg-white">
      <main>
        <div className="text-black flex">
          <img src="./assets/luffy.png" alt="luffy" />
          <Button color="black">Home</Button>
          <Button color="black">About</Button>
          <Button color="black">Influential</Button>
          <Button color="black">Enemies</Button>
        </div>
        <div className="dark:bg-black text-center">
          <h1>
            Monkey D. Luffy stands as a symbol of unshakable freedom and
            inspiration, a character whose impact reaches far beyond the world
            of One Piece. His fearless pursuit of his dreams and unwavering
            loyalty to his friends ignite change everywhere he goes, empowering
            others to rise, fight back, and believe in their own potential.
            Luffy doesn't lead through authority—he leads through authenticity,
            kindness, and a relentless spirit that refuses to bow to injustice.
            His presence transforms people, nations, and even enemies, reminding
            us that true strength comes from staying true to who you are and
            never giving up on what matters most.
          </h1>
        </div>
        <div className="dark:bg-black flex">
          <img
            className="size-3/12"
            src="./assets/luffybase2.png"
            alt="luffy base form"
          />
          <img
            className="size-5/12"
            src="./assets/luffywano2.png"
            alt="luffy base form"
          />
          <img
            className="size-5/12"
            src="./assets/luffyegghead2.png"
            alt="luffy base form"
          />
        </div>
      </main>
    </div>
  );
}
