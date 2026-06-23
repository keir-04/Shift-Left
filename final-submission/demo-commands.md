# Demo Flow


1. Show Application


npm start


2. Show Docker Security


docker build -t shift-left-app .


trivy image shift-left-app



3. Show Kubernetes Scan


trivy config k8s/



4. Show GitHub Actions


Open:

Actions → DevSecOps Pipeline



5. Show Reports


Artifacts:

- SBOM

- ZAP Report

- Security Report
