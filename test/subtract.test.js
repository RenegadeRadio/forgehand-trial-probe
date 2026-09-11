import { test } from "node:test";
import assert from "node:assert/strict";
import { subtract } from "../src/add.js";

test("subtract returns the arithmetic difference", () => {
  assert.equal(subtract(5, 3), 2);
  assert.equal(subtract(0, 4), -4);
});
