import {
    BoldIcon,
    HighlightIcon,
    H2Icon,
    OLIcon,
    SearchIcon,
    ULIcon,
    UnderlineIcon,
} from '../assets/icon';

export type IconType =

    | "Bold"
    | "Highlight"
    | "H2"
    | "OL"
    | "Search"
    | "UL"
    | "Underline"


export const iconTypes = new Map([

    ["Bold", <BoldIcon key="BoldIcon" />],
    ["Highlight", <HighlightIcon key="HighlightIcon" />],
    ["H2", <H2Icon key="H2Icon" />],
    ["Search", <SearchIcon key="SearchIcon" />],
    ["UL", <ULIcon key="ULIcon" />],
    ["Underline", <UnderlineIcon key="UnderlineIcon" />],
    ["OL", <OLIcon key="OLIcon" />],
]);