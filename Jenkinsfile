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
	agent any
    options {
		timestamps()
		disableConcurrentBuilds()
		buildDiscarder(logRotator(numToKeepStr: '10'))
		timeout(time: 180, unit: 'MINUTES')
	}
	parameters {
		string(name: 'ZAP_TARGET_URL', defaultValue:'http://www.itsecgames.com', description:'')
		choice(name: 'ZAP_ALERT_LVL', choices: ['High', 'Medium', 'Low'], description: 'See Zap documentation, default High')
	} 
	stages{
		stage('Initialize'){
			steps{
				script {
					currentBuild.displayName = "#${env.BUILD_NUMBER}-ZAP scan on ${params.ZAP_TARGET_URL}"
					currentWorkspace=pwd()
					cleanWs()					
				}
			}
		}
		stage('ZAP'){
			steps{
				bat("echo ${env.WORKSPACE}; ls -l;")
				//checkoutGitSCM("main","https://github.com/maabolihi/zap_jenkins.git")
				bat("bash -c \"chmod +x ${env.WORKSPACE}/*.sh\"")
				bat("${env.WORKSPACE}/validate_input.sh")
				bat("${env.WORKSPACE}/runZapScan.sh ${params.ZAP_TARGET_URL} ${env.WORKSPACE} ${params.ZAP_ALERT_LVL}")
			}
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
	 post {
        always {
            bat("${env.WORKSPACE}/runCleanup.sh")
        }	
	}
}