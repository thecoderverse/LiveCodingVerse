const scanner = require("sonarqube-scanner");
scanner(
    {
        serverUrl: "http://localhost:9000",
        options: {
            "sonar.login": "",
            "sonar.projectKey": "rating-systems",
            "sonar.sources": "./",
            "sonar.exclusions": "**/node_modules/**,**/coverage/**,**/dist/**",
            "sonar.tests": "./",
            "sonar.test.inclusions": "**/*.spec.ts,**/*.spec.tsx",
            "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
            "sonar.javascript.lcov.reportPaths": "coverage/lcov.info",
            "sonar.typescript.tsconfigPath": "tsconfig.json",
            "sonar.coverage.exclusions": "**/*.spec.ts,**/*.spec.tsx",
        },
    },
    () => process.exit()
);