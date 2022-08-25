ARG JAR_FILE
FROM openjdk:11-jre-slim
ENTRYPOINT ["java", "-jar", "/app.jar"]
ADD target/${JAR_FILE} /app.jar