const dataAttribute = 'data-testid' as const;
const attributes = [
  'home_heading',
] as const;

type Mapped<T extends string> = {
  [K in T]: {
    [dataAttribute]: K
  };
};

type E2EAttributes = Mapped<typeof attributes[number]>;

export const e2e = Object.fromEntries(
  attributes.map((attribute) => [attribute, { [dataAttribute]: attribute }]),
) as E2EAttributes;