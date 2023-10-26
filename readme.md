
    docker run -e SONAR_HOST_URL=http://sonarqube:9000/ -v ./js:/usr/src --rm --network ci_default sonarsource/sonar-scanner-cli