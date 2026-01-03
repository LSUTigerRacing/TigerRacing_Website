const LandingComponent = ( props: { name: any; blurb: any; image: any } ) => {
    const {
        name,
        blurb,
        image
    } = props;
    return (
        <section className="white-landing">
            <div className="white-landing-content">
                <h2>Meet {name}.</h2>
                <p className="whitespace-pre-line">
                    {blurb}
                </p>

                <div className="w-fit bg-[var(--standard-yellow)] px-6 py-3 mt-6 cursor-pointer hover:brightness-90 transition-all rounded-[10vw]">
                    <h3>Interest Form</h3>
                </div>

                <div className="mt-35">
                    <h3>Explore {name}</h3>
                </div>
            </div>
            <img
                src={image}
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