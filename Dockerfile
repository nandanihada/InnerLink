FROM maven:3.8.3-openjdk-17 AS build
#docker jdk ki image dedo jiska version 17 hai
COPY . .
RUN mvn clean package -DskipTests
#hum na ek build file bana rahe or sare test skip karna hai

FROM openjdk:23-jdk
COPY --from=build /target/socialMedia-0.0.1-SNAPSHOT.jar demo.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","demo.jar"]