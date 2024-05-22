import Image from "next/image";
import beryl from '../public/beryl.jpeg';

export default function Home() {
  return (
    <>
      <div
        style={{
          zIndex: -1,
          position: "fixed",
          width: "100vw",
          height: "100vh"
        }}
      >
        <Image
          alt="Mountains"
          src={beryl}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
      </div>

      <div className="w-screen h-screen flex justify-center items-center flex-col relative">
        <div>
          Please dont leave me
        </div>
        <div className="bg-gray-500 bg-opacity-50 backdrop-blur-md border border-gray-200 p-6 rounded-lg max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4">My Dearest Berylzy cat,</h1>
          <p className="mb-4">I am deeply sorry for my actions. Please forgive me as I am a bloody idiot and can't think on my own. I love you so much baby please don't leave me :</p>
          <p className="mb-4">You mean the world to me, and I can't imagine my life without you. I've realized my mistakes and am committed to changing. I promise to earn back your trust and show you that I can be the perfect sim boyfriend you deserve.</p>
          <p className="mb-4">Please reconsider breaking up with me. We have shared so many beautiful moments together, and I believe we can overcome this and grow even stronger. I am willing to do whatever it takes to make things right and prove my love and commitment to you.</p>
          <p className="font-bold">Forever Yours,<br/>[The dumbest boyfriend the gods have ever layed eyes on]</p>
        </div>
      </div>
    </>
  );
}
