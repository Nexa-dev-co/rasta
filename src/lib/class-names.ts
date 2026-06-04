// Tiny classnames joiner — filters out falsy values so callers can write
// conditional classes inline without pulling in a dependency.
export function classNames(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}
