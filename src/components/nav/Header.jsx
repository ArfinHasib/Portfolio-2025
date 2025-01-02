import Link from "next/link";
import React from "react";
import { SiCodepen, SiGithub, SiLinkedin, SiX, SiDribbble } from "react-icons/si";
import { OutlineButton } from "../buttons/OutlineButton";

export const Header = () => {
    return (
        <header className="h-[72px] px-4 flex items-center justify-between sticky top-0 z-20 bg-zinc-900/50 backdrop-blur-md">
            <MyLinks />
            <OutlineButton onClick={() => window.open("https://docs.google.com/document/d/1gMjvmyDcH9NMbSW6aUUaQRAayrfZBK9IoK1gc9VeD9o/edit?usp=sharing")}>
                My Resume
            </OutlineButton>
        </header>
    );
};

export const MyLinks = () => (
    <div className="flex items-center text-lg gap-4">
        <Link
            className="text-zinc-300 hover:text-indigo-300 transition-colors"
            href="https://www.linkedin.com/in/arfinhasib/"
            target="_blank"
            rel="nofollow"
        >
            <SiLinkedin />
        </Link>
        <Link
            className="text-zinc-300 hover:text-indigo-300 transition-colors"
            href="https://github.com/ArfinHasib"
            target="_blank"
            rel="nofollow"
        >
            <SiGithub />
        </Link>
        <Link
            className="text-zinc-300 hover:text-indigo-300 transition-colors"
            href="https://x.com/ArfinHasib007"
            target="_blank"
            rel="nofollow"
        >
            <SiX />
        </Link>
        <Link
            className="text-zinc-300 hover:text-indigo-300 transition-colors"
            href="https://dribbble.com/CreativeArfin"
            target="_blank"
            rel="nofollow"
        >
            <SiDribbble />
        </Link>
    </div>
);
