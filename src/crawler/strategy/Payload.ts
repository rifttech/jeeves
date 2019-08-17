
interface GroupedWildFlyRegistry {
    [key: string]: Context;
}

interface Context {
    version:string,
    type: string,
    link: string
}

export { GroupedWildFlyRegistry, Context};