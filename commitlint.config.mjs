export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["refactor", "feat", "chore", "fix", "build", "test", "@other"],
    ],
  },
};
