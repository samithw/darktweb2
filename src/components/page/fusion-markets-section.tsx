import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check, KeyRound } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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

export default function FusionMarketsSection() {
    const sectionImage = PlaceHolderImages.find((img) => img.id === 'fusion-markets-promo');

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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                             {sectionImage && (
                                <div className="overflow-hidden rounded-lg shadow-lg">
                                    <Image
                                        src={sectionImage.imageUrl}
                                        alt={sectionImage.description}
                                        width={600}
                                        height={400}
                                        className="w-full object-cover"
                                        data-ai-hint={sectionImage.imageHint}
                                    />
                                </div>
                            )}
                            <div className="p-6 bg-card rounded-lg border border-border/40">
                                <h3 className="text-xl font-bold text-foreground">Open a Fusion Markets Account via Dark Trader</h3>
                                <div className="mt-4">
                                    <Button asChild size="lg">
                                        <Link href="https://fusionmarkets.com/en?cxd=33800_463138" target="_blank" rel="noopener noreferrer">
                                            Open Referral Link
                                        </Link>
                                    </Button>
                                </div>
                                <div className="mt-6 text-left">
                                    <h4 className="font-semibold text-primary">Bonus:</h4>
                                    <p className="text-muted-foreground mt-1">
                                        Traders who register through Dark Trader may receive exclusive support, guidance, and broker-related assistance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
