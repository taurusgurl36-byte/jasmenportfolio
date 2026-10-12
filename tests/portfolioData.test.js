import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import test from "node:test";
import { certifications, experience, personalInfo, projects } from "../src/data/portfolioData.js";

test("project experience follows project content in newest-first order", () => {
  assert.equal(experience.length, projects.length);
  assert.equal(new Set(projects.map((project) => project.id)).size, projects.length);
  for (const [index, entry] of experience.entries()) {
    const project = projects.find((project) => project.id === entry.id);
    assert.equal(entry.project, project.name);
    assert.equal(entry.year, project.year);
    assert.deepEqual(entry.responsibilities, project.responsibilities);
    if (index > 0) assert.ok(experience[index - 1].year >= entry.year);
  }
});

test("portfolio photos and resume point to existing public assets", () => {
  const assets = [
    personalInfo.avatarLight,
    personalInfo.avatarDark,
    personalInfo.resume,
    ...projects.flatMap((project) => [project.preview, ...project.images]),
    ...certifications.map((certificate) => certificate.image),
  ];
  for (const asset of assets) {
    assert.ok(existsSync(new URL(`../public${asset}`, import.meta.url)), `Missing asset: ${asset}`);
  }
});
