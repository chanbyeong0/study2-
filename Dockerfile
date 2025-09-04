# 사용할 베이스 이미지
FROM openjdk:21-jdk-slim

# 컨테이너 안에서 작업할 폴더를 /app으로 정하기
WORKDIR /app

# 로컬에서 이미 빌드된 JAR 파일을 컨테이너 안으로 복사하기
COPY build/libs/rag-0.0.1-SNAPSHOT.jar app.jar

# 컨테이너에서 8080 포트를 열어주기
EXPOSE 8080

# 컨테이너를 실행했을 때 기본 명령어 실행
CMD ["java", "-jar", "app.jar"]