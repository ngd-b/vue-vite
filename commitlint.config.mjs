export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "chore", "fix", "build", "test", "@other"],
    ],
  },
};
