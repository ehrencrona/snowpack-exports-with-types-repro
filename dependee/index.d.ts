
declare module "foo" {
  const solution: number;

  export default solution;
}

export type DependeeType = {
  foo: number;
}