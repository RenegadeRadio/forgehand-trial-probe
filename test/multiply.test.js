import { test } from "node:test";
import assert from "node:assert/strict";
import { multiply } from "../src/add.js";

test("multiply returns the arithmetic product", () => {
  assert.equal(multiply(4, 3), 12);
  assert.equal(multiply(-2, 3), -6);
});
