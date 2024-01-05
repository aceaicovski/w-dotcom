export type AppsLinks = {
	href?: string;
	src: string;
	alt: string;
	width: number;
	height: number;
};

export const appsLinks: AppsLinks[] = [
	{
		href: "#",
		src: "/icons/app-store.svg",
		alt: "App Store",
		width: 180,
		height: 50,
	},
	{
		href: "#",
		src: "/icons/google-play.svg",
		alt: "Google Play",
		width: 180,
		height: 50,
	},
];

export const mobileImages: AppsLinks[] = [
	{
		src: "./phone-mockups.jpg",
		alt: "Android phone",
		width: 255,
		height: 552,
	},
	{
		src: "./iPhone-14-pro-mockup.jpg",
		alt: "Iphone",
		width: 255,
		height: 527,
	},
];


