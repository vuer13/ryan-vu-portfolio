"use client";

import { useEffect, useState } from "react";

type WhoAmIProps = {
    items: string[];
};

export default function WhoAmI({ items }: WhoAmIProps) {
    const [itemIndex, setItemIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const currentItem = items[itemIndex] ?? "";
    const typedText = currentItem.slice(0, charIndex);

    useEffect(() => {
        if (items.length === 0) {
            return;
        }

        const typingSpeed = 100;
        const deletingSpeed = 80;
        const pauseAfterTyping = 1000;
        const pauseBeforeNextWord = 150;

        if (!isDeleting && charIndex < currentItem.length) {
            const timer = window.setTimeout(() => {
                setCharIndex((current) => current + 1);
            }, typingSpeed);

            return () => window.clearTimeout(timer);
        }

        if (!isDeleting && charIndex === currentItem.length) {
            const timer = window.setTimeout(() => {
                setIsDeleting(true);
            }, pauseAfterTyping);

            return () => window.clearTimeout(timer);
        }

        if (isDeleting && charIndex > 0) {
            const timer = window.setTimeout(() => {
                setCharIndex((current) => current - 1);
            }, deletingSpeed);

            return () => window.clearTimeout(timer);
        }

        if (isDeleting && charIndex === 0) {
            const timer = window.setTimeout(() => {
                setIsDeleting(false);

                setItemIndex((currentIndex) => {
                    const nextIndex = (currentIndex + 1) % items.length;
                    return nextIndex;
                });
            }, pauseBeforeNextWord);

            return () => window.clearTimeout(timer);
        }
    }, [charIndex, currentItem.length, isDeleting, items.length]);

    return (
        <div className="mt-8">
            <div className="min-h-20">
                <p className="text-4xl font-bold sm:text-6xl">
                    <span className="text-primary">I am a </span>
                    <span className="text-accent">
                        {typedText}
                        <span className="animate-pulse text-primary">|</span>
                    </span>
                </p>
            </div>
        </div>
    );
}
