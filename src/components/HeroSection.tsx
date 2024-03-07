import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border"

function HeroSection() {
    return (
        <div
            className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overfloe-hidden mx-auto py-10 md:py-0">
            <div className='p-4 relative z-10 w-full text-center '>
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-50"
                    fill="white"
                />
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                >Master the art of Music</h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Music is a very important part of our lives. Human souls require music to rejuvenate. It brings peace and harmony to their lives. Without any doubt, we can call music 'the magic of god', and it is this magic that transforms a mere series of sounds to soulful music.</p>
                <div className='mt-8'>

                    <Link href={"/courses"}>
                        <Button borderRadius="100.75rem"
                            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            Explore Courses
                        </Button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default HeroSection