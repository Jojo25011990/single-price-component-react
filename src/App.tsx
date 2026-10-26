// *** Types ***
type Community = {
	title: string;
	guarantee: string;
	description: string;
};

type Subscription = {
	title: string;
	price: number;
	period: string;
	description: string;
	buttonText: string;
};

type Benefits = {
	title: string;
	items: string[];
};

type PricingData = {
	community: Community;
	subscription: Subscription;
	benefits: Benefits;
};
// *** End of Types ***

// *** Data ***
const pricingData: PricingData = {
	community: {
		title: "Join our community",
		guarantee: "30-day, hassle-free money back guarantee",
		description:
			"Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.",
	},
	subscription: {
		title: "Monthly Subscription",
		price: 29,
		period: "per month",
		description: "Full access for less than $1 a day",
		buttonText: "Sign Up",
	},
	benefits: {
		title: "Why Us",
		items: [
			"Tutorials by industry experts",
			"Peer & expert code review",
			"Coding exercises",
			"Access to our GitHub repos",
			"Community forum",
			"Flashcard decks",
			"New videos every week",
		],
	},
};
// *** End of Data ***

const App = () => {
	const { community, subscription, benefits } = pricingData;

	return (
		<main className="flex min-h-screen items-center justify-center bg-light-primary px-8 py-16 font-family-primary">
			<article className="grid w-full max-w-[320px] md:max-w-158.75 overflow-hidden rounded-lg bg-white shadow-[0_15px_30px_rgba(0,81,171,0.15)] md:grid-cols-2">
				{/* Community */}
				<section
					aria-labelledby="community-title"
					className="px-6 pt-7 pb-8 md:col-span-2 md:px-10 md:pt-10 md:pb-12"
				>
					<header>
						<h1
							id="community-title"
							className="mb-6 text-xl font-bold tracking-[-0.3px] text-green-primary md:text-2xl"
						>
							{community.title}
						</h1>
					</header>

					<p className="mb-3 text-base font-bold tracking-[-0.22px] text-lime-primary md:text-lg">
						{community.guarantee}
					</p>

					<p className="text-sm leading-6.5 .tracking-[-0.2px] text-dark-primary md:text-base">
						{community.description}
					</p>
				</section>
				{/* End of Community */}

				{/* Subscription */}
				<section
					aria-labelledby="subscription-title"
					className="bg-green-primary px-6 py-8 text-white md:p-10"
				>
					<h2
						id="subscription-title"
						className="mb-4 text-lg font-bold tracking-[-0.22px]"
					>
						{subscription.title}
					</h2>

					<p className="mb-2 flex items-center gap-3">
						<span className="text-[32px] font-bold tracking-[-0.4px]">
							${subscription.price}
						</span>
						<span className="text-base tracking-[-0.2px] text-white/50">
							{subscription.period}
						</span>
					</p>

					<p className="mb-7 text-base leading-6.5 tracking-[-0.2px]">
						{subscription.description}
					</p>

					<button
						type="button"
						className="h-12 w-full cursor-pointer rounded-md bg-lime-primary text-base font-bold tracking-[-0.2px] text-white shadow-[0_10px_10px_rgba(0,0,0,0.1)] transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-primary"
					>
						{subscription.buttonText}
					</button>
				</section>
				{/* End of Subscription */}

				{/* Why Us */}
				<section
					aria-labelledby="benefits-title"
					className="bg-green-primary/80 px-6 py-8 text-white md:p-10"
				>
					<h2
						id="benefits-title"
						className="mb-4 text-lg font-bold tracking-[-0.22px]"
					>
						{benefits.title}
					</h2>

					<ul className="space-y-0">
						{benefits.items.map((item) => (
							<li
								key={item}
								className="text-sm leading-5 tracking-[0.17px] text-white/65"
							>
								{item}
							</li>
						))}
					</ul>
				</section>
				{/* End of Why Us */}
			</article>
		</main>
	);
};

export default App;
