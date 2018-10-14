import * as R from "ramda";

export const capitalize = R.ifElse(
  R.complement(R.is(String)),
  R.identity,
  R.compose(
    R.join(""),
    R.juxt([
      R.compose(
        R.toUpper,
        R.head
      ),
      R.tail
    ])
  )
);
