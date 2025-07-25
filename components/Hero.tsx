'use client';
import AnimatedContainer from '@/components/AnimatedContainer';
import BukanSponsor from '@/components/BukanSponsor';
import Image from 'next/image';

const Hero = () => {
    return (
        <AnimatedContainer className={'overflow-hidden'}>
            <div className="h-[52rem] absolute top-0 left-0 w-full overflow-hidden">
                <Image fill sizes="auto" className="object-cover min-w-96" src="/hero-bg.jpg" alt="Travel Hero Background Image" />
                <div className="absolute inset-0 z-1 opacity-75 bg-[linear-gradient(180deg,rgba(0,0,0,0.50)_49.65%,rgba(0,0,0,0.00)_100%)]"></div>
                <div className="absolute lg:opacity-100 opacity-50 z-10 bottom-0 inset-x-0 h-[22rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,#FFF_62.59%,#FFF_100%)] dark:bg-[linear-gradient(180deg,rgba(9,9,11,0.00)_0%,rgba(9,9,11,0.8)_62.59%,rgba(9,9,11,1)_100%)] lg:backdrop-blur-[0.75px]"></div>
            </div>
            <div className="container relative z-10">
                <div className="relative rounded-b-md rounded-t-3xl lg:rounded-t-4xl min-h-[52rem]">
                    <div className="absolute inset-0 overflow-y-clip">
                        <Image className="z-2 min-w-[520px] w-full h-auto absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" sizes="80vw" width={0} height={0} src="/cloud-1.png" alt="Travel Hero Cloud Image" />
                        <Image className="z-2 w-[392px] min-w-[520px] h-auto absolute -top-24 -left-60 animate-cloud-idle animation-delay-2000" sizes="80vw" width={0} height={0} src="/cloud-2.png" alt="Travel Hero Cloud Image" />
                        {/* <Image className="z-2 w-[760px] min-w-[520px] h-auto absolute bottom-80 -right-96 animate-cloud-idle" sizes="80vw" width={0} height={0} src="/cloud-3.png" alt="Travel Hero Cloud Image" /> */}
                        <Image
                            className="z-2 w-[1272px] min-w-[520px] h-auto absolute bottom-0 lg:-bottom-52 -left-20 animate-cloud-idle animation-delay-1200"
                            sizes="80vw"
                            width={0}
                            height={0}
                            src="/cloud-4.png"
                            alt="Travel Hero Cloud Image"
                        />
                        <Image
                            className="z-4 w-[1512px] min-w-[520px] h-auto absolute top-0 lg:top-24 -left-[782px] animate-cloud-idle animation-delay-1200"
                            sizes="80vw"
                            width={0}
                            height={0}
                            src="/cloud-5.png"
                            alt="Travel Hero Cloud Image"
                        />
                        <Image
                            className="z-6 w-[1512px] min-w-[520px] h-auto absolute top-[460px] lg:top-60 left-[-200px] lg:-left-[400px] animate-cloud-idle animation-delay-2000"
                            sizes="80vw"
                            width={0}
                            height={0}
                            src="/cloud-5.png"
                            alt="Travel Hero Cloud Image"
                        />
                        <Image
                            className="z-6 w-[1512px] min-w-[520px] h-auto absolute top-[480px] lg:top-40 left-[80px] lg:left-[160px] animate-cloud-idle animation-delay-200"
                            sizes="80vw"
                            width={0}
                            height={0}
                            src="/cloud-5.png"
                            alt="Travel Hero Cloud Image"
                        />
                        <div className="absolute left-1/2 -translate-x-1/2 top-24 z-3 flex flex-col items-center gap-y-4">
                            <div className="title  text-lg lg:text-5xl bg-[linear-gradient(180deg,rgba(255,255,255,0.80)_4.92%,rgba(255,255,255,0.40)_89.39%)] leading-none">KKN-PPM UGM 2025</div>
                            <div className="title bg-[linear-gradient(180deg,#FFF_-16.99%,rgba(255,255,255,0.00)_100%)] text-3xl lg:text-8xl leading-none whitespace-nowrap">
                                <span className="font-pinyon text-8xl lg:text-[18rem] !font-normal">B</span><span className="text-5xl lg:text-[9rem]">elok </span>
                                <span className="font-pinyon text-8xl lg:text-[18rem] !font-normal">P</span><span className="text-5xl lg:text-[9rem]">elaga</span>
                            </div>
                        </div>
                    </div>
                </div>
                <BukanSponsor className="pb-24" labelClass="text-surface-500" iconClass="[&_path]:fill-surface-500" />
            </div>
        </AnimatedContainer>
    );
};

export default Hero;
