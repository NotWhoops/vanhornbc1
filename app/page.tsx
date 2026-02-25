import Image from "next/image";
import { Button } from "flowbite-react";

export default function Home() {
  return (
    <div className="dark:bg-white">
      <main>
        <img className="align-top" src="./assets/luffy.png" alt="luffy" />
        <div className="text-black justify-items-end">
          <Button color="black">Home</Button>
          <Button color="black">About</Button>
          <Button color="black">Influential</Button>
          <Button color="black">Enemies</Button>
        </div>
        <div className="dark:bg-black">

        </div>
      </main>
    </div>
  );
}
