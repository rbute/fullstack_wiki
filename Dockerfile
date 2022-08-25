ARG JAR_FILE
FROM openjdk:11-jre-slim
WORKDIR /app
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
COPY $JAR_FILE /app/app.jar