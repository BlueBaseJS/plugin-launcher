cd build/web/client/
URL="$(now --token=${NW_TOKEN})"
cd ../../../
curl -H "Authorization: token ${GITHUB_TOKEN}" -X POST -d "{\"body\": \"Build Path: ${URL}\"}" "https://api.github.com/repos/${TRAVIS_REPO_SLUG}/issues/${TRAVIS_PULL_REQUEST}/comments"