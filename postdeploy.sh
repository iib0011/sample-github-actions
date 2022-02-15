# AfterInstall
curl --location --request POST 'https://api.github.com/repos/iib0011/sample-github-actions/actions/workflows/19600170/dispatches' \
--header 'Authorization: token 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' \
--header 'Content-Type: application/json' \
--data-raw '{"ref":"main"}'