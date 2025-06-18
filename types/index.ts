export type Next_Page_Url = string;
// UrlObject;
// | __next_route_internal_types__.StaticRoutes
// | __next_route_internal_types__.DynamicRoutes;

export type Variant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
    | 'no-color';

export interface IProject {
    title: string;
    year: number;
    description: string;
    role: string;
    techStack: string[];
    slug: string;
    liveUrl?: string;
    sourceCode?: string;

    thumbnail: {
        url: string;
        width: number;
        height: number;
    };
    longThumbnail: {
        url: string;
        width: number;
        height: number;
    };
    images: Array<{
        url: string;
        width: number;
        height: number;
        alt?: string;
    }>;
}


export interface TechItem {
    name: string;
    icon: string; 
    deviconClass?: string; 
}