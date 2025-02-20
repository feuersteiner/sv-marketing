import type { IButtonPairProps } from '$lib/shared/button/types.js';
import type { ILinkProps, ILogoProps } from '$lib/shared/types.js';

export interface IBreadcrumbProps {
	items: ILinkProps[];
}

interface ILogoNavigationProps {
	logo: Omit<ILogoProps, 'size'>;
}

export interface INavbarProps extends ILogoNavigationProps, IButtonPairProps {
	items: ILinkProps[];
}

export interface IFooterProps extends ILogoNavigationProps {
	columns: INavigationLinkColumnProps[];
	copyright: string;
	tagline: string;
}

export interface ILayoutProps {
	navbar: INavbarProps;
	footer: IFooterProps;
}

export interface INavigationLinkColumnProps {
	header: ILinkProps;
	children?: ILinkProps[];
}
