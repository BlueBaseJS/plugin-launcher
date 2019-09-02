curl -H "Authorization: token ${GITHUB_TOKEN}" -X POST \
-d "{\"body\": echo \"${URL}\"}" \
"https://api.github.com/repos/${TRAVIS_REPO_SLUG}/issues/${TRAVIS_PULL_REQUEST}/comments"
echo "${TRAVIS_REPO_SLUG}"
echo "${TRAVIS_PULL_REQUEST}"
echo "${GITHUB_TOKEN}"
echo "${URL}"
