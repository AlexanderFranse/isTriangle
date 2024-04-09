// eslint-disable-next-line import/no-extraneous-dependencies
import { loadFeature, defineFeature } from "jest-cucumber";
import { isTriangle } from "../../src/functions";

const feature = loadFeature("./cucumber/features/template.feature");

defineFeature(feature, (test) => {
  test("It works!", ({ given, when, then }) => {
    given(/^the template works$/, () => {
      expect(isTriangle).toBeTruthy();
    });

    when(/^the user tries to take half of (\d+)$/, () => {});
    then(/^the result is (\d+)$/, () => {});
  });
});
