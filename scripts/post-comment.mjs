import dotenv from "dotenv";
dotenv.config();

import fs from "fs";
import path from "path";
import { Octokit } from "@octokit/rest";

const token = process.env.GITHUB_TOKEN;
const owner = process.env.GITHUB_OWNER;
const repo = process.env.GITHUB_REPO;
const prNumber = parseInt(process.env.PR_NUMBER, 10);

if (!token || !owner || !repo || !prNumber) {
  console.error("Missing required env vars: GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO, PR_NUMBER");
  process.exit(1);
}

const dataFile = path.join(process.cwd(), "data", "pr-ai-suggestions.json");

if (!fs.existsSync(dataFile)) {
  console.error("No suggestions file found. Run analyze-pr first.");
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(dataFile, "utf8"));

const octokit = new Octokit({ auth: token });

let body = "### AI TestGen Suggestions\n\n";

for (const item of data) {
  body += `#### PR #${item.pr_number}: ${item.title}\n`;
  body += `**Source:** ${item.source}\n\n`;
  body += "**Generated Test Cases:**\n";
  body += "```json\n";
  body += JSON.stringify(item.suggestions, null, 2);
  body += "\n```\n\n";
}

await octokit.issues.createComment({
  owner,
  repo,
  issue_number: prNumber,
  body,
});

console.log(`Comment posted to PR #${prNumber}`);
