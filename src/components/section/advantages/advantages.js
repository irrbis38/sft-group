export var initAdvantagesAnimation = () => {
    var advantages = document.querySelector(".advantages");

    if (!advantages) return;

    gsap.registerPlugin(ScrollTrigger);

    // reset all props
    var resetProps = (elements) => {
        // stop all tweens
        gsap.killTweensOf("*");

        if (elements.length) {
            elements.forEach((el) => {
                el && gsap.set(el, { clearProps: "all" });
            });
        }
    };

    // var box = document.querySelector(".advantages__box");
    // var roll = document.querySelector(".advantages__roll");
    // var ball = document.querySelector(".advantages_ball");
    // var slogan = document.querySelector(".advantages__slogan");
    // var title = document.querySelector(".advantages__title");
    // var wrapper = document.querySelector(".advantages__wrapper");
    // var bg = document.querySelector(".advantages__bg");
    // var items = Array.from(document.querySelectorAll(".advantages__item"));

    // var elements = [box, roll, ball, slogan, title, wrapper, bg, ...items];

    var createDesktopAnimation = () => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".advantages",
                pin: true,
                start: "top top",
                end: "+=500%",
                scrub: 1,
                invalidateOnRefresh: true,
            },
        });

        tl.set([".advantages__roll", ".advantages_ball"], {
            filter: "blur(80px)",
            autoAlpha: 0,
            scale: 0.8,
        })
            .set(".advantages__bg", { x: "-50%" })
            .set(".advantages__slogan", { autoAlpha: 0, scale: 0.5 })
            .to(".advantages__box", { scale: 0.8, duration: 4 })
            .to({}, { duration: 4 })
            .to(".advantages__item", {
                autoAlpha: 1,
                duration: 2,
                stagger: 0.2,
            })
            .to({}, { duration: 5 })
            .to(".advantages__box", {
                filter: "blur(50px)",
                scale: 0.6,
                autoAlpha: 0,
                duration: 3,
            })
            .to(
                ".advantages__roll",
                {
                    filter: "blur(0px)",
                    autoAlpha: 1,
                    scale: 1,
                    duration: 3,
                },
                "<"
            )
            .to({}, { duration: 5 })
            .to(".advantages__roll", {
                filter: "blur(50px)",
                scale: 0.6,
                autoAlpha: 0,
                duration: 3,
            })
            .to(
                ".advantages_ball",
                {
                    filter: "blur(0px)",
                    autoAlpha: 1,
                    scale: 1,
                    duration: 3,
                },
                "<"
            )
            .to({}, { duration: 4 })
            .to(".advantages__item", {
                autoAlpha: 0,
                duration: 2,
                stagger: 0.2,
            })
            .to(
                [".advantages__title", ".advantages_ball"],
                {
                    filter: "blur(50px)",
                    scale: 0.6,
                    autoAlpha: 0,
                    duration: 2,
                },
                "-=0.5"
            )
            .to(".advantages__wrapper", { opacity: 0, duration: 3 }, "<")
            .to(
                ".advantages__slogan",
                {
                    autoAlpha: 1,
                    scale: 1,
                    duration: 3,
                },
                "<"
            )
            .to({}, { duration: 5 });

        return () => tl.revert();
        // return () => resetProps(elements);
    };

    var createTabletAnimation = () => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".advantages",
                pin: true,
                start: "-=90 top",
                end: "+=500%",
                scrub: 1,
                invalidateOnRefresh: true,
            },
        });

        tl.set([".advantages__roll", ".advantages_ball"], {
            filter: "blur(80px)",
            autoAlpha: 0,
            scale: 0.95,
        })
            .set(".advantages__bg", { x: "-50%" })
            .set(".advantages__slogan", { autoAlpha: 0, scale: 0.5 })
            .to(".advantages__bg", { x: "-20%", duration: 4 })
            .to(".advantages__box", { scale: 0.8, duration: 4 }, "<")
            .to({}, { duration: 4 })
            .to(".advantages__item", {
                autoAlpha: 1,
                duration: 2,
                stagger: 0.2,
            })
            .to({}, { duration: 5 })
            .to(".advantages__box", {
                filter: "blur(50px)",
                scale: 0.6,
                autoAlpha: 0,
                duration: 3,
            })
            .to(
                ".advantages__roll",
                {
                    filter: "blur(0px)",
                    autoAlpha: 1,
                    scale: 1,
                    duration: 3,
                },
                "<"
            )
            .to({}, { duration: 5 })
            .to(".advantages__roll", {
                filter: "blur(50px)",
                scale: 0.6,
                autoAlpha: 0,
                duration: 3,
            })
            .to(
                ".advantages_ball",
                {
                    filter: "blur(0px)",
                    autoAlpha: 1,
                    scale: 1,
                    duration: 3,
                },
                "<"
            )
            .to({}, { duration: 4 })
            .to(".advantages__item", {
                autoAlpha: 0,
                duration: 2,
                stagger: 0.2,
            })
            .to(
                [".advantages__title", ".advantages_ball"],
                {
                    filter: "blur(50px)",
                    scale: 0.6,
                    autoAlpha: 0,
                    duration: 2,
                },
                "-=0.5"
            )
            .to(".advantages__wrapper", { opacity: 0, duration: 3 }, "<")
            .to(
                ".advantages__slogan",
                {
                    autoAlpha: 1,
                    scale: 1,
                    duration: 3,
                },
                "<"
            )
            .to({}, { duration: 5 });

        return () => tl.revert();
        // return () => resetProps(elements);
    };

    var createMobileAnimation = () => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".advantages",
                pin: true,
                start: "-=90 top",
                end: "+=350%",
                scrub: 1,
                invalidateOnRefresh: true,
            },
        });

        tl.set(".advantages__slogan", { autoAlpha: 0, scale: 0.5 })
            .set(".advantages__bg", { x: "-50%" })
            .to(".advantages__bg", {
                scale: 0.8,
                filter: "blur(40px)",
                autoAlpha: 0,
                duration: 4,
            })
            .to(".advantages__item", {
                autoAlpha: 1,
                duration: 2,
                stagger: 0.2,
            })
            .to({}, { duration: 5 })
            .to(".advantages__item", {
                autoAlpha: 0,
                duration: 2,
                stagger: 0.2,
            })
            .to(
                ".advantages__title",
                {
                    filter: "blur(50px)",
                    scale: 0.6,
                    autoAlpha: 0,
                    duration: 2,
                },
                "-=0.5"
            )
            .to(".advantages__wrapper", { opacity: 0, duration: 3 }, "<")
            .to(
                ".advantages__slogan",
                {
                    autoAlpha: 1,
                    scale: 1,
                    duration: 3,
                },
                "<"
            )
            .to({}, { duration: 5 });

        return () => tl.revert();
        // return () => resetProps(elements);
    };

    var mm = gsap.matchMedia();

    mm.add("(min-width: 1200px)", createDesktopAnimation);
    mm.add("(min-width: 768px) and (max-width: 1199px)", createTabletAnimation);
    mm.add("(max-width: 767px)", createMobileAnimation);
};

export var toggleAdvantagesDescriptions = () => {
    var advantages_headers = Array.from(
        document.querySelectorAll(".advantages__header")
    );

    if (advantages_headers.length < 1) return;

    advantages_headers.forEach((header) => {
        header.addEventListener("click", () => {
            var item = header.parentElement;
            var isActive = item.classList.contains("active");
            if (!isActive) {
                advantages_headers.forEach((h) => {
                    h.parentElement.classList.remove("active");
                });
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    });
};
