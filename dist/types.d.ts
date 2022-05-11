type Schedule = {
    title: string;
    id: string;
    start: string;
    end: string;
};
type Channel = {
    id: string;
    title: string;
    images: {
        logo: string;
    };
    schedules: Schedule[];
};
type EPG = {
    channels: Channel[];
};
type Props = {
    epg: EPG;
};
declare const Guide: ({ epg }: Props) => JSX.Element;
export default Guide;

//# sourceMappingURL=types.d.ts.map
