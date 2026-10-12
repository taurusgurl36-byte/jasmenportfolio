import assert from "node:assert/strict";
import test from "node:test";
import { getImageLayout } from "../src/utils/imageLayout.js";
import { certifications, projects } from "../src/data/portfolioData.js";

test("both projects retain their original photo proportions", () => {
  for (const project of projects) {
    const layout = getImageLayout(project.imageMetadata);
    assert.equal(layout.ratio, project.imageMetadata.width / project.imageMetadata.height);
    assert.equal(layout.transform, undefined);
  }
});

test("sideways robotics certificate is measured in its upright orientation", () => {
  const layout = getImageLayout(certifications[0].imageMetadata);
  assert.equal(layout.width, 2036);
  assert.equal(layout.height, 1584);
  assert.equal(layout.transform, "translate(0 1584) rotate(-90)");
});

test("upside-down OOP certificate keeps its landscape proportions", () => {
  const layout = getImageLayout(certifications[1].imageMetadata);
  assert.equal(layout.width, 2048);
  assert.equal(layout.height, 1452);
  assert.equal(layout.transform, "translate(2048 1452) rotate(180)");
});
