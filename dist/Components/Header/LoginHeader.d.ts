import type { LogoProps } from '../../Abstract/Logo/LogoContainer';
type style = {
    headerClass?: string;
};
type LoginHeaderProps = LogoProps & style;
type HeaderStyle = {
    background?: string;
    width?: string;
    position?: string;
    zIndex?: string;
    height?: string;
    top?: string;
};
type HeaderLogin = {
    props: LoginHeaderProps;
    styles?: HeaderStyle;
};
export declare const LoginHeader: ({ props, styles, }: HeaderLogin) => JSX.Element;
export {};
