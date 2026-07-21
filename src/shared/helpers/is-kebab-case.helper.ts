export function isKebabCase(value: string): boolean {
    const kebabCasePattern = /^[a-z0-9]+(-[a-z0-9]+)*$/;
    return kebabCasePattern.test(value);
}