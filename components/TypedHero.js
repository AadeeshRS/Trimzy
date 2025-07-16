"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedHero() {
    const titleRef = useRef(null);
    const descRef = useRef(null);

    useEffect(() => {
        const typedTitle = new Typed(titleRef.current, {
            strings: ["The cleanest, quickest way to shrink your links."],
            typeSpeed: 20,
            showCursor: true,
            onComplete: () => {
                new Typed(descRef.current, {
                    strings: [
                        "No fluff, just fast links, Trimzy gets you straight to the point. <strong>No logins, no sign-ups, and no hassle.</strong> Start shortening your URLs instantly, with zero barriers."
                    ],
                    typeSpeed: 20,
                    showCursor: false,
                });
            },
        });

        return () => {
            typedTitle.destroy();
            if (descRef.current) descRef.current.innerHTML = "";
        };
    }, []);

    return (
        <>
            <p className="text-3xl font-bold text-center">
                <span ref={titleRef}></span>
            </p>
            <p className="text-center px-2">
                <span ref={descRef}></span>
            </p>
        </>
    );
}