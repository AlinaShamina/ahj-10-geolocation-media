import { parseCoordinates } from "../src/components/parser";

test("with space", () => {
  expect(parseCoordinates("51.50851, -0.12572"))
    .toEqual({ lat: 51.50851, lon: -0.12572 });
});

test("without space", () => {
  expect(parseCoordinates("51.50851,-0.12572"))
    .toEqual({ lat: 51.50851, lon: -0.12572 });
});

test("with brackets", () => {
  expect(parseCoordinates("[51.50851, -0.12572]"))
    .toEqual({ lat: 51.50851, lon: -0.12572 });
});

test("bad format", () => {
  expect(() => parseCoordinates("abc")).toThrow();
});
