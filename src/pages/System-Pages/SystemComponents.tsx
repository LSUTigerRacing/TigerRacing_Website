import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

import DownArrow from "../../assets/images/General/down-arrow.png"

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


const LandingComponent = ( props: { name: any; blurb: any; image: any } ) => {
    const {
        name,
        blurb,
        image
    } = props;
    // const tl = useRef<gsap.core.Timeline | null>(null);

    useGSAP(() => {
        gsap.from("#landing-title", {
            opacity:0,
            y: -20,
            ease: "power1.out",
            duration: 0.8
        })
        gsap.from("#landing-blurb", {
            opacity:0,
            y: 20,
            ease: "power1.out",
            duration: 0.8,
            delay: 0.3
        })
        gsap.from("#landing-img", {
            clipPath: "inset(100% 0 0 0)",
			ease: "power1.out",
            duration: 0.7,
            delay: 0.7
        })
	})

    return (
        <section className="white-landing">
            <div className="white-landing-content">
                <h2 id="landing-title">Meet {name}.</h2>
                <p className="whitespace-pre-line" id="landing-blurb">
                    {blurb}
                </p>

                <div className="w-fit bg-[var(--standard-yellow)] px-6 py-3 mt-6 cursor-pointer hover:brightness-90 transition-all rounded-[10vw]">
                    <h3>Interest Form</h3>
                </div>
                    {/* <img className="w-[1rem] h-[1rem]" src={DownArrow}/> */}

                <div className="mt-30 h-[1.6rem] flex items-center">
                    <h3>Explore {name}</h3>
                </div>
            </div>
            <img
                src={image}
                id="landing-img"
            />
        </section>
  );
};

const TableOfContents = ( props: { sections: any } ) => {
    const {
        sections
    } = props;

    const scrollToSection = ( index: any ) => {
        const sectionIndex = parseInt(index) - 1;
    };

    return (
        <div className="table-of-contents">
            <h3 className="seperator-bottom-sm">Our Subsystems</h3>
            <div className="table-of-contents-container">
                {sections.map((section: any) => (
                    <div className="table-of-contents-item">
                        <h3>{section.index}</h3>
                        <h3>{section.title}</h3>
                    </div>
                ))}
            </div>
        </div>
  );
};

const SubsystemComponent = ( props: { index: any; title: any; description: any; images: any, layout: any } ) => {
    const {
        index,
        title,
        description,
        images,
        layout
    } = props;
    return (
        <>
            <div className="purple-line mt-10"/>
            <div className="subsystem-component mt-5">
                <h2 className="text-[var(--purple-line)]">{index}</h2>
                
                <div className="subsystem-content">
                    <h2 className="seperator-bottom-sm">{title}</h2>
                    <p className="seperator-bottom-sm whitespace-pre-line">{description}</p>
                
                    {layout == 1 && (
                        <CollageEqual images={images} />
                    )}
                    {layout == 2 && (
                        <CollageHeroSide images={images} />
                    )}
                    {layout == 3 && (
                        <CollageHeroBottom images={images} />
                    )}
                </div>

            </div>
        </>

  );
};

const CollageEqual = ( props: { images: any }) => {
    const { images } = props;
    return (
        <div className="collage-equal">
            <img
                src={images[0]}
            />
            <img
                src={images[1]}
            />
            <img
                src={images[2]}
            />
        </div>       
    )
}

const CollageHeroSide = ( props: { images: any }) => {
    const { images } = props;
    return (
        <div className="collage-hero-side">
            <img
                src={images[0]}
            />
            <div className="collage-hero-side-right">
                <img
                    src={images[1]}
                />
                <img
                    src={images[2]}
                />
            </div>
        </div>       
    )
}

const CollageHeroBottom = ( props: { images: any }) => {
    const { images } = props;
    return (
        <div className="collage-hero-bottom">
            <img
                src={images[0]}
            />
            <div className="collage-hero-bottom-top">
                <img
                    src={images[1]}
                />
                <img
                    src={images[2]}
                />
            </div>
        </div>       
    )
}



export { LandingComponent, SubsystemComponent, TableOfContents };