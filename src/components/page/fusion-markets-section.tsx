'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check, KeyRound, ArrowRight } from 'lucide-react';

const fusionBenefits = [
    {
        title: "True ECN / No Dealing Desk (NDD)",
        description: "Trades are executed directly in the market with no broker interference."
    },
    {
        title: "Ultra-Low Spreads & Commissions",
        description: "One of the lowest trading costs in the industry — ideal for scalpers and intraday traders."
    },
    {
        title: "Fast Execution & Deep Liquidity",
        description: "Low latency execution with access to top-tier liquidity providers."
    },
    {
        title: "Supports Professional Trading Styles",
        description: "Scalping, news trading, algorithmic trading, and orderflow-based strategies are allowed."
    },
    {
        title: "MT4, MT5 & TradingView Integration",
        description: "Trade using industry-standard platforms with advanced charting tools."
    },
    {
        title: "No Hidden Fees",
        description: "No deposit fees, no withdrawal fees, and no unnecessary trading restrictions."
    },
    {
        title: "Strong Regulation & Client Fund Safety",
        description: "Client funds are held in segregated accounts for added security."
    }
];

const YOUTUBE_VIDEO_ID = 'fusion-markets-video-player';

export default function FusionMarketsSection() {
    const sectionRef = React.useRef<HTMLDivElement>(null);
    const playerRef = React.useRef<any>(null);

    const pauseVideo = React.useCallback(() => {
        if (playerRef.current && playerRef.current.pauseVideo && typeof playerRef.current.getPlayerState === 'function') {
            // 1 is YT.PlayerState.PLAYING
            if (playerRef.current.getPlayerState() === 1) {
                playerRef.current.pauseVideo();
            }
        }
    }, []);

    React.useEffect(() => {
        const onYouTubeIframeAPIReady = () => {
            if (document.getElementById(YOUTUBE_VIDEO_ID)) {
                playerRef.current = new (window as any).YT.Player(YOUTUBE_VIDEO_ID, {});
            }
        };

        if (!(window as any).YT) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            (window as any).onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
            const firstScriptTag = document.getElementsByTagName('script')[0];
            if (firstScriptTag && firstScriptTag.parentNode) {
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            }
        } else {
            onYouTubeIframeAPIReady();
        }
    }, []);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    pauseVideo();
                }
            },
            { threshold: 0.5 }
        );

        const currentRef = sectionRef.current;
        const videoIframe = currentRef?.querySelector(`#${YOUTUBE_VIDEO_ID}`);
        if (videoIframe) {
            observer.observe(videoIframe);
        }

        return () => {
            if (videoIframe) {
                observer.unobserve(videoIframe);
            }
        };
    }, [pauseVideo]);


    return (
        <section id="fusion-markets" className="bg-card text-card-foreground">
            <div className="container mx-auto px-4 py-16 sm:py-24">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight font-headline sm:text-5xl">
                        Fusion Markets – Trading Partner
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-xl text-muted-foreground">
                        Fusion Markets is a globally recognized, low-cost broker that provides institutional-grade trading conditions for serious traders. At Dark Trader, we recommend Fusion Markets because it aligns with our focus on real market mechanics, execution quality, and cost efficiency.
                    </p>
                </div>

                <div className="mt-16 bg-secondary p-8 rounded-xl shadow-2xl border border-primary/20">
                    <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-3">
                                <KeyRound className="h-8 w-8 text-primary" />
                                Key Benefits of Trading with Fusion Markets
                            </h2>
                            <ul className="space-y-4">
                                {fusionBenefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start">
                                        <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                                            <p className="text-muted-foreground">{benefit.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-6 text-center lg:text-left">
                            <div className="overflow-hidden rounded-lg shadow-lg">
                                <div className="aspect-video bg-black">
                                    <iframe
                                        id={YOUTUBE_VIDEO_ID}
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/fGZ8wp_RlhY?enablejsapi=1"
                                        title="Fusion Markets Review"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                            <div className="p-0.5 rounded-xl bg-gradient-to-r from-purple-500 via-orange-400 to-pink-500 shadow-lg">
                                <div className="p-8 bg-card rounded-lg text-center h-full">
                                    <h3 className="text-2xl font-bold text-foreground">Open a Fusion Markets Account</h3>
                                    <p className="mt-4 text-muted-foreground max-w-md mx-auto">
                                        Register through Dark Trader to receive exclusive support, guidance, and broker-related assistance.
                                    </p>
                                    <div className="mt-8">
                                        <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold transition-transform duration-300 hover:scale-105">
                                            <Link href="https://fusionmarkets.com/?refcode=108030" target="_blank" rel="noopener noreferrer">
                                                Use Referral Link
                                                <ArrowRight className="h-5 w-5" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
