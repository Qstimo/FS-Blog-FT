

type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods = {}, def: string[] = []): string {
    return [
        cls,
        ...def.filter(Boolean),
        ...Object.entries(mods).filter(([key, val]) => Boolean(val)).map(([key, val]) => key),
    ].join(' ');
}