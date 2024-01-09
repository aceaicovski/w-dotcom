export type AppsLinks = {
	href?: string;
	src: string;
	alt: string;
	width?: number;
	height?: number;
};

export const defaultAppsLinks: AppsLinks[] = [
	{
		href: "#",
		src: "/icons/app-store.svg",
		alt: "App Store",
	},
	{
		href: "#",
		src: "/icons/google-play.svg",
		alt: "Google Play",
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


