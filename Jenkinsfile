def checkoutGitSCM(branch,gitUrl) {
	checkout([$class: 'GitSCM',
		branches: [[name: branch ]],
		doGenerateSubmoduleConfigurations: false,
		extensions: [[$class: 'RelativeTargetDirectory', relativeTargetDir: '.']],
		submoduleCfg: [],
		userRemoteConfigs: [[url: gitUrl]]
	])
}
pipeline {
	environment{
		 OWASP_ZAP_PORT="8090"
		 OWASP_ZAP_HOME="C:\\Program Files\\OWASP\\Zed Attack Proxy"
	}
	agent any
	stages{
		
		stage('Application_Dynamic_Security_Testing') {
						steps{
        script {
            try {
                startZap(host: "127.0.0.1", port: "${OWASP_ZAP_PORT}".toInteger(), timeout: 900, zapHome: "${OWASP_ZAP_HOME}")
                sleep (time:30, unit:"SECONDS")
                runZapCrawler(host: "http://prytanee.sn")
            }
            catch(err) {
                echo "ERROR: ${err}"
            }
            finally {
                try {
                    runZapAttack()
                }
                catch(err){
                    echo "ERROR: ${err}"
                }
                finally {
                    archiveZap(failAllAlerts: 1, failHighAlerts: 0, failMediumAlerts: 0, failLowAlerts: 0, falsePositivesFilePath: "zapFalsePositives.json")
                }
            }
        }}
		}
		stage('Publish'){
			steps{
				publishHTML([allowMissing: false,
				alwaysLinkToLastBuild: false,
				keepAll: false,
				reportDir: './reports',
				reportFiles: 'report.html',
				reportName: 'ZAP scan report',
				reportTitles: ''])
			}
		}
	}
}