export type FloatingButtonsProps = {
    items: string[];
    remove: (label: string) => void;
};
export declare const FloatingButtons: ({ items, remove, }: FloatingButtonsProps) => JSX.Element;
