const dataAttribute = 'data-testid' as const;
const attributes = [
  'home_heading',
] as const;

class Attribute<T extends string> {
  [dataAttribute]: T;

  constructor(value: T) {
    this[dataAttribute] = value;
  }

  get id() {
    return this[dataAttribute];
  }
}

type Mapped<T extends string> = {
  [K in T]: Attribute<K>;
};

type E2EAttributes = Mapped<typeof attributes[number]>;

export const e2e = Object.fromEntries(
  attributes.map((attribute) => [attribute, new Attribute(attribute)]),
) as E2EAttributes;